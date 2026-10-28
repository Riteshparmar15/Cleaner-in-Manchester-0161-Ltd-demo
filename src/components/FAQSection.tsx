import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { generalFAQs } from "../data/businessInfo";
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
    <section className="py-20 bg-slate-50 border-t border-slate-200" aria-labelledby="faq-section-title">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-[#14355F]/10 text-[#14355F] text-xs font-black uppercase tracking-wider mb-3">
            Got Questions?
          </span>
          <h2 id="faq-section-title" className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {customTitle}
          </h2>
          <p className="mt-3 text-sm text-slate-600 max-w-xl mx-auto">
            Clear, honest answers about our cleaning services, pricing approach, and scheduling across Manchester.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {items.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-[#14355F] shadow-md shadow-slate-900/5 ring-1 ring-[#14355F]/20"
                    : "border-slate-200 hover:border-[#14355F]/30"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left px-6 py-4.5 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#14355F] rounded-2xl transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 transition-transform duration-300 ease-out ${
                      isOpen ? "rotate-180 bg-[#14355F]/10 text-[#14355F]" : ""
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
                      <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
