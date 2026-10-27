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
          <span className="inline-block px-3 py-1 rounded-full bg-[#EDF7F1] text-[#43A66B] text-xs font-extrabold uppercase tracking-wider mb-3">
            Coverage Area
          </span>
          <h2 id="service-area-heading" className="text-3xl sm:text-4xl font-extrabold text-[#142B3B] tracking-tight">
            Serving Properties Across Manchester
          </h2>
          <p className="mt-3 text-sm text-[#65727E] leading-relaxed">
            From city centre apartment towers to suburban family homes, our cleaning teams cover key Manchester districts and postcodes.
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
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E5E9ED] bg-[#F7F9FA] text-sm text-[#202A33] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#43A66B] focus:bg-white transition-all"
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
                    ? "bg-[#142B3B] text-white"
                    : "bg-[#F7F9FA] text-[#65727E] hover:bg-[#E5E9ED] hover:text-[#202A33]"
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
                className="p-5 rounded-2xl bg-[#F7F9FA] border border-[#E5E9ED] hover:border-[#43A66B]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-base font-bold text-[#142B3B] flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#43A66B] shrink-0" />
                      <span>{area.name}</span>
                    </h3>
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-white border border-[#E5E9ED] text-[#142B3B]">
                      {area.postcodes}
                    </span>
                  </div>
                  <p className="text-xs text-[#65727E] leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E5E9ED]/60 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">{area.category}</span>
                  <Link
                    to={`/quote?postcode=${encodeURIComponent(area.postcodes.split(",")[0].trim())}`}
                    className="font-bold text-[#43A66B] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Check Quote</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 bg-[#F7F9FA] rounded-2xl border border-dashed border-[#E5E9ED]">
              <p className="text-sm font-semibold text-[#142B3B]">
                No direct matches found for "{searchQuery}"
              </p>
              <p className="text-xs text-[#65727E] mt-1 max-w-md mx-auto">
                We frequently accommodate neighboring postcodes across Greater Manchester. Contact our team to confirm.
              </p>
              <a
                href={businessInfo.phoneHref}
                className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#43A66B] hover:underline"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {businessInfo.phoneFormatted}</span>
              </a>
            </div>
          )}
        </div>

        {/* Coverage Note Banner */}
        <div className="mt-10 p-4 rounded-xl bg-[#EDF7F1] border border-[#D2EEDE] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-[#43A66B] shrink-0" />
            <p className="text-xs sm:text-sm text-[#142B3B]">
              <strong>Coverage Verification:</strong> Service availability and parking arrangements are verified upon quote request.
            </p>
          </div>
          <Link
            to="/quote"
            className="shrink-0 px-4 py-2 rounded-lg bg-[#43A66B] text-white text-xs font-bold hover:bg-[#348655] transition-colors"
          >
            Request Postcode Quote
          </Link>
        </div>
      </div>
    </section>
  );
};
