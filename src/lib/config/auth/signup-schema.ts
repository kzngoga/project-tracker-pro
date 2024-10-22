import { UserInput } from "@/lib/database/models/user.model";
import * as yup from "yup";

export const defaultValues: UserInput = {
  name: "",
  password: "",
  phone: "",
  email: "",
};

export const signUpSchema: yup.ObjectSchema<UserInput> = yup.object({
  name: yup
    .string()
    .defined()
    .required("Name is required.")
    .min(3, "Name must have atleast 3 characters."),
  password: yup
    .string()
    .defined()
    .required("Password is required.")
    .min(6, "Password must have atleast 6 characters."),
  phone: yup
    .string()
    .defined()
    .required("Phone is required.")
    .min(10, "Phone must have 10 characters."),
  email: yup
    .string()
    .required("Email is required.")
    .defined()
    .email("Invalid email."),
});
