"use client";

import { useState } from "react";

export default function AutoInstall() {
  const [id, setId] = useState("");

  async function install() {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/install-auto`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ serverId: id })
    });
  }

  return (
    <div className="container text-center mt-5">
      <h2 className="mb-4">ID del container WispByte</h2>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="ABCD1234"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button className="btn btn-warning btn-lg w-100" onClick={install}>
        Installa automaticamente
      </button>
    </div>
  );
}
