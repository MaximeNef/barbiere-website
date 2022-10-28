import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import Container from "../../../shared/container";
import Flex from "../../../shared/flex";
import MyImage from "../../../shared/myimage";

const MenuDesktop = ({ link, current }) => {
  console.log(link, "link");
  console.log(current, "current");
  return (
    <Container className=' w-full '>
      <Flex
        align='center'
        className='fixed z-20 bg-white bg-clip-padding backdrop-filter  backdrop-blur-md  bg-opacity-50 w-full   py-4  px-24'
      >
        {" "}
        <Flex className=' m-auto   max-h-12  '>
          <Link href='/' passHref>
            <a>
              <Container className='max-h-[70px] mt-[-10px]'>
                <MyImage source='/assets/logoB.svg' w={100} h={150} />
              </Container>
            </a>
          </Link>{" "}
        </Flex>
        <Flex
          type='row'
          justify='between'
          align='start'
          className=' min-w-[66%] '
        >
          {link.map((p) => {
            return (
              <Link href={p.href} key={p.href} passHref>
                {p.page == current ? (
                  <Container
                    type='col'
                    align='center'
                    justify=''
                    className='pt-2 '
                  >
                    <Flex
                      type='col'
                      align='center'
                      justify='start'
                      className=' hover:transform hover:-translate-y-1.5 hover:duration-700 duration-500 '
                    >
                      <a className='my-auto text-[21px] text-center  text-transparent  bg-clip-text bg-gradient-to-r from-[#41B8B8] to-[#1AD9D9]  min-w-[38px] font-bold drop-shadow-lg cursor-pointer'>
                        {p.page}
                      </a>
                    </Flex>
                    <motion.div
                      style={{ y: 10 }}
                      animate={{ y: 0 }}
                      // transition={{ duration: 0.3 }}
                      layout
                    >
                      <Container className='border-b-4 border-[#41B8B8] mx-3 rounded-[4px] min-w-[24px] mt-[2px] shadow-cardDetails '></Container>
                    </motion.div>
                  </Container>
                ) : (
                  <a className=' pt-4  font-semibold text-[17px] text-center text-default min-w-[38px] hover:transform hover:-translate-y-1 hover:duration-700 duration-500	 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#41B8B8] to-[#1AD9D9] '>
                    {p.page}
                  </a>
                )}
              </Link>
            );
          })}

          <Link href='/contact' passHref>
            <a>
              <Container className=' text-center rounded-[50px] bg-gradient-to-r from-[#41B8B8] to-[#1AD9D9]  text-white font-normal m-auto p-2 px-6 mt-[6px] text-[15px]'>
                {" Estimation offerte"}
              </Container>
            </a>
          </Link>
        </Flex>
      </Flex>{" "}
    </Container>
  );
};
export default MenuDesktop;
