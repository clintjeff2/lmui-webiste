export const APPLY_URL = "https://study.landmark.cm";

export const SITE_NAME = "Landmark Metropolitan University Institute";
export const SITE_SHORT_NAME = "Landmark";
export const ACADEMIC_CALENDAR_URL = "/academic-calendar";

export const CONTACT_PHONES = [
  { display: "+(237)-672-339-570", href: "tel:+237672339570", type: "WhatsApp" },
  { display: "+(237)-694-990-622", href: "tel:+237694990622", type: "Phone" },
] as const;

export const CONTACT_EMAIL = {
  display: "info@landmarkmetropolitanuniversity.com",
  href: "mailto:info@landmarkmetropolitanuniversity.com",
} as const;

export const ADMIN_LINKS = [
  { label: "President", href: "/president" },
  { label: "Vice Chancellor", href: "/vice-chancellor" },
  { label: "Registrar", href: "/resgistrar" },
  { label: "Staff", href: "/staff" },
] as const;

export const NAV_LINKS = [
  { label: "Academics", href: "/academics" },
  { label: "Administration", href: "/staff" },
  { label: "All Programs", href: "/programs" },
  { label: "Admissions", href: "/admissions" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "News", href: "/news" },
] as const;
