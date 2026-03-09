import "./globals.css";
import { Poppins } from "next/font/google";
import IntroWrapper from "./IntroWrapper";
import ScrollProgress from "@/components/ScrollProgress/ScrollProgress";
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
        <ScrollProgress />
        <IntroWrapper>{children}</IntroWrapper>
      </body>
    </html>
  );
}