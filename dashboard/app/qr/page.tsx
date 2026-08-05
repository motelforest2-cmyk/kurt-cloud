"use client";

import { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import QRCard from "../../../components/QRCard";
import { getPairing } from "../../lib/api";

export default function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPairing().then(setData);
  }, []);

  return (
    <>
      <Navbar />
      {data && <QRCard data={data} />}
    </>
  );
}
