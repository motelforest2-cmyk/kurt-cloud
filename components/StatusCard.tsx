"use client";

type Props = {
  status: string;
  botOnline: boolean;
  installMode: string | null;
  serverId: string | null;
  blockFunctions: boolean;
};

export default function StatusCard({
  status,
  botOnline,
  installMode,
  serverId,
  blockFunctions
}: Props) {
  return (
    <div className="card">
      <h2>Stato Bot</h2>
      <p>
        Stato:{" "}
        <b
          className={
            status === "online"
              ? "status-ok"
              : status === "installing"
              ? "status-warn"
              : ""
          }
        >
          {status}
        </b>
      </p>
      <p>
        Bot online:{" "}
        <b className={botOnline ? "status-ok" : "status-error"}>
          {botOnline ? "Sì" : "No"}
        </b>
      </p>
      <p>
        Installazione: <b>{installMode || "Nessuna"}</b>
      </p>
      <p>
        ServerID: <b>{serverId || "Non inserito"}</b>
      </p>
      {blockFunctions && (
        <p className="status-warn">
          ⚙️ Funzioni temporaneamente bloccate durante installazione automatica.
        </p>
      )}
    </div>
  );
}
