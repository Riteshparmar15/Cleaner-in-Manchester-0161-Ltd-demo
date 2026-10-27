import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { businessInfo } from "../data/businessInfo";
import { servicesData } from "../data/servicesData";
import { appleEase } from "../data/motionConfig";


export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Verified Compact Announcement Bar with Mac Shimmer Effect */}
      {showAnnouncement && (
        <div className="bg-[#142B3B] text-white text-xs sm:text-sm py-2 px-4 border-b border-[#1B384D] relative">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
              <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-[#43A66B] animate-pulse"></span>
              <span className="font-medium text-slate-200">
                Manchester & Greater Manchester Cleaning Services
              </span>
              <span className="hidden md:inline text-slate-400">|</span>
              <span className="hidden md:inline text-slate-300">
                Taking new client quote enquiries
              </span>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <a
                href={businessInfo.phoneHref}
                className="hidden sm:inline-flex items-center gap-1.5 font-semibold text-[#43A66B] hover:text-white transition-colors"
                title="Call our Manchester cleaning team"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{businessInfo.phoneFormatted}</span>
              </a>
              <button
                onClick={() => setShowAnnouncement(false)}
                className="text-slate-400 hover:text-white p-1 transition-colors"
                aria-label="Dismiss notice"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Navigation - Mac Frosted Acrylic Glass */}
      <nav
        className={`w-full transition-all duration-400 ${
          isScrolled
            ? "mac-glass shadow-[0_10px_30px_-10px_rgba(20,43,59,0.06)] py-3"
            : "bg-white/95 backdrop-blur-md border-b border-[#E5E9ED]/70 py-4"
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <Link
              to="/"
              onClick={closeMenus}
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#43A66B] rounded-xl p-1 transition-transform duration-300 hover:scale-[1.02]"
              aria-label="Cleaner in Manchester (0161) Ltd - Return to homepage"
            >
              <div className="w-10 h-10 rounded-xl bg-[#142B3B] text-white flex items-center justify-center font-bold text-lg shadow-sm transition-all duration-300 group-hover:bg-[#1B384D] group-hover:shadow-md">
                <span className="text-[#43A66B] font-extrabold mr-0.5">01</span>
                <span>61</span>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-[#142B3B] text-base sm:text-lg leading-tight tracking-tight group-hover:text-[#43A66B] transition-colors duration-200">
                  Cleaner in Manchester
                </span>
                <span className="text-[11px] font-semibold text-[#65727E] uppercase tracking-wider">
                  (0161) Ltd &bull; Manchester, UK
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              <Link
                to="/"
                className={`text-sm font-semibold transition-all duration-200 relative py-1 ${
                  isActive("/")
                    ? "text-[#43A66B] font-bold"
                    : "text-[#202A33] hover:text-[#43A66B]"
                }`}
              >
                <span>Home</span>
                {isActive("/") && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#43A66B] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <Link
                  to="/services"
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 py-1 ${
                    isActive("/services")
                      ? "text-[#43A66B] font-bold"
                      : "text-[#202A33] hover:text-[#43A66B]"
                  }`}
                  aria-expanded={servicesDropdownOpen}
                  aria-haspopup="true"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ease-out ${
                      servicesDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </Link>

                {/* Dropdown Menu with Apple smooth fade and spring */}
                <AnimatePresence>
                  {servicesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.25, ease: appleEase }}
                      className="absolute top-full -left-4 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_rgba(20,43,59,0.12)] border border-[#E5E9ED] py-2.5 z-50 overflow-hidden"
                    >
                      <div className="px-4 py-2 border-b border-[#E5E9ED]/70 mb-1">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-[#65727E]">
                          Tailored Cleaning Solutions
                        </p>
                      </div>
                      <div className="p-1 space-y-0.5">
                        {servicesData.map((service) => (
                          <Link
                            key={service.slug}
                            to={`/services/${service.slug}`}
                            onClick={closeMenus}
                            className="flex flex-col px-3.5 py-2 hover:bg-[#F7F9FA] transition-all rounded-xl group/item"
                          >
                            <span className="text-sm font-semibold text-[#202A33] group-hover/item:text-[#43A66B] transition-colors">
                              {service.title}
                            </span>
                            <span className="text-xs text-[#65727E] line-clamp-1">
                              {service.shortTagline}
                            </span>
                          </Link>
                        ))}
                      </div>
                      <div className="px-4 pt-2.5 mt-1 border-t border-[#E5E9ED]/70">
                        <Link
                          to="/services"
                          onClick={closeMenus}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#43A66B] hover:underline"
                        >
                          <span>View All Services</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/about"
                className={`text-sm font-semibold transition-all duration-200 relative py-1 ${
                  isActive("/about")
                    ? "text-[#43A66B] font-bold"
                    : "text-[#202A33] hover:text-[#43A66B]"
                }`}
              >
                <span>About Us</span>
                {isActive("/about") && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#43A66B] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>

              <Link
                to="/contact"
                className={`text-sm font-semibold transition-all duration-200 relative py-1 ${
                  isActive("/contact")
                    ? "text-[#43A66B] font-bold"
                    : "text-[#202A33] hover:text-[#43A66B]"
                }`}
              >
                <span>Contact</span>
                {isActive("/contact") && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#43A66B] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </div>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href={businessInfo.phoneHref}
                className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-[#142B3B] hover:text-[#43A66B] transition-colors py-2 px-3 rounded-xl hover:bg-[#F7F9FA]"
                title={`Call ${businessInfo.phoneFormatted}`}
              >
                <Phone className="w-4 h-4 text-[#43A66B]" />
                <span>{businessInfo.phoneFormatted}</span>
              </a>

              <Link
                to="/quote"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#43A66B] hover:bg-[#348655] text-white text-sm font-bold shadow-sm mac-btn focus:outline-none focus:ring-2 focus:ring-[#43A66B] focus:ring-offset-2"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Hamburger */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href={businessInfo.phoneHref}
                className="p-2.5 rounded-xl bg-[#F7F9FA] text-[#142B3B] hover:text-[#43A66B] transition-colors"
                aria-label={`Call ${businessInfo.phoneFormatted}`}
              >
                <Phone className="w-5 h-5 text-[#43A66B]" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl text-[#202A33] hover:bg-[#F7F9FA] focus:outline-none focus:ring-2 focus:ring-[#43A66B] transition-colors"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer with Smooth Spring Animation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: appleEase }}
              className="lg:hidden border-t border-[#E5E9ED] bg-white/95 backdrop-blur-xl px-4 pt-4 pb-6 shadow-xl overflow-hidden"
            >
              <div className="space-y-1">
                <Link
                  to="/"
                  onClick={closeMenus}
                  className={`block px-3.5 py-2.5 rounded-xl text-base font-semibold transition-colors ${
                    isActive("/")
                      ? "bg-[#EDF7F1] text-[#43A66B]"
                      : "text-[#202A33] hover:bg-[#F7F9FA]"
                  }`}
                >
                  Home
                </Link>

                <div className="pt-2 pb-1 px-3.5">
                  <span className="text-[11px] font-bold text-[#65727E] uppercase tracking-wider">
                    Our Services
                  </span>
                </div>
                <div className="pl-2 space-y-1">
                  {servicesData.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      onClick={closeMenus}
                      className={`block px-3.5 py-2 rounded-xl text-sm font-medium transition-colors ${
                        location.pathname === `/services/${service.slug}`
                          ? "bg-[#EDF7F1] text-[#43A66B] font-bold"
                          : "text-[#202A33] hover:bg-[#F7F9FA]"
                      }`}
                    >
                      {service.title}
                    </Link>
                  ))}
                  <Link
                    to="/services"
                    onClick={closeMenus}
                    className="block px-3.5 py-2 text-xs font-bold text-[#43A66B] hover:underline"
                  >
                    View All Services Overview &rarr;
                  </Link>
                </div>

                <Link
                  to="/about"
                  onClick={closeMenus}
                  className={`block px-3.5 py-2.5 rounded-xl text-base font-semibold transition-colors ${
                    isActive("/about")
                      ? "bg-[#EDF7F1] text-[#43A66B]"
                      : "text-[#202A33] hover:bg-[#F7F9FA]"
                  }`}
                >
                  About Us
                </Link>

                <Link
                  to="/contact"
                  onClick={closeMenus}
                  className={`block px-3.5 py-2.5 rounded-xl text-base font-semibold transition-colors ${
                    isActive("/contact")
                      ? "bg-[#EDF7F1] text-[#43A66B]"
                      : "text-[#202A33] hover:bg-[#F7F9FA]"
                  }`}
                >
                  Contact
                </Link>
              </div>

              <div className="pt-4 border-t border-[#E5E9ED] space-y-3">
                <a
                  href={businessInfo.phoneHref}
                  className="flex items-center justify-center gap-2.5 w-full py-3 rounded-xl border border-[#E5E9ED] font-bold text-[#142B3B] bg-[#F7F9FA] mac-btn"
                >
                  <Phone className="w-4 h-4 text-[#43A66B]" />
                  <span>Call {businessInfo.phoneFormatted}</span>
                </a>

                <Link
                  to="/quote"
                  onClick={closeMenus}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#43A66B] text-white font-bold text-center shadow-sm mac-btn"
                >
                  <span>Request a Free Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
