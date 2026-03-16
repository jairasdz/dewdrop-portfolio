import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Navbar";

//FONTS
const geistSans = Geist({ //used for headings and paragraph text, smooth + readable
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({ //used in special boxes or stylistic accents - fixed width, "techy" look
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = { // sets the title in browser tab
  title: {
    default: "DewDrop Studios",
    template: "DewDrop Studios | %s"
  },
  description: "Pole dance performances and portfolio",
};

export default function RootLayout({ children}: Readonly < { children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        // className={`${pacifico.className} antialiased`}
      >
        <NavBar />
        {children} {/* everything below the NavBar changes per page */}
      </body>
    </html>
  );
}
