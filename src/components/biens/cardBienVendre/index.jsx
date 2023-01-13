import Link from "next/link";
import { useState } from "react";
import CardCTA from "../../shared/card-Cta";
import Container from "../../shared/container";
import Flex from "../../shared/flex";
import MyImage from "../../shared/myimage";
import BienAvendre from "../bienAvendre";
import BienOptions from "../bienOptions";
import BienVendu from "../bienVendu";

const CardBienVendre = (props) => {
  const [index, setIndex] = useState(0);
  return (
    <Container className='md:flex md:flex-row md:flex-wrap md:w-full md:justify-center md:items-center '>
      {/* {props.pages.map((page, i) => (
        <Container className='md:flex md:flex-row md:flex-wrap md:w-fit'>
          <Link href={`/a-vendre/${page.uid}`} key={page.uid} passHref> */}
      {props.postalValue !== "all" || props.filterValue !== "all" ? (
        <div>
          {/* 1 afficher les biens a vendre , les biens sous options, bien vendu */}
          <Container className='md:flex md:flex-row md:flex-wrap md:w-fit justify-center'>
            <BienAvendre pages={props.pages} />
            <BienOptions pages={props.pages} />
            <BienVendu pages={props.pages} />
          </Container>
          {/* <Container className=' rounded-[20px] shadow-cardinfo w-full snap-always snap-center flex-shrink-0 m-2 mx-auto md:max-w-[400px] mr-3 cursor-pointer'>
                  <Container className='relative min-w-[340] min-h-[206px] md:w-[400px] md:min-h-[230px]'>
                    {" "}
                    <Container className='absolute z-10  top-[-2px] left-[-1px] '>
                      {page.data.slices[0].primary.vendu ? (
                        <MyImage
                          source={"/assets/VenduBanner.svg"}
                          h={98}
                          w={98}
                        />
                      ) : (
                        <>
                          {page.data.slices[0].primary.option ? (
                            <MyImage
                              source={"/assets/OptionBanner.svg"}
                              h={98}
                              w={98}
                            />
                          ) : (
                            <></>
                          )}
                        </>
                      )}
                    </Container>
                    <MyImage
                      source={page.data.slices[0].primary.Image_bien.url}
                      className='rounded-t-[20px] md:w-[400px] md:h-[230px]  '
                      w={340}
                      h={206}
                      sizes='(max-width: 400px) 100vw,
                    (max-width: 200px) 50vw,
                    33vw'
                    />{" "}
                    <Container className='absolute bottom-1 left-1'>
                      {page.data.slices[0].primary.peb == "PEB-A" ? (
                        <MyImage source={"/assets/peb-a.png"} h={20} w={68} />
                      ) : (
                        <div />
                      )}
                      {page.data.slices[0].primary.peb == "PEB-B" ? (
                        <MyImage source={"/assets/peb-b.png"} h={20} w={68} />
                      ) : (
                        <div />
                      )}
                      {page.data.slices[0].primary.peb == "PEB-C" ? (
                        <MyImage source={"/assets/peb-c.png"} h={20} w={68} />
                      ) : (
                        <div />
                      )}
                      {page.data.slices[0].primary.peb == "PEB-D" ? (
                        <MyImage source={"/assets/peb-d.png"} h={20} w={68} />
                      ) : (
                        <div />
                      )}
                      {page.data.slices[0].primary.peb == "PEB-E" ? (
                        <MyImage source={"/assets/peb-e.png"} h={20} w={68} />
                      ) : (
                        <div />
                      )}
                      {page.data.slices[0].primary.peb == "PEB-F" ? (
                        <MyImage source={"/assets/peb-f.png"} h={20} w={68} />
                      ) : (
                        <div />
                      )}
                      {page.data.slices[0].primary.peb == "PEB-G" ? (
                        <MyImage source={"/assets/peb-g.png"} h={20} w={68} />
                      ) : (
                        <div />
                      )}
                    </Container>
                  </Container>
                  <Container className='p-3 h-full md:min-h-[142px]'>
                    <Flex justify='between'>
                      <Container className=' text-xl font-bold '>
                        {page.data.slices[0].primary.nom_bien[0]?.text}
                      </Container>
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
                          {page.data.slices[0].primary.Superficie_bien[0]
                            ?.text ? (
                            <MyImage
                              source={"/assets/superficie.svg"}
                              h={20}
                              w={20}
                            />
                          ) : (
                            ""
                          )}

                          <p className='ml-2 font-light text-[15px] leading-[18px]'>
                            {
                              page.data.slices[0].primary.Superficie_bien[0]
                                ?.text
                            }
                            {page.data.slices[0].primary.Superficie_bien[0]
                              ?.text
                              ? "m²"
                              : ""}
                          </p>
                        </Flex>
                      </Container>
                      <Container className=''>
                        <Flex className='' align='center'>
                          {page.data.slices[0].primary.sdb_bien[0]?.text ? (
                            <MyImage
                              source={"/assets/Bathroom.svg"}
                              h={20}
                              w={20}
                            />
                          ) : (
                            ""
                          )}

                          <p className='ml-2 font-light text-[15px] leading-[18px] pt-1'>
                            {page.data.slices[0].primary.sdb_bien[0]?.text}
                          </p>
                        </Flex>
                      </Container>
                      <Container>
                        <Flex align='center'>
                          {page.data.slices[0].primary.chambre_bien[0]?.text ? (
                            <MyImage
                              source={"/assets/Bedroom.svg"}
                              h={19}
                              w={28}
                            />
                          ) : (
                            ""
                          )}

                          <p className='ml-2 font-light text-[15px] leading-[18px] pt-1'>
                            {page.data.slices[0].primary.chambre_bien[0]?.text}
                          </p>
                        </Flex>
                      </Container>
                    </Flex>
                  </Container>
                </Container> */}
        </div>
      ) : (
        <div>
          <Container className='md:flex md:flex-row md:flex-wrap md:w-fit justify-center'>
            <BienAvendre pages={props.pages} />
          </Container>
          {/* {page.data.slices[0].primary.vendu ? (
            <div className='md:w-fit' />
          ) : (
            <Container className='rounded-[20px] shadow-cardinfo w-full snap-always snap-center flex-shrink-0 m-2 mx-auto md:max-w-[390px] mr-3 cursor-pointer'>
              <Container className='relative min-w-[340] min-h-[206px] md:w-[390px] md:min-h-[230px]'>
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
                  source={page.data.slices[0].primary.Image_bien?.url}
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
                </Container>
              </Container>
              <Container className='p-3 w-full md:min-h-[142px]'>
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
                        {page.data.slices[0].primary.Superficie_bien[0]?.text
                          ? "m²"
                          : ""}
                      </p>
                    </Flex>
                  </Container>
                  <Container className=''>
                    <Flex className='' align='center'>
                      {page.data.slices[0].primary.sdb_bien[0]?.text ? (
                        <MyImage
                          source={"/assets/Bathroom.svg"}
                          h={20}
                          w={20}
                        />
                      ) : (
                        ""
                      )}
                      <p className='ml-2 font-light text-[15px] leading-[18px] pt-1'>
                        {page.data.slices[0].primary.sdb_bien[0]?.text}
                      </p>
                    </Flex>
                  </Container>
                  <Container>
                    <Flex align='center'>
                      {page.data.slices[0].primary.chambre_bien[0]?.text ? (
                        <MyImage source={"/assets/Bedroom.svg"} h={19} w={28} />
                      ) : (
                        ""
                      )}
                      <p className='ml-2 font-light text-[15px] leading-[18px] pt-1'>
                        {page.data.slices[0].primary.chambre_bien[0]?.text}
                      </p>
                    </Flex>
                  </Container>
                </Flex>
              </Container>{" "}
            </Container>
          )} */}
        </div>
      )}
      {/* </Link>
        </Container>
      ))} */}
    </Container>
  );
};
export default CardBienVendre;
