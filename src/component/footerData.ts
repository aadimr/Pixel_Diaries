import React from "react";
// import { FaLinkedin, FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

export type QuickLink = {
  pageName: string;
  link?: string;
};

export type ContactEntry = {
  [key: string]: string;
};

export type SocialIcon = {
  icon: React.ReactNode;
  link: string;
};

export type FooterSection =
  | {
      type: "Quick Links to Success";
      name: QuickLink[];
    }
  | {
      type: "Stay Connected, Stay Cool";
      name: string[];
    }
  | {
      type: "Contact Us (We don't bite!)";
      arr: ContactEntry[];
    }
  | {
      type: "Social Icons";
      name: SocialIcon[];
    }
  | {
      type: "Copyright";
      text: string;
    };

export const footerData: FooterSection[] = [
  {
    type: "Quick Links to Success",
    name: [
      { pageName: "Welcome Center", link: "/" },
      { pageName: "Services Galore", link: "/services" },
      { pageName: "About Us-y Stuff", link: "/about-us-y-stuff" },
      { pageName: "Triumph Tales", link: "/triumph-tales" },
      { pageName: "Blog-o-rama / Blog Buzz", link: "/blog-o-rama" },
      { pageName: "Career", link: "/career" },
      { pageName: "Get in Touch", link: "/get-in-touch" },
    ],
  },
  {
    type: "Stay Connected, Stay Cool",
    name: [
      "Don't miss a byte! Sign up for our newsletter and stay in the digital loop!",
      "Let's get social! Follow our digital shenanigans on:",
    ],
  },
  {
    type: "Contact Us (We don't bite!)",
    arr: [
      { "GaugeWork HQ": "Where the magic happens" },
      {
        Address:
          "#13, 2nd Floor, 11th Main, BTM 4th Stage, Bengaluru, Karnataka, India - 560076",
      },
      { Phone: "+91 99190 58790" },
      { Email: "business@gaugework.com" },
    ],
  },
//   {
//     type: "Social Icons",
//     name: [
//       {
//         icon: <FaLinkedin aria-label="LinkedIn" />,
//         link: "https://www.linkedin.com/",
//       },
//       {
//         icon: <FaWhatsapp aria-label="WhatsApp" />,
//         link: "https://api.whatsapp.com/send?phone=+919919058790",
//       },
//       {
//         icon: <FaInstagram aria-label="Instagram" />,
//         link: "https://www.instagram.com/",
//       },
//       {
//         icon: <FaFacebook aria-label="Facebook" />,
//         link: "https://www.facebook.com/",
//       },
//     ],
//   },
  {
    type: "Copyright",
    text: "© Gaugework. All rights reserved 2024.",
  },
];