import React from "react";

type CardProps = React.HTMLAttributes<HTMLDivElement>;
type CardContentProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className = "", ...props }: CardProps) {
  return (
    <div
      className={
        "bg-card text-card-foreground rounded-2xl border border-border " +
        className
      }
      {...props}
    />
  );
}

export function CardContent({ className = "", ...props }: CardContentProps) {
  return <div className={"p-4 md:p-6 " + className} {...props} />;
}


