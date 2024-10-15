import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const PasswordField = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
      <div className="flex items-center relative">
        <input
          type={type}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        <Button
          type="button"
          variant="ghost"
          className="h-10 p-0 absolute right-3"
          onClick={() => setShowPassword((prevStatus) => !prevStatus)}
        >
          {showPassword ? (
            <EyeOffIcon className="text-primary" />
          ) : (
            <EyeIcon className="text-muted" />
          )}
        </Button>
      </div>
    );
  }
);

PasswordField.displayName = "PasswordField";

export { PasswordField };
