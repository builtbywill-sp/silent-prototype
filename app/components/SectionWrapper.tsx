// components/SectionWrapper.tsx
import React from "react";

type Props = {
  children: React.ReactNode;
};

const SectionWrapper = ({ children }: Props) => (
  <div className="bg-[#12121a] border border-slate-700 rounded-xl p-6 shadow-lg">
    {children}
  </div>
);

export default SectionWrapper;
