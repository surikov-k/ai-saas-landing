import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

import logoImage from "@/assets/images/sphereal-logo.svg?url";

export default function Logo({
  className,
  style,
  ...otherProps
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge(
        `
          size-10 bg-gray-200
          bg-[conic-gradient(var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))]
        `,
        className,
      )}
      style={{
        maskImage: `url(${logoImage.src})`,
        maskSize: "contain",
        ...style,
      }}
      {...otherProps}
    ></div>
  );
}
