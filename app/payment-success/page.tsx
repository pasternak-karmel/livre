"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PaymentSuccess() {
  const router = useRouter();
  const redirectLink =
    "https://drive.google.com/drive/folders/1YVd1VjigwlJPak6qm_r6aTF2oH9hsDTl";

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push(redirectLink);
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-6">
      <h1 className="text-4xl font-bold mb-4 text-green-600">
        Paiement Réussit!
      </h1>
      <p className="text-lg mb-6">
        Merci pour votre. Vous aller être maintenant rediriger ver la page des
        livres.
      </p>
      <div>
        <p>
          Si vous n&apos;êtes pas rediriger automatiquement ,{" "}
          <a href={redirectLink} className="text-blue-500 underline">
            cliquer ici pour aller à la page des livres manuellement
          </a>
          .
        </p>
      </div>
    </div>
  );
}
