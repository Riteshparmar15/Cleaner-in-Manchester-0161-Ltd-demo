import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, HelpCircle, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { generalFAQs, businessInfo } from "../data/businessInfo";
import { appleEase } from "../data/motionConfig";


interface FAQSectionProps {
  customTitle?: string;
  items?: { question: string; answer: string }[];
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  customTitle = "Frequently Asked Questions",
  items = generalFAQs
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#F7F9FA] border-t border-[#E5E9ED]" aria-labelledby="faq-section-title">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-[#EDF7F1] text-[#43A66B] text-xs font-extrabold uppercase tracking-wider mb-3">
            Got Questions?
          </span>
          <h2 id="faq-section-title" className="text-3xl sm:text-4xl font-extrabold text-[#142B3B] tracking-tight">
            {customTitle}
          </h2>
          <p className="mt-3 text-sm text-[#65727E] max-w-xl mx-auto">
            Clear, honest answers about our cleaning services, pricing approach, and scheduling across Manchester.
          </p>
        </div>

        {/* FAQ Accordion List with Apple-style smooth height transition */}
        <div className="space-y-3">
          {items.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-[#43A66B]/50 shadow-[0_8px_25px_rgba(20,43,59,0.04)]"
                    : "border-[#E5E9ED] hover:border-[#43A66B]/30"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left px-6 py-4.5 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#43A66B] rounded-2xl transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-[#142B3B] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#F7F9FA] text-[#142B3B] flex items-center justify-center shrink-0 transition-transform duration-300 ease-out ${
                      isOpen ? "rotate-180 bg-[#EDF7F1] text-[#43A66B]" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: {
                          height: { duration: 0.35, ease: appleEase },
                          opacity: { duration: 0.25, delay: 0.1 }
                        }
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: { duration: 0.25, ease: "easeInOut" },
                          opacity: { duration: 0.15 }
                        }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-1 text-sm text-[#65727E] leading-relaxed border-t border-[#F7F9FA]">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Unanswered Questions Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-[#E5E9ED] text-center max-w-xl mx-auto shadow-xs">
          <HelpCircle className="w-8 h-8 text-[#43A66B] mx-auto mb-2" />
          <h3 className="text-base font-bold text-[#142B3B]">
            Have a specific requirement or question?
          </h3>
          <p className="text-xs text-[#65727E] mt-1 mb-4">
            If your property needs custom attention, speak directly with our friendly Manchester team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={businessInfo.phoneHref}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#142B3B] hover:bg-[#1D3D52] text-white text-xs font-bold transition-all mac-btn"
            >
              <Phone className="w-3.5 h-3.5 text-[#43A66B]" />
              <span>Call {businessInfo.phoneFormatted}</span>
            </a>
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#43A66B] hover:bg-[#348655] text-white text-xs font-bold transition-all mac-btn"
            >
              <span>Submit a Quote Enquiry</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
