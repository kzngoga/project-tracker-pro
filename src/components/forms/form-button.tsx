"use client";

import React from "react";
import { Button, ButtonProps } from "../ui/button";
import { Loader } from "lucide-react";

interface FormButtonProps extends ButtonProps {
  isLoading?: boolean;
}

export default function FormButton({ isLoading, ...props }: FormButtonProps) {
  return (
    <Button {...props} disabled={isLoading}>
      {props.children}
      {isLoading && <Loader className="ml-2" size={16} />}
    </Button>
  );
}
