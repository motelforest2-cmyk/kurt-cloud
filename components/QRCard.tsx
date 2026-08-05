export default function QRCard({ data }) {
  return (
    <div className="card">
      <h2>QR Pairing</h2>
      <p>Pairing Code: <b>{data.pairingCode || "N/A"}</b></p>

      {data.qr && (
        <img
          className="qr"
          src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${data.qr}`}
        />
      )}
    </div>
  );
}
