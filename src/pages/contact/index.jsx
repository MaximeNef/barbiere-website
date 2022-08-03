import { useState } from "react";
import NavPage from "../../components/all/Nav-page";
import Optionform from "../../components/contact/optionform";
import Container from "../../components/shared/container";
import Flex from "../../components/shared/flex";
import H1 from "../../components/shared/h1";
import H3 from "../../components/shared/h3";
import P from "../../components/shared/p";

export default function Contact() {
  // btn options  contact
  const [vendre, setVendre] = useState(false);
  const [louer, setLouer] = useState(false);
  const [acheter, setAcheter] = useState(false);
  const [expertise, setExpertise] = useState(false);
  const [estimation, setEstimation] = useState(false);

  // formulaire contact
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [mail, setMail] = useState("");
  const [telephone, setTelephone] = useState("");

  const handleClick = (value) => () => {
    if (value == "vendre") {
      setVendre((prevState) => !prevState);
      setLouer(false);
      setAcheter(false);
      setExpertise(false);
      setEstimation(false);
    }
    if (value == "louer") {
      setLouer((prevState) => !prevState);
      setVendre(false);
      setAcheter(false);
      setExpertise(false);
      setEstimation(false);
    }
    if (value == "acheter") {
      setAcheter((prevState) => !prevState);
      setVendre(false);
      setLouer(false);
      setExpertise(false);
      setEstimation(false);
    }
    if (value == "expertise") {
      setExpertise((prevState) => !prevState);
      setVendre(false);
      setLouer(false);
      setAcheter(false);
      setEstimation(false);
    }
    if (value == "estimation") {
      setEstimation((prevState) => !prevState);
      setVendre(false);
      setLouer(false);
      setAcheter(false);
      setExpertise(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      body: JSON.stringify({
        nom: nom,
        prenom: prenom,
        mail: mail,
        telephone: telephone,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    }
    console.log(nom, prenom, mail, telephone);
  };
  return (
    <NavPage current='contact'>
      <H1 className='mb-[50px]'>{"Nous contacter"}</H1>
      <Container className='md:flex md:flex-row'>
        <Container className='md:w-1/2'>
          <P className='mb-[20px]'> {"Vous souhaitez nous contacter pour"}</P>
          <Flex justify='between'>
            <Optionform
              state={vendre}
              handleClick={handleClick("vendre")}
              name={"Vendre"}
            />
            <Optionform
              state={louer}
              handleClick={handleClick("louer")}
              name={"Louer"}
            />
          </Flex>
          <Flex justify='betwwen'>
            <Optionform
              state={acheter}
              handleClick={handleClick("acheter")}
              name={"Acheter"}
            />
            <Optionform
              state={expertise}
              handleClick={handleClick("expertise")}
              name={"Expertise"}
            />{" "}
          </Flex>
          <Flex>
            <Optionform
              state={estimation}
              handleClick={handleClick("estimation")}
              name={"Estimation gratuite"}
            />
          </Flex>{" "}
        </Container>{" "}
        <Flex className='flex-wrap md:w-1/2'>
          <P className=' mt-[40px] mb-[20px]  mx-auto md:mt-0'>
            {"Complétez vos informations"}
          </P>

          <form onSubmit={handleSubmit} method='post' className='space-y-3'>
            <input
              type='text'
              name='nom'
              placeholder='Nom'
              value={nom}
              onChange={(e) => {
                setNom(e.target.value);
              }}
              className='w-[45%] border-[#41B8B8] border-2 m-2 pl-3 py-[15px] text-[19px] font-semibold leading-6 rounded-[10px] placeholder-[#646464]/30 focus:outline-none '
            />
            <input
              type='text'
              name='prenom'
              placeholder='Prénom'
              value={prenom}
              onChange={(e) => {
                setPrenom(e.target.value);
              }}
              className='w-[45%] border-[#41B8B8] border-2 m-2 pl-3 py-[15px] text-[19px] font-semibold leading-6 rounded-[10px] placeholder-[#646464]/30 outline-0	focus:outline-none'
            />
            <input
              type='email'
              name='mail'
              placeholder='Mail'
              value={mail}
              onChange={(e) => {
                setMail(e.target.value);
              }}
              className='w-[95%] border-[#41B8B8] border-2 m-2 pl-3 py-[15px] text-[19px] font-semibold leading-6 rounded-[10px] placeholder-[#646464]/30 outline-0	focus:outline-none'
            />
            <input
              type='number'
              name='telephone'
              placeholder='Téléphone'
              value={telephone}
              onChange={(e) => {
                setTelephone(e.target.value);
              }}
              className='w-[95%] border-[#41B8B8] border-2 m-2 pl-3 py-[15px] text-[19px] font-semibold leading-6 rounded-[10px] placeholder-[#646464]/30 outline-0	focus:outline-none'
            />{" "}
            <Flex justify='center' className='mt-5'>
              <button
                type='submit'
                className='bg-gradient-to-r from-[#41B8B8] to-[#1AD9D9] rounded-[10px] w-fit shadow-cardcta '
              >
                <H3 className='text-white mx-[22px] my-[11px] '>
                  {"Envoyer "}
                </H3>
              </button>
            </Flex>
          </form>
        </Flex>
      </Container>
    </NavPage>
  );
}
