import Container from "../../../../shared/container";

const PopupImage = () => {
  return (
    <Container className='  top-0 left-0 w-screen h-screen flex justify-center items-center bg-black/80 overflow-hidden z-50 fixed'>
      <Container className='bg-white w-[50%] h-[50%] '>
        <Container className=' flex justify-end '>
          {/* <a href='#' onClick={handleCloseClick}>
            x
          </a> */}
        </Container>
        <Container>{"title"}</Container>
        <Container className='pt-10'>{"children"}</Container>
      </Container>
    </Container>
  );
};
export default PopupImage;
