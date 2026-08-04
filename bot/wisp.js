import fetch from "node-fetch";
import { state } from "./state.js";

export async function installOnWisp(serverId) {
  await fetch("https://api.wispbyte.com/install", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ serverId })
  });

  state.status = "install_auto";
}
