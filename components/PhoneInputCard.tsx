"use client";

import { useState } from "react";

export default function PhoneInputCard({ onSubmit }) {
  const [number, setNumber] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const clean = number.replace(/\D/g, ""); // solo numeri

    if (clean.length < 6) {
      alert("Inserisci un numero valido senza +");
      return;
    }

    onSubmit(clean);
  }

  return (
    <div className="card">
      <h2>Inserisci il numero</h2>
      <p>Metti solo cifre, senza +</p>

      <form onSubmit={handleSubmit}>
        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Es: 3931234567"
          style={{ padding: 10, width: "100%", marginBottom: 10 }}
        />

        <button style={{ padding: 10, width: "100%" }}>
          Continua
        </button>
      </form>
    </div>
  );
}
