import React from 'react'

const ITServices = () => {
  return (
    <section className="text-white max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-4">📦 Message Extraction Service</h1>
      <p className="mb-6 text-sm text-neutral-300">
        Need your iMessages exported for legal, custody, or backup reasons? We offer secure and
        streamlined export services using your macOS <code>chat.db</code> file. All work is performed
        100% offline, with optional encrypted transfer options for peace of mind.
      </p>

      <h2 className="text-xl font-semibold mb-2">🛠️ What We Offer:</h2>
      <ul className="list-disc list-inside mb-6 text-neutral-200 text-sm space-y-1">
        <li>One-time exports for court or custody use</li>
        <li>Encrypted zip delivery options</li>
        <li>Optional remote support or file walkthrough</li>
        <li>CSV format exports by phone number or date</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">💬 How to Get Started:</h2>
      <ol className="list-decimal list-inside mb-6 text-neutral-200 text-sm space-y-1">
        <li>Use our secure form (coming soon) or message us directly.</li>
        <li>We'll walk you through pulling your <code>chat.db</code> or you can zip + send it.</li>
        <li>Receive a secure export—clean, organized, and ready for review.</li>
      </ol>

      <div className="bg-neutral-900 border border-orange-400 text-orange-300 px-4 py-3 text-sm mb-6">
        <strong>Pricing starts at $25</strong><br />
        Remote walkthroughs or custom formatting available at additional cost.
      </div>

      <p className="text-xs text-neutral-500">
        Questions? Contact us directly via our footer form or email for custom needs. This is a
        human-first service. Let us help you make it easy.
      </p>
    </section>
  );
}

export default ITServices