import "../styles/globals.css";
import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { linkResolver } from "../../prismicio";
import { repositoryName } from "../../prismicio";
import { useEffect, useState } from "react";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  const [state, setState] = useState(() => {
    return "state";
  });

  useEffect(() => {
    return () => {
      console.log("unmounted");
    };
  }, []);

  return (
    <>
      {/* <!-- Start cookieyes banner --> */}
      <Script
        id='cookieyes'
        type='text/javascript'
        src='https://cdn-cookieyes.com/client_data/9755d5482738a94b10622958/script.js'
      ></Script>
      {/* <!-- End cookieyes banner --> */}
      {/* DEBUT UXWIZZ script  */}
      <Script id='uxwizz'>
        UST_CT = []; UST = "
        {"s: Date.now(), addTag: function(tag) {UST_CT.push(tag)} "}
        ";UST.addEvent = UST.addTag;
      </Script>
      <Script
        src='https://stats.listri.digital/server/ust.min.js?v=5.0.1'
        async
      ></Script>
      {/* FIN UXWIZZ script  */}
      {/* Google Analytics */}
      <Script
        src='https://www.googletagmanager.com/gtag/js?id=G-RSLXMDDZ6Q'
        strategy='afterInteractive'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RSLXMDDZ6Q');
        `}
      </Script>
      {/* Fin Google Analytics */}
      <PrismicProvider
        linkResolver={linkResolver}
        internalLinkComponent={({ href, children, ...props }) => (
          <Link href={href} passHref>
            <a {...props}>{children}</a>
          </Link>
        )}
      >
        <PrismicPreview repositoryName={repositoryName}>
          <Component {...pageProps} />
        </PrismicPreview>
      </PrismicProvider>
    </>
  );
}
