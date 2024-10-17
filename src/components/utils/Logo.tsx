import { cn } from "@/lib/utils";
import { SquareDashedKanban } from "lucide-react";
import styles from "./logo.module.css";

interface LogoProps {
  wrapperClasses?: string;
  textStyles?: string;
}

export default function Logo({ wrapperClasses, textStyles }: LogoProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3",
        styles["main-logo"],
        wrapperClasses
      )}
    >
      <SquareDashedKanban className="text-primary w-10 h-10" />
      <span className={cn("text-xl font-bold text-secondary", textStyles)}>
        PT PRO
      </span>
    </div>
  );
}
