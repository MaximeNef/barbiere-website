export default function H2(props) {
  return (
    <h2
      className={`${props.className}   text-[20px] font-bold leading-[25px] text-center flex flex-col items-center justify-center text-[#0b2528] `}
    >
      {props.children}
    </h2>
  );
}
