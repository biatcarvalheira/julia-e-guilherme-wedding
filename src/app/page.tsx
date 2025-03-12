"use client";
import { useState } from "react";
import axios from "axios";

export default function RSVPPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    shoeSize: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("https://script.google.com/macros/s/AKfycbyaK7op0A1GnBBub0d_bbuuKbncNR6LXM3eNrieL7KDJaQxqAtq7l90-q1_jx2Entv-/exec", formData);
      setSubmitted(true);
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
    }
  };

  return (
    <section 
      className="h-screen flex items-center justify-center px-4 bg-cover bg-center
      bg-[#f06faa] sm:bg-[#f7f7f7] 
      bg-[url('/images/rsvp_form_mobile_background.svg')] sm:bg-[url('/images/rsvp_form_desktop_background.png')]"
    >
      <div className="p-6 w-full max-w-3xl flex justify-center">
        <div className="w-full bg-transparent p-6 rounded-lg shadow-lg flex flex-col h-[80vh]">
          {submitted ? (
            <p className="text-green-500 font-bold text-center">Obrigado pela sua confirmação!</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col flex-grow space-y-8 justify-between">
              <div className="space-y-2">
                <label htmlFor="name" className="text-gray-700 font-medium">Seu Nome *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Digite seu nome"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-gray-700 rounded bg-transparent text-gray-700 focus:outline-none focus:border-gray-700"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-gray-700 font-medium">Número de Telefone *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Digite seu número de telefone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-gray-700 rounded bg-transparent text-gray-700 focus:outline-none focus:border-gray-700"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-gray-700 font-medium">Seu E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Digite seu e-mail"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-gray-700 rounded bg-transparent text-gray-700 focus:outline-none focus:border-gray-700"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="shoeSize" className="text-gray-700 font-medium">Número do Sapato</label>
                <input
                  type="text"
                  id="shoeSize"
                  name="shoeSize"
                  placeholder="Digite seu número do sapato"
                  value={formData.shoeSize}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-gray-700 rounded bg-transparent text-gray-700 focus:outline-none focus:border-gray-700"
                />
              </div>

              <div className="mt-auto">
                <button
                  type="submit"
                  className="w-full p-4 bg-black text-white rounded hover:bg-gray-800"
                >
                  Enviar
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
