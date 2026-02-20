import "./globals.css";
import Navbar from "../app/_Navbar/Navbar"
import { Poppins } from "next/font/google";
import IntroWrapper from "./IntroWrapper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Kunal | Full Stack Developer",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
   <html lang="en" className={poppins.className}>
  <body className="bg-black text-white overflow-y-auto">
    <IntroWrapper>
      <Navbar />
      {children}
    </IntroWrapper>
  </body>
</html>

  );
}
