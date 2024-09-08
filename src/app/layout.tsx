import type { Metadata } from "next";
import { Inter,Dancing_Script } from "next/font/google";
import "./globals.css";
import StoreProvider from "./storeProvider/StoreProvider";
// const inter = Inter({ subsets: ["latin"] });

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: "Selcool",
  description: "Welcome to Selcool's Home",
  icons:{
    icon:['/favicon.ico'],
    apple:['/apple-touch-icon.png'],
    shortcut:['/apple-touch-icon.png']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>

    <html lang="en">
  
      <body className={dancingScript.className}>
        {children}
      </body>
    </html>
    </StoreProvider>
  );
}
