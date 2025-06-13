import Header from "~/components/Header";
import SectionWrapper from "~/components/SectionWrapper";
import TheoryCard from "~/components/TheoryCard";

export default function TheoriesPage() {
  return (
    <>
      <Header />
      <section className="max-w-7xl mx-auto px-4 py-20">
        <SectionWrapper>
          <h1 className="text-3xl font-bold text-yellow-300 mb-4">Theories</h1>
          <p className="text-muted-foreground italic text-sm mb-8">
            Experimental logic layers. Conceptual and mathematical edge deployments.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <TheoryCard
              title="Agent Roundtable"
              description="A poker-table UI where AI models debate topics using structured logic formats."
              link="/theories/agent-roundtable"
            />
            <TheoryCard
              title="Memory Injection Protocol"
              description="Injecting long-term memory into offline agents with zero dependencies."
              link="/theories/memory-injection-protocol"
            />
            <TheoryCard
              title="Coldmetal.c"
              description="AI does not have to live on the cloud. Airgapped autonomy is the new frontier."
              link="/theories/coldmetal.c"
            />
            <TheoryCard
              title="No Subscription Intelligence"
              description="True intelligence runs cold and local. No tether, no API call, no permission required."
              link="/theories/no-subscription-intelligence"
            />
            <TheoryCard
              title="React Is C"
              description="React is just an illusion of control. C is what control looks like under the hood."
              link="/theories/react-is-c"
            />
            <TheoryCard
              title="Coming Soon..."
              description="Silent Labs is always thinking."
              link="/"
            />
          </div>
        </SectionWrapper>
      </section>
    </>
  );
}
