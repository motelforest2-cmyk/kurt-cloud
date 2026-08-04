"use client";

import { useEffect, useState } from "react";

export default function CodePage() {
  const [code, setCode] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pairing`);
      const data = await res.json();
      setCode(data.pairingCode);
    }
    load();
  }, []);

  return (
    <div className="container text-center mt-5">
      <h2 className="mb-4">Il tuo codice</h2>
      <div className="pairing-code">{code || "Generazione..."}</div>
      <p className="mt-4">WhatsApp → Dispositivi collegati → Collega con numero di telefono</p>
    </div>
  );
}
