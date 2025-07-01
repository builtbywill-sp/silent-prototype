import Header from "~/components/Header";
import HeroSection from "~/components/HeroSection";
import ManifestCard from "~/components/ManifestCard";
import SystemsDirectory from "~/components/SystemsDirectory";
import TheoryCard from "~/components/TheoryCard";
import SectionCard from "~/components/SectionCard";
import SectionWrapper from "~/components/SectionWrapper";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <main className="px-4 py-20 grid gap-28 max-w-7xl mx-auto text-white bg-[#0b0b13]">
        <HeroSection />
        <ManifestCard />
        <SystemsDirectory />

        <section id="morpheus" className="border-t border-gray-800 pt-16">
          <SectionWrapper>
            <Link to="/morpheus">
              <h2 className="text-3xl font-bold mb-8 text-blue-300 hover:text-blue-200 transition cursor-pointer">
                Morpheus
              </h2>
            </Link>
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
          </SectionWrapper>
        </section>

        <section id="violet" className="border-t border-gray-800 pt-16">
          <SectionWrapper>
            <Link to="/violet">
              <h2 className="text-3xl font-bold mb-8 text-purple-300 hover:text-purple-200 transition cursor-pointer">
                Violet Collar
              </h2>
            </Link>
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
          </SectionWrapper>
        </section>

        <section id="tools" className="border-t border-gray-800 pt-16">
          <SectionWrapper>
            <Link to="/tools">
              <h2 className="text-3xl font-bold mb-8 text-green-300 hover:text-green-200 transition cursor-pointer">
                Tools
              </h2>
            </Link>
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
          </SectionWrapper>
        </section>

        <section id="docs" className="border-t border-gray-800 pt-16">
          <SectionWrapper>
            <Link to="/docs">
              <h2 className="text-3xl font-bold mb-8 text-gray-300 hover:text-white transition cursor-pointer">
                Docs
              </h2>
            </Link>
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
          </SectionWrapper>
        </section>

        <section id="theories" className="border-t border-gray-800 pt-16">
          <SectionWrapper>
            <Link to="/theories">
              <h2 className="text-3xl font-bold mb-8 text-yellow-300 hover:text-yellow-200 transition cursor-pointer">
                Theories
              </h2>
            </Link>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TheoryCard
                link="/notes"
                title="Agent Roundtable"
                description="A poker-table UI where AI models debate topics using structured logic formats."
              />
              <TheoryCard
                link="/notes"
                title="Memory Injection Protocol"
                description="Injecting long-term memory into offline agents with zero dependencies."
              />
            </div>
          </SectionWrapper>
        </section>
      </main>
    </>
  );
};

export default Home;
