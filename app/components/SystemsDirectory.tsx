import React from 'react';

const SystemsDirectory = () => (
  <div className="mt-16">
    <h3 className="text-blue-400 font-mono text-xl mb-6">/// Systems Directory</h3>

    <ul className="space-y-4 text-gray-300">
      <li>
        <span className="bg-orange-800 text-blue-200 px-2 py-1 rounded-md mr-2 font-mono">Morpheus</span>
        — Core intelligence system. Autonomous memory, inference, and logic loop.
      </li>
      <li>
        <span className="bg-purple-800 text-purple-200 px-2 py-1 rounded-md mr-2 font-mono">Violet Collar</span>
        — WIP human–AI interface. A visual terminal to tactically bridge mind and machine.
      </li>
      <li>
        <span className="bg-green-800 text-green-200 px-2 py-1 rounded-md mr-2 font-mono">Tools</span>
        — Developer-grade modules for code, control, and command automation.
      </li>
      <li>
        <span className="bg-gray-800 text-gray-300 px-2 py-1 rounded-md mr-2 font-mono">Docs</span>
        — Architecture, internal standards, protocol design, and system documentation.
      </li>
      <li>
        <span className="bg-blue-800 text-gray-300 px-2 py-1 rounded-md mr-2 font-mono">Theories</span>
        — Exploration of foundational concepts, design principles, and future directions.
      </li>
    </ul>
  </div>
);

export default SystemsDirectory;
