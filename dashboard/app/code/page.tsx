"use client";

import { useState } from "react";
import Navbar from "../../../components/Navbar";
import PhoneInputCard from "../../../components/PhoneInputCard";

export default function Page() {
  const [number, setNumber] = useState(null);

  return (
    <>
      <Navbar />

      {!number && (
        <PhoneInputCard onSubmit={(n) => setNumber(n)} />
      )}

      {number && (
        <div className="card">
          <h2>Codice Bot</h2>
          <p>Numero selezionato: <b>{number}</b></p>

          <pre style={{ whiteSpace: "pre-wrap" }}>
{`// Qui puoi mostrare il codice del bot
// oppure fare una chiamata API per ottenere info specifiche
// in base al numero inserito`}
          </pre>
        </div>
      )}
    </>
  );
}
