import Header from "~/components/Header";
import HeroSection from "~/components/HeroSection";
import ManifestCard from "~/components/ManifestCard";
import SystemsDirectory from "~/components/SystemsDirectory";
import { Link } from "react-router-dom";
import { ClassifiedCard } from "~/components/ClassifiedCard";
import { OpsCard } from "~/components/OpsCard";
import { GitHubCard } from "~/components/GitHubCard"; // ⬅️ make sure this path matches your folder
import Footer from "~/components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main className="px-4 py-20 grid gap-28 max-w-7xl mx-auto text-white bg-[#0b0b13]">
        <HeroSection />
        <ManifestCard />
        <SystemsDirectory />

        {/* 🔷 MORPHEUS */}
        <section id="morpheus" className="border-t border-gray-800 pt-16">
          <div className="flex flex-col items-center space-y-6">
            <Link to="/morpheus">
              <h2 className="text-3xl font-bold text-blue-300 hover:text-blue-200 transition cursor-pointer text-center">
                Morpheus
              </h2>
            </Link>
            <OpsCard
              title="Echo Core"
              description="Core logic system for memory, inference, and response."
              tag="Morpheus"
              color="blue"
              link="/morpheus"
            />
            <OpsCard
              title="Memory Engine"
              description="Persistent, file-bound memory banks for offline ops."
              tag="Morpheus"
              color="blue"
              link="/morpheus"
            />
          </div>
        </section>

        {/* 🔒 CLASSIFIED */}
        <section id="violet" className="border-t border-gray-800 pt-16">
          <div className="flex flex-col items-center">
            <Link to="/violet">
              <ClassifiedCard label="Violet Collar – Phase 2" />
            </Link>
          </div>
        </section>

        {/* 🛠 TOOLS */}
        <section id="tools" className="border-t border-gray-800 pt-16">
          <div className="flex flex-col items-center space-y-6">
            <Link to="/tools">
              <h2 className="text-3xl font-bold text-green-300 hover:text-green-200 transition cursor-pointer text-center">
                Tools
              </h2>
            </Link>
            <OpsCard
              title="RepoForge"
              description="Spin up fully-licensed, README-ready repos from your CLI."
              tag="Tool"
              color="green"
              link="/tools"
            />
          </div>
        </section>

        {/* 📄 DOCS */}
        <section id="docs" className="border-t border-gray-800 pt-16">
          <div className="flex flex-col items-center space-y-6">
            <Link to="/docs">
              <h2 className="text-3xl font-bold text-gray-300 hover:text-white transition cursor-pointer text-center">
                Docs
              </h2>
            </Link>
            <ClassifiedCard label="Documentation" />
            <GitHubCard
              title="BuiltByWill GitHub"
              description="Explore all public tools, prototypes, and workflows."
              href="https://github.com/builtbywilldev"
            />
          </div>
        </section>

        {/* 🔬 THEORIES */}
        <section id="theories" className="border-t border-gray-800 pt-16">
          <div className="flex flex-col items-center space-y-6">
            <Link to="/theories">
              <h2 className="text-3xl font-bold text-yellow-300 hover:text-yellow-200 transition cursor-pointer text-center">
                Theories
              </h2>
            </Link>
            <OpsCard
              title="Agent Roundtable"
              description="A poker-table UI where AI models debate topics using structured logic formats."
              tag="Theory"
              color="yellow"
              link="/theories"
            />
            <OpsCard
              title="Memory Injection Protocol"
              description="Injecting long-term memory into offline agents with zero dependencies."
              tag="Theory"
              color="yellow"
              link="/theories"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
