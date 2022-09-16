import { useState } from "react";
import Container from "../../shared/container";
import Flex from "../../shared/flex";
import MyImage from "../../shared/myimage";
import P from "../../shared/p";

const CarteBelgique = () => {
  const adresses = [
    {
      img: "/assets/cartehome.svg",
      imgHover: "/assets/homeHover.svg",
      adresse: "Hannut",
      num: "+32497408529",
      carte: "/assets/carte1.svg",
    },
    {
      img: "/assets/cartehome.svg",
      imgHover: "/assets/homeHover.svg",
      adresse: "Grand-Rechain",
      num: "+32497408529",
      carte: "/assets/carte2.svg",
    },
    {
      img: "/assets/People.svg",
      imgHover: "/assets/PeopleHover.svg",
      adresse: "Couthuin",
      num: "+32497408529",
      carte: "/assets/carte3.svg",
    },
    {
      img: "/assets/People.svg",
      imgHover: "/assets/PeopleHover.svg",
      adresse: "Embourg",
      num: "+32497408529",
      carte: "/assets/carte4.svg",
    },
    {
      img: "/assets/People.svg",
      imgHover: "/assets/PeopleHover.svg",
      adresse: "Jodoigne",
      num: "+32497408529",
      carte: "/assets/carte5.svg",
    },
    {
      img: "/assets/People.svg",
      imgHover: "/assets/PeopleHover.svg",
      adresse: "Namur",
      num: "+32497408529",
      carte: "/assets/carte6.svg",
    },
    {
      img: "/assets/People.svg",
      imgHover: "/assets/PeopleHover.svg",
      adresse: "Dinant",
      num: "+32497408529",
      carte: "/assets/carte7.svg",
    },
    {
      img: "/assets/People.svg",
      imgHover: "/assets/PeopleHover.svg",
      adresse: "Beauraing",
      num: "+32497408529",
      carte: "/assets/carte8.svg",
    },
  ];
  const [isHovering, setIsHovered] = useState("/assets/carte0.svg");
  const [icon, setIcon] = useState(adresses.img);
  console.log(icon, "icons");
  const handleClick = (carte) => {
    setIsHovered(carte);
  };
  const [isShown, setIsShown] = useState("/assets/carte0.svg");

  return (
    <Container className='md:flex md:flex-row md:justify-around'>
      <Container className=' '>
        {/* <MyImage source={isHovering} w={350} h={350} objectFit='contain' /> */}

        <MyImage
          source={isHovering}
          w={600}
          h={600}
          objectFit='contain'
          className={"md:min-h-[800px]"}
        />
      </Container>
      <Container className='my-auto md:pt-[10px] '>
        {adresses.map((adresse, i) => {
          return (
            <Container
              onClick={() => handleClick(adresse.carte)}
              key={i}
              onMouseEnter={() => setIsHovered(adresse.carte)}
              onMouseLeave={() => setIsHovered("/assets/carte0.svg")}
              className={` shadow-sm border-solid border-stone-100 border-[1px] mb-3 md:mb-[10px]	 md:hover:bg-gradient-to-r from-[#41B8B8] to-[#1AD9D9] px-2 py-3 rounded-[10px] md:hover:text-white md:hover:scale-110 md:hover:shadow-cardinfo md:hover:ease-in md:hover:duration-200 ${
                adresse.carte === isHovering
                  ? "bg-gradient-to-r from-[#41B8B8] to-[#1AD9D9] text-white scale-105 shadow-cardinfo"
                  : ""
              } `}
            >
              {" "}
              <Flex className='mx-1 '>
                <Flex>
                  <MyImage
                    source={
                      adresse.carte === isHovering
                        ? adresse.imgHover
                        : adresse.img
                    }
                    w={20}
                    h={20}
                    objectFit='contain'
                  />{" "}
                  <P className='ml-4 font-bold text-[17px] leading-[22px] cursor-default	'>
                    {adresse.adresse}
                  </P>
                </Flex>
                <Container className='md:ml-[150px] mt-0 text-center  cursor-pointer'>
                  <a href={`tel:${adresse.num}`} className=' text-center '>
                    <p className='text-center'> {adresse.num}</p>
                  </a>
                </Container>
              </Flex>{" "}
            </Container>
          );
        })}
      </Container>
    </Container>
  );
};
export default CarteBelgique;
