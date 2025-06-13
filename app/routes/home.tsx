import Header from "~/components/Header";
import HeroSection from "~/components/HeroSection";
import ManifestCard from "~/components/ManifestCard";
import SystemsDirectory from "~/components/SystemsDirectory";
import TheoryCard from "~/components/TheoryCard";
import SectionCard from "~/components/SectionCard";

const Home = () => {
  return (
    <>
      <Header />
      <main className="px-4 py-20 grid gap-28 max-w-7xl mx-auto text-white bg-[#0b0b13]">
        <HeroSection />
        <ManifestCard />
        <SystemsDirectory />

        <section id="morpheus" className="border-t border-gray-800 pt-16">
          <h2 className="text-3xl font-bold mb-8 text-blue-300">Morpheus</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SectionCard
              title="Echo Core"
              description="Core logic system for memory, inference, and response."
              colorClass="text-blue-400"
            />
            <SectionCard
              title="Memory Engine"
              description="Persistent, file-bound memory banks for offline ops."
              colorClass="text-blue-400"
            />
          </div>
        </section>

        <section id="violet" className="border-t border-gray-800 pt-16">
          <h2 className="text-3xl font-bold mb-8 text-purple-300">Violet Collar</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SectionCard
              title="Visual Terminal"
              description="Tactical interface for bridging mind and machine."
              colorClass="text-purple-300"
            />
            <SectionCard
              title="Human-AI Sync"
              description="Synchronize tasks, memory, and intent through a single view."
              colorClass="text-purple-300"
            />
          </div>
        </section>

        <section id="tools" className="border-t border-gray-800 pt-16">
          <h2 className="text-3xl font-bold mb-8 text-green-300">Tools</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SectionCard
              title="RepoForge"
              description="Spin up fully-licensed, README-ready repos from your CLI."
              colorClass="text-green-400"
            />
            <SectionCard
              title="Encryptor"
              description="Project-level disk encryption & license vault generator."
              colorClass="text-green-400"
            />
          </div>
        </section>

        <section id="docs" className="border-t border-gray-800 pt-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-300">Docs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SectionCard
              title="Internal Standards"
              description="Architecture blueprints, setup flows, and system logic."
              colorClass="text-gray-300"
            />
            <SectionCard
              title="API Reference"
              description="Module functions, install scripts, and automation commands."
              colorClass="text-gray-300"
            />
          </div>
        </section>

        <section id="theories" className="border-t border-gray-800 pt-16">
          <h2 className="text-3xl font-bold mb-8 text-yellow-300">Theories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TheoryCard
              link="/theories/agent-roundtable" //need to create this route
              title="Agent Roundtable"
              description="A poker-table UI where AI models debate topics using structured logic formats."
            />
            <TheoryCard
              link="/theories/memory-injection-protocol" //need to create this route
              title="Memory Injection Protocol"
              description="Injecting long-term memory into offline agents with zero dependencies."
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
