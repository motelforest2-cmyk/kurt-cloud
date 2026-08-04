import { state } from "../bot/state.js";
import { installOnWisp } from "../bot/wisp.js";

export async function installAuto(req, res) {
  const { serverId } = req.body;
  state.serverId = serverId;
  await installOnWisp(serverId);
  res.json({ ok: true });
}
