export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body style={{ background: "#0d0d0d", color: "white", fontFamily: "Inter" }}>
        {children}
      </body>
    </html>
  );
}
