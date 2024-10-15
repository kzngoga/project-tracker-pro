import * as yup from "yup";

export interface LoginData {
  password: string;
  email: string;
}

export const defaultValues: LoginData = {
  email: "",
  password: "",
};

export const loginSchema: yup.ObjectSchema<LoginData> = yup.object({
  password: yup.string().defined().required("Password is required."),
  email: yup
    .string()
    .required("Email is required.")
    .defined()
    .email("Invalid email."),
});
