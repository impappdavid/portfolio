"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  type MotionValue,
} from "framer-motion";

const allWorks = [
  { id: 1, href: "/work/project-1", image: "https://i.pinimg.com/originals/19/67/fa/1967fa9fb299a00e53356d97a772a3ab.gif", title: "Project 1" },
  { id: 2, href: "/work/project-2", image: "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2020/01/milky_way_s_precessing_galactic_disc/21863379-1-eng-GB/Milky_Way_s_precessing_galactic_disc.gif", title: "Project 2" },
  { id: 3, href: "/work/project-3", image: "https://media3.giphy.com/media/v1.Y2lkPTZjMDliOTUybHBhdWdlamR3ZndvdTRqYXAxbzl6bTh1d3J3d3c5cXQyNHBoY2JrdyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3ohs4gSs3V0Q7qOtKU/200.gif", title: "Project 3" },
  { id: 4, href: "/work/project-4", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&q=80", title: "Project 4" },
  { id: 5, href: "/work/project-5", image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&q=80", title: "Project 5" },
  { id: 6, href: "/work/project-6", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80", title: "Project 6" },
  { id: 7, href: "/work/project-7", image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&q=80", title: "Project 7" },
  { id: 8, href: "/work/project-8", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80", title: "Project 8" },
  { id: 9, href: "/work/project-9", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80", title: "Project 9" },
];

const resizeTransition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1] as const,
};

const isGif = (src: string) => /\.gif($|\?)/i.test(src);
const isExternal = (href: string) => /^https?:\/\//i.test(href);

/* -------------------------------------------------------------------------- */
/*  Liquid shader                                                             */
/* -------------------------------------------------------------------------- */

const VERT = `
attribute vec2 aPos;
varying vec2 vUv;
void main() {
  vUv = aPos * 0.5 + 0.5;
  gl_Position = vec4(aPos, 0.0, 1.0);
}
`;

const FRAG = `
precision mediump float;
varying vec2 vUv;

uniform sampler2D uTex;
uniform vec2  uMouse;     // 0..1, origin bottom-left
uniform vec2  uVel;       // smoothed-cursor lag, in uv units
uniform vec2  uCover;     // object-cover scale
uniform float uAspect;    // canvas width / height
uniform float uTime;
uniform float uStrength;  // 0..1 fade in/out

vec2 cover(vec2 uv) { return (uv - 0.5) * uCover + 0.5; }

void main() {
  // Work in aspect-corrected space so the blob is circular.
  vec2 p = vec2(vUv.x * uAspect, vUv.y);
  vec2 m = vec2(uMouse.x * uAspect, uMouse.y);
  vec2 diff = p - m;
  float d = length(diff);
  vec2 dir = diff / (d + 0.0001);

  // Edge0 < edge1 keeps smoothstep well-defined on every GPU.
  float fall = (1.0 - smoothstep(0.0, 0.38, d)) * uStrength;

  // Concentric ripples + a soft lens pull toward the cursor.
  float wave = sin(d * 36.0 - uTime * 3.5);
  vec2 off = dir * wave * 0.02 * fall;
  off += dir * fall * fall * -0.05;
  off.x /= uAspect;

  // Drag the image along with fast cursor movement.
  off -= uVel * fall * 1.6;

  vec2 uv = vUv - off;

  // Slight chromatic split for a glassy look.
  vec2 ab = dir * 0.006 * fall;
  ab.x /= uAspect;

  float r = texture2D(uTex, cover(uv + ab)).r;
  float g = texture2D(uTex, cover(uv)).g;
  float b = texture2D(uTex, cover(uv - ab)).b;
  vec3 col = vec3(r, g, b);

  // Subtle specular sheen on the wave crests.
  col += pow(max(wave, 0.0), 6.0) * fall * 0.06;

  gl_FragColor = vec4(col, 1.0);
}
`;

function LiquidCanvas({
  src,
  mx,
  my,
  sx,
  sy,
  strength,
}: {
  src: string;
  mx: MotionValue<number>;
  my: MotionValue<number>;
  sx: MotionValue<number>;
  sy: MotionValue<number>;
  strength: MotionValue<number>;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", { antialias: false, alpha: false });
    if (!gl) {
      console.warn("[liquid] WebGL not available");
      return;
    }

    let raf = 0;
    let disposed = false;
    let ro: ResizeObserver | undefined;

    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("[liquid] shader error:", gl.getShaderInfoLog(shader));
        return null;
      }
      return shader;
    };

    const vs = compile(gl.VERTEX_SHADER, VERT);
    const fs = compile(gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;

    const program = gl.createProgram()!;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("[liquid] link error:", gl.getProgramInfoLog(program));
      return;
    }
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );
    const aPos = gl.getAttribLocation(program, "aPos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const u = (name: string) => gl.getUniformLocation(program, name);
    const uMouse = u("uMouse");
    const uVel = u("uVel");
    const uCover = u("uCover");
    const uAspect = u("uAspect");
    const uTime = u("uTime");
    const uStrength = u("uStrength");

    let imgAspect = 1;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (!w || !h) return;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);

      const canvasAspect = w / h;
      gl.uniform1f(uAspect, canvasAspect);
      // Same math as CSS object-fit: cover.
      if (canvasAspect > imgAspect) {
        gl.uniform2f(uCover, 1, imgAspect / canvasAspect);
      } else {
        gl.uniform2f(uCover, canvasAspect / imgAspect, 1);
      }
    };

    const img = new Image();
    img.crossOrigin = "anonymous";

    img.onerror = () =>
      console.warn("[liquid] image failed to load (CORS or bad URL):", src);

    img.onload = () => {
      if (disposed) return;

      try {
        imgAspect = img.naturalWidth / img.naturalHeight;

        const texture = gl.createTexture();
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        // Throws a SecurityError if the image is not CORS-enabled.
        gl.texImage2D(
          gl.TEXTURE_2D,
          0,
          gl.RGBA,
          gl.RGBA,
          gl.UNSIGNED_BYTE,
          img
        );
        gl.uniform1i(u("uTex"), 0);
      } catch (err) {
        console.warn("[liquid] texture upload failed:", err);
        return; // canvas stays hidden, plain <img> remains visible
      }

      resize();
      ro = new ResizeObserver(resize);
      ro.observe(canvas);

      const start = performance.now();
      let first = true;
      const frame = () => {
        if (disposed) return;

        const x = sx.get();
        const y = sy.get();
        gl.uniform2f(uMouse, x, y);
        gl.uniform2f(uVel, mx.get() - x, my.get() - y);
        gl.uniform1f(uStrength, Math.min(Math.max(strength.get(), 0), 1));
        gl.uniform1f(uTime, (performance.now() - start) / 1000);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

        if (first) {
          first = false;
          setReady(true); // only show the canvas once a frame exists
        }
        raf = requestAnimationFrame(frame);
      };
      frame();
    };
    img.src = src;

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      ro?.disconnect();
    };
  }, [src, mx, my, sx, sy, strength]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 h-full w-full transition-opacity duration-150 ${
        ready ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}

function LiquidImage({ src, alt }: { src: string; alt: string }) {
  const [active, setActive] = useState(false);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  );

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 110, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 110, damping: 18, mass: 0.6 });
  const strength = useSpring(0, { stiffness: 90, damping: 20 });

  useEffect(() => () => clearTimeout(leaveTimer.current), []);

  const updatePointer = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set(1 - (e.clientY - rect.top) / rect.height); // flip Y for GL
  };

  const canHover = (e: React.PointerEvent) =>
    e.pointerType !== "touch" &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div
      className="relative h-full w-full"
      onPointerEnter={(e) => {
        if (!canHover(e)) return;
        clearTimeout(leaveTimer.current);
        updatePointer(e);
        sx.jump(mx.get());
        sy.jump(my.get());
        setActive(true);
        strength.set(1);
      }}
      onPointerMove={(e) => {
        if (active) updatePointer(e);
      }}
      onPointerLeave={() => {
        strength.set(0);
        // Unmount the GL context once the fade-out has finished.
        leaveTimer.current = setTimeout(() => setActive(false), 700);
      }}
    >
      <img
        src={src}
        alt={alt}
        draggable={false}
        className="h-full w-full object-cover"
      />
      {active && (
        <LiquidCanvas
          src={src}
          mx={mx}
          my={my}
          sx={sx}
          sy={sy}
          strength={strength}
        />
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section                                                                   */
/* -------------------------------------------------------------------------- */

export default function WorkSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: 1,
        y: 0,
        width: "100%",
        maxWidth: isExpanded ? 1536 : 512,
      }}
      transition={{
        opacity: { duration: 0.4, delay: 0.3, ease: "easeOut" },
        y: { duration: 0.4, delay: 0.3, ease: "easeOut" },
        width: resizeTransition,
        maxWidth: resizeTransition,
      }}
      className="mx-auto mt-12 w-full px-4 sm:px-0"
    >
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs font-medium tracking-wider text-zinc-400">
          /work
        </span>

        <button
          onClick={() => setIsExpanded((prev) => !prev)}
          className="cursor-pointer text-xs font-medium text-zinc-500 transition-colors hover:text-zinc-600 focus:outline-none"
        >
          {isExpanded ? "collapse ⤴" : "view more ⤵"}
        </button>
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-3 gap-2"
        transition={{ layout: resizeTransition }}
      >
        {allWorks.slice(0, isExpanded ? 9 : 6).map((work) => {
          const gif = isGif(work.image);
          const external = isExternal(work.href);

          return (
            <motion.div
              key={work.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: 0.2 },
                layout: resizeTransition,
              }}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-zinc-300 dark:border-zinc-800"
            >
              <Link
                href={work.href}
                aria-label={work.title}
                {...(external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                className="block h-full w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
              >
                {gif ? (
                  <img
                    src={work.image}
                    alt={work.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <LiquidImage src={work.image} alt={work.title} />
                )}
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}