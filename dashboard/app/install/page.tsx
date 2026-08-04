"use client";

export default function InstallChoice() {
  return (
    <div className="container text-center mt-5">
      <h2 className="mb-4">Vuoi installazione automatica?</h2>
      <a href="/install/auto" className="btn btn-warning btn-lg mb-3">SI</a>
      <a href="/install/manual" className="btn btn-secondary btn-lg">NO</a>
    </div>
  );
}
