import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

interface GitHubCardProps {
  title: string;
  description: string;
  href: string;
}

export function GitHubCard({ title, description, href }: GitHubCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full max-w-3xl rounded-xl border border-gray-700 p-6 bg-[#14141c] hover:bg-[#1a1a23] transition group"
    >
      <div className="flex justify-between items-start">
        <div className="flex items-center space-x-2">
          <FaGithub className="text-white text-xl" />
          <h3 className="text-lg font-semibold text-white group-hover:text-gray-200">
            {title}
          </h3>
        </div>
        <span className="text-xs font-medium px-2 py-1 bg-gray-800 text-gray-300 rounded">
          GITHUB
        </span>
      </div>
      <p className="text-sm text-gray-400 mt-2">{description}</p>
    </a>
  );
}
