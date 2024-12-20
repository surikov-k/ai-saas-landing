import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function SectionBorder({
  className,
  children,
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge(
        "overflow-hidden border-l border-r border-[var(--color-border)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
