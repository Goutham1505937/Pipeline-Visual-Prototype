import React from "react";

type SeparatorProps = React.HTMLAttributes<HTMLDivElement>;

export function Separator({ className = "", ...props }: SeparatorProps) {
  return (
    <div className={`border-t border-slate-200 ${className}`} {...props} />
  );
}


