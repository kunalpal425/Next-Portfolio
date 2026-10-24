import "./globals.css";
import IntroWrapper from "./IntroWrapper";
import SmoothScroll from "./smoothScroll";
import ScrollProgress from "@/components/ScrollProgress/ScrollProgress";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Kunal | Full Stack Developer",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased overflow-x-hidden">
        <div className="h-screen overflow-y-auto overflow-x-hidden">
          <ScrollProgress />
          <Analytics />
          <IntroWrapper>{children}</IntroWrapper>
        </div>
      </body>
    </html>
  );
}
