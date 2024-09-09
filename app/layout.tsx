import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Script from 'next/script';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons:{
    icon: "/images/favicon.jpg"
    },
  title: "Basava",
  description: "Explore the life and legacy of Basava (Basaveshwara/Basavanna), a 12th-century Indian philosopher, poet, and social reformer who championed equality and non-violence. Learn about his role in the Shiva bhakti movement and lasting impact on Indian society.",
  keywords: [
    "basava jayanti 2023",
    "basava jayanti",
    "basava",
    "basava vasati yojana",
    "basava vasati",
    "basava express",
    "basava yojane",
    "basava yojana",
    "namma basava",
    "basavanna",
    "basavanna vachana",
    "basavanna vachanagalu in kannada",
    "small basavanna vachanagalu in kannada",
    "basavanna photo",
    "basavanna information in kannada",
    "basavanna vachana in kannada",
    "basavanna images",
    "basavanna photos",
    "basavanna vachana in english",
    "basavanna quotes",
    "basavannanavara vachana",
    "basavanna vachana in kannada",
    "vachana",
    "vachana kannada",
    "basavanna vachana in english",
    "basavanna vachana kannada",
    "lingayat",
    "lingayat caste",
    "veerashaiva lingayat",
    "veerashaiva lingayat",
  ],
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=G-W39MWYHRT9`}
      />
       <Script id='' strategy='lazyOnload'>
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-W39MWYHRT9', {
              page_path: window.location.pathname,
              });
          `}
      </Script>
  <body className={inter.className}>{children}</body>
    </html>
  );
}
