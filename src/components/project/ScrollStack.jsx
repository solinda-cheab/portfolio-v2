import React from "react";

export function ScrollStackItem({ children, className = "" }) {
  return (
    <div
      className={`rounded-[32px] border border-slate-200/80 bg-white shadow-xl shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-slate-800/80 dark:bg-slate-950 ${className}`}
    >
      <div className="p-8 md:p-10 space-y-4 text-slate-900 dark:text-slate-100">
        {children}
      </div>
    </div>
  );
}

export default function ScrollStack({ children }) {
  const items = React.Children.toArray(children).filter(Boolean);

  return (
    <div className="relative overflow-hidden py-8">
      <div className="mx-auto grid w-full max-w-5xl gap-10">
        {items.map((child, index) => (
          <div key={index} className="relative">
            <div
              className="sticky top-24"
              style={{
                zIndex: index + 1,
                transform: `translateY(${index * 18}px)`,
              }}
            >
              {child}
            </div>
            <div className="h-[22rem] md:h-[24rem]" />
          </div>
        ))}
      </div>
    </div>
  );
}
