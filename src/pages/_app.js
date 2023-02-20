import "../styles/globals.css";
import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { linkResolver } from "../../prismicio";
import { repositoryName } from "../../prismicio";
import { useEffect, useState } from "react";

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
