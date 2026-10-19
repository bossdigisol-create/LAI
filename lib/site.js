// Central source for brand facts, contact details and navigation.
// Update values here and they flow through the header, footer, metadata and structured data.

export const site = {
  name: "LAI Healthcare Solutions",
  shortName: "LAI",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.laihealthcaresolutions.com",
  tagline: "Built by clinicians. Designed for the future of care.",
  headline: "Clinical expertise you can count on. Strategy driven by data and transparency.",
  description:
    "LAI Healthcare Solutions is a clinician-led consulting firm helping hospitals, health systems and academic medical centers adopt AI responsibly, strengthen clinical analytics, optimize the nursing workforce and develop leaders, and giving healthcare technology start-ups and companies a clinical lens, operational expertise and growth strategy.",
  email: "hello@laihealthcaresolutions.com",
  emailDisplay: "hello@LAIHealthcareSolutions.com",
  // Pending: Stephanie is confirming the InsiderRN booking page, which should replace this link.
  bookingUrl: "https://outlook.office.com/book/LAI@elevatelogisticsolutions.com/",
  foundingYear: "2024",
  areaServed: "United States",
  social: {
    linkedin: "https://www.linkedin.com/company/lai-healthcare-solutions/",
    instagram: "https://www.instagram.com/stephanie__frisch/",
  },
};

export const founder = {
  name: "Stephanie O. Frisch",
  credentials: "PhD, MSN, RN, CEN, CCRN-K",
  title: "Founder",
  shortBio:
    "Critical care, emergency and flight nurse turned nurse scientist and AI researcher at the University of Pittsburgh.",
  image: "/images/stephanie-frisch.webp",
  imageWidth: 825,
  imageHeight: 1024,
  education: [
    { degree: "PhD", school: "University of Pittsburgh", detail: "RWJF Future of Nursing Scholar" },
    { degree: "MSN", school: "Duke University", detail: "Nursing and healthcare leadership" },
    { degree: "BSN", school: "University of Kentucky", detail: "Bachelor of Science in Nursing" },
  ],
  certifications: [
    { abbr: "RN", name: "Registered Nurse" },
    { abbr: "CEN", name: "Certified Emergency Nurse" },
    { abbr: "CCRN-K", name: "Acute/critical care knowledge professional" },
    { abbr: "PHRN", name: "Prehospital Registered Nurse" },
  ],
};

// Journals are listed as text only; no publisher logos are used.
export const researchJournals = [
  "European Heart Journal",
  "Nature Communications",
  "JMIR AI",
  "Journal of the American Heart Association",
  "Research in Nursing & Health",
];

export const publications = [
  {
    title:
      "Electrocardiogram-based machine learning for risk stratification of patients with suspected acute coronary syndrome",
    journal: "European Heart Journal",
    year: "2025",
    role: "Co-author",
    doi: "10.1093/eurheartj/ehae880",
  },
  {
    title: "Sepsis prediction at emergency department triage using natural language processing: retrospective cohort study",
    journal: "JMIR AI",
    year: "2024",
    role: "Co-author",
    doi: "10.2196/49784",
  },
  {
    title:
      "Machine learning-based prediction of acute coronary syndrome using only the pre-hospital 12-lead electrocardiogram",
    journal: "Nature Communications",
    year: "2020",
    role: "Co-author",
    doi: "10.1038/s41467-020-17804-2",
  },
  {
    title:
      "Exploring the complex interactions of baseline patient factors to improve nursing triage of acute coronary syndrome",
    journal: "Research in Nursing & Health",
    year: "2020",
    role: "Lead author",
    doi: "10.1002/nur.22045",
  },
  {
    title:
      "The association between patient outcomes and the initial Emergency Severity Index triage score in patients with suspected acute coronary syndrome",
    journal: "Journal of Cardiovascular Nursing",
    year: "2020",
    role: "Lead author",
    doi: "10.1097/JCN.0000000000000644",
  },
  {
    title: "Prevalence and predictors of delay in seeking emergency care in patients who call 9-1-1 for chest pain",
    journal: "Journal of Emergency Medicine",
    year: "2019",
    role: "Lead author",
    doi: "10.1016/j.jemermed.2019.07.012",
  },
];

// Other authored work on the About page: articles and commentary, then further co-authored papers.
export const articles = [
  {
    title: "Empowering nurses with AI: the path to better healthcare",
    outlet: "Vital blog",
    year: "2024",
    url: "https://vital.io/resources/blog/empowering-nurses-with-ai-the-path-to-better-healthcare",
  },
  {
    title: "Honoring Nurses Week and their impact on patient care",
    outlet: "Vital blog",
    year: "2024",
    url: "https://vital.io/resources/blog/honoring-nurses-week-and-their-impact-on-patient-care",
  },
  {
    title: "Back to the future: can AI help nurses reconnect to purpose?",
    outlet: "Healthcare Business Today",
    year: "2023",
    url: "https://www.healthcarebusinesstoday.com/can-ai-help-nurses-reconnect",
  },
];

export const otherPublications = [
  {
    title:
      "The experiences of United States emergency nurses related to witnessed and experienced bias: a mixed-methods study",
    journal: "Journal of Emergency Nursing",
    year: "2023",
    role: "Co-author",
    doi: "10.1016/j.jen.2022.11.008",
  },
  {
    title: "Three-year nursing PhD model recommendations from the RWJF Future of Nursing Scholars",
    journal: "Journal of Nursing Education",
    year: "2022",
    role: "Co-author",
    doi: "10.3928/01484834-20211202-01",
  },
  {
    title:
      "In search of an optimal subset of ECG features to augment the diagnosis of acute coronary syndrome at the emergency department",
    journal: "Journal of the American Heart Association",
    year: "2021",
    role: "Co-author",
    doi: "10.1161/JAHA.120.017871",
  },
  {
    title: "Diurnal, weekly and seasonal variations of chest pain in patients transported by emergency medical services",
    journal: "Emergency Medicine Journal",
    year: "2019",
    role: "Co-author",
    doi: "10.1136/emermed-2019-208529",
  },
];

// Sourced statistic used on the home and AI governance pages.
export const governanceStat = {
  adoption: "88%",
  mature: "18%",
  source: "HFMA and Eliciting Insights, 2025 survey of 233 U.S. health systems",
  sourceUrl: "https://www.hfma.org/health-system-adoption-of-ai-outpaces-internal-governance-and-strategy/",
};

export const mainNav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasMenu: true },
  { label: "Speaking", href: "/speaking" },
  { label: "Contact", href: "/contact" },
];

export const inquiryReasons = [
  "AI governance and strategy",
  "AI implementation and digital transformation",
  "Clinical analytics and informatics",
  "Workforce optimization",
  "Leadership mentorship and development",
  "Research strategy and evidence translation",
  "Health tech or start-up advisory",
  "Speaking engagement",
  "Something else",
];
