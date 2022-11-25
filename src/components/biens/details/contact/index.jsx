import Link from "next/link";
import { useState } from "react";
import Container from "../../../shared/container";
import H3 from "../../../shared/h3";

const CardContact = () => {
  return (
    <Container className={` p-5 rounded-[12px] shadow-cardDetails md:w-full `}>
      <H3>{"Reservez votre bien "}</H3>
      <p
        className={`mt-5 font-light text-[17px] leading-[22px] overflow-hidden md:mr-48`}
      >
        {
          "Vous souhaitez plus de renseignements et/ou prendre rendez-vous pour visiter ce bien ?"
        }
      </p>
      <Link href='/contact'>
        <a>
          <Container className='bg-[#43A8AA] rounded-[10px] mt-4'>
            <p className='mx-auto text-white py-2 '>{"contactez-nous"}</p>
          </Container>
        </a>
      </Link>
    </Container>
  );
};
export default CardContact;
