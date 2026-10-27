import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, MessageCircle, Sliders, Building2, Clock, Sparkles } from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: CheckCircle2,
      title: "A Methodical Room-by-Room Process",
      description: "We follow structured checklists for kitchens, bathrooms, living areas, and floors. This ensures no essential corners or touchpoints are skipped."
    },
    {
      icon: Sparkles,
      title: "Genuine Attention to Detail",
      description: "From limescale removal on chrome taps to dusting high-level picture rails and skirting boards, our team focuses on the details that make a property feel truly refreshed."
    },
    {
      icon: MessageCircle,
      title: "Friendly, Direct Communication",
      description: "No automated phone trees or unmonitored ticket queues. Speak directly with knowledgeable Manchester staff on 0161 710 4789 to arrange or adjust your service."
    },
    {
      icon: Sliders,
      title: "Flexible Cleaning Arrangements",
      description: "Whether you need a one-time intensive deep clean, moving-out handover cleaning, or scheduled weekly maintenance, we adapt to your lifestyle and timeline."
    },
    {
      icon: Building2,
      title: "Tailored to Manchester's Property Diversity",
      description: "We have practical experience in Victorian brick terraces, modern city-centre glass apartments with concierge access, and bustling boutique commercial offices."
    },
    {
      icon: Clock,
      title: "Respect for Your Time and Privacy",
      description: "Punctual arrivals, dependable attendance, and respectful conduct in your personal living or working environment."
    }
  ];

  return (
    <section className="py-20 bg-white" aria-labelledby="why-choose-us-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-[#EDF7F1] text-[#43A66B] text-xs font-extrabold uppercase tracking-wider mb-3">
              Reliable Standards
            </span>
            <h2 id="why-choose-us-title" className="text-3xl sm:text-4xl font-extrabold text-[#142B3B] tracking-tight">
              Why Choose Cleaner in Manchester?
            </h2>
            <p className="mt-3 text-base text-[#65727E] leading-relaxed">
              We focus on practical reliability, transparent communication, and consistent quality rather than empty promises.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#142B3B] hover:text-[#43A66B] transition-colors"
            >
              <span>Read more about our approach</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F7F9FA] border border-[#E5E9ED] flex flex-col items-start transition-all duration-200 hover:border-[#43A66B]/50 hover:bg-white hover:shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-[#142B3B] text-[#43A66B] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#142B3B] mb-2">
                  {reason.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#65727E] leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
