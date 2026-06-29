/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  children?: React.ReactNode;
  className?: string;
  key?: any;
  onMouseEnter?: any;
  onMouseLeave?: any;
}

// ponytail: Card layout (light mode only, no shadows, hover transitions border color)
export default function Card({ children, className = "", hover = false, ...props }: CardProps) {
  return (
    <div
      className={`bg-white border border-slate-200 rounded-md ${
        hover ? "hover:border-black transition-all duration-300" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
