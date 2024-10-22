import { formatApiResponse } from "@/lib/utils";
import { Document, Schema, model, models } from "mongoose";

export interface UserInput {
  name: string;
  password: string;
  email: string;
  phone: string;
}

export interface User extends UserInput {
  id: string;
}

export interface IUser extends UserInput, Document {}

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: "String",
      required: [true, "Please provide a name."],
      minlength: [3, "Minimum length for name is atleast 3 characters."],
    },
    email: {
      type: "String",
      required: [true, "Please provide an email."],
    },
    phone: {
      type: "String",
      required: [true, "Please provide a phone number."],
      maxlength: [10, "Must have 10 characters"],
      minlength: [10, "Must have 10 characters"],
    },
    password: {
      type: "String",
      required: [true, "Please provide a password."],
      minlength: [8, "Must have at least 8 characters"],
    },
  },
  {
    timestamps: false,
  }
);

UserSchema.set("toJSON", {
  transform: formatApiResponse,
});

const User = models.User || model<IUser>("User", UserSchema);

export { User };
