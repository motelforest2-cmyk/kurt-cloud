"use client";

import { useEffect, useState } from "react";

export default function StatusPage() {
  const [status, setStatus] = useState<any>(null);

  useEffect(() => {
    async function load() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/status`);
      const data = await res.json();
      setStatus(data);
    }
    load();
  }, []);

  return (
    <div className="container text-center mt-5">
      <h2 className="mb-4">Stato bot</h2>
      <pre>{JSON.stringify(status, null, 2)}</pre>
    </div>
  );
}
