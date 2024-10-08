import Link from "next/link";
import Container from "../../shared/container";
import Flex from "../../shared/flex";
import MotionCardRight from "../../shared/motion-right";
import MyImage from "../../shared/myimage";

const CardBienLocation = (props) => {
  // Trier le tableau en fonction de la valeur de la clé 'ordres'
  props.pages.sort((a, b) => {
    if (
      a.data.slices[0].primary.ordres === null &&
      b.data.slices[0].primary.ordres === null
    ) {
      0;
    }
    if (a.data.slices[0].primary.ordres === null) {
      return 1;
    }
    if (b.data.slices[0].primary.ordres === null) {
      return -1;
    }
    return a.data.slices[0].primary.ordres - b.data.slices[0].primary.ordres;
  });
  return (
    <>
      {" "}
      <MotionCardRight
        initial='hidden'
        animate='visible'
        transition={{ duration: 1 }}
        className='  w-full flex'
      >
        {" "}
        {props.pages.map((page) => (
          <Link href={`/a-louer/${page.uid}`} key={page.uid} passHref>
            {page.data.slices[0].primary.vendu ||
            page.data.slices[0].primary.option ? (
              <div />
            ) : (
              <Container className=' rounded-[20px] shadow-cardinfo w-full snap-always snap-center flex-shrink-0 m-2 mx-auto md:max-w-[400px] mr-3 cursor-pointer'>
                <Container className='relative '>
                  <Container className='absolute z-10  top-[-2px] '>
                    {page.data.slices[0].primary.option ? (
                      <MyImage
                        source={"/assets/OptionBanner.svg"}
                        h={98}
                        w={98}
                      />
                    ) : (
                      <></>
                    )}
                  </Container>
                  <MyImage
                    source={
                      page.data.slices[0].primary.Image_bien.url
                        ? page.data.slices[0].primary.Image_bien?.url
                        : "/assets/logoB.svg"
                    }
                    className='rounded-t-[20px]'
                    w={340}
                    h={230}
                    objectFit={"cover"}
                    sizes='(max-width: 400px) 100vw,
                      (max-width: 200px) 50vw,
                      33vw'
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
                  </Container>
                </Container>
                <Container className='p-3 h-[150px]'>
                  <Flex justify='between'>
                    <Container className=' text-xl font-bold '>
                      {page.data.slices[0].primary.nom_bien[0]?.text}
                    </Container>
                    <p className=' text-xl font-semibold text-[#43A8AA] min-w-[100px] text-end'>
                      {page.data.slices[0].primary.prix_bien[0]?.text}
                      {"€"}
                    </p>
                  </Flex>

                  <Flex justify='start'>
                    <MyImage source={"/assets/pin.svg"} h={"16"} w={"12"} />
                    <Container className='ml-2 font-light text-[15px] leading-[18px] my-auto'>
                      {page.data.slices[0].primary.adresse_bien[0]?.text}
                    </Container>
                  </Flex>
                  <Container className='w-full h-[1px] bg-slate-200 mt-[7px]' />
                  <Flex justify='between' className='mt-[14px]'>
                    <Container>
                      <Flex align='center'>
                        <MyImage
                          source={"/assets/superficie.svg"}
                          h={"20"}
                          w={"20"}
                        />
                        <p className='ml-2 font-light text-[15px] leading-[18px]'>
                          {page.data.slices[0].primary.Superficie_bien[0]?.text}
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
                          {page.data.slices[0].primary.sdb_bien[0]?.text}
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
                          {page.data.slices[0].primary.chambre_bien[0]?.text}
                        </p>
                      </Flex>
                    </Container>
                  </Flex>
                </Container>
              </Container>
            )}
          </Link>
        ))}
        {props.pages.map((page) => (
          <Link href={`/a-louer/${page.uid}`} key={page.uid} passHref>
            {page.data.slices[0].primary.option ? (
              <Container className=' rounded-[20px] shadow-cardinfo w-full snap-always snap-center flex-shrink-0 m-2 mx-auto md:max-w-[400px] mr-3 cursor-pointer'>
                <Container className='relative min-w-[340] min-h-[206px] md:w-[400px] md:min-h-[230px]'>
                  <Container className='absolute z-10  top-[-2px] '>
                    {page.data.slices[0].primary.option ? (
                      <MyImage
                        source={"/assets/OptionBanner.svg"}
                        h={98}
                        w={98}
                      />
                    ) : (
                      <></>
                    )}
                  </Container>
                  <MyImage
                    source={
                      page.data.slices[0].primary.Image_bien.url
                        ? page.data.slices[0].primary.Image_bien?.url
                        : "/assets/logoB.svg"
                    }
                    className='rounded-t-[20px] md:w-[420px] md:h-[230px]'
                    w={340}
                    h={206}
                    sizes='(max-width: 400px) 100vw,
                      (max-width: 200px) 50vw,
                      33vw'
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
                  </Container>
                </Container>
                <Container className='p-3 h-full'>
                  <Flex justify='between'>
                    <Container className=' text-xl font-bold '>
                      {page.data.slices[0].primary.nom_bien[0]?.text}
                    </Container>
                    <p className=' text-xl font-semibold text-[#43A8AA] min-w-[100px] text-end'>
                      {page.data.slices[0].primary.prix_bien[0]?.text}
                      {"€"}
                    </p>
                  </Flex>

                  <Flex justify='start'>
                    <MyImage source={"/assets/pin.svg"} h={"16"} w={"12"} />
                    <Container className='ml-2 font-light text-[15px] leading-[18px] my-auto'>
                      {page.data.slices[0].primary.adresse_bien[0]?.text}
                    </Container>
                  </Flex>
                  <Container className='w-full h-[1px] bg-slate-200 mt-[7px]' />
                  <Flex justify='between' className='mt-[14px]'>
                    <Container>
                      <Flex align='center'>
                        <MyImage
                          source={"/assets/superficie.svg"}
                          h={"20"}
                          w={"20"}
                        />
                        <p className='ml-2 font-light text-[15px] leading-[18px]'>
                          {page.data.slices[0].primary.Superficie_bien[0]?.text}
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
                          {page.data.slices[0].primary.sdb_bien[0]?.text}
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
                          {page.data.slices[0].primary.chambre_bien[0]?.text}
                        </p>
                      </Flex>
                    </Container>
                  </Flex>
                </Container>
              </Container>
            ) : (
              <div />
            )}
          </Link>
        ))}
        <Container className='  min-w-[1px]  h-[200px] flex items-center justify-center mx-10  '></Container>
      </MotionCardRight>
    </>
  );
};
export default CardBienLocation;
