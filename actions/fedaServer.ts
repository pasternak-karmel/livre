"use server";

import { FedaPay, Transaction } from "fedapay";

const domain = process.env.DOMAIN;

interface user {
  email: string;
  country: string;
  phone: string;
  firstName: string;
  lastName: string;
}

export const fedaserver = async (values: user) => {
  FedaPay.setApiKey(process.env.FEDA_SECRET as string);
  FedaPay.setEnvironment("live");

  try {
    const transaction = await Transaction.create({
      description: "Confirmer votre achats",
      amount: 3000,
      callback_url: `${domain}/fedakarmel`,
      currency: {
        iso: "XOF",
      },
      customer: {
        firstname: values.firstName,
        lastname: values.lastName,
        email: values.email,
        phone_number: {
          number: values.phone,
          country: "BJ",
        },
      },
    });

    const token = await transaction.generateToken();
    return token.url;
  } catch (error) {
    console.error("Error creating transaction:", error);
    return null;
  }
};
