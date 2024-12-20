"use client";

import logoImage from "@/assets/images/sphereal-logo.svg?url";
import Button, { ButtonProps } from "@/components/Button";
import Orbit from "@/components/Orbit";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

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
];

export const loginItems = [
  {
    buttonVariant: "tertiary",
    name: "Login",
    href: "#login",
  },
  {
    buttonVariant: "primary",
    name: "Sign Up",
    href: "#sign-up",
  },
] satisfies {
  name: string;
  href: string;
  buttonVariant: ButtonProps["variant"];
}[];

export const Header = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <>
      <header className="relative z-40 border-b border-[var(--color-border)]">
        <div className="container">
          <div
            className={`
              flex h-18 items-center justify-between
              lg:h-20
            `}
          >
            <div className="flex items-center gap-4">
              <div
                className={`
                  size-10 bg-gray-200
                  bg-[conic-gradient(var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))]
                `}
                style={{
                  maskImage: `url(${logoImage.src})`,
                  maskSize: "contain",
                }}
              ></div>
              <div className="text-2xl font-bold">sphereal.ai</div>
            </div>
            <div
              className={`
                hidden h-full
                lg:block
              `}
            >
              <nav className="h-full">
                {navItems.map(({ name, href }) => (
                  <a
                    key={href}
                    href={href}
                    className={`
                      relative inline-flex h-full items-center px-10 text-xs font-bold uppercase
                      tracking-widest text-gray-400
                      before:absolute before:bottom-0 before:right-0 before:h-2 before:w-px
                      before:bg-gray-200/20
                      last:after:absolute last:after:bottom-0 last:after:left-0 last:after:h-2
                      last:after:w-px last:after:bg-gray-200/20
                    `}
                  >
                    {name}
                  </a>
                ))}
              </nav>
            </div>
            <div
              className={`
                hidden gap-4
                lg:flex
              `}
            >
              {loginItems.map(({ buttonVariant, name, href }) => (
                <a key={href} href={href}>
                  <Button variant={buttonVariant}>{name}</Button>
                </a>
              ))}
            </div>
            <div
              className={`
                flex items-center
                lg:hidden
              `}
            >
              <button
                className={`
                  relative size-10 rounded-lg border-2 border-transparent
                  [background:linear-gradient(var(--color-gray-950),var(--color-gray-950))_content-box,conic-gradient(var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))_border-box]
                `}
                onClick={() => setMobileNavOpen((curr) => !curr)}
              >
                <div
                  className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
                >
                  <div
                    className={twMerge(
                      `h-0.5 w-4 -translate-y-1 bg-gray-100 transition duration-300`,
                      isMobileNavOpen && `translate-y-0 rotate-45`,
                    )}
                  ></div>
                </div>
                <div
                  className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
                >
                  <div
                    className={twMerge(
                      `h-0.5 w-4 translate-y-1 bg-gray-100 transition duration-300`,
                      isMobileNavOpen && `translate-y-0 -rotate-45`,
                    )}
                  ></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
      {isMobileNavOpen && (
        <div
          className={`
            fixed bottom-0 left-0 right-0 top-18 z-30 overflow-hidden bg-gray-950
            lg:hidden
          `}
        >
          <div className={`absolute-center isolate -z-10`}>
            <Orbit />
          </div>
          <div className={`absolute-center isolate -z-10`}>
            <Orbit className="size-[350px]" />
          </div>
          <div className={`absolute-center isolate -z-10`}>
            <Orbit className="size-[500px]" />
          </div>
          <div className={`absolute-center isolate -z-10`}>
            <Orbit className="size-[650px]" />
          </div>
          <div className={`absolute-center isolate -z-10`}>
            <Orbit className="size-[800px]" />
          </div>

          <div className="container h-full">
            <nav
              className={`flex h-full flex-col items-center justify-center gap-4 py-8`}
            >
              {navItems.map(({ name, href }) => (
                <a
                  key={href}
                  href={href}
                  className={`h-10 text-xs font-bold uppercase tracking-widest text-gray-400`}
                >
                  {name}
                </a>
              ))}
              {loginItems.map(({ buttonVariant, name, href }) => (
                <a key={href} href={href} className="w-full max-w-xs">
                  <Button variant={buttonVariant} block>
                    {name}
                  </Button>
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
