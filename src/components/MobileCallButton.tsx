import React from "react";
import { Phone } from "lucide-react";
import { businessInfo } from "../data/businessInfo";

export const MobileCallButton: React.FC = () => {
  return (
    <aside aria-label="Quick phone contact" className="sm:hidden fixed bottom-4 right-4 z-40">
      <a
        href={businessInfo.phoneHref}
        className="flex items-center gap-2.5 bg-slate-900 text-white px-4 py-3 rounded-full shadow-xl border border-teal-500/40 hover:bg-slate-800 active:scale-95 transition-all text-xs font-bold"
        aria-label={`Call Cleaner in Manchester on ${businessInfo.phoneFormatted}`}
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <Phone className="w-4 h-4 text-teal-400" />
        <span>Call {businessInfo.phoneFormatted}</span>
      </a>
    </aside>
  );
};
