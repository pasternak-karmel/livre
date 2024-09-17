"use client";
import { fedaserver } from "@/actions/fedaServer";
import { BuyKkiapay } from "@/components/buyArticle";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { useState } from "react";

export default function PaymentPage() {
  const { BuyOpen } = BuyKkiapay();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    phone: "",
    amount: 5000,
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = async (e: any) => {
    e.preventDefault(); // Prevents page reload
    // BuyOpen(formData);
    const url = await fedaserver(formData);
    if (url) {
      window.location.href = url;
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200 p-4">
      <div className="bg-white shadow-lg rounded-lg grid grid-cols-1 md:grid-cols-2 max-w-5xl w-full">
        <div className="p-8">
          <div className="text-center">
            <Image
              src="/ebook-cover.jpg"
              alt="Formation Publicité Facebook"
              width={150}
              height={150}
              className="mx-auto"
            />
            <h2 className="mt-4 text-lg font-semibold">
              Formation Publicité Facebook
            </h2>
          </div>
          <div className="mt-6 text-gray-700">
            <p className="mb-4">
              Formation Facebook Ads : Maîtrisez la publicité sur Facebook pour
              propulser votre entreprise vers de nouveaux sommets ! 🚀
            </p>
            <p className="text-sm">
              Dans cette formation dynamique, vous apprendrez :
            </p>
            <ul className="list-disc pl-6 text-sm">
              <li>Les bases de la publicité sur Facebook</li>
              <li>Les techniques avancées de ciblage</li>
              <li>Conception d&apos;annonces percutantes</li>
              <li>Optimisation des performances des campagnes</li>
            </ul>
            <p className="mt-4 text-sm">
              Que vous soyez un débutant ou un entrepreneur expérimenté, cette
              formation est faite pour vous.
            </p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="p-8 bg-gray-50 rounded-r-lg">
          <h3 className="text-lg font-semibold text-gray-800">Marchand:</h3>
          <form className="mt-6 space-y-4" onSubmit={handlePayment}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nom
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Prénom(s)
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Pays
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm"
                  required
                >
                  <option value="">Sélectionner</option>
                  <option value="Benin">Bénin</option>
                  <option value="ivoire">Côte d&apos;ivoire</option>
                  {/* Add more options as necessary */}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Téléphone
                </label>
                <input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
            </div>

            {/* Amount */}
            <div className="flex items-center justify-between">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Montant
                </label>
                <input
                  type="text"
                  name="amount"
                  value={formData.amount}
                  disabled
                  className="mt-1 p-2 block w-28 border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <span className="text-gray-700 font-bold">FCFA</span>
            </div>

            {/* Submit Button */}
            <div className="flex justify-between items-center mt-8">
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Continuer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
