import Header from "~/components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="terminal-ui max-w-4xl px-6 mt-10 text-center leading-relaxed">
  <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-400">Silent Prototype</h1>
  <p className="text-lg text-gray-300 mb-6">
    A black site operating system built for creators, tacticians, and the age of AI.
  </p>

  <div className="border-t border-gray-700 pt-4 space-y-2">
    <p><span className="text-purple-400 font-bold">Morpheus:</span> Tactical AI Core</p>
    <p><span className="text-pink-400 font-bold">Violet Collar OS:</span> Custom React UI Shell(optional)</p>
    <p><span className="text-blue-400 font-bold">Tools:</span> Dev utilities & commands</p>
    <p><span className="text-yellow-400 font-bold">Docs:</span> Internal architecture and Philosophy</p>
    <p><span className="text-cyan-400 font-bold">Theories:</span> Experimental edge</p>
  </div>

  <p className="mt-6 text-sm text-gray-500">// Status: <span className="text-green-400">ACTIVE</span></p>
</div>

      </>

      
  );
};

export default Home;
