import express from "express";
import { pairing } from "./pairing.js";
import { installAuto } from "./install-auto.js";
import { installManual } from "./install-manual.js";
import { status } from "./status.js";

const app = express();
app.use(express.json());

app.get("/api/pairing", pairing);
app.post("/api/install-auto", installAuto);
app.post("/api/install-manual", installManual);
app.get("/api/status", status);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log("API pronta su :" + port));
