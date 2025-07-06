"use client";

import { Link } from "react-router-dom";

export default function Hardware() {
  return (
    <div className="px-6 py-12 max-w-3xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold text-white">Hardware Services</h2>
      <p className="text-gray-300">
        We offer custom-flashed SSDs with pre-installed Linux environments for dual boot training, dev toolchains, and secure offline use.
      </p>
      <p className="text-gray-300">
        Each device is configured to your preferences and ships ready-to-go. Options include Pop!_OS, GrapheneOS bootloaders, custom terminal UIs, and secure backups.
      </p>
      <p className="text-gray-300">
        Contact <strong>builtbywill@pm.me</strong> to order or get a quote.
      </p>
      <Link to="/hardware">
      <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
        Online Configurator
      </button>
      </Link>
    </div>
  );
}