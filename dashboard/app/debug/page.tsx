"use client";

import { useEffect, useState } from "react";

export default function DebugPage() {
  const [data, setData] = useState(null);
  const api = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${api}/status`);
        const json = await res.json();
        setData(json);
      } catch (e) {
        setData("ERRORE: " + e.toString());
      }
    }
    load();
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>DEBUG API</h1>
      <p><strong>API URL:</strong> {api}</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
