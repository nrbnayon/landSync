// components/Dashboard/Shared/StatsCard.tsx
import { cn } from "@/lib/utils";
import { HugeiconsIcon, IconSvgElement } from "@hugeicons/react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: IconSvgElement;
  iconBgColor: string;
  className?: string;
  subtitle?: string;
}

export function StatsCard({
  title,
  value,
  icon,
  iconBgColor,
  className,
  subtitle,
}: StatsCardProps) {
  return (
    <div
      className={cn(
        "bg-white px-5 py-4 rounded-2xl flex items-center justify-between h-full border border-border",
        className
      )}
    >
      <div className="flex flex-col justify-center gap-1">
        <h3 className="text-gray-600 text-sm font-normal">{title}</h3>
        <div className="text-2xl font-semibold text-gray-900">{value}</div>
        {subtitle && (
          <div className="text-xs text-gray-500">{subtitle}</div>
        )}
      </div>
      
      <div
        className="flex items-center justify-center rounded-2xl p-3.5"
        style={{ backgroundColor: iconBgColor }}
      >
        <HugeiconsIcon
          icon={icon}
          size={28}
          className="text-white"
          strokeWidth={2}
        />
      </div>
    </div>
  );
}