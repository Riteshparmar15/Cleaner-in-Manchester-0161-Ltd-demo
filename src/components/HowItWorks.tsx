import React from "react";
import { Link } from "react-router-dom";
import { ClipboardList, Calculator, CalendarCheck, ArrowRight } from "lucide-react";

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      badge: "Step 1",
      title: "Tell Us What You Need",
      description: "Share your property type, approximate size, cleaning frequency, and any specific areas requiring extra attention through our simple enquiry form or by phone.",
      icon: ClipboardList
    },
    {
      number: "02",
      badge: "Step 2",
      title: "Receive Your Quote",
      description: "Our Manchester team reviews your requirements and provides an honest, tailored estimate reflecting the scope of work and schedule.",
      icon: Calculator
    },
    {
      number: "03",
      badge: "Step 3",
      title: "Arrange Your Cleaning",
      description: "Confirm your preferred date, access arrangements, and cleaning details directly with us. Then relax and let our reliable cleaners take care of the rest.",
      icon: CalendarCheck
    }
  ];

  return (
    <section className="py-20 bg-[#F7F9FA]" aria-labelledby="how-it-works-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-[#EDF7F1] text-[#43A66B] text-xs font-extrabold uppercase tracking-wider mb-3">
            Straightforward Process
          </span>
          <h2 id="how-it-works-title" className="text-3xl sm:text-4xl font-extrabold text-[#142B3B] tracking-tight">
            How It Works
          </h2>
          <p className="mt-3 text-base text-[#65727E] leading-relaxed">
            Booking professional cleaning in Manchester should be simple and stress-free. Here is our three-step approach:
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-white rounded-2xl p-8 border border-[#E5E9ED] shadow-xs flex flex-col items-start hover:shadow-md transition-shadow"
              >
                {/* Step Indicator Header */}
                <div className="w-full flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#142B3B] text-white flex items-center justify-center font-extrabold text-lg">
                    <Icon className="w-6 h-6 text-[#43A66B]" />
                  </div>
                  <span className="text-3xl font-black text-[#E5E9ED] tracking-tighter">
                    {step.number}
                  </span>
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-[#43A66B] mb-2">
                  {step.badge}
                </span>

                <h3 className="text-xl font-bold text-[#142B3B] mb-3">
                  {step.title}
                </h3>

                <p className="text-sm text-[#65727E] leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Note regarding booking confirmation */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#65727E] max-w-xl mx-auto mb-5">
            Note: All appointments are confirmed directly with our team to ensure proper scheduling, property access details, and cleaner allocation.
          </p>
          <Link
            to="/quote"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#43A66B] hover:bg-[#348655] text-white font-bold text-sm shadow-sm transition-all transform hover:-translate-y-0.5"
          >
            <span>Request Your Free Quote Today</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
