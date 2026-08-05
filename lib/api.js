const BOT_URL = process.env.NEXT_PUBLIC_BOT_URL;

export async function getStatus() {
  const res = await fetch(`${BOT_URL}/api/status`);
  return res.json();
}

export async function getPairing() {
  const res = await fetch(`${BOT_URL}/api/pairing`);
  return res.json();
}

export async function installAuto(serverId) {
  const res = await fetch(`${BOT_URL}/api/install-auto`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ serverId })
  });
  return res.json();
}
