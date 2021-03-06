import { useState } from "react";
import Container from "../../shared/container";
import Menuburger from "./menu-burger";
import MenuDesktop from "./menu-desktop";

const Header = ({ current }) => {
  const [link, setLink] = useState([
    { page: "Accueil", href: "/", selected: false },
    { page: "Services", href: "/services", selected: false },
    { page: "Réalisations", href: "/realisations", selected: false },
    { page: "Blog", href: "/blogs", selected: false },
    { page: "Team", href: "/team", selected: false },
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
