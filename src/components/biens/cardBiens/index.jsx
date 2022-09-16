import Link from "next/link";
import Container from "../../shared/container";
import Flex from "../../shared/flex";
import MotionCardRight from "../../shared/motion-right";
import MyImage from "../../shared/myimage";

const CardBien = (props) => {
  console.log(props.pages, "bienVendresss");
  return (
    <>
      {" "}
      <MotionCardRight
        initial='hidden'
        animate='visible'
        transition={{ duration: 1, delay: 0.3 }}
        className='  w-full flex'
      >
        {props.pages.map((page, i) => (
          <Link href={`/a-vendre/${page.uid}`} key={page.uid} passHref>
            {page.data.slices[0].primary.vendu ? (
              <div />
            ) : (
              <Container className=' rounded-[20px] shadow-cardinfo w-full snap-always snap-center flex-shrink-0 m-2 mx-auto md:max-w-[400px] mr-3 '>
                <Container className='relative min-w-[340] min-h-[206px] md:w-[400px] md:min-h-[230px]'>
                  <MyImage
                    source={page.data.slices[0].primary.Image_bien.url}
                    layout='fill'
                    className='rounded-t-[20px] h-full w-full  '
                  />
                  <Container className='absolute bottom-1 left-1'>
                    {page.data.slices[0].primary.peb == "PEB-A" ? (
                      <MyImage source={"/assets/peb-a.png"} h={"20"} w={"68"} />
                    ) : (
                      <div />
                    )}
                    {page.data.slices[0].primary.peb == "PEB-B" ? (
                      <MyImage source={"/assets/peb-b.png"} h={"20"} w={"68"} />
                    ) : (
                      <div />
                    )}
                    {page.data.slices[0].primary.peb == "PEB-C" ? (
                      <MyImage source={"/assets/peb-c.png"} h={"20"} w={"68"} />
                    ) : (
                      <div />
                    )}
                    {page.data.slices[0].primary.peb == "PEB-D" ? (
                      <MyImage source={"/assets/peb-d.png"} h={"20"} w={"68"} />
                    ) : (
                      <div />
                    )}
                    {page.data.slices[0].primary.peb == "PEB-E" ? (
                      <MyImage source={"/assets/peb-e.png"} h={"20"} w={"68"} />
                    ) : (
                      <div />
                    )}
                    {page.data.slices[0].primary.peb == "PEB-F" ? (
                      <MyImage source={"/assets/peb-f.png"} h={"20"} w={"68"} />
                    ) : (
                      <div />
                    )}
                    {page.data.slices[0].primary.peb == "PEB-G" ? (
                      <MyImage source={"/assets/peb-g.png"} h={"20"} w={"68"} />
                    ) : (
                      <div />
                    )}
                    {/* <MyImage source={"/assets/peb.svg"} h={"20"} w={"68"} /> */}
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
                  <Container className='w-full h-[1px] bg-slate-200 mt-[7px]' />
                  <Flex justify='between' className='mt-[7px]'>
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
                </Container>
              </Container>
            )}
          </Link>
        ))}{" "}
        <Container className='  min-w-[1px]  h-[200px] flex items-center justify-center mx-10 md:hidden '></Container>
      </MotionCardRight>
    </>
  );
};
export default CardBien;
