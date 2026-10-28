import React, { useState } from "react";
import { MapPin, Search, CheckCircle, Phone, ArrowRight } from "lucide-react";
import { serviceAreas, businessInfo } from "../data/businessInfo";
import { Link } from "react-router-dom";

export const ServiceAreaSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "Central", "South Manchester", "North & West", "Greater Manchester"];

  const filteredAreas = serviceAreas.filter((area) => {
    const matchesCategory =
      selectedCategory === "All" || area.category === selectedCategory;
    const matchesSearch =
      area.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      area.postcodes.toLowerCase().includes(searchQuery.toLowerCase()) ||
      area.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 bg-white" aria-labelledby="service-area-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-[#14355F]/10 text-[#14355F] text-xs font-black uppercase tracking-wider mb-3">
            Coverage Area
          </span>
          <h2 id="service-area-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Serving Properties Across Manchester
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            From city centre high-rise apartments to leafy suburban homes, our vetted cleaning teams cover key Manchester districts and postcodes.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="max-w-3xl mx-auto mb-10 flex flex-col sm:flex-row items-center gap-3">
          {/* Search Input */}
          <div className="relative w-full sm:flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by area or postcode (e.g. M4, Didsbury, M1)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#14355F] focus:bg-white transition-all"
            />
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? "bg-[#14355F] text-white"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAreas.length > 0 ? (
            filteredAreas.map((area, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-[#14355F]/30 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 group-hover:text-[#14355F] transition-colors">
                      <MapPin className="w-4 h-4 text-[#14355F] shrink-0" />
                      <span>{area.name}</span>
                    </h3>
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">
                      {area.postcodes}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">{area.category}</span>
                  <Link
                    to={`/quote?postcode=${encodeURIComponent(area.postcodes.split(",")[0].trim())}`}
                    className="font-bold text-[#14355F] hover:text-[#0E2543] inline-flex items-center gap-1"
                  >
                    <span>Instant Quote</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
              <p className="text-sm font-semibold text-slate-900">
                No direct matches found for "{searchQuery}"
              </p>
              <p className="text-xs text-slate-600 mt-1 max-w-md mx-auto">
                We accommodate neighboring postcodes across Greater Manchester. Contact our team to confirm.
              </p>
              <a
                href={businessInfo.phoneHref}
                className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#14355F] hover:underline"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {businessInfo.phoneFormatted}</span>
              </a>
            </div>
          )}
        </div>

        {/* Coverage Note Banner */}
        <div className="mt-10 p-4 rounded-xl bg-slate-100 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
            <p className="text-xs sm:text-sm text-slate-800">
              <strong>Need a clean this week?</strong> We cover all Manchester M1–M50 postcodes plus Cheshire and Salford borders.
            </p>
          </div>
          <Link
            to="/quote"
            className="shrink-0 px-4 py-2 rounded-lg bg-[#14355F] text-white text-xs font-bold hover:bg-[#0E2543] transition-colors shadow-xs"
          >
            Check Postcode Availability
          </Link>
        </div>
      </div>
    </section>
  );
};
