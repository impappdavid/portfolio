"use client";

import { useState } from "react";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "your.email@example.com"; // Replace with your actual email

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="w-full max-w-lg mx-auto py-4 mt-16 px-4 sm:px-0 border-t border-zinc-400/60 flex items-center justify-between text-xs text-zinc-500">
      {/* Left side: Social SVG Icons with Brand Hover Colors */}
      <div className="flex items-center space-x-4">
        {/* X (Twitter) */}
        <a
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black dark:hover:text-white transition-colors duration-200"
          aria-label="X (Twitter)"
        >
          <svg
            className="w-4 h-4 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>

        {/* YouTube */}
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#FF0000] transition-colors duration-200"
          aria-label="YouTube"
        >
          <svg
            className="w-4 h-4 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#0A66C2] transition-colors duration-200"
          aria-label="LinkedIn"
        >
          <svg
            className="w-4 h-4 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
          </svg>
        </a>

        {/* Email Copy */}
        <button
          onClick={handleCopyEmail}
          className="relative hover:text-black dark:hover:text-white transition-colors duration-200 cursor-pointer flex items-center focus:outline-none"
          aria-label="Copy Email"
        >
          {copied ? (
            <svg
              className="w-4 h-4 stroke-black dark:stroke-white fill-none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          )}

          {copied && (
            <span className="absolute -top-7 left-1/2 -translate-x-1/2 rounded bg-zinc-800 px-1.5 py-0.5 text-[10px] text-zinc-200 shadow border border-zinc-700">
              Copied!
            </span>
          )}
        </button>
      </div>

      {/* Right side: Version & Copyright */}
      <div className="flex items-center space-x-3 font-mono text-[11px]">
        <span>v1.0</span>
        <span className="text-zinc-700">•</span>
        <span>© 2026</span>
      </div>
    </footer>
  );
}