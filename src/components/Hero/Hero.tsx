import FeatureCard from "../FeatureCard/FeatureCard";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-white via-green-50 to-emerald-50 p-8">
      <div className="max-w-5/12 mb-16">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Din smarta <span className="text-lime-800">golf caddie</span> direkt i
          fickan
        </h1>
      </div>
      <div className="max-w-5/12">
        <p className="text-xl">
          Upplev framtidens golf med dynamiska klubbrekommendationer,
          realtidsdata om vind, höjdskillnader och personligt anpassade
          strategier
        </p>
      </div>
      <div>
        <FeatureCard
          title="Smart klubbval"
          description="Dynamiska och algoritmbaserade klubbrekommendationer"
        />
      </div>
    </section>
  );
}
