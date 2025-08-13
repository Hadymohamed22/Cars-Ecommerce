import { BsFillFuelPumpFill } from "react-icons/bs";
import { PiEngineFill } from "react-icons/pi";
import { MdMergeType, MdPeopleAlt } from "react-icons/md";

const CarInfoBox = ({ icon, infoText, text }) => {
  const icons = {
    fuel: <BsFillFuelPumpFill />,
    engine: <PiEngineFill />,
    buyers: <MdPeopleAlt />,
    type: <MdMergeType />,
  };
  return (
    <div className={`${icon}-box min-w-[25px] flex items-center gap-1`}>
      {icon ? (
        <div className="icon text-sm md:text-base text-para">{icons[icon]}</div>
      ) : (
        <span className="text-xs md:text-sm text-gray-500 font-bold">
          {text} :{" "}
        </span>
      )}
      <span className="text text-xs md:text-sm  text-para">{infoText}</span>
    </div>
  );
};

export default CarInfoBox;
