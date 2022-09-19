import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
import CardCTA from "../../shared/card-Cta";
import Container from "../../shared/container";
import Flex from "../../shared/flex";
import MyImage from "../../shared/myimage";

const CardBienLouer = (props) => {
  console.log(props.pages, "bienVendresss");
  const [index, setIndex] = useState(0);
  //   {
  //     if (page.data.slices[0].primary.vendu) {
  //       useEffect(() => {
  //         setIndex(index - 1);
  //       }, []);
  //     } else {
  //       useEffect(() => {
  //         setIndex(index + 1);
  //       }, []);
  //     }
  //   }

  return (
    <>
      {" "}
      {props.pages.map((page, i) => (
        <Container>
          <Link href={`/a-louer/${page.uid}`} key={page.uid} passHref>
            {page.data.slices[0].primary.vendu ? (
              <div>
                {/* {" "}
                {useEffect(() => {
                  setIndex((prev) => prev - 1 / 2);
                }, [])}{" "} */}
              </div>
            ) : (
              <Container className=' rounded-[20px] shadow-cardinfo w-full snap-always snap-center flex-shrink-0 m-2 mx-auto'>
                {useEffect(() => {
                  setIndex((prev) => prev + 1 / 2);
                }, [])}
                <Container className='relative max-w-[350px] max-h-[206px]'>
                  <MyImage
                    source={page.data.slices[0].primary.Image_bien.url}
                    h={"206"}
                    w={"300"}
                    className='rounded-t-[20px] '
                  />
                  <Container className='absolute bottom-1 left-1'>
                    <MyImage source={"/assets/peb.svg"} h={"20"} w={"68"} />
                  </Container>
                </Container>
                <Container className='p-3 '>
                  <Flex justify='between'>
                    <Container className=' text-xl font-bold '>
                      {page.data.slices[0].primary.nom_bien[0].text}
                    </Container>
                    <p className=' text-xl font-semibold text-[#43A8AA] '>
                      {page.data.slices[0].primary.prix_bien[0].text}
                      {"€"}
                    </p>
                  </Flex>

                  <Flex justify='start'>
                    <MyImage source={"/assets/pin.svg"} h={"16"} w={"12"} />
                    <Container className='ml-2 font-light text-[15px] leading-[18px]'>
                      {page.data.slices[0].primary.adresse_bien[0].text}
                    </Container>
                  </Flex>
                  <Flex justify='between' className='mt-[14px]'>
                    <Container>
                      <Flex align='center'>
                        <MyImage
                          source={"/assets/superficie.svg"}
                          h={"20"}
                          w={"20"}
                        />
                        <p className='ml-2 font-light text-[15px] leading-[18px]'>
                          {page.data.slices[0].primary.Superficie_bien[0].text}
                          {"m²"}
                        </p>
                      </Flex>
                    </Container>
                    <Container className=''>
                      <Flex className='' align='center'>
                        <MyImage
                          source={"/assets/Bathroom.svg"}
                          h={"20"}
                          w={"20"}
                        />
                        <p className='ml-2 font-light text-[15px] leading-[18px] pt-1'>
                          {page.data.slices[0].primary.sdb_bien[0].text}
                        </p>
                      </Flex>
                    </Container>
                    <Container>
                      <Flex align='center'>
                        <MyImage
                          source={"/assets/Bedroom.svg"}
                          h={"19"}
                          w={"28"}
                        />
                        <p className='ml-2 font-light text-[15px] leading-[18px] pt-1'>
                          {page.data.slices[0].primary.chambre_bien[0].text}
                        </p>
                      </Flex>
                    </Container>
                  </Flex>
                </Container>{" "}
              </Container>
            )}
          </Link>{" "}
          {/* <p>{index}</p>
          <p> {i}"i"</p>{" "} */}
          <Container>
            {index == (i - index) * 2 || i == (index - i) * 2 ? (
              <Container className='my-5'>
                <CardCTA
                  text1={"Ne manquez plus nos nouveaux biens !"}
                  text2={
                    "Quand vous trouvez enfin la perle rare, on vous annonce qu’elle est déjà sous compromis... En vous inscrivant cela ne vous arrivera plus !"
                  }
                  text3={"Nos biens >"}
                  src='/pages'
                />
              </Container>
            ) : (
              <div />
            )}
          </Container>
        </Container>
      ))}
    </>
  );
};
export default CardBienLouer;