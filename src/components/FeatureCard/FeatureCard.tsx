interface FeatureCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="max-w-full bg-white rounded-xl p-4 shadow-sm text-left overflow-hidden">
      <div className="text-lime-800 text-2xl mb-3">{icon}</div>
      <h3 className="font-bold text-lg text-gray-900 break-words">{title}</h3>
      <p className="text-gray-600 mt-1 break-words">{description}</p>
    </div>
  );
}
