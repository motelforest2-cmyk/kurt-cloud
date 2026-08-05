import "./globals.css";

export const metadata = {
  title: "Kurt Cloud Dashboard",
  description: "Gestione bot cloud stile WispByte"
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className="bg-dark text-light">
        <div className="sidebar">
          <h1 className="logo">KurtCloud</h1>
          <nav>
            <a href="/dashboard">Dashboard</a>
          </nav>
        </div>

        <main className="content">
          {children}
        </main>
      </body>
    </html>
  );
}
