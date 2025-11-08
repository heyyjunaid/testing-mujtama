import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import "./globals.scss";
import Navbar from "@/components/Navbar";
import { Button } from "@mui/material";
import "./globals.scss";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <Navbar />

          {children}
          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
