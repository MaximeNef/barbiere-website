import Lottie from "react-lottie";

import burgerMenu from "../../../../../public/assets/burgermenu.json";
import { useState } from "react";
import { motion } from "framer-motion";
import Container from "../../../shared/container";
import Link from "next/link";
import MyImage from "../../../shared/myimage";
import Popup from "./pop-up";
import Btn2 from "../../../shared/btn2";

const Menuburger = ({ current }) => {
  const [pause, setPause] = useState(true);
  const [play, setPlay] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [link, setLink] = useState([
    {
      page: "Accueil",
      href: "/",
      selected: false,
      src: "/assets/home.svg",
    },
    {
      page: "Nos biens",
      href: "/biens",
      selected: false,
      src: "/assets/biens.svg",
    },
    {
      page: "Biens vendus / loués",
      href: "/biensVendus",
      selected: false,
      src: "/assets/biens.svg",
    },
    {
      page: "Services",
      href: "/services",
      selected: false,
      src: "/assets/services.svg",
    },
    {
      page: "Agence / Equipe",
      href: "/agence",
      selected: false,
      src: "/assets/team.svg",
    },
    {
      page: "Emplois",
      href: "/emplois",
      selected: false,
      src: "/assets/emploi.svg",
    },
    {
      page: "contact",
      href: "/contact",
      selected: false,
      src: "/assets/contact.svg",
    },
  ]);
  const defaultOptions = {
    name: "menuBurger",
    loop: true,
    autoplay: false,
    animationData: burgerMenu,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const menuVariants = {
    opened: {
      left: 0,
    },
    closed: {
      left: "-100vh",
    },
  };
  //function qui permet de changer la valeur de la fonction
  function handelClick() {
    if (pause) {
      setIsOpen((previsOpen) => !previsOpen);
      setTimeout(function () {
        setPause((prevPause) => !prevPause);
      }, 1500);
      setPause((prevPause) => !prevPause);
    } else {
    }
  }

  return (
    <Container className=' w-full '>
      <Container className='fixed z-20 bg-white bg-clip-padding backdrop-filter  backdrop-blur-lg bg-opacity-60  w-full top-0  pb-2  '>
        <Container className=' m-auto  max-h-12  z-20  pt-1'>
          <Link href='/' passHref>
            <a>
              <MyImage source='/assets/LogoHeader.svg' w={76} h={52} />
            </a>
          </Link>{" "}
        </Container>
        <Container
          onClick={handelClick}
          className=' left-2 z-20 fixed  mt-1 pt-1'
        >
          <Lottie
            options={defaultOptions}
            height={48}
            width={43}
            isPaused={pause}
            IsPlaying={play}
            className=''
          />
        </Container>

        <Container className=' right-2 z-20 fixed  top-[18px]'>
          <Btn2 src='/contact' color='blueu' text='Estimation gratuite' />
        </Container>
        {/* pop-Up menu burger */}
        <motion.div
          initial={false}
          variants={menuVariants}
          animate={isOpen ? "opened" : "closed"}
          className='bg-[#FBFFFF] h-screen w-full fixed z-10 flex '
          transition={{
            duration: 0.7,
            times: [0, 0.1, 0.3, 0],
            // ease: [0.57, 0.97, 0.73, 0.57],
          }}
        >
          <Popup
            link={link}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            pause={pause}
            setPause={setPause}
            handelClick={handelClick}
            current={current}
          />
        </motion.div>
      </Container>{" "}
    </Container>
  );
};
export default Menuburger;
