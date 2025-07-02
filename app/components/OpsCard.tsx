import { Link } from "react-router-dom";
import { cn } from "~/lib/utils";

type OpsCardProps = {
  title: string;
  description: string;
  tag?: string;
  color?: "blue" | "red" | "green" | "yellow" | "gray" | "orange";
  locked?: boolean;
  danger?: boolean;
  link?: string;
};

export const OpsCard = ({
  title,
  description,
  tag,
  color = "gray",
  locked,
  danger,
  link,
}: OpsCardProps) => {
  const colorMap: Record<string, string> = {
    blue: "border-blue-400 text-blue-300",
    red: "border-red-400 text-red-300",
    green: "border-green-400 text-green-300",
    yellow: "border-yellow-400 text-yellow-300",
    orange: "border-orange-400 text-orange-300",
    gray: "border-gray-600 text-gray-300",
  };

  const card = (
    <div
      className={cn(
        "w-full max-w-4xl border rounded-lg px-6 py-5 transition hover:bg-white/5 mx-auto",
        colorMap[color],
        locked && "border-dashed bg-black/30 opacity-60",
        danger && "border-red-500 text-red-300"
      )}
    >
      <div className="flex items-center  gap-2 text-lg font-semibold">
        {locked ? "🔒" : "🧠"} {title}
        {tag && (
          <span className="ml-auto text-xs uppercase bg-white/10 px-2 py-0.5 rounded-sm">
            {tag}
          </span>
        )}
      </div>
      <p className="text-sm mt-1 text-white/80">{description}</p>
    </div>
  );

  return link ? <Link to={link}>{card}</Link> : card;
};
