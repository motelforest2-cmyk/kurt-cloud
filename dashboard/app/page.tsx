"use client";

export default function Home() {
  return (
    <div className="container text-center mt-5">
      <div className="robot-icon mb-4">🤖</div>
      <h1 className="mb-3">Il tuo bot WhatsApp in cloud</h1>
      <p className="mb-4">
        Collega il tuo numero in un attimo.  
        Poi ti guido passo passo fino all’installazione.
      </p>
      <a href="/qr" className="btn btn-warning btn-lg mb-3">📷 Usa QR Code</a>
      <a href="/code" className="btn btn-warning btn-lg">🔢 Usa Codice</a>
    </div>
  );
}
