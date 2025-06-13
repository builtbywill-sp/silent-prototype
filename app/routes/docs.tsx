import Header from "~/components/Header";
import SectionWrapper from "~/components/SectionWrapper";
import SectionCard from "~/components/SectionCard";

export default function MorpheusPage() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-20 text-white">
        <SectionWrapper>
          <h1 className="text-3xl font-bold mb-6 text-blue-400">docs</h1>
          <p className="text-sm italic text-muted-foreground mb-8">
            ...
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SectionCard
              title="..."
              description="..."
              colorClass="text-blue-400"
            />
            <SectionCard
              title="..."
              description="..."
              colorClass="text-blue-400"
            />
          </div>
        </SectionWrapper>
      </main>
    </>
  );
}
