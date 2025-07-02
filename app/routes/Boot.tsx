"use client";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

const bootLines = [
  "silent@proto:~$ ./boot vc-os --page=home",
  "↳ Initializing sublayer memory... [OK]",
  "↳ Mounting interface... [OK]",
  "↳ Loading node kernel: VC-OS.m1",
  "↳ Injecting protocol: Echo Core...",
  "↳ Access level: DEVELOPER",
  "↳ Status: Alpha transmission enabled",
  "↳ node boot confirmed. system unlocked.",
];

export default function Boot() {
  const [lineIndex, setLineIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [loadingPercent, setLoadingPercent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const booted = localStorage.getItem("booted");
    if (booted) navigate("/home");
  }, [navigate]);

  useEffect(() => {
    if (lineIndex < bootLines.length) {
      const timer = setTimeout(() => {
        setLineIndex((i) => i + 1);
        if (lineIndex === bootLines.length - 2) {
          new Audio("/boot-chime.mp3").play(); // optional 🔊 sound, place in /public
        }
      }, 900);
      return () => clearTimeout(timer);
    } else {
      const loadInterval = setInterval(() => {
        setLoadingPercent((prev) => {
          if (prev >= 100) {
            clearInterval(loadInterval);
            setTimeout(() => setShowButton(true), 800);
            return 100;
          }
          return prev + 4;
        });
      }, 50);
    }
  }, [lineIndex]);

  const handleEnter = () => {
    localStorage.setItem("booted", "true");
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-black text-white font-mono px-4 py-10 flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full text-sm sm:text-base space-y-2">
        {bootLines.slice(0, lineIndex).map((line, i) => (
          <p key={i} className="text-green-400">{line}</p>
        ))}

        {lineIndex === bootLines.length && (
          <>
            <div className="mt-6 w-full">
              <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">
                <div
                  className="h-full bg-orange-400 transition-all duration-100"
                  style={{ width: `${loadingPercent}%` }}
                />
              </div>
              <p className="mt-2 text-xs text-white/50 text-right">
                {loadingPercent}%
              </p>
            </div>

            {showButton && (
              <button
                onClick={handleEnter}
                className={clsx(
                  "mt-6 px-5 py-2 bg-orange-500 text-black rounded shadow hover:bg-orange-400 transition-all",
                  "text-sm sm:text-base"
                )}
              >
                ENTER VC-OS
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
