import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
  console.log(src, "src");
  return `${src}`;
};

const MyImage = ({
  source,
  h,
  w,
  className,
  objectFit,
  layout,
  imageProps,
  sizes,
  priority,
}) => {
  return (
    <Image
      loader={myLoader}
      src={source}
      alt='Picture of the author'
      width={w}
      height={h}
      unoptimized={true}
      className={className}
      objectFit={objectFit}
      layout={layout}
      priority={priority ? true : false}
      placeholder='blur'
      blurDataURL='/images/path-to-blur-image.jpg'
      sizes={sizes}
      quality={100}
    />
  );
};
export default MyImage;
