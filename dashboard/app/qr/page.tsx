"use client";

import { useState } from "react";
import Navbar from "../../../components/Navbar";
import PhoneInputCard from "../../../components/PhoneInputCard";
import QRCard from "../../../components/QRCard";
import { getPairing } from "../../../lib/api";

export default function Page() {
  const [data, setData] = useState(null);

  async function handleNumber(number) {
    const res = await getPairing(number);
    setData(res);
  }

  return (
    <>
      <Navbar />

      {!data && <PhoneInputCard onSubmit={handleNumber} />}

      {data && <QRCard data={data} />}
    </>
  );
}
