import Link from "next/link";

export default function Btn2(props) {
  function findBgClass() {
    switch (props.color) {
      case "white":
        return "  bg-white px-4 py-2 ";
      case "blueu":
        return "bg-gradient-to-r from-[#41B8B8] to-[#1AD9D9] px-4 py-2  ";
    }
  }
  function findtextClass() {
    switch (props.color) {
      case "white":
        return " text-[19px]  text-transparent bg-clip-text bg-gradient-to-r from-[#41B8B8] to-[#1AD9D9] font-semibold leading-4";
      case "blueu":
        return " text-white text-[11px] font-bold leading-[14px]";
    }
  }

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
            } justify-center  items-center ${findBgClass()} rounded-[40px]   `}
            style={{
              ...(props.fitHeight && { height: "fit-content" }),
              ...props.style,
            }}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
          >
            <p className={`  ${findtextClass()} `}>{props.text}</p>{" "}
          </div>{" "}
        </a>
      </Link>
    </div>
  );
}
