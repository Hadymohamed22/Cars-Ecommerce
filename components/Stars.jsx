import { FaRegStar, FaStar } from "react-icons/fa";

const Stars = ({ rate }) => {
  let content = Array.from({ length: 5 }, (_, i) => {
    if (rate <= i) {
      return <FaRegStar key={i} className="text-orange-400" />;
    } else {
      return <FaStar key={i} className="text-orange-400" />;
    }
  });
  return <div className="stars flex items-center">{content}</div>;
};

export default Stars;
