import React from "react";
import { RichText } from "prismic-reactjs";

const CardBiens = ({ slice }) => (
  <section>
    {/* <img
      src={slice?.primary?.Image_bien.url}
      alt={slice?.primary?.Image_bien.alt}
    />

    <RichText render={slice.primary.nom_bien} />
    <span>{slice.primary.prix_bien}</span>
    <RichText render={slice.primary.adresse_bien} />
    <RichText render={slice.primary.adresse_bien} />
    <RichText render={slice.primary.sdb_bien} />
    <RichText render={slice.primary.chambre_bien} /> */}
    <style jsx>{`
      section {
        max-width: 600px;
        margin: 4em auto;
        text-align: center;
      }
      .title {
        color: #8592e0;
      }
    `}</style>
  </section>
);

export default CardBiens;
