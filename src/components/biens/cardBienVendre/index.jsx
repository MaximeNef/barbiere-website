import Link from "next/link";
import { useState } from "react";
import CardCTA from "../../shared/card-Cta";
import Container from "../../shared/container";
import Flex from "../../shared/flex";
import MyImage from "../../shared/myimage";
import BienAvendre from "../bienAvendre";
import BienOptions from "../bienOptions";
import BienVendu from "../bienVendu";

const CardBienVendre = (props) => {
  const [index, setIndex] = useState(0);
  return (
    <Container className='md:flex md:flex-row md:flex-wrap md:w-full md:justify-center md:items-center '>
      {props.postalValue !== "all" || props.filterValue !== "all" ? (
        <div>
          {/* 1 afficher les biens a vendre , les biens sous options, bien vendu */}
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
    </Container>
  );
};
export default CardBienVendre;
