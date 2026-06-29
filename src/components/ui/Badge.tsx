/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

// ponytail: Simplified badge styling to neutral monochrome colors (light mode only, no shadows)
export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`text-xs font-bold uppercase tracking-widest text-black bg-zinc-100 border border-zinc-200 py-1 px-3 rounded-md ${className}`}
    >
      {children}
    </span>
  );
}
