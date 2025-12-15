import React from "react";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "secondary" | "outline";
};

export function Badge({
  className = "",
  variant = "default",
  ...props
}: BadgeProps) {
  const base =
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium";
  const variants: Record<string, string> = {
    default: "bg-slate-900 text-white",
    secondary: "bg-slate-100 text-slate-800",
    outline: "border border-slate-300 text-slate-800",
  };
  return (
    <span className={`${base} ${variants[variant]} ${className}`} {...props} />
  );
}


