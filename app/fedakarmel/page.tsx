// app/fedakarmel/page.tsx

"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function FedaKarmelPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const transactionId = searchParams.get("id");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyTransaction = async () => {
      setLoading(true);
      try {
        if (!transactionId) {
          throw new Error("Transaction ID is missing");
        }

        const res = await fetch("/api/feda", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            transactionId,
          }),
        });

        const data = await res.json();

        if (data.type === "approved") {
          router.push(`/payment-success`);
        } else if (data.type === "pending") {
          router.push("/payment-pending");
        } else if (data.type === "failed") {
          router.push("/payment-failed");
        } else {
          router.push("/unknown-status");
        }
      } catch (error) {
        console.error("Error lors de la vérification de votre paiement", error);
        router.push("/error");
      } finally {
        setLoading(false);
      }
    };

    if (transactionId) {
      verifyTransaction();
    }
  }, [transactionId, router]);

  if (loading) {
    return <div>Chargement...</div>;
  }

  return <div>Traitement de votre paiement...</div>;
}
