"use client";

import Navbar from "../../../../components/Navbar";
import InstallAutoCard from "../../../../components/InstallAutoCard";
import { installAuto } from "../../../../lib/api";

export default function Page() {
  return (
    <>
      <Navbar />
      <InstallAutoCard onInstall={installAuto} />
    </>
  );
}
