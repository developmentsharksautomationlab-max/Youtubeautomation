import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PreFooter from "@/components/PreFooter";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "YouTube Automation Lab — Launch Your Automated YouTube Channel",
  description:
    "Research, scripts, voiceover, editing, thumbnails and publishing — handled end-to-end by our team. You own the channel. We build the engine.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // Browser extensions inject attributes on <html> before hydration; ignore those mismatches.
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>
        <div className="c1">
          <Header />
          {children}
          <PreFooter />
          <Footer />
        </div>
        <ScrollReveal />
      </body>
    </html>
  );
}
