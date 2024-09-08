// app/layout.tsx

import type { Metadata } from 'next';
import { Dancing_Script } from 'next/font/google';
import './globals.css';
import StoreProvider from './storeProvider/StoreProvider';

// Importing Google Fonts
const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

// Defining metadata
export const metadata: Metadata = {
  title: 'Selcool',
  description: "Welcome to Selcool's Home",
  icons: {
    icon: ['/favicon.ico'],
    apple: ['/apple-touch-icon.png'],
    shortcut: ['/apple-touch-icon.png'],
  },
};

// Layout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <html lang="en">
        <head>
          {/* Standard metadata */}
          <meta name="facebook-domain-verification" content="w484tu2k8ly6b5p1yl55mtjtwmbbqn" />
          {/* Additional meta tags */}
        </head>
        <body className={dancingScript.className}>
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}



// import type { Metadata } from "next";
// import { Inter,Dancing_Script } from "next/font/google";
// import "./globals.css";
// import StoreProvider from "./storeProvider/StoreProvider";
// // const inter = Inter({ subsets: ["latin"] });
// import Head from 'next/head';

// const dancingScript = Dancing_Script({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700']
// });

// export const metadata: Metadata = {
//   title: "Selcool",
//   description: "Welcome to Selcool's Home",
//   icons:{
//     icon:['/favicon.ico'],
//     apple:['/apple-touch-icon.png'],
//     shortcut:['/apple-touch-icon.png']
//   }
// };




// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <StoreProvider>

//     <html lang="en">
  
//     <head>
//         <Head>
//           <meta name="facebook-domain-verification" content="w484tu2k8ly6b5p1yl55mtjtwmbbqn" />
//         </Head>
//       </head>
//       <body className={dancingScript.className}>
      
//         {children}
//       </body>
//     </html>
//     </StoreProvider>
//   );
// }
