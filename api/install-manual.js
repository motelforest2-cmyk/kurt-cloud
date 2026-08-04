import { state } from "../bot/state.js";

export function installManual(req, res) {
  state.status = "install_manual";
  res.json({ ok: true });
}
