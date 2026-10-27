"use client";

import { useEffect, useRef, useState } from "react";

const SIZE = 12; // default ball diameter
const BALL_COLOR = "#3b82f6";
const MERGE_COLOR = "rgba(56, 189, 248, 0.4)";
const MERGE_SELECTOR = "[data-cursor-merge]";
const MORPH =
  "width 140ms ease-out, height 140ms ease-out, transform 140ms ease-out, border-radius 140ms ease-out, background-color 140ms ease-out";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const el = ref.current;
    if (!el) return;

    const root = document.documentElement;
    root.classList.add("custom-cursor");

    let x = -100;
    let y = -100;
    let mergeEl: Element | null = null;
    let rects: DOMRect[] = [];
    let current: DOMRect | null = null;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const morphOnce = () => {
      el.style.transition = MORPH;
      clearTimeout(timer);
      timer = setTimeout(() => {
        el.style.transition = "none";
      }, 160);
    };

    // Only called when the shape changes (enter/leave a word, switch line).
    const applyShape = () => {
      if (current) {
        el.style.width = `${current.width}px`;
        el.style.height = `${current.height}px`;
        el.style.borderRadius = "4px";
        el.style.backgroundColor = MERGE_COLOR;
      } else {
        el.style.width = `${SIZE}px`;
        el.style.height = `${SIZE}px`;
        el.style.borderRadius = "9999px";
        el.style.backgroundColor = BALL_COLOR;
      }
    };

    // Called on every move: a single transform write, nothing else.
    const position = () => {
      el.style.transform = current
        ? `translate3d(${current.left}px, ${current.top}px, 0)`
        : `translate3d(${x - SIZE / 2}px, ${y - SIZE / 2}px, 0)`;
    };

    const pickRect = () =>
      rects.find(
        (r) => x >= r.left && x <= r.right && y >= r.top && y <= r.bottom
      ) ??
      rects[0] ??
      null;

    const refreshRects = () => {
      rects = mergeEl && mergeEl.isConnected
        ? Array.from(mergeEl.getClientRects())
        : [];
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      x = e.clientX;
      y = e.clientY;
      el.style.opacity = "1";

      // A wrapped word has several line rects; switch if the pointer moved to another.
      if (mergeEl && rects.length > 1) {
        const next = pickRect();
        if (next !== current) {
          current = next;
          morphOnce();
          applyShape();
        }
      }
      position();
    };

    const onOver = (e: MouseEvent) => {
      const found = (e.target as Element | null)?.closest?.(MERGE_SELECTOR) ?? null;
      if (found === mergeEl) return;
      mergeEl = found;
      refreshRects();
      current = mergeEl ? pickRect() : null;
      morphOnce();
      applyShape();
      position();
    };

    // Keep the merged shape attached to the word while scrolling/resizing.
    const onScroll = () => {
      if (!mergeEl) return;
      refreshRects();
      current = pickRect();
      applyShape();
      position();
    };

    const onLeave = () => {
      el.style.opacity = "0";
    };
    const onEnter = () => {
      el.style.opacity = "1";
    };

    const moveEvent =
      "onpointerrawupdate" in window ? "pointerrawupdate" : "pointermove";

    window.addEventListener(moveEvent, onMove as EventListener, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true, capture: true });
    window.addEventListener("resize", onScroll);
    root.addEventListener("mouseleave", onLeave);
    root.addEventListener("mouseenter", onEnter);

    return () => {
      clearTimeout(timer);
      root.classList.remove("custom-cursor");
      window.removeEventListener(moveEvent, onMove as EventListener);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("scroll", onScroll, { capture: true });
      window.removeEventListener("resize", onScroll);
      root.removeEventListener("mouseleave", onLeave);
      root.removeEventListener("mouseenter", onEnter);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999]"
      style={{
        width: SIZE,
        height: SIZE,
        borderRadius: 9999,
        backgroundColor: BALL_COLOR,
        opacity: 0,
        transform: "translate3d(-100px, -100px, 0)",
        willChange: "transform",
        transition: "none",
      }}
    />
  );
}