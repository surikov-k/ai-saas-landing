import { cva } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const classes = cva(`rounded-full bg-gradient-to-b to-gray-950`, {
  variants: {
    size: {
      sm: "size-4",
      md: "size-6",
      lg: "size-8",
    },
    color: {
      violet: "from-violet-400",
      teal: "from-teal-400",
      fuchsia: "from-fuchsia-400",
    },
  },
  defaultVariants: {
    size: "lg",
    color: "violet",
  },
});

interface PlanetProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  color?: "violet" | "teal" | "fuchsia";
}
export default function Planet({
  size = "lg",
  color = "violet",
  className,
}: PlanetProps) {
  return <div className={classes({ size, color, className })}></div>;
}
