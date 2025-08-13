const CarSummaryBoxInfo = ({ type, text }) => {
  return (
    <div className="car-summary-box-info text-xs md:text-sm">
      <span className="text-gray-500">{type} : </span>
      <span className="text-gray-400">{text}</span>
    </div>
  );
};

export default CarSummaryBoxInfo;
