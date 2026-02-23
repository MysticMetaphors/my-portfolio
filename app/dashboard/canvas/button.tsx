"use client";

import React, { forwardRef, ReactNode } from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "outline-pill"
  | "ghost";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = "transition-all flex items-center justify-center font-bold tracking-wider text-sm disabled:opacity-50 disabled:cursor-not-allowed";

    const variantStyles: Record<ButtonVariant, string> = {
      primary: "bg-brand-primary text-white uppercase hover:bg-brand-primary/90 shadow-xl shadow-brand-primary/30 rounded-md",
      secondary: "bg-brand-primary/70 text-white uppercase hover:bg-brand-primary hover:text-white rounded-md",
      tertiary: "bg-transparent border-2 border-brand-primary text-brand-primary uppercase hover:bg-brand-primary hover:text-white rounded-md",
      "outline-pill": "bg-white border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white rounded-full",
      ghost: "text-gray-400 hover:text-brand-primary rounded-full",
    };

    // Smart padding: If there's no text (children), make it an icon square/circle
    // Otherwise, apply the standard text padding
    const hasText = React.Children.count(children) > 0;

    let paddingStyles = "";
    if (variant === "outline-pill") {
      paddingStyles = hasText ? "p-2 pr-3 gap-2" : "p-2";
    } else if (variant === "ghost") {
      paddingStyles = hasText ? "gap-1" : "p-2";
    } else {
      // Primary, Secondary, Tertiary
      paddingStyles = hasText ? "px-8 py-3 gap-2" : "p-3";
    }

    // The Loading Spinner SVG
    const Spinner = (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin">
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </svg>
    );

    return (
      <button
        ref={ref}
        disabled={isLoading || disabled}
        className={`${baseStyles} ${variantStyles[variant]} ${paddingStyles} ${className}`.trim()}
        {...props}
      >
        {isLoading ? Spinner : leftIcon}
        {children}
        {rightIcon}
      </button>
    );
  }
);

Button.displayName = "Button";