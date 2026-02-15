import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./user/components/header";
import Footer from "./user/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Good default metadata (you should override per-page too)
export const metadata = {
  title: {
    default: 'Future Fix – Premium Laptop Repair in Dubai',
    template: '%s | Future Fix Dubai',
  },
  description: 'Fast & reliable laptop repair, MacBook repair, motherboard repair, data recovery in Dubai. Same-day service available.',
};

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Future Fix",
      "image": "https://futurefix.ae/logo.png",
      "telephone": "+971556166465",
      "email": "support@futurefix.ae",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Naif, Deira",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 25.275026,   // ← real coordinates of your location
        "longitude": 55.307260
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "11:00",
        "closes": "21:00"
      },
      "priceRange": "$$",
      "sameAs": [
        "https://wa.me/971556166465",
        "https://instagram.com/futurefix.ae",
        "https://facebook.com/futurefix.ae",
        // add real social links
      ],
      "url": "https://futurefix.ae"
    })
  }}
/>

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
