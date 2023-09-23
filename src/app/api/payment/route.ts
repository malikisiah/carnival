import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const secretKey = process.env.NEXT_PUBLIC_STRIPE_SECRET as string;
  const stripe = new Stripe(secretKey, {
    apiVersion: "2022-11-15",
  });

  let data = await request.json();
  let priceIdArray = data.ids;

  const session = await stripe.checkout.sessions.create({
    line_items: priceIdArray.map((id: string) => ({ price: id, quantity: 1 })),
    mode: "payment",
    success_url: process.env.NEXT_PUBLIC_SUCCESS_URL as string,
    cancel_url: process.env.NEXT_PUBLIC_CANCEL_URL as string,
  });

  return NextResponse.json(session.url);
}
