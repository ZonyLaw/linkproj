import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
};

const variants = {
  default: "bg-foreground text-background hover:opacity-85",
  outline:
    "border border-foreground/20 text-foreground hover:bg-foreground/5",
};

export function Button({
  className,
  variant = "default",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex h-11 min-w-36 items-center justify-center rounded-md px-5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${className ?? ""}`}
      {...props}
    />
  );
}