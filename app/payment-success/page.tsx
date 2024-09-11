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
        Payment Successful!
      </h1>
      <p className="text-lg mb-6">
        Thank you for your purchase. You will be redirected shortly to download
        your eBook.
      </p>
      <div>
        <p>
          If you are not redirected,{" "}
          <a href={redirectLink} className="text-blue-500 underline">
            click here to go to the download page manually
          </a>
          .
        </p>
      </div>
    </div>
  );
}
