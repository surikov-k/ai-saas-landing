import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function SectionContent({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge(
        `
          container overflow-hidden py-24
          lg:py-48
          md:py-36
        `,
        className,
      )}
      {...props}
    />
  );
}
