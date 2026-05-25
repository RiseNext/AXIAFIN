import {
  Building2,
  Scale,
  Briefcase,
  UserCheck,
  HandCoins,
  Landmark,
  Factory,
  Rocket,
  Globe,
  Wallet,
  ScrollText,
  ClipboardList,
  Mail,
  FileWarning,
  Receipt,
  ShieldCheck,
  AlertTriangle,
  XCircle,
  Users,
  TrendingUp,
  FileText,
  type LucideIcon,
} from "lucide-react";

export type ServiceItem = { icon: LucideIcon; title: string; desc: string };

export type ExtraSection = {
  heading: string;
  body: string;
  image?: string;
  align?: "left" | "right";
  bullets?: string[];
};

export type DataTable = {
  heading: string;
  description?: string;
  note?: string;
  headers: string[];
  rows: string[][];
};

export type ServicePage = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  hero: {
    titleLead: string;
    titleAccent: string;
    description: string;
    image?: string;
  };
  intro: {
    heading: string;
    body: string;
    image?: string;
  };
  advantages: ServiceItem[];
  advantagesHeading?: string;
  advantagesImage?: string;
  disadvantages?: ServiceItem[];
  disadvantagesHeading?: string;
  disadvantagesImage?: string;
  process: { step: string; title: string; desc: string }[];
  processHeading?: string;
  bundle?: { title: string; items: string[] };
  extraSections?: ExtraSection[];
  tables?: DataTable[];
  howItWorks?: { title: string; items: string[] };
  whyChoose?: { heading: string; body: string; image?: string };
  cta: { headline: string; sub: string; label: string };
};

// Curated, reusable image set (Unsplash, verified stable IDs).
// Each key represents a distinct visual concept — pages must not reuse the same
// key within a single page. Format=auto + width=1600 keeps payload small.
const U = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=1600`;

const img = {
  // ── Business / Office ─────────────────────────────────────────────
  pvtLtdOffice: U("photo-1497366216548-37526070297c"), // glass corporate office
  llpPartners: U("photo-1573497019940-1c28c88b4f3e"), // two partners discussing
  partnershipDeed: U("photo-1521737711867-e3b97375f902"), // partnership desk
  opcSolo: U("photo-1531973576160-7125cd663d86"), // solo founder at laptop
  proprietorshipShop: U("photo-1556742502-ec7c0e9f34b1"), // small shop owner
  societyGroup: U("photo-1488521787991-ed7bbaae773c"), // community group
  trustHandshake: U("photo-1521791136064-7986c2920216"), // trust handshake

  // ── Audit family ──────────────────────────────────────────────────
  statutoryAudit: U("photo-1554224155-6726b3ff858f"), // audit binders
  incomeTaxAudit: U("photo-1554224154-22dec7ec8818"), // calculator + forms
  gstAudit: U("photo-1554224154-26032ffc0d07"), // tax desk
  internalAudit: U("photo-1573164574572-cb89e39749b4"), // team review
  revenueAudit: U("photo-1559526324-4b87b5e36e44"), // revenue charts
  stockAudit: U("photo-1565514020179-026b92b84bb6"), // warehouse inventory

  // ── Return-filing family ─────────────────────────────────────────
  incomeTaxReturns: U("photo-1591696205602-2f950c417cb9"), // ITR forms (replaced 404)
  gstReturns: U("photo-1554224155-8d04cb21cd6c"), // calculator + papers
  tdsReturns: U("photo-1454165804606-c3d57bc86b40"), // financial graphs
  rocFiling: U("photo-1568992687947-868a62a9f521"), // legal documents

  // ── ESIC / EPF / PT ──────────────────────────────────────────────
  esicMedical: U("photo-1576091160550-2173dba999ef"), // medical / insurance
  epfPiggyBank: U("photo-1579621970795-87facc2f976d"), // piggy bank savings
  ptGovtBuilding: U("photo-1517245386807-bb43f82c33c4"), // government / institutional (replaced 404)

  // ── Registrations ────────────────────────────────────────────────
  msmeFactory: U("photo-1542838132-92c53300491e"), // small workshop
  startupIndia: U("photo-1559136555-9303baea8ebd"), // startup founders
  angelTaxMeeting: U("photo-1573164574230-db1d5e960238"), // investor meeting
  iecExports: U("photo-1494412574643-ff11b0a5c1c3"), // shipping / containers

  // ── Notices & Advisory ────────────────────────────────────────────
  itNoticeLetter: U("photo-1543286386-2e659306cd6c"), // tax letter/document (distinct from signing)
  gstNoticeEmail: U("photo-1596526131083-e8c633c948d2"), // email/notification
  gstRefundCash: U("photo-1554224155-1696413565d3"), // refund cash
  projectReport: U("photo-1454165804606-c3d57bc86b40"), // project plan

  // ── Supporting / context images (for intro / extraSections / whyChoose) ──
  meetingRoom: U("photo-1600880292203-757bb62b4baf"), // bright meeting room
  team: U("photo-1556761175-5973dc0f32e7"), // diverse team
  growthChart: U("photo-1551288049-bebda4e38f71"), // analytics laptop
  signingDocs: U("photo-1450101499163-c8848c66ca85"), // signing
  legalScale: U("photo-1589829545856-d10d557cf95f"), // scales of justice
  computerScreen: U("photo-1593642632559-0c6d3fc62b89"), // computer monitor
  warning: U("photo-1551836022-deb4988cc6c0"), // people looking concerned
  charityVolunteer: U("photo-1593113598332-cd288d649433"), // charity hands
  retirementJar: U("photo-1556745757-8d76bdb6984b"), // savings jar
  community2: U("photo-1582213782179-e0d53f98f2ca"), // diverse community
  startupCelebration: U("photo-1551836022-d5d88e9218df"), // celebration
  partnersAlt: U("photo-1507679799987-c73779587ccf"), // partners alt
  taxFormsClose: U("photo-1517048676732-d65bc937f952"), // tax forms close-up (replaced 404 source)
  refundReturn: U("photo-1559526324-c1f275fbfa32"), // money return
  laptopDesk: U("photo-1551288049-bebda4e38f71"), // alias
  cargoShipping: U("photo-1494412574643-ff11b0a5c1c3"), // alias for IEC
  taxStrategy: U("photo-1454165804606-c3d57bc86b40"), // alias for planning
  modernOffice: U("photo-1497366754035-f200968a6e72"), // modern office
  architecture: U("photo-1486406146926-c627a92ad1ab"), // architecture
  boardroom: U("photo-1573497019418-b400bb3ab074"), // boardroom discussion

  // ── Backwards-compatibility aliases (each points to a DISTINCT photo) ──
  business: U("photo-1497366216548-37526070297c"),
  meeting: U("photo-1600880292203-757bb62b4baf"),
  growth: U("photo-1559526324-4b87b5e36e44"),
  signing: U("photo-1450101499163-c8848c66ca85"),
  audit: U("photo-1554224155-6726b3ff858f"),
  desk: U("photo-1554224154-22dec7ec8818"),
  partnership: U("photo-1521737711867-e3b97375f902"),
  startup: U("photo-1559136555-9303baea8ebd"),
  // replaced 404 ID with verified working one
  taxFiling: U("photo-1591696205602-2f950c417cb9"),
  community: U("photo-1582213782179-e0d53f98f2ca"),
  factory: U("photo-1565514020179-026b92b84bb6"),
  exports: U("photo-1494412574643-ff11b0a5c1c3"),
  // distinct notification image (≠ signing AND ≠ email)
  notice: U("photo-1517048676732-d65bc937f952"),
  refund: U("photo-1554224155-1696413565d3"),
  laptop: U("photo-1551288049-bebda4e38f71"),
  shop: U("photo-1556742502-ec7c0e9f34b1"),
  charity: U("photo-1593113598332-cd288d649433"),
  ledger: U("photo-1568992687947-868a62a9f521"),
  computer: U("photo-1593642632559-0c6d3fc62b89"),
  scale: U("photo-1589829545856-d10d557cf95f"),
  piggyBank: U("photo-1579621970795-87facc2f976d"),
  insurance: U("photo-1576091160550-2173dba999ef"),
  investor: U("photo-1573164574230-db1d5e960238"),
  // replaced 404 ID with verified working alternative
  govtBuilding: U("photo-1517245386807-bb43f82c33c4"),
  handshake: U("photo-1521791136064-7986c2920216"),
  charity2: U("photo-1488521787991-ed7bbaae773c"),
  retirement: U("photo-1556745757-8d76bdb6984b"),
  // distinct from ledger
  documents: U("photo-1454165804606-c3d57bc86b40"),
  startupInvest: U("photo-1551836022-d5d88e9218df"),
  email: U("photo-1596526131083-e8c633c948d2"),
  refundCash: U("photo-1559526324-c1f275fbfa32"),
  // distinct from handshake
  trust: U("photo-1593113646773-028c64a8f1b8"),
  // replaced 404 ID with verified working one
  payroll: U("photo-1530099486328-e021101a494a"),
};

export const servicePages: Record<string, ServicePage> = {
  "private-limited-company": {
    slug: "private-limited-company",
    title: "Private Limited Company",
    metaTitle:
      "Private Limited Company Registration in Hyderabad | Company Registration in India",
    metaDescription:
      "Starting your own business? A Private Limited Company Registration is one of the most trusted and popular structures in India. At AXIAFIN, we make company registration in India and company registration services in Hyderabad simple, fast, and 100% compliant.",
    eyebrow: "Start a Business",
    hero: {
      titleLead: "Private Limited",
      titleAccent: "Company Registration",
      description:
        "Starting your own business? A Private Limited Company Registration is one of the most trusted and popular structures in India. At AXIAFIN, we make company registration in India and company registration services in Hyderabad simple, fast, and 100% compliant.",
      image: img.business,
    },
    intro: {
      heading: "Understanding a Private Limited Company",
      body: "A private Company is a company which is owned by non-governmental organisations or a relatively small number of shareholders or members of a company. A Private Limited Company (Pvt Ltd) is a business entity owned by individuals or non-governmental organizations, with a limited number of shareholders or members. Unlike public companies, a Pvt Ltd Company Registration does not offer shares to the general public; instead, its ownership remains private among shareholders. If you're planning to register a company in India, a Private Limited Company offers flexibility, credibility, and limited liability — ideal for startups and growing enterprises.",
      image: img.meeting,
    },
    extraSections: [
      {
        heading: "Unlocking Growth Potential with a Pvt Ltd Company Registration",
        body: "Choosing Ltd Company Registration gives your business legal recognition and helps in gaining investor confidence. It's the first big step toward building a credible and scalable business.",
        image: img.growth,
        align: "right",
      },
    ],
    advantagesHeading: "Advantages of a Private Limited Company",
    advantagesImage: img.signing,
    advantages: [
      {
        icon: Building2,
        title: "Limited risk to personal assets",
        desc: "Shareholders of a private limited company enjoy limited liability. You're liable only up to the amount you invest in the business. Your personal assets stay protected from company debts.",
      },
      {
        icon: Scale,
        title: "Legal Entity",
        desc: "A Private Limited Company has its own legal identity separate from its directors and shareholders. This ensures business continuity and clear separation of personal and company obligations.",
      },
      {
        icon: HandCoins,
        title: "Raising Capital",
        desc: "Though Pvt Ltd Registration requires some compliance, it's favored by entrepreneurs because it allows raising funds through equity while limiting personal risk.",
      },
      {
        icon: UserCheck,
        title: "Trustworthiness",
        desc: "All companies are registered with the Registrar of Companies (ROC) under the Companies Act 2013. Anyone can verify your company details on the Ministry of Corporate Affairs (MCA) portal — making Private Limited Company Registration one of the most trusted forms of business in India.",
      },
      {
        icon: ScrollText,
        title: "Continue Existence",
        desc: "A registered company continues to exist even if shareholders change or pass away. This perpetual succession gives your business long-term stability.",
      },
    ],
    whyChoose: {
      heading: "Why Choose AXIAFIN for Company Registration in India",
      body: "We provide complete company registration services in Hyderabad and across India. Our experts guide you in selecting the right business structure based on your business type and future goals, transaction nature, and budget & compliance requirements. We also help with post-incorporation support such as Certificate of commencement, Auditor appointment, Filing of ROC forms, and Ongoing statutory guidance.",
      image: img.team,
    },
    processHeading: "Private Limited Company Formation Process",
    process: [
      { step: "01", title: "Obtain Digital Signature Certificate", desc: "First, we apply for Digital Signatures (DSC) for all proposed directors." },
      { step: "02", title: "Obtain DIN", desc: "We obtain Director Identification Numbers (DIN) for directors from the Ministry of Corporate Affairs." },
      { step: "03", title: "Name Availability", desc: "We help you select a unique name and submit it for ROC approval." },
      { step: "04", title: "Form SPICe+ INC-32", desc: "Our team drafts and files the SPICe+ INC-32 form on the MCA portal." },
      { step: "05", title: "e-MOA and e-AOA", desc: "Drafting and filing the electronic Memorandum of Association and Articles of Association." },
      { step: "06", title: "PAN and TAN Application", desc: "Once approved, you receive your Certificate of Incorporation along with PAN and TAN." },
    ],
    bundle: {
      title: "How Does It Work — Bundle of Services",
      items: [
        "Company Incorporation",
        "ESIC Registration",
        "EPF Registration",
        "GST Registration",
        "MSME Registration",
        "Labour license (Challan to be incurred by the promoters)",
        "PAN Card",
        "TAN Number",
      ],
    },
    cta: {
      headline: "Embracing the Private Limited Advantage",
      sub: "Take the First Step Toward Growth and Stability with AXIAFIN",
      label: "Contact Now",
    },
  },

  "llp-registration": {
    slug: "llp-registration",
    title: "LLP Registration",
    metaTitle: "LLP Registration in India – Limited Liability Partnership Company Formation",
    metaDescription:
      "Explore LLP Company Registration with AXIAFIN. Limited Liability Partnership (LLP) has become a preferred form of organization among entrepreneurs and startups in India.",
    eyebrow: "Start a Business",
    hero: {
      titleLead: "LLP Registration in India",
      titleAccent: "Limited Liability Partnership",
      description:
        "Explore LLP Company Registration with AXIAFIN. Limited Liability Partnership (LLP) has become a preferred form of organization among entrepreneurs and startups in India. An LLP company registration in India combines the flexibility of a partnership with the advantages of limited liability offered by a private limited company.",
      image: img.partnership,
    },
    intro: {
      heading: "What is an LLP? (Limited Liability Partnership Registration Overview)",
      body: "An LLP can be formed with a minimum of two partners through an LLP incorporation process. Partners enjoy limited liability, and the LLP continues perpetually as a separate legal entity — even if partners change. If you're looking to register LLP company in India or need professional LLP registration services in Hyderabad, our experts at AXIAFIN can help you handle the entire process seamlessly.",
      image: img.meeting,
    },
    extraSections: [
      {
        heading: "Unlocking Growth Potential with LLP Registration",
        body: "An LLP combines the flexibility of partnership with the legal protection of limited liability. It is one of the most cost-effective and entrepreneur-friendly structures available today in India.",
        image: img.growth,
        align: "right",
      },
    ],
    advantagesHeading: "Advantages of an LLP Company Registration",
    advantagesImage: img.signing,
    advantages: [
      {
        icon: Scale,
        title: "Separate legal entity",
        desc: "An LLP registration in India gives your business a separate legal identity, distinct from its partners. The LLP can sue or be sued in its own name, making it more trustworthy among clients and investors.",
      },
      {
        icon: Briefcase,
        title: "Limited Liability of Partners",
        desc: "The partners' liability is limited to their agreed contributions. If the LLP incurs losses or debts, the partners' personal assets are protected — a key advantage of Limited Liability Partnership registration.",
      },
      {
        icon: Wallet,
        title: "Low Cost and Less Compliances",
        desc: "The LLP registration charges are much lower compared to private limited companies. An LLP only needs to file two annual statements — the Annual Return and Statement of Accounts and Solvency — making LLP registration online a cost-effective option.",
      },
      {
        icon: ScrollText,
        title: "No Requirement of Minimum Capital",
        desc: "You can register LLP in India with any capital amount. There's no minimum paid-up capital requirement for LLP incorporation, allowing entrepreneurs to start small and scale easily.",
      },
    ],
    disadvantagesHeading: "Disadvantages of LLP",
    disadvantagesImage: img.warning,
    disadvantages: [
      {
        icon: AlertTriangle,
        title: "Penalty on Late Filing",
        desc: "Even though LLP registration online has fewer compliances, failing to file annual returns on time leads to heavy penalties.",
      },
      {
        icon: XCircle,
        title: "Winding up and dissolution of LLP",
        desc: "If the number of partners falls below two for six consecutive months, the LLP may face dissolution. It can also be dissolved for non-payment of debts.",
      },
      {
        icon: FileWarning,
        title: "Difficulty to raise capital",
        desc: "Since LLPs cannot issue shares, raising venture capital or equity funding is more challenging compared to private limited companies.",
      },
    ],
    whyChoose: {
      heading: "Why Choose AXIAFIN for LLP Registration in Hyderabad",
      body: "We specialize in LLP company registration in Hyderabad, helping entrepreneurs and professionals establish their firms efficiently. Our experts handle every step — from Digital Signature Certificate (DSC) creation to LLP incorporation on the MCA portal — ensuring a hassle-free experience. We provide end-to-end services for LLP registration near you, including drafting the LLP agreement, compliance filing, and post-incorporation support.",
      image: img.team,
    },
    processHeading: "LLP Registration Process in India",
    process: [
      { step: "01", title: "Obtain Digital Signature Certificate (DSC)", desc: "Digital Signature Certificate for all designated partners." },
      { step: "02", title: "Apply for Designated Partner Identification Number (DPIN)", desc: "DPIN application via FiLLiP form." },
      { step: "03", title: "Name Approval", desc: "Reserve a unique LLP name through MCA's RUN-LLP facility." },
      { step: "04", title: "Incorporation of LLP", desc: "Incorporation form filed with the Registrar of Companies." },
      { step: "05", title: "Limited Liability Partnership (LLP) Agreement", desc: "LLP Agreement filed within 30 days of incorporation." },
    ],
    bundle: {
      title: "How Does It Work — Bundle of Services",
      items: [
        "Company Incorporation",
        "ESIC Registration",
        "EPF Registration",
        "GST Registration",
        "MSME Registration",
        "Labour license (Challan to be incurred by the promoters)",
        "PAN Card",
        "TAN Number",
      ],
    },
    cta: {
      headline: "Start Your LLP Registration Today",
      sub: "Ready to register your Limited Liability Partnership in India? Get expert assistance from AXIAFIN, Hyderabad's trusted LLP registration consultants.",
      label: "Contact Now",
    },
  },

  "partnership-firm": {
    slug: "partnership-firm",
    title: "Partnership Firm Registration",
    metaTitle: "Partnership Firm Registration in Hyderabad – Start Your Business Easily",
    metaDescription:
      "Register Partnership Firm Online with AXIAFIN. A partnership firm is one of the most important forms of business organization in India.",
    eyebrow: "Start a Business",
    hero: {
      titleLead: "Partnership Firm Registration",
      titleAccent: "in Hyderabad",
      description:
        "A partnership firm is one of the most important forms of business organization. A partnership firm is one of the most trusted and widely used forms of business organization in India. Under the Indian Partnership Act, 1932, two or more persons can come together to form a partnership company registration and share profits in an agreed ratio.",
      image: img.partnership,
    },
    intro: {
      heading: "What is a Partnership Firm?",
      body: "The partnership firm registration in India process is simple and flexible — making it an ideal choice for startups, traders, and professionals. The agreement that governs the firm's operations is called a partnership deed, and it defines the roles, rights, and responsibilities of all partners. If you're looking to register a partnership firm online or need help with partnership deed registration, our experts at AXIAFIN can guide you through every step.",
      image: img.meeting,
    },
    extraSections: [
      {
        heading: "Governing Law: The Indian Partnership Act, 1932",
        body: "The Indian Partnership Act, 1932 governs and regulates partnership firms in India. The persons who come together to form the partnership firm are known as partners. The partnership firm is constituted under a contract between the partners. The contract between the partners is known as a partnership deed which regulates the relationship among the partners and also between the partners and the partnership firm.",
        image: img.scale,
        align: "right",
      },
      {
        heading: "Unlocking Growth Potential with a Partnership Firm",
        body: "Partnership firms offer flexibility, shared accountability, and minimum compliance overhead — making them perfect for small and mid-size businesses, family enterprises, and professional services firms.",
        image: img.growth,
        align: "left",
      },
    ],
    advantagesHeading: "Advantages of a Partnership Firm",
    advantagesImage: img.signing,
    advantages: [
      {
        icon: Briefcase,
        title: "Easy to Incorporate",
        desc: "Partnership firm registration is simple compared to other business structures like companies or LLPs. You can start by drafting a partnership deed and entering into an agreement with your partners. Registration with the Registrar of Firms is optional — you can also register partnership firm online later if needed.",
      },
      {
        icon: Wallet,
        title: "Less Compliances",
        desc: "The partnership firm registration in Hyderabad or anywhere in India requires fewer compliances. There's no need for DSC (Digital Signature Certificate) or DIN (Director Identification Number). Partners can easily modify terms, making it cost-effective and flexible.",
      },
      {
        icon: HandCoins,
        title: "Quick Decision",
        desc: "Because ownership and management are handled by partners, decision-making is fast and efficient. All partners actively participate in operations, ensuring smooth business execution under a registered partnership firm.",
      },
      {
        icon: ScrollText,
        title: "Sharing of Profits and Losses",
        desc: "Partners share profits and losses equally or as per the ratio mentioned in the partnership deed registration. This structure promotes accountability and teamwork — making partnership firm registration ideal for small and medium businesses.",
      },
    ],
    disadvantagesHeading: "Disadvantages of Partnership Firm",
    disadvantagesImage: img.warning,
    disadvantages: [
      {
        icon: AlertTriangle,
        title: "Unlimited Liability",
        desc: "Partners have unlimited liability, which means they are personally responsible for firm debts. Unlike companies or LLPs, a registered partnership firm does not offer limited liability protection.",
      },
      {
        icon: XCircle,
        title: "No Perpetual Succession",
        desc: "A partnership firm in India ends upon the death, insolvency, or withdrawal of a partner. It lacks the perpetual succession enjoyed by companies or LLPs.",
      },
      {
        icon: Users,
        title: "Limited Resources",
        desc: "A partnership firm can have a maximum of 20 partners. This limits capital investment and scalability, making it less ideal for large-scale operations.",
      },
      {
        icon: FileWarning,
        title: "Difficult to Raise Funds",
        desc: "Since the firm does not have a separate legal entity, it is harder to attract investors or raise large amounts of capital.",
      },
    ],
    whyChoose: {
      heading: "Why Choose AXIAFIN for Partnership Firm Registration in Hyderabad",
      body: "At AXIAFIN, we specialize in partnership firm registration in Hyderabad and across India. Our experts simplify the entire partnership company registration process — from drafting your partnership deed to partnership GST registration and compliance filing. We ensure smooth, accurate, and legal formation of your registered partnership firm so you can focus on growing your business.",
      image: img.team,
    },
    processHeading: "Partnership Firm Formation Process",
    process: [
      { step: "01", title: "Application for Registration", desc: "Application for registration of partnership (Form 1) submitted." },
      { step: "02", title: "Selection of Name of the Partnership Firm", desc: "Choose a unique name and submit it for approval." },
      { step: "03", title: "Certificate of Registration", desc: "Certificate of Registration issued by the Registrar of Firms within 7 working days, subject to departmental approvals." },
    ],
    bundle: {
      title: "Check List of Information Required for Incorporation",
      items: [
        "Application for registration of partnership (Form 1)",
        "Certified original copy of Partnership Deed",
        "Specimen of an affidavit certifying all the details mentioned in the partnership deed and documents are correct",
        "PAN card and address proof of the partners",
        "PAN card and address of the firm",
        "Proof of principal place of business of the firm (ownership documents or rental/lease agreement)",
      ],
    },
    howItWorks: {
      title: "How Does It Work",
      items: [
        "Partnership Deed Drafting",
        "Filing of deed and other documents with the Registrar of Firms",
        "Issue of registration certificate",
        "GST Registration",
        "MSME Registration",
        "Labour license (Challan to be incurred by the promoters)",
        "PAN Card",
        "TAN Number",
      ],
    },
    cta: {
      headline: "Register Your Partnership Firm Online Today",
      sub: "Get started with your partnership firm registration in India with expert support from AXIAFIN. We offer transparent pricing, quick processing, and personalized guidance for every client.",
      label: "Contact Now",
    },
  },

  "one-person-company": {
    slug: "one-person-company",
    title: "One Person Company (OPC)",
    metaTitle: "One Person Company Registration in India | OPC in Hyderabad",
    metaDescription:
      "Empowering Entrepreneurs with Hassle-Free OPC Incorporation. The Companies Act, 2013 introduced the concept of One Person Company Registration.",
    eyebrow: "Start a Business",
    hero: {
      titleLead: "One Person Company",
      titleAccent: "Registration in India",
      description:
        "Empowering Entrepreneurs with Hassle-Free OPC Incorporation. The Companies Act, 2013 introduced the concept of One Person Company Registration — a business structure for single entrepreneurs who want to enjoy the benefits of a private limited company.",
      image: img.laptop,
    },
    intro: {
      heading: "What is a One Person Company (OPC)?",
      body: "A single person company registration allows a single individual to establish and manage a company with limited liability, perpetual succession, and a separate legal entity. Before this Act, solo entrepreneurs could only opt for a sole proprietorship since two directors and two members were required for a company. With opc registration, one person can now start a company while enjoying the features of a private company and the simplicity of a proprietorship.",
      image: img.meeting,
    },
    extraSections: [
      {
        heading: "Legal Framework of OPC Registration",
        body: "As per Section 2(62) of the Companies Act, 2013, a company can be formed with just 1 director and 1 member — both can be the same individual. One man company registration is now possible in India, and opc registration online makes it faster and easier for entrepreneurs to incorporate their business legally. With opc registration, one person can now start a company while enjoying the features of a private company and the simplicity of a proprietorship.",
        image: img.scale,
        align: "right",
      },
    ],
    advantagesHeading: "Advantages of One Person Company Registration",
    advantagesImage: img.signing,
    advantages: [
      {
        icon: UserCheck,
        title: "Legal status",
        desc: "A single person company registration provides a separate legal entity status. The member's liability is limited to their shares, protecting personal assets from business debts.",
      },
      {
        icon: Building2,
        title: "Easy to obtain funds",
        desc: "Since an OPC is a private company, raising capital from banks, angel investors, and venture capitalists becomes simpler than in a proprietorship.",
      },
      {
        icon: HandCoins,
        title: "Less compliances",
        desc: "The Companies Act, 2013 provides certain exemptions to opc pvt ltd registration, such as simplified annual filings and no requirement for a company secretary to sign accounts.",
      },
      {
        icon: Scale,
        title: "Easy incorporation",
        desc: "Register one person company with minimal requirements: one member and one nominee. The minimum authorized capital is ₹1 lakh, with no minimum paid-up capital required.",
      },
      {
        icon: Briefcase,
        title: "Easy to manage",
        desc: "A single member manages the OPC, making decision-making quick and efficient, without conflicts or delays.",
      },
      {
        icon: ScrollText,
        title: "Perpetual succession",
        desc: "Even with a single member, opc registration process ensures continuity. A nominee takes over in case of the member's demise.",
      },
    ],
    disadvantagesHeading: "Disadvantages of OPC",
    disadvantagesImage: img.warning,
    disadvantages: [
      {
        icon: AlertTriangle,
        title: "Suitable for only small business",
        desc: "An OPC cannot have more than one member, limiting the ability to raise capital like a private limited company.",
      },
      {
        icon: XCircle,
        title: "Restriction of business activities",
        desc: "An OPC cannot carry out Non-Banking Financial Investment activities or be converted to a Section 8 charitable company.",
      },
      {
        icon: Users,
        title: "Ownership and management",
        desc: "The sole member is also the director, which blurs the line between ownership and management.",
      },
    ],
    whyChoose: {
      heading: "Why Choose AXIAFIN for Your OPC Registration",
      body: "We provide expert guidance for opc registration online and single person company registration in Hyderabad and across India. Our services include: Assistance with one person company registration documents, Register OPC company online with full compliance, and Post-incorporation support — Certificate of Commencement, Auditor Appointment, ROC filings.",
      image: img.team,
    },
    processHeading: "One Person Company Formation Process",
    process: [
      { step: "01", title: "Minimum and Maximum of one member", desc: "OPC requires exactly one member who becomes the sole shareholder." },
      { step: "02", title: "Nominee Appointment", desc: "A nominee should be appointed before incorporation. Consent of the nominee should be obtained in Form INC-3." },
      { step: "03", title: "Name Selection", desc: "The name of the OPC must be selected as per the provisions of the Companies (Incorporation Rules) 2014." },
      { step: "04", title: "Authorized Capital", desc: "Minimum authorized capital of Rs.1 lakh and DSC of the proposed director." },
      { step: "05", title: "Registered Office", desc: "Proof of registered office of the OPC and filing of incorporation forms with MCA." },
      { step: "06", title: "Certificate of Incorporation", desc: "Issue of the Certificate of Incorporation by the ROC." },
    ],
    bundle: {
      title: "How Does It Work",
      items: [
        "Apply for DSC",
        "Apply for DIN",
        "Name Approval Application",
        "Preparing Required Documents",
        "Filing of Forms With MCA",
        "Issue of the Certificate of Incorporation",
      ],
    },
    cta: {
      headline: "Embracing the One Person Company",
      sub: "Take the First Step Toward Growth and Stability with AXIAFIN",
      label: "Contact Now",
    },
  },

  proprietorship: {
    slug: "proprietorship",
    title: "Proprietorship Firm Registration",
    metaTitle: "Proprietorship Firm Registration in Hyderabad",
    metaDescription:
      "Embracing Entrepreneurship: Unveiling the World of Proprietorships. Start Your Sole Proprietorship Firm in Hyderabad with AXIAFIN.",
    eyebrow: "Start a Business",
    hero: {
      titleLead: "Proprietorship Firm",
      titleAccent: "Registration in Hyderabad",
      description:
        "Embracing Entrepreneurship: Unveiling the World of Proprietorships. A sole proprietorship form of business is a common business structure in India. A sole proprietorship is the simplest and most common form of business registration in India. It's ideal for individuals looking to start a business with minimal investment and complete control.",
      image: img.shop,
    },
    intro: {
      heading: "Start Your Sole Proprietorship Firm in Hyderabad",
      body: "At AXIAFIN, we help entrepreneurs easily complete proprietorship firm registration in Hyderabad and guide them through all legal and compliance requirements. A proprietorship firm is owned and managed by a single individual, known as the self proprietor or sole trader. The owner enjoys full profits and bears all losses. You can register a sole proprietorship to run businesses such as boutiques, salons, retail stores, or small-scale manufacturing units — right from your home or commercial space.",
      image: img.meeting,
    },
    extraSections: [
      {
        heading: "Unlocking Growth Potential with a Sole Proprietorship",
        body: "A sole proprietorship business can be started from home or on a premise with a minimum amount. The control of the business is solely in the hands of the single proprietor/owner who invests in the business. He bears all the losses of the business and enjoys all the profits. He can appoint persons for conducting the business, but the ownership will rest solely with him. Many local businesses such as grocery stores, parlours, boutiques, retail stores, etc., can be established as a sole proprietorship firm. Even small traders and manufacturers can establish a sole proprietorship firm.",
        image: img.shop,
        align: "right",
      },
    ],
    advantagesHeading: "Advantages of a Proprietorship",
    advantagesImage: img.signing,
    advantages: [
      {
        icon: HandCoins,
        title: "Less Compliance",
        desc: "Starting a sole proprietor business is simple and cost-effective. It involves minimal formalities compared to other business structures.",
      },
      {
        icon: Briefcase,
        title: "Full Control of Business",
        desc: "As a sole entrepreneur, you have 100% control over your operations, ensuring flexibility and faster decision-making.",
      },
      {
        icon: Wallet,
        title: "Quick Decision Making",
        desc: "You don't need approvals from partners or directors — making it easier to make instant business decisions.",
      },
    ],
    disadvantagesHeading: "Disadvantages of Sole Proprietorship",
    disadvantagesImage: img.warning,
    disadvantages: [
      {
        icon: AlertTriangle,
        title: "Unlimited Liability",
        desc: "The sole proprietor is personally responsible for business liabilities and debts.",
      },
      {
        icon: XCircle,
        title: "No Perpetual Succession",
        desc: "Since the business depends on one individual, it ends upon the owner's death or incapacity.",
      },
      {
        icon: FileWarning,
        title: "Limited Fundraising Options",
        desc: "Because there's no separate legal entity, it can be challenging to raise external funding.",
      },
    ],
    whyChoose: {
      heading: "Why Choose AXIAFIN for Your Proprietorship Registration in Hyderabad",
      body: "We provide end-to-end proprietorship registration services in Hyderabad, helping you choose the right structure based on your business needs, tax implications, and budget. Our experts assist with PAN applications, trade licenses, GST registration, and ongoing Income Tax & GST compliance. Take the first step toward registering a sole proprietorship and ensure your business runs legally and smoothly.",
      image: img.team,
    },
    processHeading: "Procedure for Proprietorship Firm Registration in Hyderabad",
    process: [
      { step: "01", title: "Apply for PAN Card", desc: "If you don't already have one, apply for a PAN card in your name." },
      { step: "02", title: "Choose a Business Name", desc: "Select a unique name for your proprietorship firm." },
      { step: "03", title: "Open a Current Bank Account", desc: "Open a business account under the firm's name for all transactions." },
      { step: "04", title: "Get Required Registrations", desc: "Register under the Shops and Establishments Act (Trade License), obtain GST registration if turnover exceeds ₹20 lakh, and optionally register under MSME (Udyam Registration) for benefits." },
    ],
    bundle: {
      title: "Documents Required for Proprietorship Firm Registration",
      items: [
        "Aadhaar Card",
        "PAN Card",
        "Proof of Registered Office",
        "Bank Account Details",
      ],
    },
    cta: {
      headline: "Embrace Proprietorship and Start Your Journey",
      sub: "Take the first step toward growth and stability with AXIAFIN — your trusted partner for proprietorship firm registration near you in Hyderabad.",
      label: "Contact Now",
    },
  },

  society: {
    slug: "society",
    title: "Society Registration",
    metaTitle: "Society Registration in India | Hyderabad | AXIAFIN",
    metaDescription:
      "Empowering Communities, Understanding Societies. Society registration in India is governed under the Society Registration Act, 1860 — AXIAFIN provides expert society registration services in Hyderabad.",
    eyebrow: "Start a Business",
    hero: {
      titleLead: "Society",
      titleAccent: "Registration",
      description:
        "Empowering Communities, Understanding Societies. A society is an association of several individuals combined using a mutual accord to deliberate, govern and act cooperatively for some communal purpose.",
      image: img.community2,
    },
    intro: {
      heading: "What is Society Registration?",
      body: "A society registration is the process of legally registering an association of individuals who come together for a common purpose — such as charitable activities, education, sports, music, culture, religion, art, or social welfare. In India, society registration in India is governed under the Society Registration Act, 1860, which provides legal recognition and ensures that the society can own property, open bank accounts, and file legal claims. With register society online services, registering a society has become simpler and more accessible for organizations and individuals.",
      image: img.charity,
    },
    extraSections: [
      {
        heading: "Legal Framework for Society Registration",
        body: "A society can be created by a minimum of 7 members. Members can include individuals from India, companies, foreigners, or other registered societies for preparing the Memorandum of Association. Society registration in Hyderabad is maintained by the state government, so the application must be submitted to the relevant authority where the registered office of the society is situated. Similar to Partnership firms, society can also be either unregistered or registered. But, only the registered societies will be able to withstand consigned properties and/or have an ensemble filed against or by the society.",
        image: img.scale,
        align: "right",
        bullets: [
          "Choosing the society name",
          "Preparing the Memorandum of Association",
          "Drafting Rules & Regulations for the society",
          "Only registered societies can hold property legally and can file or defend legal suits",
        ],
      },
      {
        heading: "Unlocking Growth Potential with a Society",
        body: "For Society registration, the establishing members must agree with the name of society first and then prepare for the Memorandum, followed by Rules & Regulations of the society. Society registration is maintained by state governments. Thus, the application for society registration must be created to the specific authority of the state, where the registered office of the society is situated.",
        image: img.govtBuilding,
        align: "left",
      },
    ],
    advantagesHeading: "Why Register a Society?",
    advantagesImage: img.signing,
    advantages: [
      {
        icon: Landmark,
        title: "Legal Recognition",
        desc: "Gives the society a separate legal entity for contracts, assets, and bank accounts.",
      },
      {
        icon: UserCheck,
        title: "Trustworthiness",
        desc: "Registered societies are recognized by the government and public for transparency.",
      },
      {
        icon: HandCoins,
        title: "Eligibility for Grants & Funding",
        desc: "Registered societies can receive grants, donations, and other support.",
      },
      {
        icon: Briefcase,
        title: "Continuity",
        desc: "Societies have perpetual succession and can continue operations despite changes in membership.",
      },
    ],
    whyChoose: {
      heading: "Why Choose AXIAFIN for Your Society Registration",
      body: "At AXIAFIN, we provide expert society registration services in Hyderabad and across India. Our team handles the entire process from selecting the society name and drafting the Memorandum of Association to filing with the Registrar of Societies — including online registration where available. We ensure complete legal compliance so your society can focus on its communal purpose.",
      image: img.team,
    },
    processHeading: "Society Registration Process",
    process: [
      { step: "01", title: "Selection of society name", desc: "Choose a unique name for the society." },
      { step: "02", title: "Drafting Memorandum of Association (MOA)", desc: "Prepare the Memorandum of Association." },
      { step: "03", title: "Preparing Rules & Regulations", desc: "Drafting Rules & Regulations for the society." },
      { step: "04", title: "Submission of documents", desc: "Submission of documents to Registrar of Societies." },
      { step: "05", title: "Payment of fees", desc: "Payment of applicable society registration fees." },
      { step: "06", title: "Issuance of Certificate of Registration", desc: "Online registration for society is also available, allowing applicants to register a society easily without visiting government offices." },
    ],
    cta: {
      headline: "Embracing the Society",
      sub: "Take the First Step Toward Growth and Stability with AXIAFIN",
      label: "Contact Now",
    },
  },

  trust: {
    slug: "trust",
    title: "Trust Registration",
    metaTitle: "Trust Registration in Hyderabad | Charitable, Private & Public Trusts | AXIAFIN",
    metaDescription:
      "Nurturing Social Responsibility Through Trust Formation. AXIAFIN provides expert charitable, private, and public trust registration services in Hyderabad under the Indian Trust Act, 1882.",
    eyebrow: "Start a Business",
    hero: {
      titleLead: "Trust",
      titleAccent: "Registration in Hyderabad",
      description:
        "Nurturing Social Responsibility Through Trust Formation. Anyone can register a trust in India under the Indian Trust Act, 1882. This Act governs private trust registration across India, ensuring legal protection and structure for charitable and non-charitable purposes.",
      image: img.trust,
    },
    intro: {
      heading: "About Trust Registration in Hyderabad",
      body: "While the Indian Trust Act, 1882 applies across India, certain charitable trust registrations are governed by state-specific laws like The Maharashtra Public Trust Act, 1950. A trust registration can be private (for specific beneficiaries) or public (for charitable or social causes). Whether you're creating a charitable foundation trust, religious trust, or non-profit organization, proper registration helps you gain credibility, tax exemptions, and donor confidence.",
      image: img.charity2,
    },
    extraSections: [
      {
        heading: "Unlocking Growth Potential with a Trust",
        body: "Trust registration provides legal recognition, allowing your trust to own property, enter into contracts, and pursue its charitable or private objectives. Registered trusts are eligible for income-tax exemption under Section 12A and donations can attract Section 80G deductions for donors — making fundraising significantly easier.",
        image: img.handshake,
        align: "right",
      },
      {
        heading: "Parties in a Trust",
        body: "A trust involves three key parties: the Author/Settlor/Trustor/Donor (the person who wants to transfer his property and reposes confidence on another for the creation of the trust), the Trustee (the person who accepts the confidence for the creation of the trust), and the Beneficiary (the person who will benefit from the trust in the near future). Each party has distinct responsibilities defined in the trust deed.",
        image: img.scale,
        align: "left",
      },
    ],
    advantagesHeading: "Types of Trusts",
    advantagesImage: img.documents,
    advantages: [
      {
        icon: UserCheck,
        title: "Private Trust Registration",
        desc: "A private trust is formed for a specific group of beneficiaries. Example: A trust created for family members or friends of the author.",
      },
      {
        icon: Users,
        title: "Public Trust Registration",
        desc: "A public trust serves the general public — typically for charitable, educational, or religious purposes. Example: NGOs, charitable foundations, and public welfare organizations.",
      },
      {
        icon: Landmark,
        title: "Legal Recognition",
        desc: "A registered trust has a legal identity, enabling it to own property, enter contracts, and sue or be sued.",
      },
      {
        icon: HandCoins,
        title: "Tax Benefits",
        desc: "Charity trust registration allows access to income tax exemptions under Section 12A and 80G.",
      },
      {
        icon: ShieldCheck,
        title: "Credibility for Donations",
        desc: "Donors prefer contributing to legally registered trusts.",
      },
      {
        icon: Briefcase,
        title: "Perpetual Succession",
        desc: "The trust continues to exist even after the lifetime of the trustees. Transparency — Registration ensures accountability in fund usage and trust operations.",
      },
    ],
    whyChoose: {
      heading: "Why Choose AXIAFIN for Trust Formation",
      body: "We specialize in: Charitable Trust Registration in Hyderabad, Private & Public Trust Registration, Trust Deed Drafting and Filing, Charitable Society Registration, Charitable Trust GST Registration Assistance, and Foundation Trust Registration. Our experts ensure complete legal compliance and timely filing under the Charitable Trust Registration Act.",
      image: img.team,
    },
    process: [
      { step: "01", title: "Trust Deed Drafting", desc: "Prepare the Trust Deed on stamp paper as per applicable State stamp law." },
      { step: "02", title: "Documentation", desc: "Collate identity, address proof of trustees, settlor, and PAN of the trust." },
      { step: "03", title: "Witnesses & Execution", desc: "Two witnesses sign the Trust Deed during registration." },
      { step: "04", title: "Registrar Submission", desc: "Submit Trust Deed and supporting documents to the Sub-Registrar." },
      { step: "05", title: "12A / 80G Filing", desc: "Income-tax exemption applications filed and tracked to certificate issuance." },
    ],
    bundle: {
      title: "Documents Required for Trust Registration",
      items: [
        "Trust Deed (on stamp paper)",
        "Identity and address proof of trustees and settlor",
        "Passport-size photographs of trustees",
        "PAN card of the trust",
        "Proof of registered office (rental agreement or ownership proof)",
        "Two witnesses during deed registration",
      ],
    },
    cta: {
      headline: "Embracing the Trust",
      sub: "Take the First Step Toward Growth and Stability with AXIAFIN",
      label: "Contact Now",
    },
  },

  "msme-registration": {
    slug: "msme-registration",
    title: "MSME / Udyam Registration",
    metaTitle: "MSME Registration in Hyderabad | Empowering Small Businesses",
    metaDescription:
      "Empowering Small Industries. Micro, Small, and Medium Enterprises (MSMEs) form the backbone of the Indian economy.",
    eyebrow: "Registrations",
    hero: {
      titleLead: "MSME Registration",
      titleAccent: "Empowering Small Industries",
      description:
        "Empowering Small Businesses. Micro, Small, and Medium Enterprises (MSMEs) form the backbone of the Indian economy, recognized for their pivotal role in driving growth and employment. The Government of India extends MSME registration to these industries, facilitating their establishment and fostering growth through various benefits.",
      image: img.factory,
    },
    intro: {
      heading: "Revised MSME Classification",
      body: "The current MSME classification considers both investment and annual turnover to determine eligibility. At AXIAFIN, we provide expert MSME/Udyam registration services in Hyderabad to help businesses secure financial aid, tax rebates, and operational growth.",
      image: img.msmeFactory,
    },
    extraSections: [
      {
        heading: "MSME Registration Eligibility",
        body: "Businesses across manufacturing, service industries, wholesale, and retail trade meeting the revised MSME criteria can apply for registration. Eligible entities include individuals, startups, private and public limited companies, sole proprietorships, partnership firms, and Limited Liability Partnerships (LLPs).",
        image: img.growth,
        align: "right",
      },
    ],
    advantagesHeading: "MSME Classification & Benefits",
    advantagesImage: img.signing,
    advantages: [
      {
        icon: Factory,
        title: "Micro",
        desc: "Investment < Rs.1 crore & Annual Turnover < Rs.5 crore.",
      },
      {
        icon: HandCoins,
        title: "Small",
        desc: "Investment < Rs.10 crore & Annual Turnover < Rs.50 crore.",
      },
      {
        icon: ShieldCheck,
        title: "Medium",
        desc: "Investment < Rs.50 crore & Annual Turnover < Rs.250 crore.",
      },
      {
        icon: Wallet,
        title: "Cheaper Bank Loans",
        desc: "MSME registration entitles businesses to avail loans at reduced interest rates.",
      },
      {
        icon: ScrollText,
        title: "Access to Government Tenders",
        desc: "Integration with government portals facilitates easy access to tenders.",
      },
      {
        icon: Briefcase,
        title: "Tax & ISO Benefits",
        desc: "Exemption from Direct Taxes, ISO Certification Fees Reimbursement, and electricity bill concessions.",
      },
    ],
    whyChoose: {
      heading: "Why Choose AXIAFIN for MSME Registration",
      body: "MSME registration empowers small industries by providing access to a range of benefits, facilitating growth, and contributing to the overall economic development of the nation.",
      image: img.team,
    },
    process: [
      { step: "01", title: "Eligibility Check", desc: "Investment + turnover thresholds for Micro / Small / Medium classification." },
      { step: "02", title: "Document Pack", desc: "Aadhaar, PAN, GSTIN, and bank details collated." },
      { step: "03", title: "Udyam Filing", desc: "Application filed on the Udyam Registration portal." },
      { step: "04", title: "Certificate Delivery", desc: "Udyam Registration Number and e-certificate delivered." },
    ],
    bundle: {
      title: "MSME Registration Benefits",
      items: [
        "Cheaper Bank Loans at reduced interest rates",
        "Cost Reduction — Rebates and concessions on patents",
        "Access to Government Tenders",
        "One Time Settlement Fee for non-paid amounts",
        "Access to Government Schemes (CGS, CLCSS, etc.)",
        "Priority Sector Lending eligibility",
        "Security Deposit Waiver for e-tenders",
        "Barcode Registration Subsidy",
        "Exemption from Direct Taxes",
        "ISO Certification Fees Reimbursement",
        "Electricity Bills Concession",
        "Special Consideration in International Trade Fairs",
      ],
    },
    cta: {
      headline: "Embracing the MSME Registration",
      sub: "Take the First Step Toward Growth and Stability with AXIAFIN",
      label: "Contact Now",
    },
  },

  "startup-india": {
    slug: "startup-india",
    title: "Startup India / DPIIT Recognition",
    metaTitle: "Startup India Registration in Hyderabad | DPIIT Recognition",
    metaDescription:
      "Empowering Startups: Your Path to Success. Startup India is an initiative launched by the Government of India to nurture and support budding entrepreneurs.",
    eyebrow: "Registrations",
    hero: {
      titleLead: "Startup India",
      titleAccent: "Fostering Innovation and Growth",
      description:
        "Empowering Startups: Your Path to Success. Startup India is an initiative launched by the Government of India to nurture and support budding entrepreneurs and innovative startups across the country. Under the Startup India Action Plan, startups that meet specific criteria are eligible to apply for recognition under the program, unlocking a range of benefits and support mechanisms.",
      image: img.startup,
    },
    intro: {
      heading: "Eligibility Criteria for Startup Recognition",
      body: "At AXIAFIN, we provide expert DPIIT recognition services in Hyderabad to help your business unlock government benefits, tax exemptions, and funding opportunities.",
      image: img.startupCelebration,
    },
    extraSections: [
      {
        heading: "Tax Exemption under Section 80IAC",
        body: "Once recognized under Startup India, startups may apply for tax exemption under Section 80IAC of the Income Tax Act. This provision allows eligible startups to enjoy a tax holiday for three consecutive financial years out of their first ten years since incorporation, providing a significant boost to their financial sustainability and growth prospects.",
        image: img.growth,
        align: "right",
      },
      {
        heading: "Angel Tax Exemption — Section 56 of the Income Tax Act",
        body: "Angel Tax Exemption, governed by Section 56 of the Income Tax Act, provides relief to startups recognized by the Department for Promotion of Industry and Internal Trade (DPIIT). This exemption shields startups from hefty tax liabilities, particularly concerning the valuation of shares issued to investors. The startup must be officially recognized by the DPIIT to qualify, and the aggregate amount of paid-up share capital and share premium of the startup, after the proposed share issuance, should not exceed INR 25 Crore. Angel Tax Exemption serves as a crucial lifeline for startups seeking investment. It prevents startups from facing punitive tax burdens on the excess valuation of shares issued to angel investors or through seed funding rounds.",
        image: img.angelTaxMeeting,
        align: "left",
      },
    ],
    advantagesHeading: "Eligibility Criteria for Startup Recognition",
    advantagesImage: img.boardroom,
    advantages: [
      {
        icon: Rocket,
        title: "Legal Structure",
        desc: "The startup should be incorporated as a private limited company or registered as a partnership firm or a limited liability partnership (LLP).",
      },
      {
        icon: HandCoins,
        title: "Turnover Limit",
        desc: "The annual turnover of the startup should not exceed INR 100 Crores in any of the previous financial years.",
      },
      {
        icon: ScrollText,
        title: "Age of Startup",
        desc: "An entity can qualify as a startup up to 10 years from the date of its incorporation.",
      },
      {
        icon: Briefcase,
        title: "Innovative Approach",
        desc: "The startup should be focused on innovation or improvement of existing products, services, or processes, with the potential to create employment and generate wealth.",
      },
      {
        icon: UserCheck,
        title: "Recognition as a Startup",
        desc: "The entity must be officially recognized as a startup under the Startup India program.",
      },
      {
        icon: Building2,
        title: "Date of Incorporation",
        desc: "The startup should have been incorporated after 1st April 2016, aligning with the commencement of the Startup India initiative.",
      },
    ],
    process: [
      { step: "01", title: "Eligibility Review", desc: "Only private limited companies or limited liability partnerships (LLPs) are eligible for tax exemption under Section 80IAC." },
      { step: "02", title: "Incorporation Date", desc: "The startup should have been incorporated after 1st April 2016." },
      { step: "03", title: "DPIIT Recognition", desc: "The startup must be recognized by DPIIT." },
      { step: "04", title: "Tax Exemption Application", desc: "Apply for tax exemption under Section 80IAC for 3 consecutive financial years." },
      { step: "05", title: "Angel Tax Exemption", desc: "Apply for relief under Section 56 - paid-up share capital and share premium not exceeding INR 25 Crore." },
    ],
    cta: {
      headline: "Embracing the Startup India Advantage",
      sub: "Take the First Step Toward Growth and Stability with AXIAFIN",
      label: "Contact Now",
    },
  },

  "angel-tax-exemption": {
    slug: "angel-tax-exemption",
    title: "Angel Tax Exemption",
    metaTitle: "Angel Tax Exemption | Section 56 of the Income Tax Act | AXIAFIN",
    metaDescription:
      "Facilitating Startup Investments. Angel Tax Exemption under Section 56 of the Income Tax Act provides relief to DPIIT-recognized startups. AXIAFIN helps you apply and qualify.",
    eyebrow: "Registrations",
    hero: {
      titleLead: "Angel Tax",
      titleAccent: "Exemption",
      description:
        "Facilitating Startup Investments. Tax Exemption under Section 56 of the Income Tax Act (Angel Tax). Angel Tax Exemption, governed by Section 56 of the Income Tax Act, provides relief to startups recognized by the Department for Promotion of Industry and Internal Trade (DPIIT).",
      image: img.investor,
    },
    intro: {
      heading: "What is Angel Tax Exemption?",
      body: "This exemption shields startups from hefty tax liabilities, particularly concerning the valuation of shares issued to investors. Angel Tax Exemption empowers startups to attract essential funding without the fear of adverse tax implications, thereby facilitating their journey towards success and sustainability.",
      image: img.startupInvest,
    },
    extraSections: [
      {
        heading: "Unlocking Growth Potential with Angel Tax Exemption",
        body: "Angel Tax Exemption serves as a crucial lifeline for startups seeking investment. It prevents startups from facing punitive tax burdens on the excess valuation of shares issued to angel investors or through seed funding rounds. By offering this exemption, the government encourages investment in startups, fostering innovation, entrepreneurship, and economic growth.",
        image: img.growth,
        align: "right",
      },
      {
        heading: "Benefits of Angel Tax Exemption",
        body: "Angel Tax Exemption serves as a crucial lifeline for startups seeking investment. It prevents startups from facing punitive tax burdens on the excess valuation of shares issued to angel investors or through seed funding rounds. By offering this exemption, the government encourages investment in startups, fostering innovation, entrepreneurship, and economic growth.",
        image: img.handshake,
        align: "left",
      },
    ],
    advantagesHeading: "Eligibility Criteria for Tax Exemption",
    advantagesImage: img.signing,
    advantages: [
      {
        icon: ShieldCheck,
        title: "DPIIT Recognition",
        desc: "The startup must be officially recognized by the DPIIT to qualify for Angel Tax Exemption.",
      },
      {
        icon: HandCoins,
        title: "Financial Threshold",
        desc: "The aggregate amount of paid-up share capital and share premium of the startup, after the proposed share issuance, should not exceed INR 25 Crore.",
      },
      {
        icon: Rocket,
        title: "Lifeline for Funding",
        desc: "Prevents startups from facing punitive tax burdens on the excess valuation of shares issued to angel investors or through seed funding rounds.",
      },
      {
        icon: TrendingUp,
        title: "Encourages Innovation",
        desc: "By offering this exemption, the government encourages investment in startups, fostering innovation, entrepreneurship, and economic growth.",
      },
    ],
    whyChoose: {
      heading: "Why Choose AXIAFIN for Your Angel Tax Exemption",
      body: "Angel Tax Exemption empowers startups to attract essential funding without the fear of adverse tax implications, thereby facilitating their journey towards success and sustainability. Our team handles the entire application process — from DPIIT recognition to Section 56 declaration filing — so you can focus on building your business.",
      image: img.team,
    },
    process: [
      { step: "01", title: "DPIIT Recognition", desc: "First obtain DPIIT recognition under the Startup India program." },
      { step: "02", title: "Threshold Check", desc: "Confirm paid-up capital + share premium does not exceed INR 25 Crore." },
      { step: "03", title: "Declaration Filing", desc: "File the Section 56 angel-tax exemption declaration with DPIIT." },
      { step: "04", title: "Approval & Compliance", desc: "Receive approval and stay compliant with conditions throughout the funding round." },
    ],
    cta: {
      headline: "Embracing the Angel Tax Exemption",
      sub: "Take the First Step Toward Growth and Stability with AXIAFIN",
      label: "Contact Now",
    },
  },

  "import-export-code": {
    slug: "import-export-code",
    title: "Import Export Code (IEC)",
    metaTitle: "Import and Export Code | Facilitating International Trade",
    metaDescription:
      "An Importer-Exporter Code (IEC) is a crucial identification number required for businesses engaged in import and export activities in India.",
    eyebrow: "Registrations",
    hero: {
      titleLead: "Import and",
      titleAccent: "Export Code",
      description:
        "Facilitating International Trade. An Importer-Exporter Code (IEC) is a crucial identification number required for businesses engaged in import and export activities in India. It is mandatory for any individual or entity involved in exporting goods from India or importing goods into India.",
      image: img.exports,
    },
    intro: {
      heading: "Pre-Requisites for Applying for IEC",
      body: "The IEC serves as a unique identifier for businesses participating in international trade transactions. IEC registration is a fundamental requirement for businesses involved in international trade operations. By obtaining an IEC, businesses gain access to various benefits and opportunities in the global marketplace, facilitating smoother import and export processes. At AXIAFIN, we provide expert IEC registration services in Hyderabad.",
      image: img.architecture,
    },
    advantagesHeading: "Pre-Requisites for Applying for IEC",
    advantagesImage: img.signing,
    advantages: [
      {
        icon: Globe,
        title: "Business Entity",
        desc: "The IEC may be applied on behalf of various types of business entities, including proprietorships, partnerships, LLPs, limited companies, trusts, HUFs, and societies.",
      },
      {
        icon: ScrollText,
        title: "PAN",
        desc: "The business entity must have a PAN (Permanent Account Number) issued by the Income Tax Department.",
      },
      {
        icon: HandCoins,
        title: "Bank Account",
        desc: "A bank account in the name of the business entity is necessary for IEC application purposes.",
      },
      {
        icon: Briefcase,
        title: "Valid Address",
        desc: "The business entity must have a valid physical address. The Directorate General of Foreign Trade (DGFT) may conduct address verification before issuing the IEC.",
      },
    ],
    processHeading: "Application Process",
    process: [
      { step: "01", title: "Submission of Application", desc: "The application for IEC can be submitted to the DGFT online through the official portal." },
      { step: "02", title: "Document Verification", desc: "The DGFT may verify the PAN, bank account details, and firm details provided in the application." },
      { step: "03", title: "Issuance of IEC", desc: "Upon successful verification, the DGFT will issue the IEC to the applicant." },
    ],
    cta: {
      headline: "Embracing the Import and Export code",
      sub: "Take the First Step Toward Growth and Stability with AXIAFIN",
      label: "Contact Now",
    },
  },

  "roc-filing": {
    slug: "roc-filing",
    title: "ROC Forms & Filings",
    metaTitle: "ROC Forms | Navigating Compliance Obligations Under the Companies Act 2013",
    metaDescription:
      "ROC (Registrar of Companies) forms are documents required to be filed with the Registrar of Companies under the Companies Act, 2013.",
    eyebrow: "Return Filing",
    hero: {
      titleLead: "ROC Forms",
      titleAccent: "& Compliance",
      description:
        "ROC (Registrar of Companies) forms are documents required to be filed with the Registrar of Companies under the Companies Act, 2013. The compliance aspects imposed by the Companies Act 2013 seem to be cumbersome but may not be so if the companies have the appropriate knowledge regarding the same. The Act provides for filing of various forms which originate from the company or the director, chartered accountant, company secretary with the government or Registrar of Companies (ROC).",
      image: img.ledger,
    },
    intro: {
      heading: "Navigating Compliance Obligations Under the Companies Act 2013",
      body: "The Companies Act 2013 entails filing obligations, including forms and reports submitted to the ROC or government bodies. These filings ensure transparency, accountability, and regulatory adherence in corporate operations. The Act mandates the submission of various forms covering aspects such as incorporation, annual returns, financial statements, and changes in company structure or management. Companies, directors, chartered accountants, and company secretaries each play a distinct role in ensuring compliance with the Act's provisions.",
      image: img.meeting,
    },
    advantagesHeading: "Key Aspects of Compliance",
    advantagesImage: img.signing,
    advantages: [
      {
        icon: ScrollText,
        title: "Forms and Filings",
        desc: "The Act mandates the submission of various forms covering aspects such as incorporation, annual returns, financial statements, and changes in company structure or management.",
      },
      {
        icon: Users,
        title: "Stakeholder Responsibilities",
        desc: "Companies, directors, chartered accountants, and company secretaries each play a distinct role in ensuring compliance with the Act's provisions.",
      },
      {
        icon: UserCheck,
        title: "ROC and Government Interface",
        desc: "Compliance filings are submitted to the ROC or relevant government authorities, facilitating regulatory oversight and enforcement.",
      },
      {
        icon: Briefcase,
        title: "Incorporation Forms (INC)",
        desc: "INC 20A (Declaration for commencement of business), INC 22 (Change of registered office), INC 24 (Approval for name change), INC 32 (SPICe), INC 33 (e-MOA), INC 34 (e-AOA).",
      },
      {
        icon: HandCoins,
        title: "Annual Filings (AOC, MGT, ADT)",
        desc: "AOC 4 (Financial Statements), MGT 9 (Extract of annual return), MGT 14 (Resolutions), ADT 1 (Auditor appointment), ADT 2 (Auditor removal), ADT 3 (Resignation of auditor).",
      },
      {
        icon: ShieldCheck,
        title: "Director Forms (DIR)",
        desc: "DIR 2 (Consent to act as director), DIR 3 (DIN application), DIR 3 KYC, DIR 3C, DIR 5 (Surrender of DIN), DIR 6 (Change in DIN particulars), DIR 11 (Resignation), DIR 12 (Particulars of Directors).",
      },
    ],
    processHeading: "ROC Forms Filing Process",
    process: [
      { step: "01", title: "Compliance Calendar", desc: "Map every due date for the financial year." },
      { step: "02", title: "Books & Resolutions", desc: "Finalise books, board meeting minutes, and AGM resolutions." },
      { step: "03", title: "Form Preparation", desc: "MGT-7, AOC-4, DIR-3 KYC, and supporting attachments." },
      { step: "04", title: "Filing & SRN Tracking", desc: "Filings submitted with DSC and SRNs archived in your portal." },
    ],
    tables: [
      {
        heading: "ROC Forms — Complete Reference",
        description:
          "The full list of ROC forms under the Companies Act 2013 — from incorporation (INC) to charges (CHG), management & resolutions (MGT), beneficial ownership (BEN), accounts (AOC), auditors (ADT), and directors (DIR). Each form is either electronic (e-Form) or Physical.",
        headers: ["Form Number", "Description", "Type of Form"],
        rows: [
          ["INC 20A", "Declaration given by the director for the commencement of business for a company", "e-Form"],
          ["INC 22", "Notice for change of situation of the registered office of the company and its verification", "e-Form"],
          ["INC 24", "Application to the Central Government for approval for change in the name of the company", "e-Form"],
          ["INC 32", "Simplified Proforma for Incorporating Company electronically (SPICe)", "e-Form"],
          ["INC 33", "e-Memorandum of association", "e-Form"],
          ["INC 34", "e-Articles of association", "e-Form"],
          ["DPT 3", "Return of deposits", "e-Form"],
          ["CHG 1", "Application to register the creation or modification of charge (other than debentures)", "e-Form"],
          ["CHG 2", "Certificate of registration of charge", "Physical"],
          ["CHG 3", "Certificate of modification of charge", "Physical"],
          ["MGT 9", "Extract of the annual return", "Physical"],
          ["MGT 11", "Appointment of proxy for a meeting", "Physical"],
          ["MGT 12", "Polling paper in the meeting", "Physical"],
          ["MGT 13", "Scrutinizer's report to the Chairman pertaining to the poll of the meeting", "Physical"],
          ["MGT 14", "Filing of company resolutions and agreements with the Registrar", "e-Form"],
          ["BEN 1", "Declaration by the significant beneficial owner in case of an individual", "Physical"],
          ["AOC 4", "Form to file a financial statement and other documents of the company with the Registrar", "e-Form"],
          ["AOC 5", "Notice to declare the address of the location in which the books of accounts are maintained", "e-Form"],
          ["ADT 1", "Form to inform the Registrar regarding the appointment of auditor by the company", "e-Form"],
          ["ADT 2", "Application for removing the auditor before the expiry of their term by the company", "e-Form"],
          ["ADT 3", "Notice of resignation of auditor", "e-Form"],
          ["DIR 2", "Consent given by a person to act as the director of the company", "Physical"],
          ["DIR 3", "Application for allotment of Director Identification Number (DIN) before being appointed in an existing company", "e-Form"],
          ["DIR 3 KYC", "Application for filing KYC of the director", "e-Form"],
          ["DIR 3C", "Intimation by the company to the Registrar on the Director Identification Number", "e-Form"],
          ["DIR 3A", "Declaration given by a person applying as director, if he does not have the last name and uses a single name", "Physical"],
          ["DIR 3B", "Intimation of DIN to the company/companies in which the person is a director", "Physical"],
          ["DIR 5", "Application for surrender of DIN", "Physical"],
          ["DIR 6", "Intimation of changes in particulars specified in DIN application", "e-Form"],
          ["DIR 10", "Application for removal of disqualified directors", "Physical"],
          ["DIR 11", "Notice of resignation by a director to the Registrar", "e-Form"],
          ["DIR 12", "Particulars of Directors and the key managerial personnel appointed and any changes", "e-Form"],
        ],
      },
    ],
    cta: {
      headline: "Embracing the ROC Forms",
      sub: "Take the First Step Toward Growth and Stability with AXIAFIN",
      label: "Contact Now",
    },
  },

  "tds-returns": {
    slug: "tds-returns",
    title: "TDS Returns",
    metaTitle: "TDS Returns | Demystifying Tax Deducted at Source",
    metaDescription:
      "TDS (Tax Deducted at Source) is a system introduced by the Income Tax Department to collect tax at the source of income.",
    eyebrow: "Return Filing",
    hero: {
      titleLead: "TDS Returns",
      titleAccent: "Tax Deducted at Source",
      description:
        "TDS (Tax Deducted at Source) is a system introduced by the Income Tax Department to collect tax at the source of income. Tax Deducted at Source (TDS) is a crucial component of income tax, requiring individuals to deduct tax at the time of making specified payments. Major TDS provisions are 192B, 194I, 194J, 194C, 194H, 194A, 194Q and 195 (in case of non resident recipient).",
      image: img.taxFiling,
    },
    intro: {
      heading: "Understanding TDS",
      body: "TDS, or Tax Deducted at Source, entails the deduction of income tax from specified payments such as rent, commission, professional fees, salary, and interest by the payer. While the recipient of income is typically liable to pay income tax, TDS provisions ensure advance deduction of tax at the source. Consequently, the recipient receives the net amount after TDS deduction. The gross amount is added to the recipient's income, and the TDS amount is adjusted against the final tax liability. The recipient can claim credit for the amount deducted and paid on their behalf.",
      image: img.computer,
    },
    extraSections: [
      {
        heading: "Why Choose AXIAFIN for Your TDS Returns",
        body: "Understanding TDS provisions is essential for both payers and recipients of income. By adhering to TDS regulations, Tax Payers ensure compliance with income tax laws while facilitating smooth and transparent tax collection mechanisms. Our team guides you towards proper compliance in the right way and within the stipulated time.",
        image: img.team,
        align: "right",
      },
    ],
    advantagesHeading: "Key Takeaways & TDS Forms",
    advantagesImage: img.signing,
    advantages: [
      {
        icon: Wallet,
        title: "Form 24Q — TDS on Salary",
        desc: "Quarterly TDS on Salary. Due dates: Q1 - 31st July, Q2 - 31st October, Q3 - 31st January, Q4 - 31st May.",
      },
      {
        icon: ClipboardList,
        title: "Form 27Q — Non-Resident Payments",
        desc: "TDS on all payments made to non-residents except salaries. Same quarterly due dates as Form 24Q.",
      },
      {
        icon: ScrollText,
        title: "Form 26QB — TDS on Property Sale",
        desc: "30 days from the end of the month in which TDS is deducted.",
      },
      {
        icon: ShieldCheck,
        title: "Form 26QC — TDS on Rent",
        desc: "30 days from the end of the month in which TDS is deducted.",
      },
      {
        icon: HandCoins,
        title: "Net Amount to Recipient",
        desc: "Recipients receive the net amount after TDS deduction, with the gross amount added to their income.",
      },
      {
        icon: UserCheck,
        title: "TDS Credit",
        desc: "TDS amount is adjusted against the recipient's final tax liability, allowing for credit of the amount deducted and paid on their behalf.",
      },
    ],
    process: [
      { step: "01", title: "Section Mapping", desc: "Classify every payment under the correct TDS section." },
      { step: "02", title: "Monthly Deposit", desc: "Challan 281 filed before the 7th of each month." },
      { step: "03", title: "Quarterly Return", desc: "24Q / 26Q / 27Q filed before the statutory due date." },
      { step: "04", title: "TDS Certificates", desc: "Form 16 / 16A / 27D generated and distributed to deductees." },
    ],
    tables: [
      {
        heading: "TDS Returns and Due Dates",
        description:
          "Statutory TDS return forms and their corresponding filing deadlines for each quarter of the financial year.",
        headers: ["Form No", "Transactions reported in the return", "Due date"],
        rows: [
          [
            "Form 24Q",
            "TDS on Salary",
            "Q1 – 31st July\nQ2 – 31st October\nQ3 – 31st January\nQ4 – 31st May",
          ],
          [
            "Form 27Q",
            "TDS on all payments made to non-residents except salaries",
            "Q1 – 31st July\nQ2 – 31st October\nQ3 – 31st January\nQ4 – 31st May",
          ],
          [
            "Form 26QB",
            "TDS on sale of property",
            "30 days from the end of the month in which TDS is deducted",
          ],
          [
            "Form 26QC",
            "TDS on rent",
            "30 days from the end of the month in which TDS is deducted",
          ],
        ],
      },
    ],
    cta: {
      headline: "Embracing the TDS Returns",
      sub: "Take the First Step Toward Growth and Stability with AXIAFIN",
      label: "Contact Now",
    },
  },

  "esic-returns": {
    slug: "esic-returns",
    title: "ESIC Returns",
    metaTitle: "ESIC Returns | Employees' State Insurance Compliance | AXIAFIN",
    metaDescription:
      "Understanding ESIC Returns. The Employee State Insurance (ESI) scheme is mandated for factories and establishments employing 10+ individuals. AXIAFIN handles ESIC registration and monthly returns.",
    eyebrow: "Return Filing",
    hero: {
      titleLead: "ESIC",
      titleAccent: "Returns",
      description:
        "Understanding ESIC Returns. The Employee State Insurance (ESI) scheme is mandated for factories and establishments outlined in the Act, provided they employ 10 or more individuals.",
      image: img.insurance,
    },
    intro: {
      heading: "Understanding ESIC Returns",
      body: "Crucially, employees earning a monthly wage below Rs 21,000 fall within the scheme's coverage. It's important to note that regardless of salary, all employees hired by the employer are considered for determining scheme applicability. The Employees' State Insurance Corporation (ESIC) is a statutory body that administers the ESIC scheme, providing social security benefits to employees in India.",
      image: img.payroll,
    },
    extraSections: [
      {
        heading: "Unlocking Growth Potential with ESIC Returns",
        body: "Compliance with ESIC regulations is essential for any factory or establishment with 10 or more employees. Timely monthly ESIC contributions and returns ensure that your team has uninterrupted access to medical, sickness, maternity, and disability benefits — building trust and stability for both employer and employee.",
        image: img.team,
        align: "right",
      },
    ],
    advantagesHeading: "Why Choose AXIAFIN for Your ESIC Returns",
    advantagesImage: img.signing,
    advantages: [
      {
        icon: ShieldCheck,
        title: "ESIC Registration Setup",
        desc: "We obtain your establishment ESIC code and onboard all eligible employees with their respective IP numbers.",
      },
      {
        icon: UserCheck,
        title: "Monthly Returns Filing",
        desc: "We compute monthly contributions, generate challans, and file ESIC returns before statutory deadlines.",
      },
      {
        icon: ClipboardList,
        title: "Employee Lifecycle Updates",
        desc: "Onboarding, exits, wage revisions — all reflected accurately in your ESIC filings.",
      },
      {
        icon: ScrollText,
        title: "Compliance Dashboard",
        desc: "Centralised dashboard with all challans, return filings, and acknowledgment receipts archived for audit.",
      },
    ],
    process: [
      { step: "01", title: "Data Compilation", desc: "Gather employee wages and contribution data for the reporting period." },
      { step: "02", title: "Contribution Calculation", desc: "Compute Employer (3.25%) and Employee (0.75%) shares totalling 4%." },
      { step: "03", title: "Challan Generation", desc: "Generate ESIC challan and arrange payment before the 15th of the following month." },
      { step: "04", title: "Return Filing", desc: "File monthly ESIC return on the ESIC portal with all required attachments." },
      { step: "05", title: "Acknowledgment Archive", desc: "Receipt of filing acknowledgment archived in your compliance portal." },
    ],
    tables: [
      {
        heading: "ESIC Rates for Deduction from Salary",
        description:
          "Employer and employee contribution percentages applicable under the Employees' State Insurance scheme.",
        headers: ["Particulars", "Reduced Rate (Rate after 01/07/2019)"],
        rows: [
          ["Employer Share", "3.25%"],
          ["Employee Share", "0.75%"],
          ["Total", "4%"],
        ],
      },
    ],
    cta: {
      headline: "Embracing the ESIC Returns",
      sub: "Take the First Step Toward Growth and Stability with AXIAFIN",
      label: "Contact Now",
    },
  },

  "epf-returns": {
    slug: "epf-returns",
    title: "EPF Returns",
    metaTitle: "EPF Returns | Employees' Provident Fund Compliance | AXIAFIN",
    metaDescription:
      "The Employees' Provident Fund (EPF) is a social security scheme managed by the Employees' Provident Fund Organisation (EPFO) of India. AXIAFIN handles EPF registration and returns.",
    eyebrow: "Return Filing",
    hero: {
      titleLead: "EPF",
      titleAccent: "Returns",
      description:
        "The Employees' Provident Fund (EPF) is a social security scheme managed by the Employees' Provident Fund Organisation (EPFO) of India. There are various types of provident fund (PF) accounts that individuals use for savings.",
      image: img.piggyBank,
    },
    intro: {
      heading: "Types of Provident Funds",
      body: "There are different types of provident funds utilised by a person for investment or regular savings for retirement. The income tax rules for PF contribution, withdrawal and income on PF vary depending on the type of PF account. Let us understand the various type of provident funds and their tax implications.",
      image: img.retirement,
    },
    extraSections: [
      {
        heading: "Statutory Provident Fund",
        body: "This scheme is set up under the Provident Funds Act, 1925. It is meant for government employees, universities, recognised educational Institutions, railways, etc. It is also known as the General Provident Fund (GPF). The interest rates of general provident funds are revised from time to time by the government. The private sector employees are not eligible for the general provident fund.",
        image: img.govtBuilding,
        align: "right",
      },
      {
        heading: "Recognised Provident Fund",
        body: "The Provident Fund Act, 1952 applies to all establishments employing 20 or more employees. The establishments covered under the scheme can either apply for the government-approved scheme or start a PF scheme by forming their trust. The establishments can join the government-approved scheme set up under the PF Act 1952, which is a recognised provident fund. Alternatively, the establishment's employer and employee can create a provident fund scheme by forming a trust, and funds are invested as per rules prescribed under the PF Act, 1952. The commissioner of income tax must approve the scheme to receive the status of the recognised provident fund.",
        image: img.modernOffice,
        align: "left",
      },
      {
        heading: "Unrecognised Provident Fund",
        body: "If the commissioner of income tax does not approve the provident fund scheme created by the employer and employee, then such scheme is an unrecognised provident fund scheme.",
        image: img.documents,
        align: "right",
      },
      {
        heading: "Public Provident Fund (PPF)",
        body: "The government has established a provident fund for the general public. Any person can contribute to this scheme by opening a public provident fund account with the authorised bank. The person can deposit an amount starting from Rs.500 to Rs.1,50,000. The corpus of the PPF can be fully withdrawn after the completion of 15 years.",
        image: img.community2,
        align: "left",
      },
      {
        heading: "Employees' Provident Fund (EPF) — In Detail",
        body: "EPF, or Employees' Provident Fund, is a well-known provident fund scheme often discussed in salary-related matters. It is widely adopted by private sector organizations employing 20 or more individuals. The rate of returns on the balance held in an individual's EPF account is contingent on the prevailing interest rate. As of March 2023, the interest rate stands at 8.15% per annum. Under the EPF scheme, both the employer and the employee make monthly contributions to the employee's account, usually in equal proportions. The specific percentage of contributions and the corresponding accounts they are allocated to vary based on the employee's salary.",
        image: img.payroll,
        align: "right",
      },
    ],
    advantagesHeading: "Why Choose AXIAFIN for Your EPF Returns",
    advantagesImage: img.signing,
    advantages: [
      {
        icon: ShieldCheck,
        title: "Employer Contribution Compliance",
        desc: "EPF returns are filings made by employers to report employee contributions, employer contributions, and other relevant details to the EPFO.",
      },
      {
        icon: ClipboardList,
        title: "Disbursement of Benefits",
        desc: "Essential for ensuring compliance with EPF regulations and facilitating the disbursement of benefits to employees.",
      },
      {
        icon: ScrollText,
        title: "Salary-Slab Computation",
        desc: "Accurate split between EPF (3.67%) and EPS (8.33% capped at ₹1,250) based on whether the salary is ≤ ₹15,000 or above.",
      },
      {
        icon: Wallet,
        title: "ECR Generation & Filing",
        desc: "Monthly Electronic Challan-cum-Return (ECR) generation, contribution payment, and acknowledgment archival.",
      },
    ],
    processHeading: "EPF Returns Formation Process",
    process: [
      { step: "01", title: "Data Compilation", desc: "Gather information on employee wages, contributions, and other relevant details for the reporting period." },
      { step: "02", title: "Preparation of Returns", desc: "Complete the EPF returns accurately, ensuring all required fields are filled and calculations are correct." },
      { step: "03", title: "Submission to EPFO", desc: "File the returns electronically through the EPFO portal within the prescribed deadlines, along with the corresponding contributions." },
      { step: "04", title: "Verification and Acknowledgment", desc: "Await verification and acknowledgment of the returns by the EPFO, confirming successful filing and compliance." },
    ],
    tables: [
      {
        heading: "EPF Contributions — Salary ≤ ₹15,000",
        description:
          "For individuals with a salary of ₹15,000 or lower, the EPF contributions are distributed as follows. This allocation ensures that 12% of the employee's salary goes towards the EPF, while the employer contributes 3.67% to the EPF and 8.33% (up to ₹1,250) to the EPS.",
        headers: ["Particulars", "Rate / Amount"],
        rows: [
          ["Employee contribution to EPF", "12% of the salary"],
          ["Employer contribution to EPF", "3.67% of the salary"],
          [
            "Employer contribution to EPS",
            "8.33% of the salary, limited to a maximum of ₹1,250 (ceiling amount)",
          ],
        ],
      },
      {
        heading: "EPF Contributions — Salary > ₹15,000",
        description:
          "For individuals exceeding a salary of ₹15,000, the EPF contributions are distributed as follows.",
        headers: ["Particulars", "Rate / Amount"],
        rows: [
          ["Employee contribution to EPF", "12% of the salary"],
          ["Employer contribution to EPF", "3.67% of the salary"],
          ["Employer contribution to EPS", "A fixed amount of ₹1,250"],
          [
            "Additional employer contribution to EPF",
            "The remaining amount, calculated as (8.33% of the salary) minus ₹1,250",
          ],
        ],
        note: "Current EPF interest rate is 8.15% per annum (as of March 2023).",
      },
    ],
    cta: {
      headline: "Embracing the EPF Returns Advantage",
      sub: "Take the First Step Toward Growth and Stability with AXIAFIN",
      label: "Contact Now",
    },
  },

  "pt-returns": {
    slug: "pt-returns",
    title: "PT Returns",
    metaTitle: "Professional Tax (PT) Returns | State Compliance | AXIAFIN",
    metaDescription:
      "Professional Tax is a state-level tax imposed on individuals earning income from professions, trades, or employment. AXIAFIN provides expert PT registration and returns filing.",
    eyebrow: "Return Filing",
    hero: {
      titleLead: "PT",
      titleAccent: "Returns",
      description:
        "Professional Tax is a state-level tax imposed on individuals earning income from professions, trades, or employment. Professional tax is a levy imposed by state governments on various professions, trades, and employment, based on the income earned from these activities.",
      image: img.govtBuilding,
    },
    intro: {
      heading: "Understanding PT Returns",
      body: "It applies to employees, business owners, freelancers, and professionals, among others, provided their income exceeds a specified threshold. PT returns are periodic filings required by employers to report professional tax deductions made from employee salaries and remit the collected tax to the appropriate state authority. Compliance with PT return filing obligations ensures adherence to state tax laws and avoids penalties.",
      image: img.scale,
    },
    extraSections: [
      {
        heading: "Constitutional Framework",
        body: "As per Article 246 of the Indian Constitution, Parliament has exclusive authority to legislate on taxes on income, included in the Union List. States, however, can make laws related to taxes on professions, trades, callings, and employment, under the Concurrent and State Lists. Professional tax falls within this category, as outlined in Article 276 of the Constitution.",
        image: img.documents,
        align: "right",
      },
      {
        heading: "State-Level Legislation",
        body: "Professional tax is enforced by state governments, although not all states in India choose to levy it. State governments have the authority to enact laws governing professional tax, which is considered a tax on income.",
        image: img.govtBuilding,
        align: "left",
      },
      {
        heading: "Tax Deductibility",
        body: "Professional tax is considered a deductible expense under the Income Tax Act, 1961. This means that the amount paid as professional tax can be deducted from the taxable income of the individual or entity, thereby reducing their overall tax liability.",
        image: img.taxFiling,
        align: "right",
      },
    ],
    advantagesHeading: "Why Choose AXIAFIN for Your PT Returns",
    advantagesImage: img.signing,
    advantages: [
      {
        icon: Landmark,
        title: "State Registration",
        desc: "We obtain the Professional Tax Enrollment Certificate (PTEC) and Registration Certificate (PTRC) on your behalf.",
      },
      {
        icon: ScrollText,
        title: "Monthly Challan & Returns",
        desc: "Monthly PT challans and periodic returns filed before the statutory deadlines for each state where you operate.",
      },
      {
        icon: ClipboardList,
        title: "Multi-State Compliance",
        desc: "If you have employees across multiple states, we manage the differing slab structures and compliance schedules.",
      },
      {
        icon: ShieldCheck,
        title: "Audit-Ready Records",
        desc: "Centralised archive of PT challans, returns, and acknowledgments — ready for any departmental review.",
      },
    ],
    process: [
      { step: "01", title: "PT Registration", desc: "Obtain PTEC (Enrollment Certificate) and PTRC (Registration Certificate) from state authority." },
      { step: "02", title: "Slab Classification", desc: "Map each employee's wage to the correct PT slab for the state." },
      { step: "03", title: "Deduction & Challan", desc: "Deduct PT from monthly payroll and generate state PT challan." },
      { step: "04", title: "Return Filing", desc: "File periodic PT returns on the state portal with all employee-wise particulars." },
    ],
    tables: [
      {
        heading: "Professional Tax Rate Slabs in Telangana",
        description:
          "Telangana state Professional Tax (PT) slabs based on monthly salary or wage of the individual.",
        headers: ["Monthly Salary / Wage", "Professional Tax"],
        rows: [
          ["Monthly salary/wage up to Rs 15,000", "NIL"],
          ["Monthly salary/wage between Rs 15,000 – Rs 20,000", "Rs 150 per month"],
          ["Monthly salary/wage > Rs 20,000", "Rs 200 per month"],
        ],
      },
    ],
    cta: {
      headline: "Embracing the PT Returns Advantage",
      sub: "Take the First Step Toward Growth and Stability with AXIAFIN",
      label: "Contact Now",
    },
  },

  "income-tax-notices": {
    slug: "income-tax-notices",
    title: "Income Tax Notices",
    metaTitle: "Income Tax Notices | Reply Properly and Promptly",
    metaDescription:
      "Receiving a notice from the income tax department can be concerning, but it's essential to understand the nature of the notice and take appropriate action.",
    eyebrow: "Notices & Advisory",
    hero: {
      titleLead: "Income Tax",
      titleAccent: "Notices",
      description:
        "Let's know importance of considering income tax notice and replying properly. Receiving a notice from the income tax department can be concerning, but it's essential to understand the nature of the notice and take appropriate action.",
      image: img.itNoticeLetter,
    },
    intro: {
      heading: "Understanding Notices — Intimation vs Notice",
      body: "An intimation signifies the result of processing your return or assessment, often not requiring immediate action. A notice, however, demands your attention and response. Notices can be issued for various reasons, including filing errors, income discrepancies, underreporting, non-payment of taxes, TDS discrepancies, and high-value financial transactions.",
      image: img.email,
    },
    extraSections: [
      {
        heading: "What are the Reasons for Receiving a Notice?",
        body: "If you fail to file your Income Tax Return by the due date. If there are any discrepancies in the income reported by you and your employers, banks, etc. In case of errors, omissions, or inconsistencies in your income tax return, such as missing income sources, deductions, or credits. If the Income Tax Department suspects any underreporting of income to evade taxes. If you fail to pay the full amount of taxes owed based on your income and deductions. If there are any discrepancies in the TDS or TCS details reported by you and the details available with the tax department. If you have done any high-value financial transactions, like large cash deposits, property purchases, or foreign remittances, which are subject to scrutiny. If the tax department decides to assess or reassess your income under Section 143(2) or Section 148.",
        image: img.warning,
        align: "right",
      },
      {
        heading: "Importance of Timely Response",
        body: "Emphasize the criticality of responding promptly and appropriately to import notices to avoid potential penalties, delays in cargo clearance, or legal consequences. Encourage importers to carefully review the contents of the notice and seek expert assistance if necessary.",
        image: img.team,
        align: "left",
      },
    ],
    advantagesHeading: "Actions to Take After Receiving a Notice",
    advantagesImage: img.signing,
    advantages: [
      {
        icon: Mail,
        title: "Read Carefully",
        desc: "Carefully read the notice to understand the reason for its issuance.",
      },
      {
        icon: UserCheck,
        title: "Verify Details",
        desc: "Ensure that the notice contains accurate information, including your name, PAN number, and address.",
      },
      {
        icon: FileWarning,
        title: "Identify Mismatches",
        desc: "Check for any discrepancies or omissions in your income tax return that may have triggered the notice.",
      },
      {
        icon: ScrollText,
        title: "Respond Promptly",
        desc: "Respond to the notice within the specified timeframe, addressing the concerns raised.",
      },
      {
        icon: ClipboardList,
        title: "Provide Information",
        desc: "Include all relevant information and documentation when responding to the notice.",
      },
      {
        icon: ShieldCheck,
        title: "Check Online",
        desc: "Monitor and manage income tax notices online through the Income Tax Portal for convenience and efficiency.",
      },
    ],
    process: [
      { step: "01", title: "Notice Review", desc: "Decode the notice — section, ground, deadline, and risk exposure." },
      { step: "02", title: "Document Marshalling", desc: "Collate evidence, bank statements, and supporting records." },
      { step: "03", title: "Reply Drafting", desc: "Legally watertight reply with statutory references and case law." },
      { step: "04", title: "Representation", desc: "Appear before the AO, faceless unit, or CIT(A) on your behalf." },
    ],
    cta: {
      headline: "Embracing the Income Tax Notices",
      sub: "Take the First Step Toward Growth and Stability with AXIAFIN",
      label: "Contact Now",
    },
  },

  "gst-notices": {
    slug: "gst-notices",
    title: "Legal Representation — GST Assessment, First Appeals & GSTAT",
    metaTitle: "GST Legal Representation: Assessment, First Appeals & GSTAT | AXIAFIN",
    metaDescription:
      "End-to-end GST dispute representation — Show Cause Notices, audits, First Appellate Authority (Section 107), and GSTAT (Section 112). Senior indirect-tax counsel with 20+ years of litigation expertise.",
    eyebrow: "Other Services",
    hero: {
      titleLead: "GST Legal Representation",
      titleAccent: "Assessment, First Appeals & GSTAT",
      description:
        "The structural complexity of the Goods and Services Tax (GST) landscape requires a highly tactical approach to dispute resolution. With the enforcement of strict data analytics by the GST department and the roll-out of the automated scrutiny modules, businesses face aggressive tax demands and unexpected input tax credit (ITC) reversals.",
      image: img.notice,
    },
    intro: {
      heading: "End-to-End GST Dispute Representation",
      body: "At AXIAFIN, our specialized indirect tax litigation division provides end-to-end representation. Backed by our Retained Senior Counsel who hold 20 years of expertise in indirect tax litigations, we handle disputes seamlessly across all tiers — from initial Show Cause Notices (SCN) and Audits to the First Appellate Authority and the newly operational GST Appellate Tribunal (GSTAT).",
      image: img.email,
    },
    extraSections: [
      {
        heading: "Adjudication & Assessment (Sections 61, 73, 74 & 74A)",
        body: "The department initiates proceedings through system-based audits, return scrutinies, or anti-evasion investigations. If discrepancies are found, they issue a Show Cause Notice. The final outcome relies entirely on your written submissions and structural defenses filed on the GST portal.",
        image: img.signing,
        align: "right",
      },
      {
        heading: "First Appellate Authority (Section 107)",
        body: "If an adjudication order (Order-in-Original) is prejudicial to your business, a statutory appeal must be filed in Form GST APL-01 within three months. To admit this appeal, a mandatory pre-deposit of 10% of the disputed tax amount must be paid. Notably, the First Appellate Authority cannot remand the case back to the original officer; they must pass a final order confirming, modifying, or annulling the demand.",
        image: img.legalScale,
        align: "left",
      },
      {
        heading: "GST Appellate Tribunal (GSTAT — Section 112)",
        body: "As the ultimate fact-finding authority under the GST law, GSTAT is now fully operational with active online e-filing. Appeals against the First Appellate Order are filed in Form GST APL-05. Critical Compliance Note: For all backlog dispute orders issued since 2017 and communicated before April 1, 2026, the Ministry of Finance has set a strict, final deadline of June 30, 2026 to file appeals before GSTAT. Missing this window permanently bars the assessee from accessing the tribunal.",
        image: img.scale,
        align: "right",
      },
    ],
    disadvantagesHeading: "Common Issues Faced by GST Assessees",
    disadvantagesImage: img.warning,
    disadvantages: [
      {
        icon: AlertTriangle,
        title: "Severe ITC Reversals",
        desc: "Massive demands raised due to mismatch anomalies between GSTR-2A/2B and GSTR-3B, or due to suppliers failing to deposit taxes under Section 16(2)(c).",
      },
      {
        icon: FileWarning,
        title: "Flawed Best Judgment Assessments",
        desc: "High-pitched, arbitrary tax demands levied on non-filers or unregistered entities under Sections 62 and 63 without accounting for actual turnover.",
      },
      {
        icon: XCircle,
        title: "Classification & Valuation Disputes",
        desc: "Complex litigations involving the wrong invocation of tax rates, circular ambiguities, or disputes on cross-charge vs. transfer pricing elements between distinct entities.",
      },
      {
        icon: ScrollText,
        title: "Coercive Recovery Actions",
        desc: "Sudden blocking of the Electronic Credit Ledger (Rule 86A), attachment of bank accounts, or cancellation of GST registrations, which completely stalls active business operations.",
      },
    ],
    advantagesHeading: "Our Strategic Approach — Documentation & Argument as the Bedrock",
    advantagesImage: img.signing,
    advantages: [
      {
        icon: ClipboardList,
        title: "Dynamic Data Reconciliation & Evidentiary Proof",
        desc: "We dismantle departmental allegations by reconstructing the transaction trail. Our team handles the heavy lifting of matching invoices, checking supplier e-way bills, securing ledger confirmations, and building an airtight paper book of evidence to justify every single rupee of ITC claimed.",
      },
      {
        icon: FileText,
        title: "Precision Drafting & Jurisdictional Defenses",
        desc: "Our legal experts draft your replies and appeals with meticulous detail. We focus heavily on spotting procedural lapses by the department — such as notices issued without a valid Document Identification Number (DIN), vague allegations lacking specific grounds, or demands raised beyond the statutory limitation periods.",
      },
      {
        icon: HandCoins,
        title: "Strategic Management of Pre-Deposits",
        desc: "We provide clear financial planning regarding the mandatory pre-deposits (10% at the First Appeal stage and an additional 10% at the GSTAT stage), ensuring your appeals are admitted smoothly without unnecessary cash flow blockages.",
      },
      {
        icon: Landmark,
        title: "Rigorous GSTAT Portal & Bench Representation",
        desc: "With the GSTAT portal live, our team manages your digital filings seamlessly. Our Retained Senior Counsel — veterans with 20 years of experience delivering outperforming results in indirect tax courtrooms — personally argue your matters before the Tribunal benches to secure stays on recovery and win final reliefs.",
      },
    ],
    whyChoose: {
      heading: "The Benefit of Partnering With AXIAFIN",
      body: "Protecting Your Cash Flow — by securing timely stay orders against tax demands, we prevent the department from executing coercive bank attachments, keeping your working capital safe. Uncompromising Timeliness — missing a GST limitation window can prove fatal to a business. We actively track your corporate tax portal, ensuring every single reply, pre-deposit payment, and appeal is executed with promptness. Operational Freedom — let our legal experts shoulder the burden of tax audits, personal hearings, and complex legal drafting. Your executive leadership can redirect 100% of their energy toward market expansion and corporate growth.",
      image: img.team,
    },
    processHeading: "Our GSTAT-Ready Litigation Workflow",
    process: [
      { step: "01", title: "Notice / SCN Triage", desc: "Forensic review of every SCN, DRC-01, or Order-in-Original — jurisdiction, DIN, limitation, and substantive grounds." },
      { step: "02", title: "Data Reconciliation", desc: "GSTR-1, 3B, 2A/2B, e-way bill, ICEGATE, and books reconciled invoice-by-invoice." },
      { step: "03", title: "Reply / Appeal Drafting", desc: "Form GST APL-01 (First Appeal) or APL-05 (GSTAT) drafted with pre-deposit planning." },
      { step: "04", title: "Hearing Representation", desc: "Personal hearings at Adjudicating Authority, First Appellate Authority, and GSTAT benches." },
      { step: "05", title: "Stay & Recovery Protection", desc: "Stay applications, bank-attachment defence, and Rule 86A unblocking interventions." },
    ],
    cta: {
      headline: "Secure Your Business Against Aggressive GST Demands.",
      sub: "Get in touch with our Retained Indirect Tax Counsel today to audit your current notices or prepare your appeals ahead of the June 30, 2026 GSTAT backlog deadline.",
      label: "Book Consultation",
    },
  },

  "gst-refunds": {
    slug: "gst-refunds",
    title: "GST Refunds",
    metaTitle: "GST Refunds | Understanding GST Refunds | AXIAFIN",
    metaDescription:
      "GST refunds play a crucial role in ensuring fair taxation and alleviating financial burdens on businesses and individuals. AXIAFIN handles end-to-end GST refund processing.",
    eyebrow: "Notices & Advisory",
    hero: {
      titleLead: "GST",
      titleAccent: "Refunds",
      description:
        "Understanding GST Refunds. GST refunds play a crucial role in ensuring fair taxation and alleviating financial burdens on businesses and individuals.",
      image: img.refundCash,
    },
    intro: {
      heading: "Our GST Refund Services",
      body: "Our digital experts, designers and developers deliver visible and valuable results. Understanding the various scenarios applicable for GST refunds and the process for claiming them is essential for businesses and individuals to ensure compliance with GST regulations and to alleviate financial burdens where applicable. By adhering to the prescribed guidelines and timelines, taxpayers can successfully claim refunds and manage their tax obligations effectively.",
      image: img.refund,
    },
    extraSections: [
      {
        heading: "Application Deadline",
        body: "GST refund applications must be filed within 2 years from the relevant date. The concept of the 'relevant date' varies depending on the specific instance of GST refund being claimed.",
        image: img.documents,
        align: "right",
      },
      {
        heading: "Relevant Date",
        body: "The concept of the 'relevant date' varies depending on the specific instance of GST refund being claimed. For exports, it could be the date of export or date of receipt of FIRC; for refund of accumulated ITC, it could be the end of the financial year. Our team determines the correct relevant date and ensures the refund claim is filed well within the 2-year window.",
        image: img.scale,
        align: "left",
      },
    ],
    advantagesHeading: "Types of GST Refunds",
    advantagesImage: img.signing,
    advantages: [
      {
        icon: FileWarning,
        title: "Refund on Zero-Rated Supplies",
        desc: "Refund of output tax paid on zero-rated supply of goods and/or services.",
      },
      {
        icon: ScrollText,
        title: "Refund of Input Tax",
        desc: "Refund of input tax on inputs or input services used for zero-rated supplies.",
      },
      {
        icon: Receipt,
        title: "Refund on Deemed Exports",
        desc: "Refund of tax levied on goods categorized as deemed exports.",
      },
      {
        icon: HandCoins,
        title: "Inverted Duty Structure Refund",
        desc: "Refund of unutilized input tax credit due to an inverted duty structure.",
      },
      {
        icon: Wallet,
        title: "Excess Payment",
        desc: "Refund due to overpayment of GST resulting from errors or inadvertence.",
      },
      {
        icon: UserCheck,
        title: "Finalization of Provisional Assessment",
        desc: "Refund upon finalization of provisional assessment.",
      },
      {
        icon: Briefcase,
        title: "Special Cases",
        desc: "Refund of tax paid by specific entities such as bodies of the United Nations or para-military forces.",
      },
      {
        icon: ClipboardList,
        title: "Appeals",
        desc: "Refund of tax on pre-deposit if appeal is held in favor of the Assessee.",
      },
      {
        icon: TrendingUp,
        title: "Electronic Cash Register",
        desc: "Refund for additional balance in the Electronic Cash Register.",
      },
      {
        icon: ShieldCheck,
        title: "Supplies to SEZs",
        desc: "Refund of tax levied on supplies made to Special Economic Zones (SEZs).",
      },
      {
        icon: AlertTriangle,
        title: "Miscellaneous Refunds",
        desc: "Other types of refunds as specified under GST regulations.",
      },
    ],
    process: [
      { step: "01", title: "Eligibility Assessment", desc: "Determine refund category and quantum based on transaction nature." },
      { step: "02", title: "Documentation Pack", desc: "Invoice, shipping bill, FIRC, and bank realisation matched." },
      { step: "03", title: "RFD-01 Filing", desc: "RFD-01 filed online with comprehensive annexures and statements." },
      { step: "04", title: "Active Follow-Up", desc: "Active follow-up with the proper officer until refund order or credit." },
    ],
    cta: {
      headline: "Embracing the GST Refunds",
      sub: "Take the First Step Toward Growth and Stability with AXIAFIN",
      label: "Contact Now",
    },
  },

  "project-reports": {
    slug: "project-reports",
    title: "Project Report for Bank Loan",
    metaTitle: "Project Report for Bank Loan | Bankable Financial Projections",
    metaDescription:
      "When seeking financial support for starting a new business or expanding an existing one, a comprehensive project report is essential.",
    eyebrow: "Notices & Advisory",
    hero: {
      titleLead: "Project Report",
      titleAccent: "for Bank Loan",
      description:
        "When seeking financial support for starting a new business or expanding an existing one, a comprehensive project report is essential. This document provides banks and financial institutions with insights into the feasibility, viability, and potential of the business or project.",
      image: img.growth,
    },
    intro: {
      heading: "Constituents of Project Report",
      body: "A complete project report contains: Summary of the business/project (what the business is, the requirement of finance, etc.); Scope & prospects of the business (current status, prospects of future, technical & financial feasibility); Details about the promoters & other significant executives (profile, educational qualification, experience); Resources required (Infra, machinery, knowhow, cost & capacity); Details about the target & prospective customers; Investment required (cost of the project); Sources of finance (owned & external funds).",
      image: img.computer,
    },
    extraSections: [
      {
        heading: "Financial Analysis and Projections",
        body: "Project financial statements include Balance sheet, Profit & loss account. Financial Projections cover quantitative projections on Income, expenses, sources of funds & application of funds. Ratio analysis involves computation & analysis of financial statements through key ratios & their implications. Funds flow Statement details where funds are sourced and the application of funds. Breakeven analysis examines the breakeven point of the project, its feasibility in terms of cost & benefits.",
        image: img.taxStrategy,
        align: "right",
      },
      {
        heading: "Consultation and Support",
        body: "We offer consultation and support services to assist stakeholders in refining their project plans, addressing any concerns or questions, and navigating the project implementation process effectively. We provide contact information for inquiries and assistance throughout the project lifecycle.",
        image: img.team,
        align: "left",
      },
    ],
    advantagesHeading: "Components of a Project Report",
    advantagesImage: img.signing,
    advantages: [
      {
        icon: ClipboardList,
        title: "Executive Summary",
        desc: "Concise overview of the project, including its objectives, scope, financial requirements, and expected outcomes. Clarity and brevity to capture stakeholders' attention.",
      },
      {
        icon: HandCoins,
        title: "Project Description",
        desc: "Detailed information about the project, including its nature, scope, target market, competitive landscape, and unique selling propositions (USPs).",
      },
      {
        icon: Wallet,
        title: "Investment Requirements",
        desc: "Financial aspects including initial investment required, operating expenses, revenue projections, and expected returns on investment (ROI).",
      },
      {
        icon: ScrollText,
        title: "Risk Assessment",
        desc: "Comprehensive risk assessment to identify potential risks - market risks, regulatory risks, and operational risks - with mitigation strategies.",
      },
      {
        icon: ShieldCheck,
        title: "Consultation and Support",
        desc: "Consultation and support services to assist stakeholders in refining their project plans and navigating implementation effectively.",
      },
      {
        icon: Briefcase,
        title: "Breakeven Analysis",
        desc: "Analysis of the breakeven point of the project, its feasibility in terms of cost & benefits.",
      },
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Promoter background, project scope, funding requirement." },
      { step: "02", title: "Assumption Workshop", desc: "Ratios, capacity, pricing, and macro assumptions agreed in writing." },
      { step: "03", title: "Model & Report", desc: "Excel model + bound report in bank's preferred format." },
      { step: "04", title: "Banker Walkthrough", desc: "We walk the relationship manager through the report personally." },
    ],
    cta: {
      headline: "Embracing the Project Report for Bank Loan",
      sub: "Take the First Step Toward Growth and Stability with AXIAFIN",
      label: "Contact Now",
    },
  },

  // ============================================================
  // CONSULTANCY SERVICES — Virtual CFO, International Tax, Appeals
  // ============================================================
  "virtual-cfo": {
    slug: "virtual-cfo",
    title: "Virtual CFO Services",
    metaTitle: "Virtual CFO Services for GCCs & Foreign Subsidiaries | AXIAFIN",
    metaDescription:
      "AXIAFIN's Virtual CFO services bridge the gap between complex Indian compliance ecosystems and global financial reporting standards — purpose-built for GCCs and foreign multinational subsidiaries.",
    eyebrow: "Consultancy Services",
    hero: {
      titleLead: "Virtual CFO Services",
      titleAccent: "for GCCs & Foreign Subsidiaries",
      description:
        "India has rapidly become the premier destination for Global Capability Centers (GCCs) and foreign multinational subsidiaries. However, establishing a presence is only the first step. Scaling operations in India requires rigorous financial governance, strict regulatory compliance, and seamless cross-border financial alignment with the global headquarters (HQ).",
      image: img.boardroom,
    },
    intro: {
      heading: "Bridging Indian Compliance with Global Standards",
      body: "At AXIAFIN, our Virtual CFO (vCFO) services are designed to bridge the gap between complex Indian compliance ecosystems and global financial reporting standards. Led by our senior advisory board, we provide C-suite financial leadership on a flexible, scalable basis, empowering your local management to focus entirely on growth and operational excellence.",
      image: img.team,
    },
    disadvantagesHeading: "The Complex Challenges Faced by MNCs and GCCs in India",
    disadvantagesImage: img.warning,
    disadvantages: [
      {
        icon: AlertTriangle,
        title: "The Reporting Disconnect",
        desc: "Reconciling local Indian statutory requirements (Ind AS / Indian GAAP) with the parent company's reporting frameworks (US GAAP / IFRS) is technically demanding and highly time-consuming.",
      },
      {
        icon: FileWarning,
        title: "The Compliance Maze",
        desc: "India's regulatory environment is stringent. Navigating the overlapping jurisdictions of FEMA, RBI guidelines, Transfer Pricing regulations, and local tax laws (Direct and Indirect) creates a high risk of penal exposure for foreign entities.",
      },
      {
        icon: ClipboardList,
        title: "Lack of Real-Time Visibility",
        desc: "Relying on basic accounting teams often results in delayed financial data. Without timely Management Information Systems (MIS) and budget variance analysis, global HQs struggle to understand the real-time financial health of their Indian operations.",
      },
      {
        icon: Users,
        title: "Resource Drain on Leadership",
        desc: "Promoters and country heads frequently spend hours analyzing spreadsheets, preparing presentations, and coordinating with multiple consultants, drastically reducing the time they have available for core business development and talent acquisition.",
      },
    ],
    advantagesHeading: "Our Comprehensive vCFO Solutions",
    advantagesImage: img.signing,
    advantages: [
      {
        icon: ClipboardList,
        title: "HQ-Aligned MIS & Financial Reporting",
        desc: "We automate and streamline your reporting processes to ensure your global headquarters receives accurate, standardized, and fully reconciled financial data. We design custom MIS dashboards that track Key Performance Indicators (KPIs), burn rates, and profitability specific to your industry.",
      },
      {
        icon: TrendingUp,
        title: "Budgeting, Forecasting & Variance Analysis",
        desc: "We prepare robust annual and quarterly budgets, continuously monitoring actual performance against projections. By analyzing variances in real time, we help you optimize working capital, control costs, and make agile, data-driven decisions.",
      },
      {
        icon: ShieldCheck,
        title: "End-to-End Regulatory Ecosystem Management",
        desc: "Our firm takes complete ownership of your statutory landscape. From filing RBI returns and ensuring FEMA compliance to managing corporate governance, payroll structuring, and tax audits, we create a foolproof compliance shield around your Indian entity.",
      },
      {
        icon: HandCoins,
        title: "Cash Flow & Working Capital Optimization",
        desc: "We provide granular visibility into your cash flow pipeline, advising on optimal fund repatriation, dividend distribution strategies, and efficient capital structuring to maximize liquidity.",
      },
    ],
    whyChoose: {
      heading: "The Strategic Advantage — Why Choose Our vCFO Services",
      body: "By integrating our vCFO solutions into your corporate structure, your enterprise unlocks immediate, tangible benefits: Focus on Business Development — by outsourcing the heavy lifting of financial reporting, tax planning, and compliance, your Country Heads and Directors reclaim their time to direct 100% of their energy toward scaling operations, developing products, and capturing market share. Cost Arbitrage — gain access to top-tier, multi-disciplinary financial experts (including veterans with 15+ years of experience serving foreign subsidiaries) at a fraction of the cost of a full-time, in-house CFO. Uncompromising Accuracy & Promptness — leveraging our proprietary automated processes, your monthly closures, payrolls, and tax filings are executed with zero friction and absolute precision. Boardroom Confidence — whether presenting to foreign investors or the global board of directors, you will be backed by institutional-grade financial data, impeccably structured reports, and strategic advisory that commands confidence.",
      image: img.team,
    },
    process: [
      { step: "01", title: "Discovery & Mandate Scoping", desc: "Map your Indian entity's reporting framework, HQ alignment requirements, and statutory exposure." },
      { step: "02", title: "MIS & Compliance Roadmap", desc: "Build a 12-month roadmap covering MIS automation, FEMA/RBI/TP compliance, and HQ-aligned dashboards." },
      { step: "03", title: "Embedded vCFO Execution", desc: "Monthly closures, KPI dashboards, variance analysis, budget controls, and board-pack ownership." },
      { step: "04", title: "Quarterly HQ Sync", desc: "Strategic reviews with the global board — repatriation, dividend, and capital-structuring decisions." },
    ],
    cta: {
      headline: "Elevate Your Financial Governance",
      sub: "Our vCFO division is led by industry veterans who specialize in empowering Global Capability Centers and foreign subsidiaries. Contact us today to structure a financial ecosystem that drives your business forward.",
      label: "Book Consultation",
    },
  },

  "international-taxation": {
    slug: "international-taxation",
    title: "International Taxation & Transfer Pricing Advisory",
    metaTitle: "International Taxation & Transfer Pricing Advisory | AXIAFIN",
    metaDescription:
      "Specialized, high-tier advisory on International Taxation and Transfer Pricing for multinational enterprises, globally expanding startups, and HNIs — DTAA, PE, Arm's Length Price, Form 3CEB, CbCR, APA.",
    eyebrow: "Consultancy Services",
    hero: {
      titleLead: "International Taxation",
      titleAccent: "& Transfer Pricing Advisory",
      description:
        "Navigating cross-border transactions requires more than just basic compliance; it demands strategic foresight and a deep understanding of global tax frameworks. At AXIAFIN, we provide specialized, high-tier advisory services in International Taxation and Transfer Pricing (TP) to help multinational enterprises, globally expanding startups, and high-net-worth individuals optimize their global tax footprint while ensuring strict regulatory compliance.",
      image: img.exports,
    },
    intro: {
      heading: "Understanding the Global Tax Landscape",
      body: "For businesses entering the global market, understanding the foundational concepts of cross-border taxation is critical to safeguarding profit margins. The conflict of taxation between the Residence Rule and the Source Rule, the interplay of bilateral treaties, and the strict Arm's Length Price discipline together form the bedrock of modern international taxation.",
      image: img.scale,
    },
    extraSections: [
      {
        heading: "What is International Taxation?",
        body: "International taxation refers to the complex body of laws and treaties that govern how individuals and corporations are taxed when their income is generated across international borders. It addresses the fundamental conflict of taxation: the \"Residence Rule\" (taxing global income based on where the taxpayer lives or is registered) versus the \"Source Rule\" (taxing income where it is generated).",
        image: img.signing,
        align: "right",
      },
      {
        heading: "What is a Double Taxation Avoidance Agreement (DTAA)?",
        body: "When two countries have the right to tax the same income, it leads to double taxation, severely impacting business viability. A DTAA is a bilateral treaty signed between two nations to resolve this. It provides relief by allocating taxing rights or offering tax credits. Under Indian law, a taxpayer is entitled to choose the provisions of the Domestic Income Tax Act or the applicable DTAA — whichever is more beneficial. For reference, you can explore India's current DTAA agreements directly through the Income Tax Department Portal: https://www.incometaxindia.gov.in/dtaa.",
        image: img.handshake,
        align: "left",
      },
      {
        heading: "What is Transfer Pricing (TP) Consultation?",
        body: "When \"Associated Enterprises\" (parent companies, subsidiaries, or related entities across different countries) trade goods, services, or intellectual property with each other, the price they charge is called the \"transfer price.\" Tax authorities mandate that these transactions occur at an \"Arm's Length Price\" — meaning the price should be the same as if the two entities were completely independent. TP consultation ensures your pricing models meet these strict regulatory standards.",
        image: img.audit,
        align: "right",
      },
    ],
    disadvantagesHeading: "Common Complexities in International Taxation",
    disadvantagesImage: img.warning,
    disadvantages: [
      {
        icon: AlertTriangle,
        title: "Permanent Establishment (PE) Exposure",
        desc: "Unintentionally triggering a taxable presence in a foreign jurisdiction due to the movement of employees, servers, or sales agents.",
      },
      {
        icon: FileWarning,
        title: "Withholding Tax Ambiguities",
        desc: "Disputes over the correct rate of Tax Deducted at Source (TDS) on cross-border payments like royalties, technical fees, or dividends.",
      },
      {
        icon: XCircle,
        title: "Aggressive TP Adjustments",
        desc: "Tax authorities rejecting your pricing mechanisms, leading to massive additions to taxable income and heavy penalties.",
      },
      {
        icon: ClipboardList,
        title: "Compliance Burden",
        desc: "Navigating rigorous documentation requirements, including Master Files, Country-by-Country Reporting (CbCR), and Form 3CEB.",
      },
    ],
    advantagesHeading: "Our Specialized Services",
    advantagesImage: img.signing,
    advantages: [
      {
        icon: Globe,
        title: "Advanced DTAA & Domestic Tax Planning",
        desc: "We do not just apply tax rates; we strategically analyze them. Our team conducts a comparative analysis between the provisions of the domestic Income Tax Act and the specific DTAA applicable to your transaction. By identifying the most beneficial provisions, we optimize your withholding tax obligations, advise on Foreign Tax Credit (FTC) claims, and ensure efficient repatriation of funds.",
      },
      {
        icon: ClipboardList,
        title: "FAR Analysis (Transfer Pricing)",
        desc: "We conduct an exhaustive functional analysis of the Functions performed, Assets employed, and Risks assumed by each entity in the transaction — the foundation of every defensible TP position.",
      },
      {
        icon: TrendingUp,
        title: "Most Appropriate Method Selection",
        desc: "Based on the FAR analysis and the economic realities of your business, we determine the Most Appropriate Method (MAM) to arrive at the Arm's Length Price — Profit Split, Transactional Net Margin Method (TNMM), or a specific Cost-Plus mark-up — with robust, data-backed benchmarking.",
      },
      {
        icon: ScrollText,
        title: "TP Study & Documentation",
        desc: "We prepare comprehensive TP study reports — Master File, Local File, Country-by-Country Reporting (CbCR), and Form 3CEB — to defend your pricing structures against departmental scrutiny.",
      },
    ],
    whyChoose: {
      heading: "The Advantage of Timely Engagement",
      body: "In international taxation, taking a reactive approach often leads to prolonged litigation and locked-up capital. Engaging our advisory services before executing cross-border agreements or finalizing pricing policies provides distinct advantages: Litigation Prevention — structuring transactions correctly from day one significantly reduces the risk of protracted disputes with the Dispute Resolution Panel (DRP) or ITAT. Optimized Cash Flow — accurate DTAA application prevents excess tax from being withheld, ensuring higher liquidity. Penalty Mitigation — timely TP documentation and compliance shield your business from stringent penal provisions, which in international tax can be disproportionately high. Strategic Clarity — knowing your exact tax liabilities in advance allows management to price products and services competitively in the global market.",
      image: img.team,
    },
    process: [
      { step: "01", title: "Cross-Border Scoping", desc: "Map all flows — entities, jurisdictions, transaction types, and treaty applicability." },
      { step: "02", title: "DTAA & PE Diagnostic", desc: "Comparative DTAA vs Domestic-Act analysis, PE risk assessment, and beneficial-ownership review." },
      { step: "03", title: "TP Method & Benchmarking", desc: "FAR analysis, Most Appropriate Method selection, and data-backed benchmarking." },
      { step: "04", title: "Documentation & Filing", desc: "TRC, Form 10F, TP Study, Master File, CbCR, Form 3CEB — filed within statutory windows." },
      { step: "05", title: "Representation", desc: "Active defence before TPO, DRP, and ITAT where required." },
    ],
    cta: {
      headline: "Ready to Optimize Your Global Tax Strategy?",
      sub: "Reach out to our Strategic Advisory Board today for a consultation on your international transactions and transfer pricing requirements.",
      label: "Book Consultation",
    },
  },

  "tax-assessment-appeals": {
    slug: "tax-assessment-appeals",
    title: "Legal Representation — Assessment, CIT(A) & ITAT",
    metaTitle: "Legal Representation: Assessment, CIT(A) & ITAT | AXIAFIN",
    metaDescription:
      "Robust legal representation for Faceless Assessments, CIT(Appeals), and ITAT. AXIAFIN's Retained Senior Counsel protect clients from unwarranted demands and penal actions across all stages of tax disputes.",
    eyebrow: "Consultancy Services",
    hero: {
      titleLead: "Legal Representation",
      titleAccent: "Assessment, CIT(A) & ITAT",
      description:
        "The landscape of Indian tax litigation has undergone a massive transformation. With the implementation of the Faceless Assessment and Appeals schemes, the margin for error has vanished. Tax proceedings are no longer won through physical interactions; they are won through unassailable documentation, precise legal drafting, and strict adherence to statutory timelines.",
      image: img.scale,
    },
    intro: {
      heading: "Our Dedicated Litigation Wing",
      body: "At AXIAFIN, our dedicated litigation wing, spearheaded by our Retained Senior Counsel, provides robust legal representation. We protect our clients from unwarranted demands and penal actions across all stages of tax disputes — from initial Assessment to the Commissioner of Income Tax (Appeals) [CIT(A)], and the Income Tax Appellate Tribunal (ITAT).",
      image: img.boardroom,
    },
    extraSections: [
      {
        heading: "Assessment & Re-Assessment (Sec 143(3) / 147 / 144B)",
        body: "When the tax department selects a return for scrutiny or suspects income has escaped assessment, they initiate proceedings. Under the current Faceless Assessment regime, proceedings are entirely electronic. There is no jurisdictional Assessing Officer to physically meet; all responses must be submitted digitally to the National Faceless Assessment Centre (NaFAC).",
        image: img.signing,
        align: "right",
      },
      {
        heading: "CIT(A) Appeals",
        body: "If an assessee is aggrieved by an Assessment Order, the first appellate authority is the CIT(Appeals). This process is also governed by the Faceless Appeal Scheme. Your entire case hinges on the strength of the \"Grounds of Appeal\" and the \"Statement of Facts\" uploaded to the portal.",
        image: img.legalScale,
        align: "left",
      },
      {
        heading: "Income Tax Appellate Tribunal (ITAT)",
        body: "The ITAT is the second appellate authority and the highest fact-finding body in the tax hierarchy. Cases here demand highly sophisticated legal arguments, the citation of judicial precedents, and physical (or virtual) representation by seasoned tax advocates.",
        image: img.team,
        align: "right",
      },
    ],
    disadvantagesHeading: "Common Issues Faced by Assessees",
    disadvantagesImage: img.warning,
    disadvantages: [
      {
        icon: AlertTriangle,
        title: "The Faceless Disconnect",
        desc: "The inability to physically explain a business model or transaction to an Assessing Officer. If a written submission is vague, the department may draw adverse inferences, leading to massive tax additions.",
      },
      {
        icon: FileWarning,
        title: "Defective Documentation",
        desc: "Submitting incomplete evidence, failing to reconcile books of accounts with 26AS/AIS data, or failing to establish the identity, creditworthiness, and genuineness of transactions.",
      },
      {
        icon: XCircle,
        title: "Time-Barred Responses",
        desc: "Missing strict statutory deadlines for replying to notices under Sections 142(1) or 148, which often results in unilateral, high-pitched \"Best Judgment\" assessments (Section 144) and heavy penalties.",
      },
      {
        icon: ScrollText,
        title: "Weak Legal Framing",
        desc: "Failing to raise proper jurisdictional objections or omitting critical grounds of appeal at the CIT(A) stage, which can irreparably damage the case before it even reaches the ITAT.",
      },
    ],
    advantagesHeading: "Our Strategic Approach — Documentation & Argument as the Bedrock",
    advantagesImage: img.signing,
    advantages: [
      {
        icon: ClipboardList,
        title: "Meticulous Fact-Finding & Documentation",
        desc: "We do not just reply to notices; we build a fortress around your transactions. We conduct deep-dive factual analyses, compile robust evidentiary paper books, and prepare highly technical responses that leave no room for ambiguity during faceless assessments.",
      },
      {
        icon: FileText,
        title: "Precision in Legal Drafting",
        desc: "Our legal team crafts the \"Grounds of Appeal\" and \"Statement of Facts\" with surgical precision. We anticipate the department's arguments and preemptively neutralize them by citing the latest rulings from the Supreme Court, High Courts, and ITAT.",
      },
      {
        icon: Landmark,
        title: "Elite Tribunal Representation",
        desc: "For matters that escalate to the ITAT, our Senior Advocates represent you with authority. Having resolved highly complicated, high-stakes cases over the last 20 years, our counsel possess the courtroom acumen necessary to dismantle erroneous assessment orders and deliver outperforming results.",
      },
      {
        icon: ShieldCheck,
        title: "Uncompromising Timeliness",
        desc: "In litigation, time is money. We manage the entire lifecycle of your notices, ensuring that every adjournment request, evidence submission, and appeal filing is executed well within statutory deadlines, keeping you entirely compliant and legally protected.",
      },
    ],
    whyChoose: {
      heading: "The Benefit of Partnering With AXIAFIN",
      body: "By entrusting your legal representation to AXIAFIN, you gain absolute peace of mind. Risk Mitigation — we shield your working capital from being unjustly locked up in disputed tax demands and coercive recovery proceedings. Higher Success Rates — our senior counsel's deep understanding of judicial trends significantly increases the probability of favorable appellate outcomes. Focus on Your Business — litigation can be mentally and operationally exhausting. We shoulder the entire burden of departmental scrutiny, allowing you to focus on running your business without the constant anxiety of tax notices.",
      image: img.team,
    },
    process: [
      { step: "01", title: "Notice & Order Review", desc: "Forensic review of every notice or order — jurisdiction, limitation, grounds, and risk exposure." },
      { step: "02", title: "Fact Marshalling", desc: "Deep-dive factual analysis, evidence indexing, and reconciliation against 26AS / AIS." },
      { step: "03", title: "Drafting & Filing", desc: "Grounds of Appeal, Statement of Facts, paper-book, case-law research — uploaded within statutory windows." },
      { step: "04", title: "Faceless & Tribunal Representation", desc: "Active representation at NaFAC, faceless CIT(A), and physical/virtual ITAT hearings." },
      { step: "05", title: "Order & Follow-Through", desc: "Order analysis, second-appeal strategy, rectification, and stay-of-demand applications." },
    ],
    cta: {
      headline: "Do Not Let an Assessment Notice Threaten Your Business.",
      sub: "Engage our Retained Counsel today to secure the strongest possible defense for your tax matters.",
      label: "Book Consultation",
    },
  },

  // ============================================================
  // AUDIT & ASSURANCE — separate pages, one per audit type
  // ============================================================
  "statutory-audit": {
    slug: "statutory-audit",
    title: "Statutory Audit",
    metaTitle: "Statutory Audit Services in Hyderabad | AXIAFIN",
    metaDescription:
      "Nurturing Financial Integrity Through Expert Statutory Audits. AXIAFIN provides statutory audit services in Hyderabad as per the Companies Act, 2013.",
    eyebrow: "Audit & Assurance",
    hero: {
      titleLead: "Statutory Audit",
      titleAccent: "Services in Hyderabad",
      description:
        "Nurturing Financial Integrity Through Expert Statutory Audits. A statutory audit is a legally mandated review of a company's financial statements to verify accuracy and compliance.",
      image: img.audit,
    },
    intro: {
      heading: "What is a Statutory Audit?",
      body: "A statutory audit is a legally mandated review of a company's financial statements to verify accuracy and compliance. It ensures that an organization presents a true and fair view of its financial position by examining bank balances, accounting records, and financial transactions. At AXIAFIN, we offer statutory audit services in Hyderabad to help businesses stay compliant with the Companies Act, 2013 while ensuring transparency and accountability.",
      image: img.desk,
    },
    extraSections: [
      {
        heading: "Statutory Audit Under the Companies Act, 2013",
        body: "Sections 139 to 147 of the Act outline detailed provisions related to audit and auditors. Section 139 mandates the appointment of a qualified auditor or CA firm. Section 141 defines eligibility criteria for statutory auditors. Section 143 details the powers and duties of auditors, including preparation of the statutory audit report. Our team of chartered accountants in Hyderabad ensures that your business fully complies with all statutory audit provisions and reporting standards.",
        image: img.scale,
        align: "right",
        bullets: [
          "Section 139 — Appointment of qualified auditor or CA firm",
          "Section 141 — Eligibility criteria for statutory auditors",
          "Section 143 — Powers and duties of auditors, including audit report",
        ],
      },
    ],
    advantagesHeading: "Main Provisions Regarding Statutory Audit",
    advantagesImage: img.signing,
    advantages: [
      {
        icon: ShieldCheck,
        title: "Access to Books and Information",
        desc: "The auditor has the right to access books of accounts, vouchers, and financial records at all times. They can also seek necessary information from company officers to ensure a true and fair audit report.",
      },
      {
        icon: ScrollText,
        title: "Reporting Duties (Section 143)",
        desc: "The statutory auditor must report to the company's members whether financial statements reflect an accurate and fair view of the company's financial health. Any discrepancies must be clearly stated in the audit report.",
      },
      {
        icon: ClipboardList,
        title: "Compliance and Standards",
        desc: "Auditors must comply with prescribed auditing standards, ensuring that all statutory audit services maintain quality and reliability.",
      },
      {
        icon: AlertTriangle,
        title: "Reporting Fraud",
        desc: "If any fraud is detected or suspected, auditors are required to report it to the Central Government, ensuring transparency and compliance with law.",
      },
    ],
    whyChoose: {
      heading: "Why Choose AXIAFIN for Statutory Audit Services in Hyderabad",
      body: "At AXIAFIN, our statutory audit firm in Hyderabad ensures that your organization adheres to every legal and financial requirement. We provide: Detailed statutory audit reports, Expert guidance on Companies Act compliance, Assistance with financial statement preparation, and Ongoing advisory for audit and assurance services. Our commitment to accuracy, integrity, and transparency has made us one of the best statutory audit firms in Hyderabad.",
      image: img.team,
    },
    process: [
      { step: "01", title: "Engagement Letter", desc: "Define scope, timelines, and statutory audit deliverables." },
      { step: "02", title: "Books & Records Review", desc: "Detailed examination of bank balances, vouchers, and ledgers." },
      { step: "03", title: "Compliance Testing", desc: "Verify adherence to Companies Act 2013 and audit standards." },
      { step: "04", title: "Draft Report", desc: "Prepare statutory audit report with observations and findings." },
      { step: "05", title: "Final Sign-off", desc: "File audit report with the company members and ROC where applicable." },
    ],
    cta: {
      headline: "Ensure Transparency and Compliance with Expert Statutory Audits",
      sub: "Take the first step toward financial accuracy and legal compliance with AXIAFIN, your trusted partner for statutory audit services in Hyderabad.",
      label: "Contact Now",
    },
  },

  "income-tax-audit": {
    slug: "income-tax-audit",
    title: "Income Tax Audit",
    metaTitle: "Income Tax Audit Services in Hyderabad | Section 44AB | AXIAFIN",
    metaDescription:
      "Comprehensive Income Tax Audits for Businesses and Professionals under Section 44AB of the Income Tax Act, 1961. AXIAFIN ensures your business remains compliant and audit-ready.",
    eyebrow: "Audit & Assurance",
    hero: {
      titleLead: "Income Tax Audit",
      titleAccent: "Services in Hyderabad",
      description:
        "Comprehensive Income Tax Audits for Businesses and Professionals. There are many types of audits conducted under various laws.",
      image: img.incomeTaxAudit,
    },
    intro: {
      heading: "What is an Income Tax Audit?",
      body: "An Income Tax Audit is a detailed examination of a taxpayer's books of accounts, records, and financial statements conducted under the Income Tax Act, 1961. It ensures that the income and deductions declared are accurate and comply with tax regulations. Under Section 44AB of the Income Tax Act, certain taxpayers are mandatorily required to conduct a Tax Audit. At AXIAFIN, we provide Income Tax Audit services in Hyderabad, ensuring that your business remains compliant and audit-ready at all times.",
      image: img.computer,
    },
    extraSections: [
      {
        heading: "When is a Tax Audit Mandatory?",
        body: "As per Section 44AB, a taxpayer must undergo a tax audit if the turnover, sales, or gross receipts exceed ₹1 crore during the financial year. However, there are specific circumstances under which a tax audit becomes mandatory. Our income tax auditors in Hyderabad ensure that your audit is conducted as per Finance Act updates and CBDT guidelines.",
        image: img.taxFormsClose,
        align: "right",
        bullets: [
          "For businesses with turnover exceeding ₹1 crore (₹10 crore if cash transactions ≤ 5%).",
          "For professionals whose gross receipts exceed ₹50 lakhs in a financial year.",
          "For presumptive taxation cases under sections 44AD, 44ADA, and 44AE where income is lower than prescribed limits.",
        ],
      },
      {
        heading: "Recent Amendments in Tax Audit Provisions",
        body: "The Finance Acts of 2020 and 2021 introduced major changes to the threshold limits for tax audit under Section 44AB. These amendments aim to reduce compliance burden for small and medium businesses with predominantly digital transactions.",
        image: img.scale,
        align: "left",
        bullets: [
          "Finance Act 2020 — Threshold raised from ₹1 crore to ₹5 crore for taxpayers with cash receipts and payments limited to 5% of total transactions.",
          "Finance Act 2021 — Effective April 1, 2021, threshold further increased to ₹10 crore if cash transactions do not exceed 5% of total transactions.",
        ],
      },
      {
        heading: "About the Audit Report — Forms 3CA, 3CB and 3CD",
        body: "Tax auditor furnishes the report in either Form 3CA or Form 3CB. Form 3CA is used when a person is already mandated to get accounts audited under any other law. Form 3CB is used when a person is not required to get accounts audited under any other law. Tax auditor must furnish prescribed particulars in Form 3CD, which forms part of the audit report.",
        image: img.documents,
        align: "right",
      },
    ],
    advantagesHeading: "Why Choose AXIAFIN for Income Tax Audit Services",
    advantagesImage: img.signing,
    advantages: [
      {
        icon: ShieldCheck,
        title: "Comprehensive Income Tax Audit & Compliance",
        desc: "End-to-end audit services with strict adherence to Section 44AB and CBDT guidelines.",
      },
      {
        icon: FileText,
        title: "Form 3CA/3CB/3CD Reports",
        desc: "Accurate preparation of audit reports with all prescribed particulars in Form 3CD.",
      },
      {
        icon: ClipboardList,
        title: "Section 44AB Expertise",
        desc: "Expert guidance on Tax Audit under Section 44AB, including presumptive taxation cases.",
      },
      {
        icon: TrendingUp,
        title: "Finance Act Advisory",
        desc: "Up-to-date advisory on Finance Act amendments and threshold updates.",
      },
      {
        icon: Wallet,
        title: "Digital Tax Audit",
        desc: "Digital tax audit and filing support — fully online and paperless workflows.",
      },
      {
        icon: UserCheck,
        title: "100% Compliance",
        desc: "Our mission is to simplify the audit process while ensuring 100% compliance with all Income Tax laws in India.",
      },
    ],
    whyChoose: {
      heading: "Why Choose AXIAFIN for Income Tax Audit Services in Hyderabad",
      body: "At AXIAFIN, we combine professionalism, accuracy, and expertise to deliver the best income tax audit services. Our team handles every step — from books examination, compliance testing under Section 44AB, preparation of Form 3CA / 3CB / 3CD, to final upload on the Income Tax portal — ensuring your business stays audit-ready throughout the year.",
      image: img.team,
    },
    process: [
      { step: "01", title: "Eligibility Check", desc: "Determine applicability under Section 44AB based on turnover or gross receipts." },
      { step: "02", title: "Books Review", desc: "Detailed examination of books of accounts, vouchers, and financial statements." },
      { step: "03", title: "Form 3CA / 3CB", desc: "Prepare the appropriate audit report form based on existing audit obligations." },
      { step: "04", title: "Form 3CD Particulars", desc: "Complete prescribed particulars covering all clauses of Form 3CD." },
      { step: "05", title: "Portal Upload", desc: "Digital sign and upload the tax audit report on the Income Tax portal." },
    ],
    cta: {
      headline: "Embracing the Income Tax Audit",
      sub: "Look ahead to the future of income tax audit and the opportunities for digital transformation, collaboration, and continuous improvement in the audit profession.",
      label: "Contact Now",
    },
  },

  "gst-audit": {
    slug: "gst-audit",
    title: "GST Audit",
    metaTitle: "GST Audit Services in Hyderabad | GSTR-9C | AXIAFIN",
    metaDescription:
      "A Comprehensive Guide to Compliance and Assurance. GSTR-9C is an essential form for annual GST reconciliation. AXIAFIN provides end-to-end GST audit services.",
    eyebrow: "Audit & Assurance",
    hero: {
      titleLead: "GST Audit",
      titleAccent: "Services in Hyderabad",
      description:
        "A Comprehensive Guide to Compliance and Assurance. GSTR-9C is an essential form for annual GST reconciliation filed by applicable taxpayers.",
      image: img.gstAudit,
    },
    intro: {
      heading: "What is a GST Audit?",
      body: "A GST Audit is a comprehensive examination of a taxpayer's financial records to verify the accuracy of returns filed under the Goods and Services Tax law. It ensures that all GST payments, claims, and credits are correctly reported and compliant with government regulations. At AXIAFIN, we provide end-to-end GST audit services in Hyderabad, helping businesses maintain compliance and avoid penalties.",
      image: img.computer,
    },
    extraSections: [
      {
        heading: "What is GSTR-9C? — Definition & Purpose",
        body: "GSTR-9C is a reconciliation statement that compares the figures reported in the annual GST return (GSTR-9) with the audited financial statements of a taxpayer. It highlights any differences between the two and ensures that all GST transactions are properly accounted for.",
        image: img.taxFormsClose,
        align: "right",
        bullets: [
          "Reconciles gross and taxable turnover as per books with GST returns.",
          "Identifies and explains any discrepancies or mismatches.",
          "Ensures accurate and transparent financial reporting for GST compliance.",
        ],
      },
      {
        heading: "Applicability & Turnover Limit",
        body: "The GSTR-9C audit applies to all registered persons under GST whose aggregate turnover exceeds ₹5 crore during the financial year. Note: The turnover limit for GSTR-9C has been enhanced to ₹5 crore for FY 2018–19 to FY 2022–23 as per CBIC notifications.",
        image: img.scale,
        align: "left",
      },
      {
        heading: "Due Date for GSTR-9C",
        body: "The GSTR-9C form must be filed on or before 31st December of the following financial year — the same due date as GSTR-9 (annual return). For example, the due date for FY 2022–23 was 31st December 2023. However, the government may extend this date through official notifications.",
        image: img.desk,
        align: "right",
      },
    ],
    advantagesHeading: "Importance of GSTR-9C",
    advantagesImage: img.signing,
    advantages: [
      {
        icon: ShieldCheck,
        title: "Ensures Compliance with GST Laws",
        desc: "A GST Audit helps in ensuring compliance with GST laws and regulations.",
      },
      {
        icon: AlertTriangle,
        title: "Identifies Discrepancies",
        desc: "Helps in identifying discrepancies between GST returns and financial statements.",
      },
      {
        icon: FileWarning,
        title: "Reduces Risk of Penalties",
        desc: "Reduces the risk of penalties or notices from authorities.",
      },
      {
        icon: TrendingUp,
        title: "Enhances Credibility",
        desc: "Enhances the credibility and transparency of financial statements.",
      },
      {
        icon: ClipboardList,
        title: "Verified View of Tax Data",
        desc: "Provides a verified and reconciled view of tax data for business stability.",
      },
      {
        icon: Receipt,
        title: "GSTR-9 + GSTR-9C Bundled",
        desc: "Annual GSTR-9 plus reconciliation in GSTR-9C handled together by senior CAs.",
      },
    ],
    whyChoose: {
      heading: "Why Choose AXIAFIN for GST Audit Services",
      body: "We provide end-to-end GST audit services in Hyderabad — from monthly reconciliation right up to the annual GSTR-9C filing. Our senior CAs hold deep expertise on GST law, ITC reconciliation, GSTR-2A/2B matching, and departmental representation, helping businesses maintain compliance and avoid penalties.",
      image: img.team,
    },
    process: [
      { step: "01", title: "Books vs GSTR Reconciliation", desc: "Compare books with GSTR-1, GSTR-3B, and GSTR-2A/2B." },
      { step: "02", title: "GSTR-9 Preparation", desc: "Annual return finalised with itemised disclosures." },
      { step: "03", title: "GSTR-9C Reconciliation Statement", desc: "Statement bridging books with annual return prepared." },
      { step: "04", title: "Final Upload", desc: "Forms uploaded on the GST portal by the 31st December due date." },
    ],
    cta: {
      headline: "Embracing the GST Audit",
      sub: "Take the First Step Toward Growth and Stability with AXIAFIN",
      label: "Contact Now",
    },
  },

  "internal-audit": {
    slug: "internal-audit",
    title: "Internal Audit",
    metaTitle: "Internal Audit Services in Hyderabad | AXIAFIN",
    metaDescription:
      "Safeguarding Organizational Integrity & Compliance. Internal audit is an independent and objective evaluation of an organization's internal controls.",
    eyebrow: "Audit & Assurance",
    hero: {
      titleLead: "Internal Audit",
      titleAccent: "Services in Hyderabad",
      description:
        "Safeguarding Organizational Integrity & Compliance. Internal audit refers to an independent service to evaluate an organization's internal controls, its corporate practices, processes, and methods.",
      image: img.internalAudit,
    },
    intro: {
      heading: "What is Internal Audit?",
      body: "Internal audit is an independent and objective evaluation of an organization's internal controls, compliance systems, and operational processes. It helps ensure that a company's operations align with regulatory requirements and corporate governance standards. Our internal audit services in Hyderabad help businesses strengthen internal systems, mitigate risks, and promote transparency and accountability.",
      image: img.team,
    },
    extraSections: [
      {
        heading: "Purpose and Scope of Internal Audit",
        body: "The purpose of an internal audit is to assess the effectiveness of operational standards and evaluate adherence to company policies. It ensures that all business processes — from order placement to delivery and payment — comply with legal and procedural norms.",
        image: img.boardroom,
        align: "right",
        bullets: [
          "Evaluates financial and operational control systems",
          "Ensures compliance with laws and regulations",
          "Identifies inefficiencies and risk areas",
          "Enhances accountability and corporate governance",
        ],
      },
    ],
    advantagesHeading: "Types of Internal Audit",
    advantagesImage: img.signing,
    advantages: [
      {
        icon: TrendingUp,
        title: "Operational Audit",
        desc: "Focuses on improving efficiency and performance across business operations.",
      },
      {
        icon: ShieldCheck,
        title: "Compliance Audit",
        desc: "Ensures adherence to statutory and regulatory requirements under laws such as the Companies Act, 2013.",
      },
      {
        icon: AlertTriangle,
        title: "Risk-Based Audit",
        desc: "Identifies, assesses, and mitigates risks through proactive internal control measures.",
      },
      {
        icon: ClipboardList,
        title: "Financial and Control Audit",
        desc: "Validates the accuracy and reliability of financial data and accounting systems.",
      },
    ],
    whyChoose: {
      heading: "Why Choose AXIAFIN for Internal Audit Services",
      body: "As a leading CA firm for internal audit in Hyderabad, we offer: Tailored audit solutions for startups, SMEs, and corporates; Expert evaluation of internal control systems; Risk-based internal audit methodology; Comprehensive audit reports and recommendations; Transparent and ethical audit practices. We help organizations maintain compliance, prevent fraud, and achieve operational excellence. Internal audits can be customized to match an organization's needs and size — our internal audit consultants in Hyderabad specialize in multiple types of audits.",
      image: img.team,
    },
    process: [
      { step: "01", title: "Scope & Risk Mapping", desc: "Define focus areas and key risks based on industry and size." },
      { step: "02", title: "Process Walk-throughs", desc: "Detailed understanding of business processes and control gaps." },
      { step: "03", title: "Testing & Sampling", desc: "Substantive testing of controls and operational efficiency." },
      { step: "04", title: "Reporting", desc: "Comprehensive internal audit report with recommendations." },
      { step: "05", title: "Follow-up Review", desc: "Track implementation of recommendations in subsequent reviews." },
    ],
    cta: {
      headline: "Embracing the Internal Audit",
      sub: "Take the First Step Toward Growth and Stability with AXIAFIN",
      label: "Contact Now",
    },
  },

  "revenue-audit": {
    slug: "revenue-audit",
    title: "Revenue Audit",
    metaTitle: "Revenue Audit Services in Hyderabad | AXIAFIN",
    metaDescription:
      "Optimizing Financial Compliance and Transparency. A Revenue Audit ensures accuracy, validity, and reliability of an organization's financial statements.",
    eyebrow: "Audit & Assurance",
    hero: {
      titleLead: "Revenue Audit",
      titleAccent: "Services in Hyderabad",
      description:
        "Optimizing Financial Compliance and Transparency. As auditors, we play a crucial role in ensuring the accuracy and reliability of financial statements, particularly in auditing revenue.",
      image: img.growth,
    },
    intro: {
      heading: "About Revenue Audit",
      body: "A Revenue Audit is a critical process to ensure the accuracy, validity, and reliability of an organization's financial statements — particularly in the area of revenue recognition. Our Revenue Audit Services in Hyderabad help businesses maintain transparency, detect irregularities, and comply with financial reporting standards. At AXIAFIN, we specialize in delivering comprehensive revenue audit services designed to meet statutory and operational compliance requirements for all types of organizations.",
      image: img.signing,
    },
    extraSections: [
      {
        heading: "Why Revenue Audit is Important",
        body: "Revenue audit involves testing various audit assertions to confirm that the reported revenue truly reflects your financial position. Our goal is to help organizations achieve financial integrity and compliance through a systematic and risk-based approach.",
        image: img.desk,
        align: "right",
      },
      {
        heading: "Our Approach to Revenue Auditing",
        body: "We prioritize examining revenue recognition policies, especially for complex transactions. Our CA firm in Hyderabad designs tailored audit procedures that address the unique risks in your business model. We perform detailed checks of revenue transactions, supporting documentation, and accounting entries to ensure accuracy and compliance.",
        image: img.team,
        align: "left",
        bullets: [
          "Focus on Revenue Recognition — examining recognition policies for complex transactions",
          "Risk-based Audit Procedures — tailored to your business model",
          "Thorough Examination — detailed checks of revenue transactions and supporting docs",
        ],
      },
    ],
    advantagesHeading: "Key Audit Assertions in Revenue Audit",
    advantagesImage: img.signing,
    advantages: [
      {
        icon: ShieldCheck,
        title: "Occurrence",
        desc: "Ensures that all revenue transactions recorded actually occurred during the period under review. Prevents overstatement of revenue and fraudulent reporting.",
      },
      {
        icon: ClipboardList,
        title: "Completeness",
        desc: "Checks whether all revenue transactions that should have been recorded are included. Guarantees accurate and complete financial statements.",
      },
      {
        icon: TrendingUp,
        title: "Accuracy",
        desc: "Verifies that all revenue amounts are calculated and recorded correctly. Ensures that reported figures are precise and reliable.",
      },
      {
        icon: ScrollText,
        title: "Cut-off",
        desc: "Confirms that revenue transactions are recorded in the correct accounting period. Maintains consistency between revenues and corresponding expenses.",
      },
    ],
    disadvantagesHeading: "Inherent Risks in Revenue Audit",
    disadvantagesImage: img.warning,
    disadvantages: [
      {
        icon: AlertTriangle,
        title: "Management Incentives",
        desc: "There is always a risk of revenue misstatement due to managerial pressure to achieve sales or profit targets.",
      },
      {
        icon: FileWarning,
        title: "Complex Sales Transactions",
        desc: "Multi-component or long-term sales contracts may create revenue recognition challenges.",
      },
    ],
    whyChoose: {
      heading: "Why Choose AXIAFIN for Revenue Audit in Hyderabad",
      body: "Experienced Chartered Accountants with deep industry knowledge; Customized revenue audit reports with actionable insights; Compliance with Indian Accounting Standards (Ind AS) and regulatory requirements; Transparent communication and timely delivery of results; End-to-end financial audit and assurance services.",
      image: img.team,
    },
    process: [
      { step: "01", title: "Scoping", desc: "Identify revenue streams, accounting policies, and risk areas." },
      { step: "02", title: "Recognition Review", desc: "Assess revenue recognition policies — point-in-time vs over-time." },
      { step: "03", title: "Substantive Testing", desc: "Cut-off, occurrence, completeness, and accuracy testing." },
      { step: "04", title: "Reporting", desc: "Detailed revenue audit report with recommendations." },
    ],
    cta: {
      headline: "Embracing the Revenue Audit",
      sub: "Take the first step toward financial clarity and compliance with AXIAFIN, the most trusted Revenue Audit firm in Hyderabad.",
      label: "Contact Now",
    },
  },

  "stock-audit": {
    slug: "stock-audit",
    title: "Stock Audit",
    metaTitle: "Stock Audit Services in Hyderabad | Inventory Audit | AXIAFIN",
    metaDescription:
      "Enhancing Inventory Management and Financial Accuracy. AXIAFIN provides professional stock audit and inventory verification services in Hyderabad.",
    eyebrow: "Audit & Assurance",
    hero: {
      titleLead: "Stock Audit",
      titleAccent: "Services in Hyderabad",
      description:
        "Enhancing Inventory Management and Financial Accuracy. A stock audit, also known as an inventory audit, is a critical process that ensures the accuracy of physical goods in a store's warehouse matches the information recorded in the stock register.",
      image: img.stockAudit,
    },
    intro: {
      heading: "What is a Stock Audit?",
      body: "A Stock Audit, also known as an Inventory Audit, is a critical financial review process that ensures the accuracy of your company's physical inventory records. It verifies whether the goods available in your warehouse or store match the quantities listed in your stock register. Whether conducted internally or by external stock audit firms, this process is vital for maintaining transparency, compliance, and efficient inventory management.",
      image: img.msmeFactory,
    },
    extraSections: [
      {
        heading: "Importance of Stock Audit in Hyderabad",
        body: "Stock audits verify that the actual goods in your warehouse match the stock register. This helps in identifying discrepancies, improving accuracy, and reducing financial misstatements. A stock audit in Hyderabad ensures compliance with applicable business laws, accounting standards, and tax regulations — especially crucial for licensed businesses and companies under statutory requirements. Regular inventory verification audits help detect theft, pilferage, or data manipulation. By providing an accurate snapshot of available inventory, stock audit reports empower management to make informed purchasing and production decisions.",
        image: img.desk,
        align: "right",
        bullets: [
          "Ensuring Accuracy in Inventory Records",
          "Compliance and Legal Assurance",
          "Preventing Fraud and Theft",
          "Supporting Better Decision-Making",
        ],
      },
      {
        heading: "Why Stock Audit is Crucial for Businesses",
        body: "Companies dealing with physical goods — from manufacturing to eCommerce — rely on stock audit services to ensure real-time accuracy of their inventory and to prevent stock mismanagement. The audit process can vary depending on your business type. Our experts tailor inventory audit procedures for retailers, manufacturers, and warehouses to meet industry-specific standards.",
        image: img.cargoShipping,
        align: "left",
      },
    ],
    advantagesHeading: "Conducting a Stock Audit — Our 4-Step Methodology",
    advantagesImage: img.signing,
    advantages: [
      {
        icon: ClipboardList,
        title: "Planning and Scope Definition",
        desc: "We begin with understanding your business operations and defining the scope of the audit to ensure focused results.",
      },
      {
        icon: Factory,
        title: "Physical Verification of Inventory",
        desc: "Our audit team conducts detailed physical stock verification at your warehouses, retail outlets, or production sites.",
      },
      {
        icon: ScrollText,
        title: "Reconciliation and Reporting",
        desc: "We reconcile physical stock counts with your stock register, highlight discrepancies, and submit a detailed stock audit report with actionable insights.",
      },
      {
        icon: ShieldCheck,
        title: "Fraud Detection and Risk Assessment",
        desc: "Our experts use modern audit tools and techniques to detect fraudulent transactions, prevent pilferage, and safeguard your assets.",
      },
    ],
    whyChoose: {
      heading: "Why Choose AXIAFIN for Stock Audit Services",
      body: "At AXIAFIN, we provide professional stock audit and inventory verification services in Hyderabad designed to meet every business's unique requirements. Our expertise helps organizations: Maintain accurate inventory records; Identify fraud and discrepancies early; Ensure regulatory compliance; Improve operational efficiency. We work with top companies across industries, offering comprehensive physical stock verification, warehouse audit, and inventory reconciliation services.",
      image: img.team,
    },
    process: [
      { step: "01", title: "Planning & Scope Definition", desc: "Understand operations and define audit scope." },
      { step: "02", title: "Physical Verification", desc: "On-site verification at warehouses, outlets, or production sites." },
      { step: "03", title: "Reconciliation", desc: "Match physical counts with stock register, highlight discrepancies." },
      { step: "04", title: "Reporting", desc: "Detailed stock audit report with actionable recommendations." },
    ],
    cta: {
      headline: "Embracing the Stock Audit",
      sub: "Take the First Step Toward Growth, Accuracy, and Stability with AXIAFIN. Get professional assistance for your Stock Audit in Hyderabad today.",
      label: "Contact Now",
    },
  },
};
