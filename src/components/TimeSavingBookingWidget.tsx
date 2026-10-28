import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Clock, ShieldCheck, ArrowRight, Check, Zap, Phone } from "lucide-react";
import { businessInfo } from "../data/businessInfo";
import { calculateCleaningEstimate } from "../utils/pricingCalculator";

export const TimeSavingBookingWidget: React.FC = () => {
  const navigate = useNavigate();

  // Read existing calculator state if previously saved
  const getStoredValue = <T,>(key: string, fallback: T): T => {
    try {
      const saved = sessionStorage.getItem("cleaner_manchester_calculator_booking") ||
                    localStorage.getItem("cleaner_manchester_calculator_booking");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed[key] !== undefined && parsed[key] !== null) {
          return parsed[key] as T;
        }
      }
    } catch {}
    return fallback;
  };

  const [service, setService] = useState<string>(() => getStoredValue("service", "Regular Home Cleaning"));
  const [bedrooms, setBedrooms] = useState<number>(() => Number(getStoredValue("bedrooms", 2)));
  const [bathrooms, setBathrooms] = useState<number>(() => Number(getStoredValue("bathrooms", 1)));
  const [frequency, setFrequency] = useState<"weekly" | "fortnightly" | "one-off">(() =>
    getStoredValue<"weekly" | "fortnightly" | "one-off">("frequency", "fortnightly")
  );
  const [postcode, setPostcode] = useState<string>(() => getStoredValue("postcode", ""));
  const [phone, setPhone] = useState<string>(() => getStoredValue("telephone", ""));
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  // Category identification
  const isOffice = service === "Office Cleaning";
  const isTenancy = service === "End-of-Tenancy Cleaning";
  const isDeep = service === "Deep Cleaning";
  const isDomestic = service === "Regular Home Cleaning";

  const handleServiceSelect = (selectedService: string) => {
    setService(selectedService);
    // Category-wise frequency defaulting
    if (selectedService === "End-of-Tenancy Cleaning" || selectedService === "Deep Cleaning") {
      setFrequency("one-off");
    } else if (selectedService === "Office Cleaning") {
      if (frequency === "one-off") setFrequency("weekly");
    } else if (selectedService === "Regular Home Cleaning") {
      if (frequency === "one-off") setFrequency("fortnightly");
    }
  };

  // Dynamic pricing & time savings calculation
  const { price, hours } = calculateCleaningEstimate(service, bedrooms, bathrooms, frequency);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Store complete booking data into sessionStorage AND localStorage
    const bookingPayload = {
      service,
      bedrooms,
      bathrooms,
      frequency,
      postcode: postcode.trim(),
      telephone: phone.trim(),
      price,
      hours,
      timestamp: Date.now()
    };

    try {
      sessionStorage.setItem("cleaner_manchester_calculator_booking", JSON.stringify(bookingPayload));
      localStorage.setItem("cleaner_manchester_calculator_booking", JSON.stringify(bookingPayload));
    } catch (err) {
      console.warn("Storage write error:", err);
    }

    // 2. Build URL search parameters for direct linkability
    const params = new URLSearchParams();
    params.set("service", service);
    params.set("bedrooms", String(bedrooms));
    params.set("bathrooms", String(bathrooms));
    params.set("frequency", frequency);
    params.set("price", String(price));
    params.set("hours", String(hours));
    if (postcode.trim()) params.set("postcode", postcode.trim());
    if (phone.trim()) params.set("telephone", phone.trim());

    // 3. Smooth transition to Request Your Cleaning Quote page
    setIsSuccess(true);
    setTimeout(() => {
      navigate(`/quote?${params.toString()}`);
    }, 350);
  };

  return (
    <div id="time-saving-calculator" className="bg-white rounded-3xl border border-slate-200 shadow-[0_15px_40px_rgba(20,53,95,0.08)] p-6 sm:p-8 relative overflow-hidden">
      {/* Top Value Banner */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-[#14355F]/10 text-[#14355F] font-bold">
            <Zap className="w-4 h-4 fill-[#14355F] text-[#14355F]" />
          </span>
          <div>
            <span className="text-xs font-bold text-[#0D9488] uppercase tracking-wider block">
              Time-Saving Calculator
            </span>
            <span className="text-sm font-extrabold text-slate-900">
              Get Instant Estimate & Book in 60s
            </span>
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
          <Clock className="w-3.5 h-3.5" />
          <span>Save ~{hours} Hours / Week</span>
        </div>
      </div>

      <form onSubmit={handleQuickSubmit} className="mt-6 space-y-6">
        {/* 1. Category-Wise Service Selector */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              1. Select Cleaning Service
            </label>
            {isTenancy && (
              <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                100% Deposit Pass Guaranteed
              </span>
            )}
            {isOffice && (
              <span className="text-[10px] font-bold text-[#14355F] bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
                Commercial / Workspace
              </span>
            )}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { id: "Regular Home Cleaning", label: "Regular Domestic" },
              { id: "Deep Cleaning", label: "Deep Clean" },
              { id: "End-of-Tenancy Cleaning", label: "End of Tenancy" },
              { id: "Office Cleaning", label: "Office Clean" }
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleServiceSelect(item.id)}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all text-center border ${
                  service === item.id
                    ? "bg-[#14355F] text-white border-[#14355F] shadow-sm"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2 & 3. Category-Wise Rooms & Bathrooms / Restrooms */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                {isOffice ? "2. Office Rooms / Workspaces" : "2. Bedrooms"}
              </label>
              {isOffice && (
                <span className="text-[10px] font-semibold text-slate-500">
                  By desk count
                </span>
              )}
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              {[
                { num: 1, label: "1", sub: isOffice ? "1-5 Desks" : "" },
                { num: 2, label: "2", sub: isOffice ? "6-12 Desks" : "" },
                { num: 3, label: "3", sub: isOffice ? "13-20 Desks" : "" },
                { num: 4, label: "4", sub: isOffice ? "21-35 Desks" : "" },
                { num: 5, label: "5+", sub: isOffice ? "Whole Floor" : "" }
              ].map((item) => (
                <button
                  key={item.num}
                  type="button"
                  onClick={() => setBedrooms(item.num)}
                  className={`flex-1 py-2 px-1 rounded-xl text-xs font-bold border transition-all flex flex-col items-center justify-center ${
                    bedrooms === item.num
                      ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.sub && (
                    <span
                      className={`text-[8.5px] font-normal leading-tight mt-0.5 truncate max-w-full ${
                        bedrooms === item.num ? "text-slate-300" : "text-slate-500"
                      }`}
                    >
                      {item.sub}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                {isOffice ? "3. Restrooms / Washrooms" : "3. Bathrooms"}
              </label>
            </div>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setBathrooms(num)}
                  className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all ${
                    bathrooms === num
                      ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {num}{num === 4 ? "+" : ""}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Category-Wise Frequency & Savings */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              4. Frequency & Savings
            </label>
            {isTenancy && (
              <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-md">
                Recommended: One-Off Move Out
              </span>
            )}
            {isDeep && (
              <span className="text-[10px] text-[#14355F] font-bold bg-slate-100 px-2 py-0.5 rounded-md">
                Recommended: One-Off Reset
              </span>
            )}
          </div>
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => setFrequency("weekly")}
              className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all flex flex-col items-center ${
                frequency === "weekly"
                  ? "bg-slate-50 border-[#14355F] text-[#14355F] ring-1 ring-[#14355F] shadow-xs"
                  : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              <span>Weekly</span>
              <span className="text-[10px] text-emerald-600 font-extrabold">Save 15%</span>
            </button>
            <button
              type="button"
              onClick={() => setFrequency("fortnightly")}
              className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all flex flex-col items-center ${
                frequency === "fortnightly"
                  ? "bg-slate-50 border-[#14355F] text-[#14355F] ring-1 ring-[#14355F] shadow-xs"
                  : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              <span>Fortnightly</span>
              <span className="text-[10px] text-emerald-600 font-extrabold">Save 10%</span>
            </button>
            <button
              type="button"
              onClick={() => setFrequency("one-off")}
              className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all flex flex-col items-center ${
                frequency === "one-off"
                  ? "bg-slate-50 border-[#14355F] text-[#14355F] ring-1 ring-[#14355F] shadow-xs"
                  : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              <span>One-Off</span>
              <span className="text-[10px] text-slate-500 font-medium">
                {isTenancy ? "Move-Out" : isDeep ? "Deep Clean" : "Standard"}
              </span>
            </button>
          </div>
        </div>

        {/* Instant Pricing Display Card - Category Tailored */}
        <div className="p-5 rounded-2xl bg-[#14355F] text-white shadow-md flex items-center justify-between border border-slate-800">
          <div>
            <span className="text-[11px] font-bold text-teal-200 uppercase tracking-wider block">
              Estimated Price
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-black tracking-tight">£{price}</span>
              <span className="text-xs text-teal-200">
                {frequency === "one-off"
                  ? isTenancy
                    ? "/ move-out clean"
                    : isDeep
                    ? "/ deep clean"
                    : "/ clean"
                  : "/ visit"}
              </span>
            </div>
            <p className="text-[11px] text-slate-300 mt-0.5">
              {isDomestic && "Eco-supplies & DBS-checked domestic cleaner included"}
              {isDeep && "Limescale descaling, grout & grease scrub included"}
              {isTenancy && "Inventory check-out standard & inside cupboards included"}
              {isOffice && "Workstations, breakout kitchen & washrooms included"}
            </p>
          </div>

          <div className="text-right">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold text-white border border-white/15">
              Save ~{hours} hrs {isOffice ? "staff time" : "free time"}
            </span>
          </div>
        </div>

        {/* Quick Postcode + Phone & 1-Click Action */}
        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <input
                type="text"
                placeholder="Manchester Postcode (e.g. M20)"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                className="w-full px-3.5 py-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#14355F]"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone (e.g. 07... or 0161)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3.5 py-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#14355F]"
              />
            </div>
          </div>

          <button
            type="submit"
            aria-label="Book professional cleaning service in Manchester in 60 seconds"
            title="Book cleaning in Manchester"
            className="w-full py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm sm:text-base shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            {isSuccess ? (
              <span className="flex items-center gap-2">
                <Check className="w-5 h-5 text-white" />
                <span>Saving estimate & opening quote...</span>
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <span>Book Cleaning in Manchester</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            )}
          </button>
        </div>

        {/* Micro Trust Strip */}
        <div className="pt-2 flex flex-wrap items-center justify-between text-[11px] text-slate-500 border-t border-slate-100 gap-2">
          <span className="flex items-center gap-1">
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            No advance contract
          </span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            £2M Insured & DBS Vetted
          </span>
          <a
            href={businessInfo.phoneHref}
            className="text-[#14355F] font-bold hover:underline flex items-center gap-1"
          >
            <Phone className="w-3 h-3 text-[#14355F]" />
            0161 710 4789
          </a>
        </div>
      </form>
    </div>
  );
};
