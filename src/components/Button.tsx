import { cva } from "class-variance-authority";
import { HTMLAttributes } from "react";

const classes = cva(
  `h-10 rounded-lg px-6 text-xs font-bold uppercase tracking-widest`,
  {
    variants: {
      variant: {
        primary: `
          border-2 border-transparent
          [background:linear-gradient(var(--color-gray-950),var(--color-gray-950))_padding-box,conic-gradient(var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))_border-box]
        `,
        secondary: "",
        tertiary: "bg-gray-800 to-gray-200",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary" | "tertiary";
}

export default function Button(props: ButtonProps) {
  const { className = "", children, ...otherProps } = props;
  return (
    <button className={classes({ ...otherProps, className })}>
      {children}
    </button>
  );
}
