import { state } from "./state.js";

// dentro al setup di Baileys:
sock.ev.on("connection.update", ({ qr, pairingCode, connection }) => {
  if (qr) state.qr = qr;
  if (pairingCode) state.pairingCode = pairingCode;

  if (connection === "open") {
    state.paired = true;
    state.status = "paired";
  }
});
