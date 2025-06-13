"use client";

import FeatureCardGrid from "../FeatureCardGrid/FeatureCardGrid";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-white via-green-50 to-emerald-50 px-8 py-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Din smarta <span className="text-lime-800">golf caddie</span> direkt
            i fickan
          </h1>

          <p className="text-xl mt-6">
            Upplev framtidens golf med dynamiska klubbrekommendationer,
            realtidsdata om vind, höjdskillnader och personligt anpassade
            strategier
          </p>

          <div className="mt-10">
            <FeatureCardGrid />
          </div>
        </div>

        <div>
          <Image
            src="/loopr_app_hole_overview.png"
            alt="App-mockup i iPhone"
            width={300}
            height={300}
            priority
          />
        </div>
      </div>
    </section>
  );
}
