import Image from "next/image";
import Link from "next/link";

const SwiperSlideContent = ({
  background,
  title,
  subtitle,
  btnLink,
  btnBg,
  image,
}) => {
  return (
    <div
      className="slide-content p-5 md:p-8 rounded-xl h-[360px] relative overflow-hidden"
      style={{
        background: `url(${background.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text relative z-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-white w-[90%] md:w-[80%] lg:w-[70%]">
          {title}
        </h2>
        <p className="mt-1 para-styles w-[85%] md:w-[80%] lg:w-[70%] text-white">
          {subtitle}
        </p>
        <Link
          href={btnLink}
          className="inline-block py-3 px-6 rounded-lg mt-5 md:mt-7 text-white duration-300 hover:shadow-inner hover:shadow-black/20 hover:scale-95"
          style={{ background: btnBg }}
          role="button"
          aria-label="view car details"
        >
          View Details
        </Link>
      </div>
      <div className="image w-[300px] md:w-[350px] h-[115px] absolute right-3 bottom-3 md:bottom-5 md:right-5 z-0">
        <Image src={image} alt={title} fill priority />
      </div>
    </div>
  );
};

export default SwiperSlideContent;
