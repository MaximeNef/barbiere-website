export default function H1(props) {
  return (
    <h1
      className={` ${props.className} text-[40px] font-medium leading-[50px] text-center flex flex-col items-center justify-center text-[#37474F]`}
    >
      {props.children}
    </h1>
  );
}
