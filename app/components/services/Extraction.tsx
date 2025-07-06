

import React from "react";

export default function Extraction() {
  return (
    <div className="px-6 py-12 max-w-3xl mx-auto space-y-8">
      <section>
        <h1 className="text-4xl font-extrabold tracking-tight text-white mb-4">📦 Message Extraction Service</h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Need your iMessages exported for legal, custody, or backup reasons? We offer secure and streamlined export services using your macOS
          <code className="px-1 bg-gray-800 rounded text-sm text-white mx-1">chat.db</code>
          file. All work is performed 100% offline, with optional encrypted transfer options for peace of mind.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-2">🛠️ What We Offer</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-300">
          <li>One-time exports for court or custody use</li>
          <li>Encrypted zip delivery options</li>
          <li>Optional remote support or file walkthrough</li>
          <li>CSV format exports by phone number or date</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-2">💬 How to Get Started</h2>
        <ol className="list-decimal list-inside space-y-1 text-gray-300">
          <li>Use our secure form (coming soon) or message us directly.</li>
          <li>We'll walk you through pulling your <code className="px-1 bg-gray-800 rounded text-sm text-white mx-1">chat.db</code> or you can zip + send it.</li>
          <li>Receive a secure export—clean, organized, and ready for review.</li>
        </ol>
      </section>

      <div className="bg-orange-500/10 border-l-4 border-orange-500 text-orange-300 p-4 rounded">
        <p className="font-semibold">💰 Pricing starts at <span className="font-bold text-orange-400">$25</span></p>
        <p>Remote walkthroughs or custom formatting available at additional cost.</p>
      </div>

      <p className="text-sm text-gray-500 pt-2">
        Questions? Contact us directly via our footer form or email for custom needs. This is a human-first service. Let us help you make it easy.
      </p>
    </div>
  );
}