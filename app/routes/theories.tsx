import Header from "~/components/Header";
import { Card, CardHeader, CardContent } from "../components/ui/card";
import { Separator } from "../components/ui/separator";

const Theories = () => {
  return (
    <>
      <Header />
      <main className="flex justify-center px-4 py-12">
        <Card className="bg-black border border-gray-800 text-gray-300 w-full max-w-4xl terminal-ui shadow-lg">
          <CardHeader className="text-center pb-4">
            <h1 className="text-3xl font-bold text-blue-400">Theories</h1>
            <p className="text-gray-400 mt-2 italic">
              Experimental logic layers. Conceptual and mathematical edge deployments.
            </p>
          </CardHeader>

          <CardContent className="text-sm sm:text-base space-y-4 font-mono">
            <Separator className="bg-gray-700" />
            <p className="text-gray-500">// Field Notes: Coming soon</p>

            {/* Placeholder idea for future theories */}
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Attention loops vs brute token sampling</li>
              <li>Model entropy decay and prompt persistence</li>
              <li>Phantom memory: inference with incomplete data</li>
              <li>Semantic shadows and memory echoing</li>
            </ul>

            <p className="text-xs text-gray-600">// These ideas are not final. They are the edge.</p>
          </CardContent>
        </Card>
      </main>
    </>
  );
};

export default Theories;
