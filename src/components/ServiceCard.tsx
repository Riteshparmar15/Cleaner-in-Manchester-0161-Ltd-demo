import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import type { ServiceDetail } from "../data/servicesData";

interface ServiceCardProps {
  service: ServiceDetail;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <article className="mac-card flex flex-col bg-white rounded-2xl border border-[#E5E9ED] overflow-hidden shadow-xs group">
      {/* Image Container with Apple-style smooth zoom */}
      <div className="relative h-56 w-full overflow-hidden bg-slate-100">
        <img
          src={service.image}
          alt={`Professional ${service.title} in Manchester`}
          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-106"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#142B3B]/60 via-transparent to-transparent"></div>
        <div className="absolute bottom-3 left-4 right-4">
          <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-[#142B3B] uppercase tracking-wider shadow-xs border border-white/40">
            {service.targetAudience[0] || "Manchester"}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-bold text-[#142B3B] group-hover:text-[#43A66B] transition-colors duration-200 mb-2">
          {service.title}
        </h3>

        <p className="text-sm text-[#65727E] leading-relaxed mb-5">
          {service.shortTagline}
        </p>

        {/* Feature Highlights */}
        <div className="space-y-2.5 mb-6 flex-1">
          {service.highlights.slice(0, 2).map((highlight, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs text-[#202A33]">
              <div className="w-4 h-4 rounded-full bg-[#EDF7F1] text-[#43A66B] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-2.5 h-2.5" />
              </div>
              <span className="leading-snug">{highlight}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-[#E5E9ED]/70 flex items-center justify-between gap-3">
          <Link
            to={`/services/${service.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#142B3B] hover:text-[#43A66B] transition-colors py-2 group/link"
          >
            <span>Learn More</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
          </Link>

          <Link
            to={`/quote?service=${encodeURIComponent(service.title)}`}
            className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[#43A66B] hover:bg-[#348655] text-white text-xs font-bold shadow-xs mac-btn"
          >
            <span>Get Quote</span>
          </Link>
        </div>
      </div>
    </article>
  );
};
