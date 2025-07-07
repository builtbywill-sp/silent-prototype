"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../components/ui/select";
import { Checkbox } from "../components/ui/checkbox";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export default function Hardware() {
  return (

    <>
    <Header />
    <section className="px-6 py-12 max-w-2xl mx-auto space-y-8">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold text-white">🖥️ Hardware Setup Services</h1>
        <p className="text-gray-300">
          We offer custom-flashed SSDs with pre-installed Linux environments designed for dual-boot
          training, dev toolchains, and secure offline use. Each device is configured to your
          preferences and can be shipped ready-to-go.
        </p>
      </div>

      <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 space-y-6">
        <h2 className="text-xl font-semibold text-white">🧰 Build Your Setup</h2>

        <div className="space-y-2">
          <label className="text-sm font-medium text-white">Choose OS</label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a distro" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popos">Pop!_OS</SelectItem>
              <SelectItem value="ubuntu">Ubuntu</SelectItem>
              <SelectItem value="graphene">GrapheneOS (for phones)</SelectItem>
              <SelectItem value="custom">Custom Distro</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-white">Add-ons</label>
          <div className="flex items-center space-x-2">
            <Checkbox id="dualboot" />
            <label htmlFor="dualboot" className="text-sm text-white">
              Dual-boot setup
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="encryption" />
            <label htmlFor="encryption" className="text-sm text-white">
              Drive encryption
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="backup" />
            <label htmlFor="backup" className="text-sm text-white">
              Secure backup config
            </label>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-white">Your Email</label>
          <Input type="email" placeholder="you@example.com" className="mt-1" />
        </div>

        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
          Submit Build Request (Coming Soon)
        </Button>

        <p className="text-center text-sm text-gray-400">
          Or contact us directly at <span className="font-medium text-white">builtbywill@pm.me</span>
        </p>
      </div>
    </section>
    <Footer />
    </>
  );
}