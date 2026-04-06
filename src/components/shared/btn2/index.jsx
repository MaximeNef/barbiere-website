import Link from "next/link";

export default function Btn2(props) {
  return (
    <div className='w-full flex flex-col justify-center'>
      <Link href={props.src} passHref>
        <a className='group flex flex-col items-center'>
          <div
            onClick={props.onClick}
            id={props.id}
            className={`w-fit ${props.className} justify-center ${
              props.color == "white"
                ? "border-2 border-[#41B8B8] px-4 py-2"
                : props.color == "white-border"
                ? "border-2 border-white px-4 py-2"
                : "bg-gradient-to-r from-[#41B8B8] to-[#1AD9D9] px-4 py-2"
            } rounded-[40px]`}
            style={{
              ...(props.fitHeight && { height: "fit-content" }),
              ...props.style,
            }}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
          >
            <span className='relative flex flex-row items-center gap-2'>
              <p
                className={`${
                  props.color == "white"
                    ? "text-[19px] text-transparent bg-clip-text bg-gradient-to-r from-[#41B8B8] to-[#1AD9D9] font-semibold leading-4"
                    : props.color == "white-border"
                    ? "text-[19px] text-white font-semibold leading-4"
                    : "text-white text-[11px] font-bold leading-[14px]"
                }`}
              >
                {props.text}
              </p>
              <span
                className={`inline-block group-hover:animate-arrow-slide ${
                  props.color == "white"
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#41B8B8] to-[#1AD9D9] text-[19px] font-semibold"
                    : props.color == "white-border"
                    ? "text-white text-[19px] font-semibold"
                    : "text-white text-[11px] font-bold"
                }`}
              >
                →
              </span>
              <span
                className={`absolute bottom-[-1px] left-0 h-[1px] w-0 group-hover:w-full transition-all duration-500 ${
                  props.color == "white"
                    ? "bg-gradient-to-r from-[#41B8B8] to-[#1AD9D9]"
                    : props.color == "white-border"
                    ? "bg-white"
                    : "bg-white"
                }`}
              />
            </span>
          </div>
        </a>
      </Link>
    </div>
  );
}
