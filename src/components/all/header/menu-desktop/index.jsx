import Link from "next/link";
import Container from "../../../shared/container";
import Flex from "../../../shared/flex";
import MyImage from "../../../shared/myimage";

const MenuDesktop = ({ link, current }) => {
  return (
    <Container className=' w-full justify-between'>
      <Flex
        align='center'
        className='fixed z-20 bg-white bg-clip-padding backdrop-filter  backdrop-blur-md  bg-opacity-50 w-full   py-4  px-24'
      >
        {" "}
        <Flex className=' m-auto   max-h-12 max-w-[20%] '>
          <Link href='/' passHref>
            <a>
              <Container className='max-h-[70px] mt-[-10px]'>
                <MyImage source='/assets/logoB.svg' w={100} h={150} />
              </Container>
            </a>
          </Link>{" "}
        </Flex>
        <Flex type='row' justify='between' align='start' className=' '>
          {link.map((p) => {
            return (
              <Link href={p.href} key={p.href} passHref>
                {p.page == current ? (
                  <Container className='pt-2  '>
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

                    <Container className='border-b-2 border-[#41B8B8]  rounded-[4px] min-w-[24px] mt-[2px] shadow-cardDetails '></Container>
                  </Container>
                ) : (
                  <a className=' pt-4  font-medium text-[17px] text-center text-default min-w-[38px] hover:transform hover:-translate-y-1 hover:duration-700 duration-500\t hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#41B8B8] to-[#1AD9D9] '>
                    {p.page}
                  </a>
                )}
              </Link>
            );
          })}

          <Link href='/estimation' passHref>
            <a className='group'>
              <div className='text-center rounded-[50px] mx-10 bg-gradient-to-r from-[#41B8B8] to-[#1AD9D9] text-white font-normal m-auto p-2 px-6 mt-[6px] text-[15px]'>
                <span className='relative flex flex-row items-center gap-2'>
                  {"Estimez votre bien"}
                  <span className='inline-block group-hover:animate-arrow-slide'>→</span>
                  <span className='absolute bottom-[-1px] left-0 h-[1px] w-0 group-hover:w-full transition-all duration-500 bg-white' />
                </span>
              </div>
            </a>
          </Link>
        </Flex>
      </Flex>{" "}
    </Container>
  );
};
export default MenuDesktop;
