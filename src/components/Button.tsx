import { cva } from "class-variance-authority";
import { HTMLAttributes } from "react";

const classes = cva(
  `h-10 rounded-lg px-6 text-xs font-bold uppercase tracking-widest`,
  {
    variants: {
      block: {
        true: "w-full",
      },
      variant: {
        primary: `border-gradient`,
        secondary: "bg-gray-100 text-gray-950",
        tertiary: "bg-gray-800 to-gray-200",
      },
    },
    defaultVariants: {
      variant: "primary",
      block: false,
    },
  },
);

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  block?: boolean;
}

export default function Button(props: ButtonProps) {
  const { className = "", children, ...otherProps } = props;
  return (
    <button className={classes({ ...otherProps, className })}>
      {children}
    </button>
  );
}
