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
      adresse: "Verviers / Herve / Battice",
      num: "0473 29 00 70",
      carte: "/assets/carte1.svg",
    },
    {
      img: "/assets/cartehome.svg",
      imgHover: "/assets/homeHover.svg",
      adresse: "Liège / Embourg - Beaufays",
      num: "0477 75 44 10",
      carte: "/assets/carte2.svg",
    },
    {
      img: "/assets/People.svg",
      imgHover: "/assets/PeopleHover.svg",
      adresse: "Hannut - Waremme & leurs villages",
      num: "019 30 57 32",
      carte: "/assets/carte3.svg",
    },
    {
      img: "/assets/People.svg",
      imgHover: "/assets/PeopleHover.svg",
      adresse: "Braives",
      num: "0479 54 76 01",
      carte: "/assets/carte4.svg",
    },
    {
      img: "/assets/People.svg",
      imgHover: "/assets/PeopleHover.svg",
      adresse: "Huy / Héron / Burdinne / Andenne",
      num: "0492 55 69 36",
      carte: "/assets/carte5.svg",
    },
    {
      img: "/assets/People.svg",
      imgHover: "/assets/PeopleHover.svg",
      adresse: "Wasseiges",
      num: "0479 54 76 01",
      carte: "/assets/carte6.svg",
    },
    {
      img: "/assets/People.svg",
      imgHover: "/assets/PeopleHover.svg",
      adresse: "Namur / Beauraing / Dinant",
      num: "0498 71 40 57",
      carte: "/assets/carte7.svg",
    },
    {
      img: "/assets/People.svg",
      imgHover: "/assets/PeopleHover.svg",
      adresse: "Jodoigne - Hélécine - Orp-Jauche",
      num: "0497 40 85 29",
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
                  <Container className='min-w-[20px] min-h-[20px] my-auto'>
                    <MyImage
                      source={
                        adresse.carte === isHovering
                          ? adresse.imgHover
                          : adresse.img
                      }
                      w={20}
                      h={20}
                      objectFit='contain'
                    />
                  </Container>

                  <p className='ml-4 font-bold text-[17px] leading-[22px] cursor-default  text-left flex flex-col items-center justify-center	'>
                    {adresse.adresse}
                  </p>
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
