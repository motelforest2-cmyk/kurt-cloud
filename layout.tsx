import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Kurt Cloud Dashboard",
  description: "Gestione bot cloud stile WispByte"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <body className="layout">
        <aside className="sidebar">
          <div className="logo">KurtCloud</div>

          <nav className="menu">
            <a href="/status">Status</a>
            <a href="/qr">QR</a>
            <a href="/install">Install</a>
            <a href="/code">Code</a>
            <a href="/debug">Debug</a>
          </nav>
        </aside>

        <main className="content">
          {children}
        </main>
      </body>
    </html>
  );
}
import "./globals.css";

export const metadata = {
  title: "Kurt Cloud Dashboard",
  description: "Gestione bot cloud stile WispByte"
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className="layout">
        <aside className="sidebar">
          <div className="logo">KurtCloud</div>

          <nav className="menu">
            <a href="/dashboard">Dashboard</a>
          </nav>
        </aside>

        <main className="content">
          {children}
        </main>
      </body>
    </html>
  );
}
