"use client";

import { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import StatusCard from "../../../components/StatusCard";
import { getStatus } from "../../../lib/api";

export default function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getStatus().then(setData);
  }, []);

  return (
    <>
      <Navbar />
      {data && <StatusCard data={data} />}
    </>
  );
}
