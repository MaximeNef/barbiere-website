import Btn3 from "../btn3";
import Container from "../container";
import Flex from "../flex";
import H2 from "../h2";
import MyImage from "../myimage";
import P from "../p";

const CardInfo = (props) => {
  return (
    <Container className='p-[2px] bg-gradient-to-r from-[#41B8B8] to-[#1AD9D9] rounded-[20px] shadow-cardinfo'>
      <Container className='bg-white rounded-[18px] relative space-y-[30px] px-5 py-10'>
        {" "}
        <Container className='relative w-full'>
          {props.img == undefined ? (
            <></>
          ) : (
            <Container className='absolute top-[-30px] left-[-10px]'>
              <MyImage source={props.img} w={"60"} h={"60"} />
            </Container>
          )}

          <H2>{"Vendre"}</H2>
        </Container>
        <P>
          {
            "Quand vous trouvez enfin la perle rare, on vous annonce qu’elle est déjà sous compromis... En vous inscrivant cela ne vous arrivera plus !"
          }{" "}
        </P>
        <Btn3 src='/blog' color='blueu' text='En savoir plus' />
      </Container>
    </Container>
  );
};
export default CardInfo;
