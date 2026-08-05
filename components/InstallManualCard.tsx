export default function InstallManualCard({ onSend }) {
  return (
    <div className="card">
      <h2>Installazione Manuale</h2>
      <p>Invia il file creds.json al numero collegato.</p>

      <button
        style={{ padding: 10, width: "100%" }}
        onClick={onSend}
      >
        Invia creds.json
      </button>
    </div>
  );
}
