export const OTP_TIMER = 10;

export const SYNC_FILTERS = ["organizations", "integrations"];

export const STATIC_FILTERS: Record<string, any> = {
  TIME_PERIOD: {
    label: "Time duration",
    options: [
      { label: "All Time", value: "all" },
      { label: "Last 30 days", value: "last30" },
      { label: "Last 60 Days", value: "last60" },
      { label: "Last 6 months", value: "last180" },
      { label: "Last 1 year", value: "last365" },
    ],
  },
  STATUS: {
    label: "Status",
    options: [
      { label: "All Status", value: "all" },
      { label: "Success", value: "success" },
      { label: "Error", value: "error" },
      { label: "Email sent", value: "email_sent" },
      { label: "Under validation", value: "in_validation" },
    ],
  },
  CATEGORY: {
    label: "category",
    options: [
      { label: "All Categories", value: "all" },
      { label: "HRIS", value: "HRIS" },
      { label: "COMMS", value: "COMMS" },
      { label: "ACCOUNTING", value: "Accounting" },
    ],
  },
};

export const DEFAULT_FILTER_OPTIONS = [{ label: "All", value: "All" }];
