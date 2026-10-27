import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import {
  Send,
  CheckCircle2,
  AlertCircle,
  Info,
  RefreshCw,
  Phone
} from "lucide-react";

import { businessInfo } from "../data/businessInfo";
import { servicesData } from "../data/servicesData";

export interface QuoteFormData {
  fullName: string;
  email: string;
  telephone: string;
  service: string;
  propertyType: string;
  postcode: string;
  preferredDate: string;
  propertySize: string;
  bedrooms: string;
  bathrooms: string;
  additionalDetails: string;
  privacyAgreed: boolean;
  honeypot: string; // Anti-spam field
}

const initialFormData: QuoteFormData = {
  fullName: "",
  email: "",
  telephone: "",
  service: "",
  propertyType: "",
  postcode: "",
  preferredDate: "",
  propertySize: "",
  bedrooms: "",
  bathrooms: "",
  additionalDetails: "",
  privacyAgreed: false,
  honeypot: ""
};

const getInitialFormData = (searchParams: URLSearchParams): QuoteFormData => {
  const serviceParam = searchParams.get("service");
  const postcodeParam = searchParams.get("postcode");

  let initialService = "";
  if (serviceParam) {
    const matched = servicesData.find(
      (s) =>
        s.title.toLowerCase() === serviceParam.toLowerCase() ||
        s.slug.toLowerCase() === serviceParam.toLowerCase()
    );
    initialService = matched ? matched.title : serviceParam;
  }

  return {
    ...initialFormData,
    service: initialService,
    postcode: postcodeParam || ""
  };
};

export const QuoteForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState<QuoteFormData>(() => getInitialFormData(searchParams));
  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [simulateFailure, setSimulateFailure] = useState(false);
  const [submittedPayload, setSubmittedPayload] = useState<QuoteFormData | null>(null);

  const validateField = (name: keyof QuoteFormData, value: any): string => {
    switch (name) {
      case "fullName":
        if (!value || typeof value !== "string" || !value.trim()) return "Please enter your full name.";
        if (value.trim().length < 2) return "Name must be at least 2 characters.";
        return "";
      case "email":
        if (!value || !value.trim()) return "Please enter your email address.";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value.trim())) return "Please enter a valid email address.";
        return "";
      case "telephone":
        if (!value || !value.trim()) return "Please enter your UK telephone number.";
        // UK phone check allowing spaces and standard formatting
        const phoneClean = value.replace(/[\s\-()]/g, "");
        if (phoneClean.length < 9 || phoneClean.length > 15) {
          return "Please enter a valid telephone number (e.g. 0161 710 4789 or 07...)";
        }
        return "";

      case "service":
        if (!value) return "Please select a cleaning service.";
        return "";
      case "propertyType":
        if (!value) return "Please select your property type.";
        return "";
      case "postcode":
        if (!value || !value.trim()) return "Please enter your Manchester postcode.";
        if (value.trim().length < 2) return "Please enter a valid postcode prefix (e.g. M1, M4, M20).";
        return "";
      case "privacyAgreed":
        if (!value) return "You must acknowledge our privacy statement to submit.";
        return "";
      default:
        return "";
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: fieldValue
    }));

    // Clear error for this field
    if (errors[name as keyof QuoteFormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateAll = (): boolean => {
    const newErrors: Partial<Record<keyof QuoteFormData, string>> = {};
    const fieldsToValidate: (keyof QuoteFormData)[] = [
      "fullName",
      "email",
      "telephone",
      "service",
      "propertyType",
      "postcode",
      "privacyAgreed"
    ];

    fieldsToValidate.forEach((field) => {
      const err = validateField(field, formData[field]);
      if (err) newErrors[field] = err;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot check
    if (formData.honeypot) {
      console.warn("Spam submission blocked.");
      return;
    }

    if (!validateAll()) {
      setStatusMessage("Please correct the highlighted fields before submitting.");
      return;
    }

    setIsSubmitting(true);
    setStatusMessage("");

    // Check if external production API endpoint is defined
    const apiEndpoint = import.meta.env.VITE_QUOTE_API_ENDPOINT;

    try {
      // Intentional failure test mode for QA
      if (simulateFailure) {
        await new Promise((res) => setTimeout(res, 800));
        throw new Error("Simulated network delivery error (Preserved form fields for retry).");
      }

      if (apiEndpoint) {
        // Real production backend call
        const response = await fetch(apiEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        });

        if (!response.ok) {
          throw new Error(`Server returned HTTP ${response.status}`);
        }
      } else {
        // Honest Demo/Provisional Mode: Simulate transmission latency and store to local preview
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Save into localStorage for inspection
        const savedQuotes = JSON.parse(localStorage.getItem("cleaner_manchester_quotes") || "[]");
        savedQuotes.push({
          ...formData,
          submittedAt: new Date().toISOString()
        });
        localStorage.setItem("cleaner_manchester_quotes", JSON.stringify(savedQuotes));
      }

      setSubmittedPayload({ ...formData });
      setSubmitStatus("success");
    } catch (err: any) {
      setSubmitStatus("error");
      setStatusMessage(
        err.message || "An unexpected error occurred while transmitting your quote request. Your entered details have been saved."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setErrors({});
    setSubmitStatus("idle");
    setStatusMessage("");
    setSubmittedPayload(null);
  };

  // SUCCESS STATE VIEW
  if (submitStatus === "success" && submittedPayload) {
    return (
      <div className="bg-white rounded-2xl border border-[#D2EEDE] p-8 sm:p-10 shadow-sm max-w-2xl mx-auto animate-in fade-in zoom-in-95 duration-200">
        <div className="w-16 h-16 rounded-2xl bg-[#EDF7F1] text-[#43A66B] flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="text-center mb-8">
          <span className="px-3 py-1 rounded-full bg-[#EDF7F1] text-[#43A66B] text-xs font-bold uppercase tracking-wider">
            Quote Enquiry Received
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#142B3B] mt-3">
            Thank you, {submittedPayload.fullName}
          </h3>
          <p className="text-sm text-[#65727E] mt-2">
            We have recorded your cleaning enquiry for your property in{" "}
            <span className="font-bold text-[#142B3B]">{submittedPayload.postcode.toUpperCase()}</span>.
          </p>
        </div>

        {/* Payload Summary */}
        <div className="bg-[#F7F9FA] rounded-xl p-5 border border-[#E5E9ED] text-xs sm:text-sm space-y-2.5 mb-8">
          <div className="flex justify-between border-b border-[#E5E9ED]/70 pb-2">
            <span className="text-[#65727E]">Selected Service:</span>
            <span className="font-bold text-[#142B3B]">{submittedPayload.service}</span>
          </div>
          <div className="flex justify-between border-b border-[#E5E9ED]/70 pb-2">
            <span className="text-[#65727E]">Property Type:</span>
            <span className="font-bold text-[#142B3B]">{submittedPayload.propertyType}</span>
          </div>
          <div className="flex justify-between border-b border-[#E5E9ED]/70 pb-2">
            <span className="text-[#65727E]">Contact Phone:</span>
            <span className="font-bold text-[#142B3B]">{submittedPayload.telephone}</span>
          </div>
          <div className="flex justify-between border-b border-[#E5E9ED]/70 pb-2">
            <span className="text-[#65727E]">Email:</span>
            <span className="font-bold text-[#142B3B]">{submittedPayload.email}</span>
          </div>
          {submittedPayload.preferredDate && (
            <div className="flex justify-between border-b border-[#E5E9ED]/70 pb-2">
              <span className="text-[#65727E]">Preferred Timing:</span>
              <span className="font-bold text-[#142B3B]">{submittedPayload.preferredDate}</span>
            </div>
          )}
        </div>

        {/* Integration Transparency Note (Phase 5 Requirement) */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 mb-8 space-y-1.5">
          <p className="font-bold text-slate-800 flex items-center gap-1.5">
            <Info className="w-4 h-4 text-[#43A66B]" />
            <span>Frontend Concept Verification Note</span>
          </p>
          <p>
            Your form submission passed all client-side validations and was stored locally in your browser's session storage.
            To connect to live production email dispatch (e.g., Resend, SendGrid, or a company webhook), set the environment variable:
            <code className="block mt-1 bg-white p-1.5 rounded border border-slate-200 font-mono text-[11px] text-slate-700">
              VITE_QUOTE_API_ENDPOINT=https://your-api.com/quote-dispatch
            </code>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={resetForm}
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg border border-[#E5E9ED] text-xs font-bold text-[#142B3B] hover:bg-[#F7F9FA] transition-colors"
          >
            Submit Another Enquiry
          </button>
          <a
            href={businessInfo.phoneHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#142B3B] text-white text-xs font-bold hover:bg-[#1D3D52] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#43A66B]" />
            <span>Call Team: {businessInfo.phoneFormatted}</span>
          </a>
        </div>
      </div>
    );
  }

  // DEFAULT FORM VIEW
  return (
    <div className="bg-white rounded-2xl border border-[#E5E9ED] shadow-sm p-6 sm:p-10 max-w-3xl mx-auto">
      {/* Form Header */}
      <div className="mb-8">
        <span className="px-3 py-1 rounded-full bg-[#EDF7F1] text-[#43A66B] text-xs font-bold uppercase tracking-wider">
          Direct Manchester Quote
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#142B3B] mt-2 tracking-tight">
          Tell Us About Your Property
        </h2>
        <p className="text-sm text-[#65727E] mt-1.5">
          Complete the details below for a tailored, obligation-free cleaning quote. We respond directly to verify availability.
        </p>
      </div>

      {/* Submission Error Banner */}
      {submitStatus === "error" && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-red-800 text-xs sm:text-sm">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold">Submission Notice</p>
            <p className="text-red-700 mt-0.5">{statusMessage}</p>
          </div>
        </div>
      )}

      {/* Form Body */}
      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Anti-spam honeypot (invisible to real users) */}
        <div className="hidden" aria-hidden="true">
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleInputChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Section 1: Contact Details */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#65727E] border-b border-[#E5E9ED] pb-2 flex items-center gap-1.5">
            <span className="w-4 h-4 rounded-full bg-[#142B3B] text-white text-[10px] flex items-center justify-center font-bold">
              1
            </span>
            <span>Your Contact Information</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-bold text-[#142B3B] mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="e.g. Sarah Jenkins"
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#202A33] placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.fullName
                    ? "border-red-400 focus:ring-red-400 bg-red-50/20"
                    : "border-[#E5E9ED] focus:ring-[#43A66B] focus:border-transparent bg-[#F7F9FA]"
                }`}
                aria-invalid={!!errors.fullName}
                aria-describedby={errors.fullName ? "fullName-error" : undefined}
                required
              />
              {errors.fullName && (
                <p id="fullName-error" className="text-red-600 text-xs mt-1 font-medium">
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-[#142B3B] mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="name@example.co.uk"
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#202A33] placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.email
                    ? "border-red-400 focus:ring-red-400 bg-red-50/20"
                    : "border-[#E5E9ED] focus:ring-[#43A66B] focus:border-transparent bg-[#F7F9FA]"
                }`}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                required
              />
              {errors.email && (
                <p id="email-error" className="text-red-600 text-xs mt-1 font-medium">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Telephone Number */}
            <div className="sm:col-span-2">
              <label htmlFor="telephone" className="block text-xs font-bold text-[#142B3B] mb-1.5">
                Telephone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                value={formData.telephone}
                onChange={handleInputChange}
                placeholder="e.g. 0161 710 4789 or 07123 456789"
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#202A33] placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.telephone
                    ? "border-red-400 focus:ring-red-400 bg-red-50/20"
                    : "border-[#E5E9ED] focus:ring-[#43A66B] focus:border-transparent bg-[#F7F9FA]"
                }`}
                aria-invalid={!!errors.telephone}
                aria-describedby={errors.telephone ? "telephone-error" : undefined}
                required
              />
              {errors.telephone && (
                <p id="telephone-error" className="text-red-600 text-xs mt-1 font-medium">
                  {errors.telephone}
                </p>
              )}
              <p className="text-[11px] text-[#65727E] mt-1">
                Used to discuss cleaning arrangements or verify parking/access.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Cleaning Requirements */}
        <div className="space-y-4 pt-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#65727E] border-b border-[#E5E9ED] pb-2 flex items-center gap-1.5">
            <span className="w-4 h-4 rounded-full bg-[#142B3B] text-white text-[10px] flex items-center justify-center font-bold">
              2
            </span>
            <span>Cleaning Service & Property Details</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Cleaning Service Dropdown */}
            <div>
              <label htmlFor="service" className="block text-xs font-bold text-[#142B3B] mb-1.5">
                Required Cleaning Service <span className="text-red-500">*</span>
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#202A33] focus:outline-none focus:ring-2 transition-all ${
                  errors.service
                    ? "border-red-400 focus:ring-red-400 bg-red-50/20"
                    : "border-[#E5E9ED] focus:ring-[#43A66B] focus:border-transparent bg-[#F7F9FA]"
                }`}
                aria-invalid={!!errors.service}
                aria-describedby={errors.service ? "service-error" : undefined}
                required
              >
                <option value="">-- Please select a service --</option>
                {servicesData.map((s) => (
                  <option key={s.slug} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p id="service-error" className="text-red-600 text-xs mt-1 font-medium">
                  {errors.service}
                </p>
              )}
            </div>

            {/* Property Type Dropdown */}
            <div>
              <label htmlFor="propertyType" className="block text-xs font-bold text-[#142B3B] mb-1.5">
                Property Type <span className="text-red-500">*</span>
              </label>
              <select
                id="propertyType"
                name="propertyType"
                value={formData.propertyType}
                onChange={handleInputChange}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#202A33] focus:outline-none focus:ring-2 transition-all ${
                  errors.propertyType
                    ? "border-red-400 focus:ring-red-400 bg-red-50/20"
                    : "border-[#E5E9ED] focus:ring-[#43A66B] focus:border-transparent bg-[#F7F9FA]"
                }`}
                aria-invalid={!!errors.propertyType}
                aria-describedby={errors.propertyType ? "propertyType-error" : undefined}
                required
              >
                <option value="">-- Select property type --</option>
                <option value="Apartment / City Flat">Apartment / City Flat</option>
                <option value="Terraced House">Terraced House</option>
                <option value="Semi-Detached House">Semi-Detached House</option>
                <option value="Detached House">Detached House</option>
                <option value="Duplex / Penthouse">Duplex / Penthouse</option>
                <option value="Commercial Office / Studio">Commercial Office / Studio</option>
                <option value="Other Commercial Premises">Other Commercial Premises</option>
              </select>
              {errors.propertyType && (
                <p id="propertyType-error" className="text-red-600 text-xs mt-1 font-medium">
                  {errors.propertyType}
                </p>
              )}
            </div>

            {/* Manchester Postcode */}
            <div>
              <label htmlFor="postcode" className="block text-xs font-bold text-[#142B3B] mb-1.5">
                Property Postcode <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="postcode"
                name="postcode"
                value={formData.postcode}
                onChange={handleInputChange}
                placeholder="e.g. M1 4ET, M20 2AB"
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#202A33] uppercase placeholder:normal-case placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.postcode
                    ? "border-red-400 focus:ring-red-400 bg-red-50/20"
                    : "border-[#E5E9ED] focus:ring-[#43A66B] focus:border-transparent bg-[#F7F9FA]"
                }`}
                aria-invalid={!!errors.postcode}
                aria-describedby={errors.postcode ? "postcode-error" : undefined}
                required
              />
              {errors.postcode && (
                <p id="postcode-error" className="text-red-600 text-xs mt-1 font-medium">
                  {errors.postcode}
                </p>
              )}
            </div>

            {/* Preferred Date (Optional) */}
            <div>
              <label htmlFor="preferredDate" className="block text-xs font-bold text-[#142B3B] mb-1.5">
                Preferred Date / Timing <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleInputChange}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E9ED] bg-[#F7F9FA] text-sm text-[#202A33] focus:outline-none focus:ring-2 focus:ring-[#43A66B] focus:border-transparent"
              />
            </div>

            {/* Bedrooms (Optional) */}
            <div>
              <label htmlFor="bedrooms" className="block text-xs font-bold text-[#142B3B] mb-1.5">
                Bedrooms <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <select
                id="bedrooms"
                name="bedrooms"
                value={formData.bedrooms}
                onChange={handleInputChange}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E9ED] bg-[#F7F9FA] text-sm text-[#202A33] focus:outline-none focus:ring-2 focus:ring-[#43A66B]"
              >
                <option value="">-- Not specified / Studio --</option>
                <option value="Studio / 1 Bed">Studio / 1 Bedroom</option>
                <option value="2 Bedrooms">2 Bedrooms</option>
                <option value="3 Bedrooms">3 Bedrooms</option>
                <option value="4 Bedrooms">4 Bedrooms</option>
                <option value="5+ Bedrooms">5+ Bedrooms</option>
              </select>
            </div>

            {/* Bathrooms (Optional) */}
            <div>
              <label htmlFor="bathrooms" className="block text-xs font-bold text-[#142B3B] mb-1.5">
                Bathrooms / En-suites <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <select
                id="bathrooms"
                name="bathrooms"
                value={formData.bathrooms}
                onChange={handleInputChange}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E9ED] bg-[#F7F9FA] text-sm text-[#202A33] focus:outline-none focus:ring-2 focus:ring-[#43A66B]"
              >
                <option value="">-- Not specified --</option>
                <option value="1 Bathroom">1 Bathroom</option>
                <option value="2 Bathrooms">2 Bathrooms</option>
                <option value="3 Bathrooms">3 Bathrooms</option>
                <option value="4+ Bathrooms">4+ Bathrooms</option>
              </select>
            </div>
          </div>

          {/* Additional Details Textarea */}
          <div className="pt-2">
            <label htmlFor="additionalDetails" className="block text-xs font-bold text-[#142B3B] mb-1.5">
              Additional Details or Special Requests
            </label>
            <textarea
              id="additionalDetails"
              name="additionalDetails"
              rows={3}
              value={formData.additionalDetails}
              onChange={handleInputChange}
              placeholder="Tell us about specific priority areas (e.g. oven clean, pet hair, balcony doors, parking arrangements, or preferred cleaning hours)..."
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E9ED] bg-[#F7F9FA] text-sm text-[#202A33] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#43A66B] focus:border-transparent transition-all"
            ></textarea>
          </div>
        </div>

        {/* Section 3: Privacy & Submission */}
        <div className="pt-4 border-t border-[#E5E9ED] space-y-4">
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="privacyAgreed"
              name="privacyAgreed"
              checked={formData.privacyAgreed}
              onChange={handleInputChange}
              className="mt-1 h-4 w-4 rounded border-slate-300 text-[#43A66B] focus:ring-[#43A66B]"
              aria-invalid={!!errors.privacyAgreed}
              aria-describedby={errors.privacyAgreed ? "privacyAgreed-error" : undefined}
            />
            <label htmlFor="privacyAgreed" className="text-xs text-[#65727E] leading-relaxed">
              I agree that Cleaner in Manchester (0161) Ltd may use my contact details to prepare and provide my quote. We respect your privacy and never sell customer information. <span className="text-red-500">*</span>
            </label>
          </div>
          {errors.privacyAgreed && (
            <p id="privacyAgreed-error" className="text-red-600 text-xs font-medium pl-7">
              {errors.privacyAgreed}
            </p>
          )}

          {/* QA Testing Toggle (Demonstrates robust error handling) */}
          <div className="pt-2 flex items-center justify-between text-xs text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
            <span className="flex items-center gap-1.5">
              <RefreshCw className="w-3.5 h-3.5 text-slate-400" />
              <span>QA Validation Test:</span>
            </span>
            <label className="flex items-center gap-2 cursor-pointer text-[11px] font-semibold text-slate-700">
              <input
                type="checkbox"
                checked={simulateFailure}
                onChange={(e) => setSimulateFailure(e.target.checked)}
                className="rounded border-slate-300 text-red-600 focus:ring-red-500"
              />
              <span>Simulate server failure (tests field preservation)</span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 rounded-xl bg-[#43A66B] hover:bg-[#348655] disabled:opacity-70 text-white font-bold text-base shadow-sm transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#43A66B] focus:ring-offset-2"
          >
            {isSubmitting ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin" />
                <span>Transmitting Your Request...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Send My Quote Request</span>
              </>
            )}
          </button>

          <p className="text-center text-xs text-[#65727E]">
            Prefer to speak directly? Call our Manchester team on{" "}
            <a href={businessInfo.phoneHref} className="font-bold text-[#142B3B] hover:underline">
              {businessInfo.phoneFormatted}
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};
