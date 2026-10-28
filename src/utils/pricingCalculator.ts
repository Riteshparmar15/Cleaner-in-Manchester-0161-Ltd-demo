import { servicesData } from "../data/servicesData";

export interface EstimateResult {
  price: number;
  hours: number;
}

export const normalizeService = (raw: string): string => {
  if (!raw) return "Regular Home Cleaning";
  const lower = raw.toLowerCase().trim();
  if (lower.includes("regular") || lower.includes("domestic")) return "Regular Home Cleaning";
  if (lower.includes("deep")) return "Deep Cleaning";
  if (lower.includes("tenancy") || lower.includes("end of tenancy")) return "End-of-Tenancy Cleaning";
  if (lower.includes("office") || lower.includes("commercial")) return "Office Cleaning";
  if (lower.includes("apartment") || lower.includes("flat")) return "Apartment Cleaning";
  if (lower.includes("construction") || lower.includes("builder")) return "End-of-Construction Cleaning";

  const matched = servicesData.find(
    (s) =>
      s.title.toLowerCase() === lower ||
      s.slug.toLowerCase() === lower
  );
  return matched ? matched.title : raw;
};

export const parseBedroomNumber = (val: string | number | undefined): number => {
  if (!val) return 2;
  if (typeof val === "number") return Math.min(Math.max(val, 1), 5);
  const str = String(val).toLowerCase();
  if (str.includes("5") || str.includes("whole floor")) return 5;
  if (str.includes("4")) return 4;
  if (str.includes("3")) return 3;
  if (str.includes("2")) return 2;
  if (str.includes("1") || str.includes("studio")) return 1;
  const parsed = parseInt(str, 10);
  return isNaN(parsed) ? 2 : Math.min(Math.max(parsed, 1), 5);
};

export const parseBathroomNumber = (val: string | number | undefined): number => {
  if (!val) return 1;
  if (typeof val === "number") return Math.min(Math.max(val, 1), 4);
  const str = String(val).toLowerCase();
  if (str.includes("4")) return 4;
  if (str.includes("3")) return 3;
  if (str.includes("2")) return 2;
  if (str.includes("1")) return 1;
  const parsed = parseInt(str, 10);
  return isNaN(parsed) ? 1 : Math.min(Math.max(parsed, 1), 4);
};

export const mapBedroomsValue = (val: string | number | undefined, isOffice: boolean): string => {
  const num = parseBedroomNumber(val);
  if (isOffice) {
    if (num === 1) return "1 Room (1-5 Desks)";
    if (num === 2) return "2 Office Rooms (6-12 Desks)";
    if (num === 3) return "3 Office Rooms (13-20 Desks)";
    if (num === 4) return "4 Office Rooms (21-35 Desks)";
    return "5+ Office Rooms (35+ Desks)";
  } else {
    if (num === 1) return "Studio / 1 Bed";
    if (num === 2) return "2 Bedrooms";
    if (num === 3) return "3 Bedrooms";
    if (num === 4) return "4 Bedrooms";
    return "5+ Bedrooms";
  }
};

export const mapBathroomsValue = (val: string | number | undefined, isOffice: boolean): string => {
  const num = parseBathroomNumber(val);
  if (isOffice) {
    if (num === 1) return "1 Restroom";
    if (num === 2) return "2 Restrooms";
    if (num === 3) return "3 Restrooms";
    return "4+ Restrooms";
  } else {
    if (num === 1) return "1 Bathroom";
    if (num === 2) return "2 Bathrooms";
    if (num === 3) return "3 Bathrooms";
    return "4+ Bathrooms";
  }
};

export const getFrequencyLabel = (freq: string | undefined): string => {
  const f = (freq || "").toLowerCase().trim();
  if (f === "weekly") return "Weekly (Save 15%)";
  if (f === "fortnightly") return "Fortnightly (Save 10%)";
  if (f === "one-off" || f === "oneoff") return "One-Off Standard Clean";
  return "Fortnightly (Save 10%)";
};

export const calculateCleaningEstimate = (
  service: string,
  bedrooms: number | string | undefined,
  bathrooms: number | string | undefined,
  frequency: string | undefined
): EstimateResult => {
  const bedNum = parseBedroomNumber(bedrooms);
  const bathNum = parseBathroomNumber(bathrooms);

  let baseRate = 35;
  let hoursSaved = 2.5;

  const lower = (service || "").toLowerCase();

  if (lower.includes("regular") || lower.includes("domestic")) {
    baseRate = 34 + (bedNum * 10) + (bathNum * 8);
    hoursSaved = 2.5 + (bedNum * 0.75) + (bathNum * 0.5);
  } else if (lower.includes("deep")) {
    baseRate = 90 + (bedNum * 22) + (bathNum * 18);
    hoursSaved = 5.0 + (bedNum * 1.0) + (bathNum * 0.8);
  } else if (lower.includes("tenancy")) {
    baseRate = 120 + (bedNum * 28) + (bathNum * 25);
    hoursSaved = 7.0 + (bedNum * 1.5) + (bathNum * 1.0);
  } else if (lower.includes("office") || lower.includes("commercial")) {
    baseRate = 45 + (bedNum * 16) + (bathNum * 12);
    hoursSaved = 3.5 + (bedNum * 0.8);
  } else {
    baseRate = 40 + (bedNum * 12) + (bathNum * 10);
    hoursSaved = 3.0;
  }

  // Frequency discounts
  let discount = 0;
  const freqLower = (frequency || "").toLowerCase();
  if (freqLower === "weekly") discount = 0.15;
  if (freqLower === "fortnightly") discount = 0.10;

  const finalRate = Math.round(baseRate * (1 - discount));
  return {
    price: finalRate,
    hours: Math.round(hoursSaved * 10) / 10
  };
};
