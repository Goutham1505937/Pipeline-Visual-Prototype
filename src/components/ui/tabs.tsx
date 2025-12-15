import React, { createContext, useContext } from "react";

type TabsContextValue = {
  value: string;
  onChange: (v: string) => void;
};

const TabsContext = createContext<TabsContextValue | null>(null);

type TabsProps = {
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
};

export function Tabs({ value, onValueChange, children }: TabsProps) {
  return (
    <TabsContext.Provider value={{ value, onChange: onValueChange }}>
      {children}
    </TabsContext.Provider>
  );
}

export function TabsList({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={
        "inline-flex items-center rounded-xl bg-slate-100 p-1 " + className
      }
      {...props}
    />
  );
}

type TabsTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  value: string;
};

export function TabsTrigger({
  value,
  className = "",
  children,
  ...props
}: TabsTriggerProps) {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("TabsTrigger must be used inside Tabs");
  const active = ctx.value === value;
  return (
    <button
      type="button"
      onClick={() => ctx.onChange(value)}
      className={`rounded-lg px-3 py-1 text-xs font-medium transition ${
        active
          ? "bg-white shadow-sm text-slate-900"
          : "text-slate-500 hover:text-slate-900"
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

type TabsContentProps = {
  value: string;
  children: React.ReactNode;
  className?: string;
};

export function TabsContent({
  value,
  children,
  className = "",
}: TabsContentProps) {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("TabsContent must be used inside Tabs");
  if (ctx.value !== value) return null;
  return <div className={className}>{children}</div>;
}


