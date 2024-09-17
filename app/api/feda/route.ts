import { NextResponse } from "next/server";
import { FedaPay, Transaction } from "fedapay";

export async function POST(req: Request) {
  FedaPay.setApiKey(process.env.FEDA_SECRET as string);
  FedaPay.setEnvironment("live");

  const body = await req.json();

  const { transactionId } = body;

  const transaction = await Transaction.retrieve(transactionId);
  const transactionStatus = transaction.status;
  return NextResponse.json({ type: transactionStatus }, { status: 200 });
}
