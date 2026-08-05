"use client";

import { useEffect, useState } from "react";
import { getStatus } from "@/lib/api";

export default function Dashboard() {
  const [data, setData] = useState(null);

  async function load() {
    const status = await getStatus();
    setData(status);
  }

  useEffect(() => {
    load();
    const interval = setInterval(load, 2000);
    return () => clearInterval(interval);
  }, []);

  if (!data) return <div>Caricamento...</div>;

  return (
    <div>
      <h1 className="title">Dashboard</h1>

      <div className="card">
        <h2>Stato Bot</h2>
        <p>Status: <b>{data.status}</b></p>
        <p>Bot online: <b>{data.botOnline ? "Sì" : "No"}</b></p>
        <p>Installazione: <b>{data.installMode || "Nessuna"}</b></p>
        <p>ServerID: <b>{data.serverId || "Non inserito"}</b></p>
      </div>

      <div className="card">
        <h2>Pairing</h2>
        <p>Pairing code: <b>{data.pairingCode || "N/A"}</b></p>

        {data.qr && (
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(
              data.qr
            )}`}
            alt="QR Code"
            className="qr"
          />
        )}
      </div>

      {data.blockFunctions && (
        <div className="card warning">
          <h3>⚙️ Installazione automatica in corso</h3>
          <p>Le funzioni del bot sono temporaneamente bloccate.</p>
        </div>
      )}
    </div>
  );
}
"use client";

import { useEffect, useState } from "react";
import { getStatus } from "@/lib/api";

export default function Dashboard() {
  const [data, setData] = useState(null);

  async function load() {
    const status = await getStatus();
    setData(status);
  }

  useEffect(() => {
    load();
    const interval = setInterval(load, 2000);
    return () => clearInterval(interval);
  }, []);

  if (!data) return <div>Caricamento...</div>;

  return (
    <div>
      <h1 className="title">Dashboard</h1>

      <div className="card">
        <h2>Stato Bot</h2>
        <p>Status: <b>{data.status}</b></p>
        <p>Bot online: <b>{data.botOnline ? "Sì" : "No"}</b></p>
        <p>Installazione: <b>{data.installMode || "Nessuna"}</b></p>
        <p>ServerID: <b>{data.serverId || "Non inserito"}</b></p>
      </div>

      <div className="card">
        <h2>Pairing</h2>
        <p>Pairing code: <b>{data.pairingCode || "N/A"}</b></p>

        {data.qr && (
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(
              data.qr
            )}`}
            alt="QR Code"
            className="qr"
          />
        )}
      </div>

      {data.blockFunctions && (
        <div className="card warning">
          <h3>⚙️ Installazione automatica in corso</h3>
          <p>Le funzioni del bot sono temporaneamente bloccate.</p>
        </div>
      )}
    </div>
  );
}
