import Image from "next/image";

// const myLoader = ({ src, width, quality }) => {
//   return `${src}`;
// };

const MyImage = ({
  source,
  h = "300",
  w = "300",
  className,
  objectFit,
  layout,
  sizes,
  priority,
}) => {
  return (
    <Image
      // loader={myLoader}
      src={source}
      alt='Picture of the house'
      width={w}
      height={h}
      unoptimized={true}
      className={className}
      objectFit={objectFit}
      layout={layout}
      priority={priority ? true : false}
      placeholder={w > 540 || h > 40 ? "blur" : "empty"}
      blurDataURL={source}
      sizes={sizes}
      quality={100}
    />
  );
};
export default MyImage;
