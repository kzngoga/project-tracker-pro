"use client";

import { LoginData, loginSchema } from "@/lib/config/auth/login-schema";
import { defaultValues } from "@/lib/config/auth/signup-schema";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import FieldError from "../forms/field-error";
import { Input } from "../ui/input";
import PasswordField from "../forms/password-field";
import Link from "next/link";
import FormButton from "../forms/form-button";
import { signIn } from "next-auth/react";
import { useToast } from "@/hooks/use-toast";

export default function LoginForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginData>({
    defaultValues,
    mode: "all",
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginData> = async (data) => {
    setIsSubmitting(true);
    const res = await signIn("credentials", {
      email: data?.email,
      password: data?.password,
      redirect: false,
    });

    setIsSubmitting(false);

    if (res?.error && !res.ok) {
      toast({
        variant: "destructive",
        title: `${res.status} -  Login Error`,
        description: res?.error,
      });
    } else {
      window.location.href = "/dashboard";
    }
  };

  return (
    <form className="w-full flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 gap-4">
        <Controller
          name="email"
          control={control}
          render={({ field }) => {
            return (
              <FieldError message={errors.email?.message}>
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="form-control"
                  {...field}
                />
              </FieldError>
            );
          }}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => {
            return (
              <FieldError message={errors.password?.message}>
                <PasswordField placeholder="Your Password" {...field} />
              </FieldError>
            );
          }}
        />
      </div>

      <div className="flex justify-end w-full mt-6">
        <Link
          className="font-semibold text-sm hover:text-primary"
          href="/forgot-password"
        >
          Forgot Password?
        </Link>
      </div>

      <FormButton type="submit" className="mt-6" isLoading={isSubmitting}>
        Sign In
      </FormButton>
    </form>
  );
}
