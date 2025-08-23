import "./globals.css";

export const metadata = {
  title: "Punk Stage",
  description: "Tickets, merch y punk score directo para fans",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-black text-white font-mono antialiased">
        {children}
      </body>
    </html>
  );
}
