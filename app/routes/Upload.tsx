import React from 'react'
import Header from '~/components/Header'

const fileInputClass = "text-gray-600 dark:text-gray-300 \
file:mr-4 file:py-2 file:px-4 \
file:rounded-full file:border-0 \
file:text-sm file:font-semibold \
file:bg-orange-100 file:text-orange-700 \
hover:file:bg-orange-200"

const Upload = () => {
  const [chatFile, setChatFile] = React.useState<File | null>(null);
  const [shmFile, setShmFile] = React.useState<File | null>(null);
  const [walFile, setWalFile] = React.useState<File | null>(null);
  const [userEmail, setUserEmail] = React.useState<string>("");

  // simple toast implementation
  const toast = {
    success: (msg: string) => alert(msg),
    error: (msg: string) => alert(msg),
  };

  // Handles the Zip & Encrypt send action
  const handleZipEncryptSend = async () => {
    if (!chatFile) {
      toast.error("Please upload your chat.db file.");
      return;
    }
    if (!userEmail || !userEmail.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("chatdb", chatFile);
      if (shmFile) formData.append("shm", shmFile);
      if (walFile) formData.append("wal", walFile);
      formData.append("userEmail", userEmail);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      if (res.ok) {
        toast.success("Uploaded successfully. Check your email soon.");
      } else {
        toast.error(`Upload failed: ${result.error}`);
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong during upload.");
    }
  };

  return (
    <>
        <Header />
        <main className="max-w-2xl mx-auto mt-10 p-6 border rounded-lg shadow bg-zinc-800 text-white">
          <h1 className="text-2xl font-semibold mb-4 text-center text-orange-500">Secure File Upload</h1>
          <p className="mb-4 text-white">
            Please upload the following 3 files from your iMessage backup or system extraction. These are typically located in the app group containers or full system-level backups:
          </p>
          <ul className="list-disc list-inside mb-4 text-white text-sm">
            <li><strong>chat.db</strong> — contains the messages</li>
            <li><strong>chat.db-shm</strong> — optional shared memory file</li>
            <li><strong>chat.db-wal</strong> — optional write-ahead log file</li>
          </ul>
          <p className="mb-6 text-sm text-white">
            We'll zip and encrypt them automatically before secure delivery.
            If you're unsure where to find these files, <strong>email us at builtbywill@pm.me</strong> — we're happy to help.
            <br /><br />
            After upload, you'll receive a 10% sample and invoice. Minimum service cost: <strong>$100</strong>.
          </p>
          <div className="space-y-4 mb-6">
            <label className="block">
              <span className={`font-mono text-sm ${chatFile ? 'text-green-400' : 'text-red-400'}`}>chat.db</span>
              <input
                type="file"
                accept=".db"
                onChange={(e) => setChatFile(e.target.files?.[0] || null)}
                className={`block w-full mt-1 text-sm text-white ${fileInputClass}`}
              />
            </label>
            <label className="block">
              <span className={`font-mono text-sm ${shmFile ? 'text-green-400' : 'text-red-400'}`}>chat.db-shm <span className="text-zinc-400">(optional)</span></span>
              <input
                type="file"
                accept=".db-shm"
                onChange={(e) => setShmFile(e.target.files?.[0] || null)}
                className={`block w-full mt-1 text-sm text-white ${fileInputClass}`}
              />
            </label>
            <label className="block">
              <span className={`font-mono text-sm ${walFile ? 'text-green-400' : 'text-red-400'}`}>chat.db-wal <span className="text-zinc-400">(optional)</span></span>
              <input
                type="file"
                accept=".db-wal"
                onChange={(e) => setWalFile(e.target.files?.[0] || null)}
                className={`block w-full mt-1 text-sm text-white ${fileInputClass}`}
              />
            </label>
            <label className="block">
              <span className="font-mono text-sm text-orange-500">Your Email (for delivery)</span>
              <input
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="you@email.com"
                className="block w-full mt-1 text-sm text-white rounded p-2"
                required
              />
            </label>
          </div>
          <button
            className="w-full bg-orange-500 text-black py-2 px-4 rounded hover:bg-orange-400 transition mt-4 font-mono"
            onClick={handleZipEncryptSend}
          >
            Zip & Encrypt — Send Securely
          </button>
        </main>
        <footer className="text-center text-sm text-zinc-500 mt-12 pb-6">
          &copy; {new Date().getFullYear()} SilentPrototype™ — All rights reserved.
        </footer>
    </>
  )
}

export default Upload