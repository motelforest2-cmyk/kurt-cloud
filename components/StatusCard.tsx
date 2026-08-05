export default function StatusCard({ data }) {
  return (
    <div className="card">
      <h2>Status Bot</h2>
      <p>Stato: <b>{data.status}</b></p>
      <p>Bot Online: <b>{data.botOnline ? "Sì" : "No"}</b></p>
      <p>Installazione: <b>{data.installMode || "Nessuna"}</b></p>
      <p>ServerID: <b>{data.serverId || "N/A"}</b></p>
    </div>
  );
}
