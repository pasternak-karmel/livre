"use client";
import { fedaserver } from "@/actions/fedaServer";
import { BuyKkiapay } from "@/components/buyArticle";
import Image from "next/image";
import { useState } from "react";

export default function PaymentPage() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    phone: "",
    amount: 3000,
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = async (e: any) => {
    e.preventDefault();
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
              src="/coverPack.jpeg"
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
              Pack Ultime 🚀
            </p>
            <p className="text-sm">
              Dans cette formation dynamique, vous apprendrez à :
            </p>
            <ul className="list-disc pl-6 text-sm">
              <li>- Améliorer ta concentration 🧠 : Augmente ton efficacité au quotidien !</li>
 <li>Maîtriser l&apos;anglais* 🇬🇧 : Deviens fluent de A à Z !</li>
<li>Apprendre le mixage audio* 🎧 : Crée des sons professionnels en un rien de temps !</li> 
<li>Automatiser tes tâches sur ChatGPT 🤖 : Optimise ton temps avec l&apos;IA la plus puissante !</li>
<li>Importer des produits d&apos;Alibaba* 📦 : Domine le commerce Chine-Afrique </li> !
<li>Réussir sur ComeUp 💼 : Deviens un pro du freelancing !</li> 
<li>Créer des images avec Midjourney 🖼️ : Libère ta créativité avec l&apos;IA pour des visuels uniques !</li> 
<li>Lancer un e-commerce qui cartonne 🛒 : Monte ton business en ligne rentable !</li> 
<li>Créer une boutique Shopify de A 🏪 : Domine Shopify et vends tes produits !</li> 
<li>Apprendre à programmer👨‍💻 : Deviens développeur en un clin d&apos;œil !</li> 
<li>Maîtriser Excel VBA 📊 : Automatiser les tâches en un rien de temps !</li> 
<li>Gérer les publicités Facebook 📣 : Génère des ventes grâce à la publicité ciblée ! </li> 
<li>Réussir en affiliation💰 : Apprends à gagner de l&apos;argent avec l&apos;affiliation !</li> 
<li>Monter des vidéos pro 🎥 : Maîtrise Adobe Premiere Pro et DaVinci Resolve pour des vidéos de qualité !</li> 
<li>Créer un site WordPress🖥️ : Mets en ligne ton propre site en quelques clics !</li>
<li>Investir en bourse📈 : Fais fructifier ton argent intelligemment !</li> 
<li>Maîtriser Google Analytics 📊 : Analyse tes performances comme un pro !</li> 
<li>Devenir expert en Print On Demand 👕 : Crée et vends tes designs sans stock !</li> 
<li>Publicité sur les réseaux sociaux 📱 : Apprends à toucher une large audience !</li> 
<li>Formation trading📉 : Maîtrise les marchés financiers pour générer des profits !</li> 
<li> Formation mindset Barry 🧠 : Développe un mental d&apos;acier pour atteindre tes objectifs !</li>
            </ul>
            <p className="mt-4 text-sm">
              Que vous soyez un débutant ou un entrepreneur expérimenté, cette
              formation est faite pour vous.
            </p>
          </div>
        </div>

        <div className="p-8 bg-gray-50 rounded-r-lg">
          <h3 className="text-lg font-semibold text-gray-800">CBC Shop</h3>
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
                  <option value="Cameroon">Cameroon</option>
                  <option value="ivoire">Côte d&apos;ivoire</option>
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

            <div className="flex justify-between items-center mt-8">
              <button
                type="submit"
                className="px-36 py-2  bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Commander
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
