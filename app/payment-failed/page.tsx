"use client";

import React from "react";
import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const PaymentFailed = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md text-center">
        <XCircle className="w-16 h-16 mx-auto text-red-500 mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Paiement Echoué
        </h1>
        <p className="text-gray-600 mb-6">
          Nous somme désolé, mais une erreur c&apos;est produite lors de votre
          paiement. S&apos;il vous plait réessayer ou contacter le support si le
          probleme persists
        </p>
        <div className="space-x-4">
          <Button asChild variant="outline">
            <Link href="/retry-payment">Réessayer le Paiement</Link>
          </Button>
          <Button asChild>
            <Link href="/contact-support">Contacter le Support</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailed;
