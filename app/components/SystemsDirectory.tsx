import React from "react";
import { Link } from "react-router-dom";

const SystemsDirectory = () => (
  <div className="bg-black border border-gray-800 text-gray-300 p-8 rounded-md mt-12">
    <h3 className="text-blue-400 font-mono text-xl mb-6">/// Systems Directory</h3>

    <ul className="space-y-4 text-gray-300 text-sm">
      <li>
        <Link to="#morpheus">
          <span className="bg-orange-700 text-white px-2 py-1 rounded-md mr-2 font-mono text-xs">
            Morpheus
          </span>
        </Link>
        — Core intelligence system. Autonomous memory, inference, and logic loop.
      </li>
      <li>
        <Link to="#violet">
          <span className="bg-purple-700 text-white px-2 py-1 rounded-md mr-2 font-mono text-xs">
            Violet Collar
          </span>
        </Link>
        — WIP human–AI interface. A visual terminal to tactically bridge mind and machine.
      </li>
      <li>
        <Link to="#tools">
          <span className="bg-green-700 text-white px-2 py-1 rounded-md mr-2 font-mono text-xs">
            Tools
          </span>
        </Link>
        — Developer-grade modules for code, control, and command automation.
      </li>
      <li>
        <Link to="#docs">
          <span className="bg-slate-700 text-white px-2 py-1 rounded-md mr-2 font-mono text-xs">
            Docs
          </span>
        </Link>
        — Architecture, internal standards, protocol design, and system documentation.
      </li>
      <li>
        <Link to="#theories">
          <span className="bg-blue-800 text-white px-2 py-1 rounded-md mr-2 font-mono text-xs">
            Theories
          </span>
        </Link>
        — Exploration of foundational concepts, design principles, and future directions.
      </li>
    </ul>
  </div>
);

export default SystemsDirectory;
