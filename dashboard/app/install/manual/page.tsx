"use client";

import Navbar from "../../../components/Navbar";
import InstallManualCard from "../../../components/InstallManualCard";

export default function Page() {
  return (
    <>
      <Navbar />
      <InstallManualCard
        onSend={() => alert("Invio creds.json al numero…")}
      />
    </>
  );
}
