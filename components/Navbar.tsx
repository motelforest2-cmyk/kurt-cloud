"use client";

export default function Navbar() {
  return (
    <header style={{ marginBottom: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <h1 className="title">Kurt Cloud Dashboard</h1>
      <span className="badge">WispByte Cloud</span>
    </header>
  );
}
