import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Orbit({ className }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge(
        "size-[200px] rounded-full border border-gray-200/30",
        className,
      )}
    ></div>
  );
}
