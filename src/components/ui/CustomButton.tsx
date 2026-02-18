import React from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "outline";

type Props = {
  children: React.ReactNode;
  loading?: boolean;
  variant?: Variant;
  fullWidth?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function CustomButton({
  children,
  loading = false,
  variant = "primary",
  fullWidth = false,
  disabled,
  className,
  ...props
}: Props) {
  return (
    <button
      disabled={disabled || loading}
      {...props}
      className={clsx(
        `
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-xl
        px-6
        py-2.5
        text-sm
        font-medium
        transition
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        disabled:opacity-50
        disabled:cursor-not-allowed
        `,
        {
          /* Primary */
          "bg-black text-white hover:opacity-90 focus:ring-black":
            variant === "primary",

          /* Secondary */
          "bg-slate-100 text-slate-800 hover:bg-slate-200 focus:ring-slate-400":
            variant === "secondary",

          /* Outline */
          "border border-slate-300 text-slate-700 hover:bg-slate-50 focus:ring-slate-400":
            variant === "outline",

          "w-full": fullWidth,
        },
        className
      )}
    >
      {loading && (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
      )}

      {children}
    </button>
  );
}
