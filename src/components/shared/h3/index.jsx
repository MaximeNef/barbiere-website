export default function H3(props) {
  return (
    <h3
      className={` ${props.className} text-[19px]  font-semibold leading-[24px] text-center flex flex-col items-start justify-center  `}
    >
      {props.children}
    </h3>
  );
}
