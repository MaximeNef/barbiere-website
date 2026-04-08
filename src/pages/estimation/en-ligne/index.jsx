import { useEffect, useState } from "react";
import NavPage from "../../../components/all/Nav-page";
import Head from "next/head";

export default function EstimationEnLigne() {
  const [src, setSrc] = useState(
    "https://lead-expert.propteo.app/?agenceUid=33ee43db-6368-46c8-80f9-3ce34b76d598&leadExpertUid=default"
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utmSource = params.get("utm_source");
    const gclid = params.get("gclid");
    let url =
      "https://lead-expert.propteo.app/?agenceUid=33ee43db-6368-46c8-80f9-3ce34b76d598&leadExpertUid=default";
    if (utmSource) url += "&utm_source=" + encodeURIComponent(utmSource);
    if (gclid) url += "&gclid=" + encodeURIComponent(gclid);
    setSrc(url);
  }, []);

  return (
    <NavPage current='estimation'>
      <Head>
        <title>{"Estimation en ligne – Barbiere Immo"}</title>
        <meta
          name='description'
          content='Estimez la valeur de votre bien immobilier en ligne grâce à notre outil Propteo.'
        />
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>

      <div className='-mx-5 md:-mx-10'>
        <iframe
          id='lead-expert-iframe'
          src={src}
          style={{
            display: "block",
            border: 0,
            width: "100%",
            height: "100dvh",
            margin: 0,
            overflow: "hidden",
          }}
        />
      </div>
    </NavPage>
  );
}
