// components/ToolsCard.tsx
import React from "react";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  description: string;
  href: string;
  version?: string;
};

export function ToolsCard({ title, description, href, version = "v1.0.0" }: Props) {
  return (
    <Link to={href} target="_blank" rel="noopener noreferrer">
      <div className="border border-green-500/30 bg-black/50 rounded-lg p-5 max-w-xl mx-auto shadow-md hover:bg-green-500/5 transition-all">
        <div className="flex justify-between items-center">
          <h3 className="text-green-400 font-semibold text-sm tracking-wide">
            🛠️ {title}
          </h3>
          <span className="text-xs text-green-300 bg-green-500/10 px-2 py-0.5 rounded">
            {version}
          </span>
        </div>
        <p className="text-sm mt-2 text-white/80">{description}</p>
      </div>
    </Link>
  );
}
