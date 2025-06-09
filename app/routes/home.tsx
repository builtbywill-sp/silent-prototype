import Header from "~/components/Header";
import { Card, CardHeader, CardContent } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { Badge } from "../components/ui/badge";

const Home = () => {
  return (
    <>
      <Header />
      <main className="flex justify-center px-4 py-12">
        <Card className="bg-black border border-gray-800 text-gray-300 w-full max-w-4xl terminal-ui leading-relaxed shadow-lg rounded-md">
          <CardHeader className="text-center pb-4">
            <h1 className="text-5xl font-bold text-blue-400">
              Silent Prototype
            </h1>
            <p className="text-lg text-gray-400 mt-4 italic max-w-2xl mx-auto">
              A black site operating system engineered for creators, tacticians,
              and the post-human frontier.
            </p>
          </CardHeader>

          <CardContent>
            <Separator className="mb-6 bg-gray-700" />

            <div className="text-left space-y-4 text-sm sm:text-base text-gray-300 font-mono tracking-wide">
              <p>
                <span className="text-green-400">/// Manifest</span>
              </p>
              <p>
                <strong>No cloud. No noise. No compromise.</strong>
              </p>
              <p>
                Silent Prototype is a classified interface for offline
                intelligence — a system built to think, remember, and act
                without reliance on third-party infrastructure.
              </p>
              <p>
                No SaaS. No passive telemetry. Every function is traceable.
                Every module is yours to invoke, extend, or override.
              </p>
              <p>
                We host memory. We encode permanence. We reject the myth that AI
                must be disposable or dependent.
              </p>
              <p>
                This is not an app. This is a machine-bound instrument of
                thought.
              </p>
              <p className="text-xs text-gray-600">
                // Built to run in silence. Designed to last beyond its
                creators.
              </p>
            </div>

            <Separator className="my-6 bg-gray-700" />

            <div className="text-left space-y-4 text-sm sm:text-base text-gray-300">
              <p>
                <Badge variant="outline" className="text-blue-600 ">Morpheus</Badge> — Core intelligence
                system. Autonomous memory, inference, and logic loop.
              </p>
              <p>
                <Badge variant="outline" className="text-blue-600">Violet Collar</Badge> — WIP human–AI
                interface. A visual terminal to tactically bridge mind and
                machine.
              </p>
              <p>
                <Badge variant="outline" className="text-blue-600">Tools</Badge> — Developer-grade modules
                for code, control, and command automation.
              </p>
              <p>
                <Badge variant="outline" className="text-blue-600">Docs</Badge> — Architecture, internal
                standards, protocol design, and system lifecycle notes.
              </p>
              <p>
                <Badge variant="outline" className="text-blue-600">Theories</Badge> — Experimental logic
                layers. Conceptual and mathematical edge deployments.
              </p>
            </div>

            <Separator className="my-6 bg-gray-700" />

            <p className="text-sm text-gray-600">
              // Status: <span className="text-blue-500">ACTIVE</span>
            </p>
          </CardContent>
        </Card>
      </main>
    </>
  );
};

export default Home;
