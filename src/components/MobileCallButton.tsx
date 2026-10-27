import React from "react";
import { Phone } from "lucide-react";
import { businessInfo } from "../data/businessInfo";

export const MobileCallButton: React.FC = () => {
  return (
    <aside aria-label="Quick phone contact" className="sm:hidden fixed bottom-4 right-4 z-40">
      <a
        href={businessInfo.phoneHref}
        className="flex items-center gap-2.5 bg-[#142B3B] text-white px-4 py-3 rounded-full shadow-lg border border-[#43A66B]/50 hover:bg-[#1D3D52] active:scale-95 transition-all text-xs font-bold"
        aria-label={`Call Cleaner in Manchester on ${businessInfo.phoneFormatted}`}
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#43A66B] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#43A66B]"></span>
        </span>
        <Phone className="w-4 h-4 text-[#43A66B]" />
        <span>Call {businessInfo.phoneFormatted}</span>
      </a>
    </aside>
  );
};
