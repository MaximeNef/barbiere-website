import Link from "next/link";
import MyImage from "../myimage";

export default function Btn3(props) {
  function findColorClass() {
    switch (props.color) {
      case "black":
        return "text-default border-black text-[17px] font-medium  leading-[21px]";
      case "blueu":
        return "text-transparent bg-clip-text bg-gradient-to-r from-[#41B8B8] to-[#1AD9D9] border-black text-[19px] font-semibold leading-6";
    }
  }
  function findBorderClass() {
    switch (props.color) {
      case "black":
        return "bg-black";
      case "blueu":
        return "bg-gradient-to-r from-[#41B8B8] to-[#1AD9D9]";
    }
  }

  return (
    <div className=' flex flex-col justify-center '>
      {" "}
      <Link href={props.src} passHref>
        <a className='flex flex-col items-center '>
          <div
            onClick={props.onClick}
            id={props.id}
            className={` w-fit ${
              props.className
            }  flex justify-center  items-center ${findColorClass()} relative whitespace-nowrap   `}
            style={{
              ...(props.fitHeight && { height: "fit-content" }),
              ...props.style,
            }}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
          >
            {props.text}{" "}
            {/* <div
              className={` w-full absolute bottom-[1px] h-[1px] ${findBorderClass()} `}
            /> */}
            <MyImage
              source='/assets/Arrow-right.svg'
              w={"20"}
              h={"20"}
              // objectFit={"contain"}
            />
          </div>{" "}
        </a>
      </Link>
    </div>
  );
}
