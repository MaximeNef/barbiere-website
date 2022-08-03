import Container from "../../shared/container";
import H3 from "../../shared/h3";

const Optionform = ({ state, handleClick, name }) => {
  console.log(state);
  return (
    <Container className='w-full m-2 '>
      {state ? (
        <Container
          className='rounded-[10px] bg-white text-center p-[2px] w-full bg-gradient-to-r from-[#41B8B8] to-[#1AD9D9] shadow-cardinfo'
          onClick={handleClick}
        >
          <H3 className='text-white px-8 py-4 mx-auto'>{name} </H3>
        </Container>
      ) : (
        <Container className='p-[2px] bg-gradient-to-r from-[#41B8B8] to-[#1AD9D9] rounded-[12px]   '>
          <Container
            className='rounded-[10px] bg-white text-center px-8 py-4 '
            onClick={handleClick}
          >
            <H3 className='text-transparent bg-clip-text bg-gradient-to-r from-[#41B8B8] to-[#1AD9D9] mx-auto'>
              {name}
            </H3>
          </Container>
        </Container>
      )}
    </Container>
  );
};
export default Optionform;
