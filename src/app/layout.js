import "./globals.css";
import Topo from "@/components/Topo";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Portfólio",
  description: "Portfólio do Desenvolvedor Eliel Reis.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Topo />
        {children}
        <Footer />
      </body>
    </html>
  );
}
