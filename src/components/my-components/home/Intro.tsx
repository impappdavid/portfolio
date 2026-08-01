import { motion } from "framer-motion";

function Intro() {
  const trajectoryPath = "M 20 120 Q 150 0 280 130";
  return (
    <>
      <div className="min-w-96 max-w-96 h-full p-4 flex flex-col gap-6 text-zinc-100 shadow-xl overflow-hidden">
        {/* Bio / Header */}
        <div className="flex flex-col gap-2">
          <div className="tracking-wide">Hello World!</div>
          <div className="text-sm text-zinc-300 leading-relaxed">
            Hi, I'm Dávid a Full-Stack Developer. My goal is to write software
            for the aerospace and space industry.
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-2 font-mono">
          <div className="text-sm text-zinc-400">&gt; Full Name</div>
          <div className="text-sm">Dávid Papp</div>

          <div className="text-sm text-zinc-400">&gt; Date of Birth</div>
          <div className="text-sm">12/21/2002</div>

          <div className="text-sm text-zinc-400">&gt; Profession</div>
          <div className="text-sm">Software Developer</div>

          <div className="text-sm text-zinc-400">&gt; Currently Learning</div>
          <div className="text-sm">c++</div>
        </div>

        {/* Aerospace Orbital Radar & Trajectory Display */}
        <div className="relative flex-1 min-h-[140px] w-full flex items-center justify-center my-2 overflow-hidden rounded border border-zinc-900/60 bg-zinc-950/40">
          {/* Background Grid & Crosshairs */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-20" />
          <div className="absolute inset-x-0 top-1/2 border-b border-dashed border-zinc-800/80" />
          <div className="absolute inset-y-0 left-1/2 border-r border-dashed border-zinc-800/80" />

          {/* SVG Canvas for Planet, Orbits, Trajectory & Target Dot */}
          <svg
            className="absolute inset-0 w-full h-full p-2"
            viewBox="0 0 300 150"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* Glow filter for planet & target */}
              <filter
                id="cyan-glow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Concentric Orbit Rings around the central planet */}
            <circle
              cx="150"
              cy="75"
              r="30"
              fill="none"
              stroke="#27272a"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
            <circle
              cx="150"
              cy="75"
              r="55"
              fill="none"
              stroke="#18181b"
              strokeWidth="1"
            />

            {/* Gravitational Body / Planet in the Center */}
            <g>
              {/* Gravitational atmosphere ring */}
              <circle cx="150" cy="75" r="18" fill="#082f49" opacity="0.4" />
              {/* Solid Planet Body */}
              <circle
                cx="150"
                cy="75"
                r="10"
                fill="#0284c7"
                stroke="#38bdf8"
                strokeWidth="1.5"
              />
              {/* Inner core accent */}
            </g>

            {/* Bent Trajectory Arc Line */}
            <path
              id="gravity-trajectory"
              d={trajectoryPath}
              fill="none"
              stroke="#06b6d4"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              className="opacity-70"
            />

            {/* Satellite locked 100% to the path via native SVG motion */}
            <g filter="url(#cyan-glow)">
              <circle r="4" fill="#22d3ee">
                <animateMotion
                  dur="6s"
                  repeatCount="indefinite"
                  rotate="auto"
                  path={trajectoryPath}
                  calcMode="spline"
                  keySplines="0.4 0 0.6 1"
                />
              </circle>
            </g>
          </svg>

          {/* Fixed Aspect Radar Sweep */}
          <motion.div
            className="w-32 h-32 border-r border-cyan-500/30 rounded-full bg-gradient-to-tr from-transparent via-transparent to-cyan-500/10 pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          {/* Telemetry HUD Labels */}
          <div className="absolute top-1.5 left-2 font-mono text-[9px] text-zinc-600 tracking-widest pointer-events-none">
            GRAV.WELL // 1.2G
          </div>
          <div className="absolute bottom-1.5 right-2 font-mono text-[9px] text-cyan-500/70 tracking-widest flex items-center gap-1 pointer-events-none">
            <span className="w-1 h-1 rounded-full bg-cyan-500 animate-pulse" />
            SLINGSHOT.ACTIVE
          </div>
        </div>

        {/* Minimal Text Social Links */}
        <div className="flex items-center justify-between pt-3  font-mono text-xs text-zinc-400">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors duration-200"
          >
            github/<span className="text-zinc-200">davidpapp</span>
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors duration-200"
          >
            linkedin/<span className="text-zinc-200">davidpapp</span>
          </a>
        </div>
      </div>
    </>
  );
}
export default Intro