"use client";

import { useEffect, useState } from "react";

export default function QRPage() {
  const [qr, setQr] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pairing`);
      const data = await res.json();
      setQr(data.qr);
    }
    load();
  }, []);

  return (
    <div className="container text-center mt-5">
      <h2 className="mb-4">Inquadra il QR</h2>
      {qr ? <img src={qr} className="qr-box" /> : <p>Generazione QR...</p>}
      <p className="mt-4">WhatsApp → Dispositivi collegati → Collega un dispositivo</p>
    </div>
  );
}
