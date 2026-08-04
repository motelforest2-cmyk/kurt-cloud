"use client";

export default function ManualInstall() {
  async function manual() {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/install-manual`, {
      method: "POST"
    });
  }

  return (
    <div className="container text-center mt-5">
      <h2 className="mb-4">Installazione manuale</h2>
      <p className="mb-3">Scarica creds.json dal bot e caricalo su WispByte.</p>
      <button className="btn btn-secondary btn-lg" onClick={manual}>
        Ho caricato tutto su WispByte
      </button>
    </div>
  );
}
