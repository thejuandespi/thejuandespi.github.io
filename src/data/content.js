/* ---------------------------------------------------------------
   Everything editable lives here. Change copy, links and projects
   in this file; the components read from it.
   --------------------------------------------------------------- */

export const ME = {
  name: "John Despi",
  role: "Salesforce Developer",
  base: "Cebu, Philippines",
  email: "contact@johndespi.dev",
  phone: "+63 905 351 1640",
  linkedin: "https://www.linkedin.com/in/johndespi",
  github: "https://github.com/thejuandespi",
  cv: "/John-Despi-CV.pdf"
};

/* Sections that appear in the top nav and the right-hand dock.
   The certifications block is deliberately left out of this list —
   it has its own section on the page but no nav entry. */
export const SECTIONS = [
  { id: "home", label: "Home", code: "00" },
  { id: "about", label: "About", code: "01" },
  { id: "skills", label: "Skills", code: "02" },
  { id: "work", label: "Work", code: "03" },
  { id: "contact", label: "Contact", code: "04" }
];

export const HUD = [
  ["Role", "Salesforce Developer"],
  ["Base", "Cebu, PH -> UTC+8"],
  ["Platform", "6+ yrs -> 8 total"],
  ["Certs", "07"]
];

export const MARQUEE = [
  "Lightning Web Components",
  "Apex",
  "Flow",
  "Omnistudio",
  "Experience Cloud",
  "CI/CD"
];

export const TIMELINE = [
  { yrs: "2025 -> now", co: "CXC Global", role: "Salesforce Developer", now: true },
  { yrs: "2024 -> 2025", co: "Enrite Solutions", role: "Salesforce Developer" },
  { yrs: "2023 -> 2024", co: "OSF Digital", role: "Salesforce Developer" },
  { yrs: "2021 -> 2023", co: "Capgemini", role: "Consultant -> Senior Consultant" },
  { yrs: "2018 -> 2021", co: "Accenture", role: "Application Development Analyst -> Senior" },
  { yrs: "2016 -> 2018", co: "Bluefrog / Arkhold", role: "Frontend Developer" }
];

export const CLUSTERS = [
  {
    title: "Salesforce platform",
    note: "Where most of my hours go.",
    items: [
      ["Apex", 1], ["Lightning Web Components", 1], ["Flows", 1], ["SOQL / SOSL", 1],
      ["Aura", 0], ["Visualforce", 0], ["Omnistudio", 1], ["OmniScript", 0],
      ["DataRaptors", 0], ["FlexCards", 0], ["Experience Cloud", 1], ["Sales Cloud", 0],
      ["Service Cloud", 0], ["Integrations / REST", 1]
    ]
  },
  {
    title: "Release & tooling",
    note: "Getting it to production without drama.",
    items: [
      ["Salesforce CLI / SFDX", 1], ["Copado", 1], ["GitHub pipelines", 1], ["Git", 0],
      ["Scratch orgs", 0], ["SFDX-Hardis", 0], ["VS Code", 0], ["GitHub Copilot", 0],
      ["Debug Logs", 0], ["Lightning Inspector", 0]
    ]
  },
  {
    title: "Web stack",
    note: "From the two years before Salesforce, still useful daily.",
    items: [
      ["JavaScript", 1], ["HTML5", 0], ["CSS / SCSS", 0], ["SLDS", 0],
      ["Vue.js", 0], ["Node.js", 0], ["LeafletJS", 0], ["Postman", 0]
    ]
  },
  {
    title: "How I work",
    note: "The parts that happen before and after the code.",
    items: [
      ["Requirement gathering", 0], ["Technical specs", 0], ["Code review", 0],
      ["Agile / Scrum", 0], ["Mentoring juniors", 0], ["Stakeholder comms", 0],
      ["English B2-C1", 0]
    ]
  }
];

export const CERTS = [
  { ref: "CRT-01", name: "Platform Developer I", issuer: "Salesforce", note: "Apex, LWC, data model, testing" },
  { ref: "CRT-02", name: "JavaScript Developer I", issuer: "Salesforce", note: "Core JS plus LWC specifics" },
  { ref: "CRT-03", name: "Administrator", issuer: "Salesforce", note: "Config, security, declarative automation" },
  { ref: "CRT-04", name: "Platform App Builder", issuer: "Salesforce", note: "Data modelling and app design" },
  { ref: "CRT-05", name: "OmniStudio Developer", issuer: "Salesforce", note: "OmniScripts, DataRaptors, FlexCards" },
  { ref: "CRT-06", name: "AI Associate", issuer: "Salesforce", note: "Einstein and responsible AI basics" },
  { ref: "CRT-07", name: "Vlocity Platform Developer", issuer: "Vlocity", note: "Industry cloud components" }
];

export const PROJECTS = [
  {
    ref: "APX-01",
    yr: "2024",
    title: "Keypress autosave for AppExchange",
    client: "Enrite Solutions - managed package",
    desc: "A field-level autosave that fires on keypress and holds up on both desktop and mobile. Shipped end to end and cleared Salesforce's security review, which meant tightening sharing checks, CRUD/FLS enforcement and test coverage before submission.",
    stack: ["LWC", "Apex", "Security Review", "SFDX"]
  },
  {
    ref: "NPO-02",
    yr: "2024",
    title: "Shared base org for nonprofit clients",
    client: "Enrite Solutions - internal platform",
    desc: "Maintained the base repository every nonprofit client org forks from. New engagements start from a known-good baseline, then diverge into client-specific customisations without re-solving the same problems each time.",
    stack: ["SFDX", "Apex", "Flows", "Scratch Orgs", "Git"]
  },
  {
    ref: "NRG-03",
    yr: "2023",
    title: "Service point and opportunity integrations",
    client: "OSF Digital - New Zealand power company",
    desc: "Custom LWC, Apex and Flow work over third-party opportunity and service-point data. Also ran the requirement sessions with the client and turned the output into specs and R&D tasks the team could pick up.",
    stack: ["LWC", "Apex", "REST", "Flows", "SLDS"]
  },
  {
    ref: "PRT-04",
    yr: "2022",
    title: "High-traffic Experience Cloud portal",
    client: "Capgemini - financial services client",
    desc: "Components for credit and debit application journeys, promo management and DocuSign signing, built for a portal carrying heavy daily volume. Platform configuration followed the client's business rules and security model.",
    stack: ["LWC", "Experience Cloud", "DocuSign", "Omnistudio"]
  },
  {
    ref: "MAP-05",
    yr: "2019",
    title: "Address serviceability lookup",
    client: "Accenture - US internet provider",
    desc: "A reusable component pairing LeafletJS with the Google Places API so agents could verify in real time whether an address was serviceable, instead of checking a separate system mid-call.",
    stack: ["LWC", "LeafletJS", "Google Places API", "Apex"]
  },
  {
    ref: "WEB-06",
    yr: "2017",
    title: "In-house employee portal",
    client: "Bluefrog Contents and Support",
    desc: "Profile management, time tracking and leave filing in one place, built on Vue.js with a Lumen PHP backend. Replaced a paper-and-spreadsheet process for the whole office.",
    stack: ["Vue.js", "Lumen PHP", "SCSS"]
  }
];
