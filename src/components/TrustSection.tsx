import { Smile, Sparkles, Calendar, Home } from "lucide-react";


export const TrustSection: React.FC = () => {
  const trustPoints = [
    {
      icon: Smile,
      title: "Friendly & Professional Service",
      description: "Courteous cleaners who treat your home or workplace with genuine care, discretion, and respect."
    },
    {
      icon: Sparkles,
      title: "Detail-Oriented Cleanliness",
      description: "Methodical room-by-room approach addressing corners, skirting boards, high-touch points, and sanitary ware."
    },
    {
      icon: Calendar,
      title: "Flexible Cleaning Arrangements",
      description: "Weekly, fortnightly, monthly, or one-off sessions arranged around your work schedule and personal availability."
    },
    {
      icon: Home,
      title: "Tailored to Your Property",
      description: "From modern Manchester high-rise apartments to suburban family houses and boutique commercial offices."
    }
  ];

  return (
    <section className="py-12 bg-white border-y border-[#E5E9ED]" aria-label="Our core principles">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-start p-5 rounded-2xl bg-[#F7F9FA] border border-[#E5E9ED]/70 transition-all duration-200 hover:border-[#43A66B]/50 hover:shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-[#EDF7F1] text-[#43A66B] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#142B3B] mb-2 leading-snug">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#65727E] leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
