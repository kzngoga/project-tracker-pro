import React, { useState } from "react";
import { Input, InputProps } from "../ui/input";
import { Button } from "../ui/button";
import { EyeIcon, EyeOffIcon } from "lucide-react";

type PasswordFieldProps = InputProps;

export default function PasswordField(props: PasswordFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center relative">
      <Input
        type={showPassword ? "text" : "password"}
        className="form-control"
        {...props}
      />
      <Button
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
