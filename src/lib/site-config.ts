export const siteConfig = {
  name: "AXIAFIN",
  legalName: "SRASHTA FIN SERVICES PRIVATE LIMITED",
  shortName: "AXIAFIN",
  url: "https://axiafin.com",
  description:
    "AXIAFIN (a unit of SRASHTA FIN SERVICES PRIVATE LIMITED) is a modern Chartered Accountancy and financial-compliance firm in Hyderabad — Virtual CFO services, International Taxation (DTAA & PT advisory), legal representation, GST, company registration, ITR filing, MSME, and end-to-end stewardship for startups, SMEs, professionals, and individuals.",
  tagline: "Empowering Your Financial Compliance",
  mission: "Providing best value to your time and money.",
  locale: "en_IN",
  contact: {
    email: "info@axiafin.com",
    // Call number — used for tel: links across the site
    phone: "+91 89787 23684",
    phoneDisplay: "089787 23684",
    phoneE164: "+918978723684",
    // WhatsApp business line — used for wa.me links + the form's send-via-WhatsApp
    whatsapp: "+91 89776 08216",
    whatsappDisplay: "089776 08216",
    whatsappE164: "+918977608216",
    workingHours: "Mon – Fri · 9:00 AM – 6:00 PM",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/axiafin",
    twitter: "https://twitter.com/axiafin",
    facebook: "https://www.facebook.com/axiafin",
    instagram: "https://www.instagram.com/axiafin",
  },
} as const;

export const offices = [
  {
    city: "HITEC City, Hyderabad",
    label: "Head Office",
    addr: "Level 5, Western Aqua, White Fields, Hitech City, Madhapur, Hyderabad, Telangana 500081",
    phone: "+91 89787 23684",
    whatsapp: "+91 89776 08216",
    email: "info@axiafin.com",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Western+Aqua+Whitefields+HITEC+City+Madhapur+Hyderabad+500081",
  },
  {
    city: "Kothapet, Hyderabad",
    label: "Branch Office",
    addr: "2nd Floor, 11-13-116/8, Rd Number 4, Polkampally, Margadarshi Colony, Kothapet, Hyderabad, Telangana 500035",
    phone: "+91 89787 23684",
    whatsapp: "+91 89776 08216",
    email: "info@axiafin.com",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Margadarshi+Colony+Kothapet+Hyderabad+500035",
  },
  {
    city: "Ahmedabad, Gujarat",
    label: "Communication Branch",
    addr: "Ahmedabad, Gujarat — full address available on request",
    phone: "+91 89787 23684",
    whatsapp: "+91 89776 08216",
    email: "info@axiafin.com",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Ahmedabad+Gujarat",
  },
] as const;
