import { formatApiResponse } from "@/lib/utils";
import { Document, Schema, model, models } from "mongoose";

export interface ClientInput {
  name: string;
  email: string;
  phone: string;
  user: string;
}

export interface Client extends ClientInput {
  id: string;
}

export interface IClient extends Omit<ClientInput, "user">, Document {
  user: Schema.Types.ObjectId;
}

const ClientSchema = new Schema<IClient>(
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
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide a user ID."],
    },
  },
  {
    timestamps: false,
  }
);

ClientSchema.set("toJSON", {
  transform: formatApiResponse,
});

const Client = models.Client || model<IClient>("Client", ClientSchema);

export { Client };