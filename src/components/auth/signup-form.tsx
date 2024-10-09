"use client";

import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Input } from "../ui/input";
import PasswordField from "../forms/password-field";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { UserInput } from "@/lib/database/models/user.models";
import FieldError from "../forms/field-error";
import { defaultValues, signUpSchema } from "./signup-schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSignupMutation } from "@/lib/api/user.api";
import { useToast } from "@/hooks/use-toast";
import FormButton from "../forms/form-button";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<UserInput>({
    defaultValues,
    mode: "all",
    resolver: yupResolver(signUpSchema),
  });

  const { toast } = useToast();
  const router = useRouter();

  const handleSignupError = (error: Error) => {
    toast({
      variant: "destructive",
      title: "Signup Failed",
      description: error.message,
      duration: 3000,
    });
  };

  const handleSignupSuccess = () => {
    toast({
      variant: "success",
      title: "Signup Successful",
      description: "Your account was successfully created.",
      duration: 3000,
    });
    router.push("/login");
  };

  const { isPending, mutate } = useSignupMutation({
    onErrorHandler: handleSignupError,
    onSuccessHandler: handleSignupSuccess,
  });

  const onSubmit: SubmitHandler<UserInput> = async (data) => {
    mutate(data);
  };

  return (
    <form className="w-full flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-2">
        <Controller
          name="name"
          control={control}
          render={({ field }) => {
            return (
              <FieldError message={errors.name?.message}>
                <Input
                  type="type"
                  placeholder="Your Names"
                  className="form-control"
                  {...field}
                />
              </FieldError>
            );
          }}
        />

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
        <Controller
          name="phone"
          control={control}
          render={({ field }) => {
            return (
              <FieldError message={errors.phone?.message}>
                <Input
                  type="text"
                  placeholder="Phone No."
                  className="form-control"
                  {...field}
                />
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

      <FormButton type="submit" className="mt-6" isLoading={isPending}>
        Sign Up
      </FormButton>
    </form>
  );
}
