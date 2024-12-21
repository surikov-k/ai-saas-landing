import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface SectionBorderProps extends HTMLAttributes<HTMLDivElement> {
  borderTop?: boolean;
}

export default function SectionBorder({
  className,
  children,
  borderTop,
  ...otherProps
}: SectionBorderProps) {
  return (
    <div
      className={twMerge(
        "relative border-l border-r border-[var(--color-border)]",
        borderTop && "border-t",
        className,
      )}
      {...otherProps}
    >
      {borderTop && (
        <>
          <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2">
            <FontAwesomeIcon icon={faPlus} className="size-4 text-gray-200" />
          </div>
          <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2">
            <FontAwesomeIcon icon={faPlus} className="size-4 text-gray-200" />
          </div>
        </>
      )}
      {children}
    </div>
  );
}
