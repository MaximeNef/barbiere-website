export default function H3(props) {
  return (
    <h3
      className={` ${props.className} 	  text-[20px] md:text-[24px]  font-semibold leading-[26px] text-center flex flex-col items-start justify-center text-default  `}
    >
      {props.children}
    </h3>
  );
}
