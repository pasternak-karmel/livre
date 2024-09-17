"use client";

import React from "react";
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const PaymentPending = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md text-center">
        <Clock className="w-16 h-16 mx-auto text-yellow-500 mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Paiement en attente
        </h1>
        <p className="text-gray-600 mb-6">
          Votre transaction est en cours de traitement. Cela va prendre un
          certain moment. S&apos;il vous plait ne fermer pas la page ou raffraichire.
        </p>
        <div className="space-x-4">
          <Button asChild variant="outline">
            <Link href="/check-status">Vérifier le status</Link>
          </Button>
          <Button asChild>
            <Link href="/contact-support">Contacter le Support</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPending;
