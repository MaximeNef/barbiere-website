import { useState } from "react";
import Container from "../../../shared/container";
import H3 from "../../../shared/h3";

const Description = (props) => {
  const [height, setheight] = useState(false);

  const handleClick = () => {
    setheight((prevState) => !prevState);
  };
  return (
    <Container className={` p-5 rounded-[12px] shadow-cardDetails `}>
      <H3>{"Description"}</H3>
      <Container
        className={` ${height ? "h-fit" : "h-[130px] md:h-[65px]  "} `}
      >
        <p
          className={`mt-5 font-light text-[17px] leading-[22px] overflow-hidden`}
        >
          {props.details.data.slices[0].primary.description_biens[0]?.text}
        </p>
      </Container>

      <Container onClick={handleClick}>
        <p className=' font-semibold mt-2 text-[17px]  leading-[21px] ml-auto text-[#E78DB1] cursor-pointer'>
          {height ? "Lire moins" : "Lire plus"}
        </p>
      </Container>
    </Container>
  );
};
export default Description;
