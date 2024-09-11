import { useEffect, useState } from "react";
import { useKKiaPay } from "kkiapay-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function BuyKkiapay() {
  const { openKkiapayWidget, addKkiapayListener, removeKkiapayListener } =
    useKKiaPay();
  const router = useRouter();

  async function successHandler(response: any) {
    try {
      const res = await fetch("/api/buykkiapay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(response),
      });

      const data = await res.json();

      if (data.error) {
        toast("Erreur", {
          description: "La vérification du paiement a échoué",
          action: {
            label: "Fermer",
            onClick: () => console.log("Undo"),
          },
        });
      } else {
        console.log("Payment verification success:", data);
        toast("Succès", {
          description: "Paiement vérifié avec succès",
          action: {
            label: "Fermer",
            onClick: () => console.log("Undo"),
          },
        });
        router.push("/payment-success");
      }
    } catch (error) {
      console.error("Error during payment verification:", error);
      toast("Erreur", {
        description:
          "Une erreur inattendue s'est produite lors de la vérification du paiement",
        action: {
          label: "Fermer",
          onClick: () => console.log("Undo"),
        },
      });
    }
  }

  function failureHandler(error: any) {
    console.log(error);
    toast("Erreur", {
      description: "Paiement non vérifié",
      action: {
        label: "Fermer",
        onClick: () => console.log("Undo"),
      },
    });
  }

  useEffect(() => {
    const onSuccess = (response: any) => successHandler(response);

    addKkiapayListener("success", onSuccess);
    addKkiapayListener("failed", failureHandler);
  }, [addKkiapayListener, removeKkiapayListener]);

  const BuyOpen = async (user: any) => {
    try {
      openKkiapayWidget({
        amount: 5000,
        api_key: process.env.NEXT_PUBLIC_KKIAPAY_API_KEY,
        sandbox: true,
        email: user.email || "",
        phone: user.phone || "",
        name: user.firstName || "",
      });
    } catch (error) {
      console.error("Error opening Kkiapay widget:", error);
      toast("Erreur", {
        description: "Impossible d'ouvrir le widget de paiement",
        action: {
          label: "Fermer",
          onClick: () => console.log("Undo"),
        },
      });
    }
  };

  return { BuyOpen };
}
