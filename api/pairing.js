import { state } from "../bot/state.js";

export function pairing(req, res) {
  res.json({
    qr: state.qr,
    pairingCode: state.pairingCode,
    status: state.status
  });
}
