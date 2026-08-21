/**
 * Single source of truth for site content and links.
 * Edit here rather than in the components.
 */

export const site = {
  name: "Skye Powered, LLC",
  shortName: "Skye Powered",
  domain: "skyepowered.com",
  url: "https://skyepowered.com",
  tagline: "Software development & consulting.",
  description:
    "Skye Powered, LLC is the independent software studio of Kevin Barnes covering app development and consulting.",
  email: "kevin@skyepowered.com",
} as const;

export type ExternalLink = {
  label: string;
  href: string;
  /** Short line shown under the label on the main page. */
  blurb: string;
};

export const links: ExternalLink[] = [
  {
    label: "kevbarnes.com",
    href: "https://kevbarnes.com",
    blurb: "Personal site & portfolio",
  },
  {
    label: "GitHub",
    href: "https://github.com/Majekdor",
    blurb: "Code & open source",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kevinskybarnes",
    blurb: "Professional background",
  },
];

/**
 * Privacy policies / terms for shipped apps go here later.
 * While this is empty the footer legal row renders nothing.
 * e.g. { label: "Privacy Policy", href: "/legal/privacy" }
 */
export const legalLinks: { label: string; href: string }[] = [];
