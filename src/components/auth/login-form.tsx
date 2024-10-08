"use client";

import React, { FormEvent } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Input } from "../ui/input";
import PasswordField from "../forms/password-field";

export default function LoginForm() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className="w-full flex flex-col" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-2">
        <Input type="type" placeholder="Your Names" className="form-control" />
        <Input type="email" placeholder="Your Email" className="form-control" />

        <PasswordField placeholder="Your Password" />
        <Input type="email" placeholder="Phone No." className="form-control" />
      </div>

      <div className="flex justify-end w-full mt-6">
        <Link
          className="font-semibold text-sm hover:text-primary"
          href="/forgot-password"
        >
          Forgot Password?
        </Link>
      </div>

      <Button type="submit" className="mt-6">
        Sign Up
      </Button>
    </form>
  );
}
