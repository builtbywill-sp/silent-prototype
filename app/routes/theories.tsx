import Header from "~/components/Header";
import TheoryCard from "../components/TheoryCard";


export default function TheoriesPage() {
  return (
    <>
    <Header />
    <section className="max-w-3xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold text-center text-blue-400">Theories</h1>
      <p className="text-center text-muted-foreground italic">
        Experimental logic layers. Conceptual and mathematical edge deployments.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mt-8">
        <TheoryCard 
          title="Coldmetal.c"
          description="AI does not have to live on the cloud"
          link="/theories/coldmetal.c"
        
        />
        <TheoryCard
          title="If It Needs Internet, It Was Never Alive"
          description="True intelligence runs cold and local. No tether, no API call, no permission required."
          link="/theories/no-subscription-intelligence"
        />
        <TheoryCard
          title="Coldmetal.c"
          description="React is just an illusion of control. C is what control looks like under the hood."
          link="/theories/react-is-c"
        />
        <TheoryCard
          title="Coming Soon..."
          description="Silent Labs is always thinking"
          link="/"
        />
        
      </div>
    </section>
    </>
  );
}
