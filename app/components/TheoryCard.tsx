import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";

export default function TheoryCard({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <Card className="bg-[#0d0d0d] border border-[#333] text-white shadow-md hover:shadow-lg transition-all duration-300 rounded-xl">
      <CardHeader>
        <CardTitle className="text-blue-400 text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3">{description}</p>
        <a
          href={link}
          className="text-xs underline text-blue-300 hover:text-white transition"
        >
          Read notes →
        </a>
      </CardContent>
    </Card>
  );
}
