import React from "react";
import { ToolsCard } from "../components/ToolsCard";
import { ClassifiedCard } from "../components/ClassifiedCard";
import Header from "~/components/Header";

export default function ToolsPage() {
  return (
    <>
      <Header />
      <section className="tools border-t border-gray-800 pt-16">
        <div className="flex flex-col items-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-300 hover:text-white transition cursor-pointer text-center">
            Tools
          </h2>

        <ToolsCard
          title="RepoForge"
          description="Spin up fully-licensed, README-ready repos from your CLI."
          href="https://github.com/builtbywilldev/RepoForge-v2/releases/tag/v2.0.0"
          version="v2.0.0"
        />

        <ClassifiedCard label="Phase Toolchain Docs" />
      </div>
    </section>
    </>
  );
}
