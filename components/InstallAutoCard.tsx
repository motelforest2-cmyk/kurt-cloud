export default function InstallAutoCard({ onInstall }) {
  return (
    <div className="card">
      <h2>Installazione Automatica</h2>
      <p>Invia il ServerID per installare automaticamente il bot.</p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const id = e.target.serverId.value;
          onInstall(id);
        }}
      >
        <input
          name="serverId"
          placeholder="ServerID"
          style={{ padding: 10, width: "100%", marginBottom: 10 }}
        />
        <button style={{ padding: 10, width: "100%" }}>Install Auto</button>
      </form>
    </div>
  );
}
