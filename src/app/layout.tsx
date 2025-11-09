"use client";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta
          name="description"
          content="Magz is a HTML5 & CSS3 magazine template is based on Bootstrap 3."
        />
        <meta name="author" content="Kodinger" />
        <meta
          name="keyword"
          content="magz, html5, css3, template, magazine template"
        />

        <link rel="stylesheet" href="/assets/scripts/bootstrap/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/scripts/ionicons/css/ionicons.min.css" />
        <link rel="stylesheet" href="/assets/scripts/toast/jquery.toast.min.css" />
        <link rel="stylesheet" href="/assets/scripts/owlcarousel/dist/assets/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/scripts/owlcarousel/dist/assets/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/assets/scripts/magnific-popup/dist/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/scripts/sweetalert/dist/sweetalert.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/skins/all.css" />
        <link rel="stylesheet" href="/assets/css/demo.css" />
      </head>

      <body className="skin-orange">
        <Header />
        {children}
        <Footer />

        <Script src="/assets/js/jquery.js" strategy="beforeInteractive" />
        <Script src="/assets/js/jquery.migrate.js" strategy="beforeInteractive" />
        <Script src="/assets/scripts/bootstrap/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/assets/scripts/jquery-number/jquery.number.min.js" strategy="afterInteractive" />
        <Script src="/assets/scripts/owlcarousel/dist/owl.carousel.min.js" strategy="afterInteractive" />
        <Script src="/assets/scripts/magnific-popup/dist/jquery.magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/assets/scripts/easescroll/jquery.easeScroll.js" strategy="afterInteractive" />
        <Script src="/assets/scripts/sweetalert/dist/sweetalert.min.js" strategy="afterInteractive" />
        <Script src="/assets/scripts/toast/jquery.toast.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/demo.js" strategy="afterInteractive" />
        <Script src="/assets/js/e-magz.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
