const BOT_URL = process.env.NEXT_PUBLIC_BOT_URL;

export async function getStatus() {
  return fetch(`${BOT_URL}/api/status`).then(r => r.json());
}

export async function getPairing() {
  return fetch(`${BOT_URL}/api/pairing`).then(r => r.json());
}

export async function installAuto(serverId) {
  return fetch(`${BOT_URL}/api/install-auto`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ serverId })
  }).then(r => r.json());
}
