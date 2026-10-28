import React from "react";
import { Link } from "react-router-dom";
import { Clock, CheckCircle2, Smile, ArrowRight } from "lucide-react";

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      badge: "Step 1 &bull; 60 Seconds",
      title: "Get Instant Quote & Pick Time",
      description: "Select your service, rooms, and preferred day in under 60 seconds. Transparent pricing with zero hidden fees.",
      icon: Clock
    },
    {
      number: "02",
      badge: "Step 2 &bull; Fully Equipped",
      title: "Vetted Cleaner Arrives",
      description: "Your DBS-checked professional arrives punctually with eco-friendly supplies, microfiber materials, and commercial vacuum.",
      icon: CheckCircle2
    },
    {
      number: "03",
      badge: "Step 3 &bull; Reclaim Your Time",
      title: "Enjoy Your Pristine Space",
      description: "Return home to spotless surfaces, sanitized bathrooms, and fresh floors. Backed by our 100% free re-clean guarantee.",
      icon: Smile
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/80" aria-labelledby="how-it-works-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-[#14355F]/10 text-[#14355F] text-xs font-black uppercase tracking-wider mb-3">
            Simple 3-Step Process
          </span>
          <h2 id="how-it-works-title" className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            How It Works
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            We designed our service to save you maximum time from the moment you book until the final quality inspection.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-white rounded-2xl p-8 border border-slate-200/90 shadow-xs flex flex-col items-start hover:shadow-lg hover:border-[#14355F]/30 transition-all duration-300 group"
              >
                {/* Step Indicator Header */}
                <div className="w-full flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#14355F] text-white flex items-center justify-center font-extrabold text-lg shadow-md shadow-slate-900/10">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-3xl font-black text-slate-200 group-hover:text-teal-200 transition-colors tracking-tighter">
                    {step.number}
                  </span>
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488] mb-2">
                  {step.badge}
                </span>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#14355F] transition-colors">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Direct Action Banner */}
        <div className="mt-12 text-center">
          <Link
            to="/quote"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#14355F] hover:bg-[#0E2543] text-white font-extrabold text-sm shadow-md shadow-slate-900/15 transition-all transform hover:-translate-y-0.5 mac-btn"
          >
            <span>Book Your Clean in 60 Seconds</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
