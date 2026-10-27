import { Phone, CheckCircle2 } from "lucide-react";

import { QuoteForm } from "../components/QuoteForm";
import { businessInfo } from "../data/businessInfo";

export const QuotePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F7F9FA]">
      {/* Header Banner */}
      <section className="bg-[#142B3B] text-white py-12 lg:py-16 border-b border-[#1D3D52]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-[#1B384D] border border-[#234761] text-[#43A66B] text-xs font-bold uppercase tracking-wider mb-4">
            Manchester Cleaning Enquiry
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
            Request Your Free Quote
          </h1>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
            Tell us about your property size and cleaning needs. We provide straightforward, tailored pricing without hidden extras.
          </p>

          <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-300 bg-[#1B384D]/60 px-4 py-2 rounded-full border border-[#234761]">
            <span>Prefer to chat now?</span>
            <a
              href={businessInfo.phoneHref}
              className="font-bold text-[#43A66B] hover:text-white transition-colors inline-flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{businessInfo.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-12 sm:py-16 flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Trust Guarantees Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white border border-[#E5E9ED] text-xs font-semibold text-[#142B3B]">
              <CheckCircle2 className="w-4 h-4 text-[#43A66B] shrink-0" />
              <span>Obligation-free estimate</span>
            </div>
            <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white border border-[#E5E9ED] text-xs font-semibold text-[#142B3B]">
              <CheckCircle2 className="w-4 h-4 text-[#43A66B] shrink-0" />
              <span>Tailored to your property</span>
            </div>
            <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white border border-[#E5E9ED] text-xs font-semibold text-[#142B3B]">
              <CheckCircle2 className="w-4 h-4 text-[#43A66B] shrink-0" />
              <span>Prompt local response</span>
            </div>
          </div>

          {/* Form */}
          <QuoteForm />
        </div>
      </section>
    </div>
  );
};
