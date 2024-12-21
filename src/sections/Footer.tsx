"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faYoutube,
  faXTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

export const navItems = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
  {
    name: "Login",
    href: "#",
  },
];

export const socialLinks = [
  {
    name: "Youtube",
    icon: faYoutube,
    href: "#youtube",
  },
  {
    name: "X",
    icon: faXTwitter,
    href: "#x",
  },
  {
    name: "Discord",
    icon: faDiscord,
    href: "#discord",
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="container py-8">
        <div
          className={`
            flex flex-col items-center gap-8
            lg:flex-row lg:justify-between
          `}
        >
          <div className="text-2xl font-extrabold">sphereal.ai</div>
          <nav
            className={`
              flex flex-col items-center gap-8
              md:flex-row md:gap-16
            `}
          >
            {navItems.map(({ name, href }) => (
              <a
                key={href}
                href={href}
                className="text-xs font-bold uppercase tracking-widest text-gray-400"
                onClick={(event) => {
                  event.preventDefault();
                  const element = document.querySelector(href);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {name}
              </a>
            ))}
          </nav>
        </div>
        <div
          className={`
            mt-16 flex flex-col items-center gap-8
            md:flex-row-reverse md:justify-between
          `}
        >
          <div className="flex justify-center gap-6">
            {socialLinks.map(({ icon, href, name }) => (
              <a key={name} href={href}>
                <div
                  className={`
                    inline-flex size-10 items-center justify-center rounded-full bg-gray-900
                  `}
                >
                  <FontAwesomeIcon icon={icon} className="size-4" />
                </div>
              </a>
            ))}
          </div>
          <p
            className={`
              text-sm text-gray-500
              md:text-sm
            `}
          >
            &copy; Frontend Tribe, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
