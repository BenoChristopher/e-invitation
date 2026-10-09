import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "Engagement Ceremony Invitation",
  description: "You are warmly invited to celebrate our engagement ceremony at E.P. Kavitha Thirumana Mandapam, Thoothukudi.",
  openGraph: {
    title: "Engagement Ceremony Invitation",
    description: "You are warmly invited to celebrate our engagement. Join us for a beautiful beginning!",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
