import "./globals.css";

export const metadata = {
  title: "KurtCloud Dashboard",
  description: "Gestione bot cloud stile WispByte"
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className="layout">
        <aside className="sidebar">
          <div className="logo">KurtCloud</div>

          <nav className="menu">
            <a href="/status">Status</a>
            <a href="/qr">QR</a>
            <a href="/install/auto">Install Auto</a>
            <a href="/install/manual">Install Manual</a>
            <a href="/code">Code</a>
            <a href="/debug">Debug</a>
          </nav>
        </aside>

        <main className="content">{children}</main>
      </body>
    </html>
  );
}
