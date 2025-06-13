import FeatureCard from "../FeatureCard/FeatureCard";
import MapIcon from "@mui/icons-material/Map";
import AirIcon from "@mui/icons-material/Air";
import SportsGolfIcon from "@mui/icons-material/SportsGolf";

const features = [
  {
    icon: <SportsGolfIcon />,
    title: "Smart klubbval",
    description: "Dynamiska och algoritmbaserade rekommendationer",
  },
  {
    icon: <AirIcon />,
    title: "Realtidsdata",
    description: "Vind- och höjdspårning",
  },
  {
    icon: <MapIcon />,
    title: "Banguidning",
    description: "Personligt anpassade strategier",
  },
];

export default function FeatureCardGrid() {
  return (
    <section>
      <div className="max-w-5xl mx-auto grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}
