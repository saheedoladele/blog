import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { UserProvider } from "./context/UserContext";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Blog Website",
  description: "Blog website, where you can read about science, technologies, politics, sport, entertainment and lots more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UserProvider>
          <Suspense>
            <NavBar />
            {children}
            <Footer />
            <Toaster />
          </Suspense>
        </UserProvider>
      </body>
    </html>
  );
}
