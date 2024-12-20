export default function P(props) {
  return (
    <p
      className={`${props.className}  text-[17px] font-light leading-[21px] text-center flex flex-col items-center justify-center `}
    >
      {props.children}
    </p>
  );
}
