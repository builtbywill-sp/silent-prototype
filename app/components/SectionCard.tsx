import React from "react";

type Props = {
  title: string;
  description: string;
  colorClass: string;
};

const SectionCard = ({ title, description, colorClass }: Props) => (
  <div     className="block p-6 rounded-xl bg-[#12121a] border border-slate-700 shadow-md hover:shadow-orange-500/20 transition duration-200 cardhover:scale-105 hover:bg-[#1a1a24] hover:border-orange-500 text-white">
    <h3 className={`text-xl font-bold mb-2 ${colorClass}`}>{title}</h3>
    <p className="text-sm text-slate-300">{description}</p>
  </div>
);

export default SectionCard;
