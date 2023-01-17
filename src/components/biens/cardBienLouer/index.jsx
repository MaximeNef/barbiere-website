import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
import CardCTA from "../../shared/card-Cta";
import Container from "../../shared/container";
import Flex from "../../shared/flex";
import MyImage from "../../shared/myimage";
import BienAvendre from "../bienAvendre";
import BienOptions from "../bienOptions";
import BienVendu from "../bienVendu";
const CardBienLouer = (props) => {
  const [index, setIndex] = useState(0);

  return (
    <Container className='md:flex md:flex-row md:flex-wrap md:w-full md:justify-center md:items-center '>
      {" "}
      {/* {props.pages.map((page, i) => (
        <Container className='md:flex md:flex-row md:flex-wrap md:w-fit '>
          <Link legacyBehavior href={`/a-louer/${page.uid}`} key={page.uid} passHref> */}
      {props.postalValue !== "all" || props.filterValue !== "all" ? (
        <div>
          <Container className='md:flex md:flex-row md:flex-wrap md:w-fit justify-center'>
            <BienAvendre pages={props.pages} />
            <BienOptions pages={props.pages} />
            <BienVendu pages={props.pages} />
          </Container>
        </div>
      ) : (
        <div>
          <Container className='md:flex md:flex-row md:flex-wrap md:w-fit justify-center'>
            <BienAvendre pages={props.pages} />
          </Container>
        </div>
      )}
      {/* </Link>{" "}
        </Container>
      ))} */}
    </Container>
  );
};
export default CardBienLouer;
