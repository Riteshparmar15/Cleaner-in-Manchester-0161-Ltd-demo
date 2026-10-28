import React from "react";
import { Star, CheckCircle, ArrowRight, ShieldCheck, Heart } from "lucide-react";
import { googleReviewsData, googleReviewsSummary, type GoogleReview } from "../data/businessInfo";
import { Link } from "react-router-dom";

export const ReviewsSection: React.FC = () => {
  // Duplicate for seamless infinite marquee loop
  const marqueeItems = [...googleReviewsData, ...googleReviewsData];

  const renderStars = (count: number) => {
    return (
      <div className="flex items-center gap-0.5 text-amber-400" aria-label={`${count} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 fill-amber-400 text-amber-400 ${i < count ? "opacity-100" : "opacity-30"}`}
          />
        ))}
      </div>
    );
  };

  const renderReviewCard = (review: GoogleReview, indexKey: string) => (
    <div
      key={indexKey}
      className="w-[340px] sm:w-[380px] shrink-0 bg-white rounded-2xl p-6 border border-slate-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(20,53,95,0.08)] hover:border-[#14355F]/30 transition-all duration-300 flex flex-col justify-between text-left select-none group"
    >
      <div>
        {/* Card Header: Author info, Google Icon, Rating */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            {/* Avatar Initials */}
            <div className={`w-10 h-10 rounded-full ${review.avatarColor} text-white flex items-center justify-center font-bold text-sm shadow-sm ring-2 ring-white`}>
              {review.avatarText}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h4 className="font-bold text-slate-900 text-sm">{review.authorName}</h4>
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 fill-emerald-100" />
              </div>
              <p className="text-xs text-slate-500 flex items-center gap-1">
                <span>{review.location}, {review.postcode}</span>
                <span>&bull;</span>
                <span className="font-medium text-emerald-600">{review.timeAgo}</span>
              </p>
            </div>
          </div>

          {/* Google G Logo SVG */}
          <div className="w-6 h-6 shrink-0 flex items-center justify-center" title="Verified Google Review">
            <svg viewBox="0 0 24 24" className="w-5 h-5">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
          </div>
        </div>

        {/* Stars and Service Type Tag */}
        <div className="flex items-center justify-between mb-3">
          {renderStars(review.rating)}
          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-[#14355F] border border-slate-200">
            {review.serviceType}
          </span>
        </div>

        {/* Highlight Quote Banner */}
        <div className="mb-2 px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-100 text-[11px] font-medium text-emerald-800 flex items-center gap-1.5">
          <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span className="truncate">&ldquo;{review.highlight}&rdquo;</span>
        </div>

        {/* Review Body */}
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
          &ldquo;{review.reviewText}&rdquo;
        </p>
      </div>

      {/* Footer Verified Stamp */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
        <span className="flex items-center gap-1 text-slate-600 font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          Verified Google Review
        </span>
        <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">
          Greater Manchester
        </span>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/80 overflow-hidden" aria-labelledby="google-reviews-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        {/* Top Summary Banner */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14355F]/10 border border-[#14355F]/20 text-[#14355F] text-xs font-bold uppercase tracking-wider mb-3">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span>Verified Google Reviews &bull; Under 1 Year</span>
            </div>

            <h2 id="google-reviews-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Real Reviews From Manchester Homes & Businesses
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl leading-relaxed">
              Read authentic feedback from residents in Didsbury, Ancoats, Salford Quays, Deansgate, and across Greater Manchester.
            </p>
          </div>

          {/* Rating Summary Card */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-5 shrink-0">
            <div className="flex flex-col items-center justify-center pr-5 border-r border-slate-200">
              <span className="text-4xl font-black text-slate-900 leading-none">
                {googleReviewsSummary.averageRating}
              </span>
              <div className="mt-1 flex items-center gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-[11px] font-semibold text-slate-500 mt-1">out of 5.0</span>
            </div>

            <div className="text-left">
              <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm">
                <span>Google Reviews</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              </div>
              <p className="text-xs text-slate-600 mt-0.5">
                Based on <strong className="text-slate-900">{googleReviewsSummary.totalReviews}+ verified local reviews</strong>
              </p>
              <span className="inline-block mt-1 text-[11px] font-semibold text-[#14355F] bg-slate-100 px-2 py-0.5 rounded">
                All reviews under 1 year old
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Display: Continuous Motion Carousel */}
      <div className="relative w-full py-4 space-y-6 overflow-hidden">
        {/* Subtle gradient edge fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none"></div>

        {/* Continuous Row 1 (Forward motion) */}
        <div className="flex gap-6 animate-marquee">
          {marqueeItems.map((rev, idx) => renderReviewCard(rev, `row1-${rev.id}-${idx}`))}
        </div>

        {/* Continuous Row 2 (Reverse motion) */}
        <div className="flex gap-6 animate-marquee-reverse">
          {marqueeItems.map((rev, idx) => renderReviewCard(rev, `row2-${rev.id}-${idx}`))}
        </div>

        <div className="text-center text-xs text-slate-400 mt-2">
          <span>Hover over any review card to pause motion &bull; Drag or scroll sideways on touch screens</span>
        </div>
      </div>

      {/* Direct Review Invitation & Booking Link */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#14355F]/10 text-[#14355F] flex items-center justify-center shrink-0">
              <Heart className="w-6 h-6 fill-[#14355F]" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">
                Join 180+ Satisfied Manchester Clients
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Experience the 5-star difference. Zero contract lock-in, 100% satisfaction guarantee.
              </p>
            </div>
          </div>

          <Link
            to="/quote"
            className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#14355F] hover:bg-[#0E2543] text-white font-bold text-sm shadow-md transition-all mac-btn"
          >
            <span>Book Your Clean</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
