import { state } from "../bot/state.js";

export function status(req, res) {
  res.json(state);
}
