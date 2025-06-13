import React from "react";

type Props = {
  title: string;
  description: string;
  colorClass: string;
};

const SectionCard = ({ title, description, colorClass }: Props) => (
  <div className="rounded-xl bg-[#12121a] border border-slate-700 p-6 shadow-md hover:shadow-orange-500/20 transition duration-200">
    <h3 className={`text-xl font-bold mb-2 ${colorClass}`}>{title}</h3>
    <p className="text-sm text-slate-300">{description}</p>
  </div>
);

export default SectionCard;
