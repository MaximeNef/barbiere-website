import Link from "next/link";

export default function Btn2(props) {
  return (
    <div className='w-full flex flex-col justify-center '>
      {" "}
      <Link href={props.src} passHref>
        <a className='flex flex-col items-center '>
          <div
            onClick={props.onClick}
            id={props.id}
            className={` w-fit ${
              props.className
            } justify-center  items-center ${
              props.color == "white"
                ? " bg-white px-4 py-2"
                : "bg-gradient-to-r from-[#41B8B8] to-[#1AD9D9] px-2 py-2"
            } rounded-[40px] `}
            style={{
              ...(props.fitHeight && { height: "fit-content" }),
              ...props.style,
            }}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
          >
            <p
              className={`  ${
                props.color == "white"
                  ? "text-[19px]  text-transparent bg-clip-text bg-gradient-to-r from-[#41B8B8] to-[#1AD9D9] font-semibold leading-4"
                  : "text-white text-[11px] font-bold leading-[14px]"
              } `}
            >
              {props.text}
            </p>{" "}
          </div>{" "}
        </a>
      </Link>
    </div>
  );
}
