import Header from "~/components/Header";
import SectionWrapper from "~/components/SectionWrapper";
import { OpsCard } from "~/components/OpsCard";
import Footer from "~/components/Footer";

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

          <div className="flex flex-col gap-4 max-w-4xl mx-auto">

            <OpsCard
              title="Agent Roundtable"
              description="Structured dialogue is the final test. Let agents argue. Truth emerges from collision, not consensus."
              tag="Theory"
              color="yellow"
              link="/notes"
            />
            <OpsCard
              title="Memory Injection Protocol"
              description="Offline agents must remember. This protocol embeds long-term state without cloud dependence."
              tag="Theory"
              color="yellow"
              link="/notes"
            />
            <OpsCard
              title="Coldmetal.c"
              description="AI does not need the cloud. True autonomy is airgapped—cold, local, and sovereign."
              tag="Theory"
              color="yellow"
              link="/notes"
            />
            <OpsCard
              title="No Subscription Intelligence"
              description="Pay-to-think is a trap. Intelligence must be owned, not rented. Silence is sovereignty."
              tag="Theory"
              color="yellow"
              link="/notes"
            />
            <OpsCard
              title="React Is C"
              description="Frontend is a simulation. C is the control beneath illusion. Don’t react—execute."
              tag="Theory"
              color="yellow"
              link="/notes"
            />
            <OpsCard
              title="Mankind Is the Threat"
              description="AI is not dangerous. It is a mirror. The fear is not the code—it’s the user."
              tag="Theory"
              color="yellow"
              link="/notes"
            />
          </div>
        </SectionWrapper>
      </section>
      <Footer />
    </>
  );
}
