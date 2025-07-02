import Header from "~/components/Header";
import { OpsCard } from "~/components/OpsCard";

export default function MorpheusPage() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-20 text-white">
        <div className="flex flex-col items-center space-y-6">
          <h1 className="text-3xl font-bold text-blue-300 text-center">
            Morpheus
          </h1>
          <p className="text-muted-foreground italic text-sm text-center max-w-xl">
            Core logic engine. Sovereign memory, inference, and cold cognition.
          </p>
        
          <OpsCard 
            title="Echo Core"
            description="Core logic system for memory, inference, and response."
            tag="Morpheus"
            color="blue"
            link="/morpheus"
            disabled
          />
          <OpsCard 
            title="Memory Engine"
            description="Persistent, file-bound memory banks for offline ops."
            tag="Morpheus"
            color="blue"
            link="/morpheus"
            disabled
          />
        </div>
      </main>
    </>
  );
}
