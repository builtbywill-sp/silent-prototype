import { Link } from "react-router-dom";

type Props = {
  title: string;
  description: string;
  link: string;
};

const TheoryCard = ({ title, description, link }: Props) => (
  <Link
    to={link}
    className="block p-6 rounded-xl bg-[#12121a] border border-slate-700 shadow-md hover:shadow-orange-500/20 transition duration-200 cardhover:scale-105 hover:bg-[#1a1a24] hover:border-orange-500 text-white"
  >
    <h3 className="text-lg font-bold text-blue-300 mb-2">{title}</h3>
    <p className="text-sm text-gray-400 mb-3">{description}</p>
    <span className="text-xs text-blue-400 hover:underline">Read notes →</span>
  </Link>
);

export default TheoryCard;
