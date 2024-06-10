import { Poppins } from "next/font/google";
import Header from "./components/header";
import "./globals.css";

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ["latin"]
});

export const metadata = {
  title: " About devEmma first Next App",
  description: "First NextJs App Learning Process...",
  keywords: "web development react next node tailwind git github sass code programming html css"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
