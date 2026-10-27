import React from "react";
import { MessageSquareQuote, ShieldAlert, CheckCircle2 } from "lucide-react";
import { reviewsConfig } from "../data/businessInfo";

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#F7F9FA] border-t border-[#E5E9ED]" aria-labelledby="reviews-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-[#EDF7F1] text-[#43A66B] text-xs font-extrabold uppercase tracking-wider mb-3">
            Customer Feedback & Reviews
          </span>
          <h2 id="reviews-heading" className="text-3xl sm:text-4xl font-extrabold text-[#142B3B] tracking-tight">
            Client Experience & Quality Standard
          </h2>
          <p className="mt-3 text-sm text-[#65727E]">
            We prioritize transparent feedback from property owners, tenants, and commercial clients across Manchester.
          </p>
        </div>

        {/* Honest Configuration Notice / Disclaimer (Phase 4H Compliance) */}
        {!reviewsConfig.hasApprovedLiveReviews && (
          <div className="mb-10 max-w-3xl mx-auto bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3 text-amber-900 text-xs sm:text-sm">
            <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">Verified Reviews Integration Notice</p>
              <p className="text-amber-800 mt-0.5 text-xs">
                In strict adherence to consumer standards, reviews below demonstrate the card layout and typographic structure.
                Third-party feeds (such as Google Reviews or Trustpilot) can be enabled via the <code className="bg-amber-100 px-1 py-0.5 rounded font-mono text-[11px]">reviewsConfig</code> file once client authorizations are finalized.
              </p>
            </div>
          </div>
        )}

        {/* Reviews / Placeholder Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewsConfig.sampleItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-[#E5E9ED] shadow-xs flex flex-col justify-between relative overflow-hidden"
            >
              {/* Demo Badge */}
              <div className="mb-4 flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[11px] font-bold tracking-wide">
                  {item.note}
                </span>
                <span className="text-xs text-[#43A66B] font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{item.location}</span>
                </span>
              </div>

              {/* Quote Body */}
              <div className="mb-6">
                <MessageSquareQuote className="w-6 h-6 text-[#43A66B]/40 mb-2" />
                <p className="text-sm text-[#202A33] italic leading-relaxed">
                  &ldquo;{item.excerpt}&rdquo;
                </p>
              </div>

              {/* Author / Category Details */}
              <div className="pt-4 border-t border-[#E5E9ED]/60 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-[#142B3B]">{item.authorLabel}</p>
                  <p className="text-[11px] text-[#65727E]">{item.serviceType}</p>
                </div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">
                  Manchester
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Review Invitation */}
        <div className="mt-12 text-center bg-white p-6 rounded-2xl border border-[#E5E9ED] max-w-xl mx-auto">
          <p className="text-xs sm:text-sm font-semibold text-[#142B3B]">
            Have we cleaned your property recently?
          </p>
          <p className="text-xs text-[#65727E] mt-1">
            We welcome direct feedback from all Manchester clients to continually refine our cleaning checklists.
          </p>
        </div>
      </div>
    </section>
  );
};
