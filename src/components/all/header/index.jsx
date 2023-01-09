import { useState } from "react";
import Container from "../../shared/container";
import Menuburger from "./menu-burger";
import MenuDesktop from "./menu-desktop";

const Header = ({ current }) => {
  const [link, setLink] = useState([
    { page: "Accueil", href: "/", selected: false },

    { page: "Nos services", href: "/services", selected: false },
    { page: "Nos biens", href: "/biens", selected: false },
    { page: "Agence / Équipe", href: "/agence", selected: false },
    { page: "Emplois", href: "/emplois", selected: false },
  ]);

  return (
    <Container className='mb-20'>
      <Container className='z-50 hidden lg:inline-flex'>
        <MenuDesktop current={current} link={link} />
      </Container>
      <Container className='  md:hidden'>
        <Menuburger current={current} link={link} />
      </Container>
    </Container>
  );
};

export default Header;
