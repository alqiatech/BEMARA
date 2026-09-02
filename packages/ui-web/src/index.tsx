import type { ButtonHTMLAttributes, ReactNode } from "react";

import { bemaraAssets } from "@bemara/design-tokens";

export interface BemaraBrandProps {
  compact?: boolean;
  className?: string;
}

export function BemaraBrand({ compact = false, className }: BemaraBrandProps) {
  return (
    <div
      className={["bemara-brand", compact ? "bemara-brand--compact" : "", className ?? ""].join(
        " ",
      )}
    >
      <img src={`/${bemaraAssets.iconPng}`} alt="" aria-hidden="true" />
      {!compact ? (
        <span className="bemara-brand__wordmark" aria-label="BEMARA">
          BEMARA
        </span>
      ) : null}
    </div>
  );
}

export interface BemaraButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export function BemaraButton({
  children,
  className,
  variant = "primary",
  ...props
}: BemaraButtonProps) {
  return (
    <button
      className={["bemara-button", `bemara-button--${variant}`, className ?? ""].join(" ")}
      type={props.type ?? "button"}
      {...props}
    >
      {children}
    </button>
  );
}

export interface BemaraEditorialPanelProps {
  children: ReactNode;
  className?: string;
}

export function BemaraEditorialPanel({ children, className }: BemaraEditorialPanelProps) {
  return (
    <section className={["bemara-editorial-panel", className ?? ""].join(" ")}>{children}</section>
  );
}
