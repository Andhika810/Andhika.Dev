import React from "react";
import { Slot } from "@radix-ui/react-slot";

export function Button({
  asChild = false,
  className = "",
  children,
  ...props
}) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={`
        inline-flex items-center justify-center
        rounded-xl px-5 py-2.5
        text-sm font-semibold
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
        disabled:pointer-events-none disabled:opacity-50
        ${className}
      `}
      {...props}
    >
      {children}
    </Comp>
  );
}
