"use client";

import React from "react";
import Header from "~/components/Header";

export default function About() {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-black text-white px-6 py-12 font-mono space-y-10">
      <section>
        <p className="text-green-400">silent@proto:~$</p>
        <h1 className="text-2xl font-bold text-orange-400">About Silent Prototype</h1>
        <p className="mt-4 text-gray-300">
          We are building an <span className="text-white font-semibold">offline artificial intelligence operating system</span> — a full-stack platform designed for power users, preppers, security researchers, and those who demand full control over their digital systems.
          <br /><br />
          Our philosophy is rooted in <span className="text-white">sovereignty, speed, and silence</span>. No cloud. No bloat. No backdoors.
        </p>
      </section>

      <section>
        <p className="text-green-400">silent@proto:~$</p>
        <h2 className="text-xl font-bold text-orange-400">Mission Objectives</h2>
        <ul className="mt-4 text-gray-300 list-disc list-inside space-y-2">
          <li>📡 Operate fully offline — no internet required to run our tools</li>
          <li>🧠 Build AI systems that function without cloud dependencies</li>
          <li>🧰 Offer developer environments for training, toolchain mastery, and secure ops</li>
          <li>🔐 Ensure auditability and trust through open logic and transparent design</li>
        </ul>
      </section>

      <section>
        <p className="text-green-400">silent@proto:~$</p>
        <h2 className="text-xl font-bold text-orange-400">Our Team</h2>
        <p className="mt-4 text-gray-300">
          Our team is currently forming. This is an independent build by digital tacticians and tactical developers.
          <br /><br />
          All identities are tracked under the <code className="text-white">builtby*</code> protocol — our internal ID prefix.
          <br />
          Examples:
          <ul className="list-inside list-disc mt-2">
            <li><span className="text-white font-semibold">BuiltByWill</span> – frontend systems, OS engineering, zero-dependency builds</li>
            <li><span className="text-white font-semibold">BuiltByViolet</span> – AI core development (Morpheus)</li>
            <li><span className="text-white font-semibold">BuiltByVictoria</span> – outreach, learning tools, and ethical infrastructure</li>
            <li><span className="text-white font-semibold">BuiltByEmma</span> – outreach, admin interface design, hardware provisioning, and secure system configuration</li>
          </ul>
        </p>
      </section>

      <section>
        <p className="text-green-400">silent@proto:~$</p>
        <h2 className="text-xl font-bold text-orange-400">Contact</h2>
        <p className="mt-4 text-gray-300">
          Our secure mail relay is currently undergoing maintenance. For now, please connect via:
          <br /><br />
          <span className="text-white font-semibold">builtbywill@pm.me</span>
          <br />
          Additional channels will be published once the silent-protomail server is back online.
        </p>
      </section>
    </div>
    </>
  );
}