import React from "react";

type Props = {
  label?: string;
};

export function ClassifiedCard({ label = "Redacted Module" }: Props) {
  return (
    <div className="border border-red-500/50 rounded-md bg-[#0b0b13] p-4 max-w-xl mx-auto shadow shadow-red-500/10">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-red-500 font-semibold text-sm tracking-wider">
          🔒 {label}
        </h3>
        <span className="text-xs italic text-red-400 opacity-60">
          CLASSIFIED
        </span>
      </div>
      <p className="text-red-400 text-xs italic">
        Access Denied — Under Classified Protocol.
        <br />
        <span className="text-red-500 font-mono">VC-OS override required.</span>
      </p>
    </div>
  );
}
