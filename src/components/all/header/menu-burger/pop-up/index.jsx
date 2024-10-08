import Link from "next/link";
import Container from "../../../../shared/container";
import Flex from "../../../../shared/flex";
import MyImage from "../../../../shared/myimage";

const Popup = ({ link, isOpen, setIsOpen, Pause, setPause, current, src }) => {
  function handelClick2() {
    setIsOpen((previsOpen) => !previsOpen);

    setTimeout(function () {
      setPause((prevPause) => !prevPause);
    }, 1500);
    setPause((prevPause) => !prevPause);
  }
  return (
    <Container className=' pt-36 text-2xl font-light	 tracking-wide  mx-6 space-y-7 w-full '>
      {link.map((link) => {
        return (
          <Link href={link.href} key={link.page} passHref>
            {link.page == current ? (
              <a
                onClick={handelClick2}
                className='text-xl font-light   tracking-wide rounded-full pl-6 py-4 bg-[#41B8B8]/10 w-full'
              >
                <Flex justify='start'>
                  <MyImage source={link.src} w={20} h={20} />

                  <Flex justify='start'>
                    <p className='ml-5 '>{link.page}</p>
                  </Flex>
                </Flex>
              </a>
            ) : (
              <a
                onClick={handelClick2}
                className='text-xl font-light	  tracking-wide pl-6  py-2'
              >
                <Flex>
                  <MyImage source={link.src} w={20} h={20} />

                  <Flex justify='start'>
                    <p className='ml-5 text-center'>{link.page}</p>
                  </Flex>
                </Flex>
              </a>
            )}
          </Link>
        );
      })}
    </Container>
  );
};
export default Popup;
