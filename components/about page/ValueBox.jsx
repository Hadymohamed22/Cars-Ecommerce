import styles from "./value-box.module.scss";
import { RiTeamFill, RiVerifiedBadgeLine } from "react-icons/ri";
import { LuClock2 } from "react-icons/lu";
import { BsUnity } from "react-icons/bs";

const ValueBox = ({ icon, title, subtitle, index }) => {
  const icons = {
    collaboration: <RiTeamFill />,
    trust: <RiVerifiedBadgeLine />,
    transparency: <LuClock2 />,
    integrity: <BsUnity />,
  };
  return (
    <div
      className={`${styles["value-box"]} value-box py-10 text-center relative ${
        index % 2 === 0 ? styles.even : styles.odd
      }`}
    >
      <div className="absolute z-10 left-[50%] translate-x-[-50%] translate-y-[-50px] icon mt-[-24px] w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-full elements-center-center border-4 border-primary text-3xl md:text-4xl text-primary bg-[#F6F7F9]">
        {icons[icon]}
      </div>
      <div
        className={`${styles.valueBoxBg} bg absolute z-0 w-full h-full inset-0 bg-gray-200 rounded-b-lg rounded-t-lg`}
      ></div>
      <div className="content relative z-10">
        <h4 className="text-2xl md:text-3xl text-secondary font-semibold">
          {title}
        </h4>
        <p className="para-styles w-[90%] md:w-[80%] mx-auto mt-1">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default ValueBox;
