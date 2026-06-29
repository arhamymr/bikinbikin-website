/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Badge from "./Badge";

interface SectionHeaderProps {
  badge: string;
  title: string;
  description?: string;
  className?: string;
  badgeClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

// ponytail: Redesigned section header for light-mode monochrome
export default function SectionHeader({
  badge,
  title,
  description,
  className = "",
  badgeClassName = "",
  titleClassName = "",
  descriptionClassName = "",
}: SectionHeaderProps) {
  return (
    <div className={`text-center max-w-3xl mx-auto space-y-4 ${className}`}>
      <Badge className={badgeClassName}>{badge}</Badge>
      <h2
        className={`text-3xl sm:text-4xl font-medium text-slate-900 leading-tight ${titleClassName}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base text-slate-600 leading-relaxed ${descriptionClassName}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
