import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MobileCallButton } from "./components/MobileCallButton";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { QuotePage } from "./pages/QuotePage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { appleEase } from "./data/motionConfig";


// Scroll to top on navigation
const ScrollToTop: React.FC = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }, [pathname, search]);

  return null;
};

// Animated route transitions with Apple smooth easing
const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.32, ease: appleEase }}
        className="flex-1 flex flex-col"
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/quote" element={<QuotePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          {/* Catch-all redirect to Home */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#F7F9FA] text-[#202A33] font-sans antialiased selection:bg-[#43A66B]/20 selection:text-[#142B3B]">
        {/* Persistent Premium Mac-style Frosted Header */}
        <Header />

        {/* Dynamic Route Pages with Apple-style cross-fade transitions */}
        <main className="flex-1 flex flex-col" id="main-content">
          <AnimatedRoutes />
        </main>

        {/* Persistent Verified Footer */}
        <Footer />

        {/* Unobtrusive Mobile Floating Call CTA */}
        <MobileCallButton />
      </div>
    </BrowserRouter>
  );
};

export default App;
