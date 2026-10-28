import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, MessageCircle, Sliders, Building2, Clock, Award } from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: CheckCircle2,
      title: "Methodical Checklist Routine",
      description: "Structured checklists for kitchens, bathrooms, living areas, and flooring ensure no skirting board, tap, or touchpoint is ever skipped."
    },
    {
      icon: Award,
      title: "Impeccable Attention to Detail",
      description: "From limescale removal on chrome fixtures to dusting high-level picture rails, our team focuses on what makes a home feel genuinely refreshed."
    },
    {
      icon: MessageCircle,
      title: "Direct Manchester Support: 0161 710 4789",
      description: "No automated phone queues. Speak directly with friendly local Manchester staff to schedule, adjust, or customize your cleaning service."
    },
    {
      icon: Sliders,
      title: "Flexible Scheduling, No Contracts",
      description: "Weekly, fortnightly, or one-off cleans. Pause or change dates anytime without penalties or minimum lock-in commitments."
    },
    {
      icon: Building2,
      title: "Manchester Property Specialists",
      description: "From Victorian brick terraces in Didsbury to glass high-rise towers in Ancoats and Deansgate with concierge check-in."
    },
    {
      icon: Clock,
      title: "Save 4–6 Hours Every Week",
      description: "Reclaim your evenings and weekends. Let dependable, insured professionals handle the chores while you focus on what matters most."
    }
  ];

  return (
    <section className="py-20 bg-white" aria-labelledby="why-choose-us-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-[#14355F]/10 text-[#14355F] text-xs font-black uppercase tracking-wider mb-3">
              Reliable Standards
            </span>
            <h2 id="why-choose-us-title" className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Why Manchester Chooses Us
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              We focus on dependable attendance, spotless quality, and transparent pricing without automated runarounds.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#14355F] hover:text-[#0E2543] transition-colors"
            >
              <span>Learn about our cleaning team</span>
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
                className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 flex flex-col items-start transition-all duration-300 hover:border-[#14355F]/30 hover:bg-white hover:shadow-md group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#14355F]/10 text-[#14355F] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#14355F] transition-colors">
                  {reason.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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
