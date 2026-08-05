"use client";

type Props = {
  pairingCode: string | null;
  qr: string | null;
};

export default function QRCard({ pairingCode, qr }: Props) {
  return (
    <div className="card">
      <h2>Pairing</h2>
      <p>
        Pairing code: <b>{pairingCode || "N/A"}</b>
      </p>

      {qr && (
        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(
            qr
          )}`}
          alt="QR Code"
          className="qr"
        />
      )}
    </div>
  );
}
