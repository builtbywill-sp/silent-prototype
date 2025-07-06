import { Link } from "react-router-dom";


export default function Extraction() {
  return (
    <div className="px-6 py-12 max-w-3xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold text-white">📦 Message Extraction Service</h2>
      <p className="text-gray-300">
        Export your iMessages for legal, custody, or backup purposes. Fully offline & encrypted workflow.
      </p>
      <Link to="/extraction">
        <button className="mt-4 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded">
          Learn More
        </button>
      </Link>
    </div>
  );
}