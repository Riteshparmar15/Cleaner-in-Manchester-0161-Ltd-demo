import React from "react";
import { ShieldCheck, Award, Clock, Leaf } from "lucide-react";

export const TrustSection: React.FC = () => {
  const trustPoints = [
    {
      icon: ShieldCheck,
      title: "DBS Checked & Vetted Team",
      description: "Every cleaning professional is thoroughly background-checked, vetted, and covered by £2,000,000 liability insurance."
    },
    {
      icon: Award,
      title: "100% Re-Clean Guarantee",
      description: "If any corner or surface does not meet your expectations, notify us within 24 hours and we re-clean it free of charge."
    },
    {
      icon: Leaf,
      title: "Eco Supplies & Equipment Provided",
      description: "We supply our own high-grade microfiber materials, pet-safe eco solutions, and commercial vacuums for spotless results."
    },
    {
      icon: Clock,
      title: "Save 4–6 Hours Every Week",
      description: "Hand over the dusting, scrubbing, and vacuuming to professionals and spend your precious free time enjoying Manchester."
    }
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-200/80" aria-label="Our core trust standards">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-start p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 transition-all duration-300 hover:border-[#14355F]/30 hover:bg-slate-50 hover:shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-[#14355F]/10 text-[#14355F] flex items-center justify-center mb-4 shadow-xs">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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
