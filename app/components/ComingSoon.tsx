import { useEffect, useState } from "react";

export default function ComingSoon({ pageName = "unknown" }) {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);

  const bootLines = [
    `silent@proto:~$ boot VC-OS --page=${pageName}`,
    `✅ Core memory mapped`,
    `🔐 Access level: PRIVATE`,
    `🧠 Morpheus node not yet activated`,
    `📄 Page: [ ${pageName} ] :: under construction`,
    `📡 Transmission origin: VC-OS node_01`,
    `⏳ ETA: classified`,
    `💬 Use 'back' or 'home' to exit`,
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < bootLines.length) {
        setVisibleLines((prev) => [...prev, bootLines[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 420);
    return () => clearInterval(interval);
  }, [pageName]);

  const parseLine = (line: string) => {
    if (!line) return null;

    if (line.startsWith("silent@proto")) {
      return (
        <>
          <span className="text-green-400">silent@proto:~</span>
          <span className="text-yellow-300">$ boot VC-OS</span>
          <span className="text-blue-400"> --page={pageName}</span>
        </>
      );
    }

    if (line.includes("Core memory mapped")) {
      return <span className="text-green-500">{line}</span>;
    }
    if (line.includes("Access level")) {
      return <span className="text-red-500">{line}</span>;
    }
    if (line.includes("Morpheus node")) {
      return <span className="text-purple-400">{line}</span>;
    }
    if (line.includes("Page")) {
      return <span className="text-blue-400">{line}</span>;
    }
    if (line.includes("Transmission")) {
      return <span className="text-orange-400">{line}</span>;
    }
    if (line.includes("ETA")) {
      return <span className="text-pink-400">{line}</span>;
    }
    if (line.includes("back") || line.includes("home")) {
      return <span className="text-gray-400">{line}</span>;
    }

    return <span className="text-purple-400">{line}</span>; // fallback
  };

  return (
    <main className="h-screen flex flex-col justify-center items-center px-6 sm:px-12 font-mono bg-black text-sm text-purple-400">
      {visibleLines.map((line, idx) => (
        <p key={idx}>
          <span className="text-white">VC-OS:</span> {parseLine(line)}
        </p>
      ))}
      <p className="mt-2 animate-pulse text-white">
        <span className="blinking-cursor">▍</span>
      </p>
    </main>
  );
}
