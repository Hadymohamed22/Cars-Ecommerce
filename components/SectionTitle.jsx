import Link from "next/link";

const SectionTitle = ({ title, viewAll, link }) => {
  return (
    <div className="py-3 flex items-center justify-between">
      <h5 className="text-[#90A3BF] text-sm md:text-base">{title}</h5>
      {viewAll && (
        <Link
          href={link}
          className="text-xs md:text-sm text-primary relative before:absolute before:right-0 before:bottom-[-2px] before:w-[0%] before:h-[2px] before:bg-primary before:duration-300 hover:before:w-full"
        >
          View All
        </Link>
      )}
    </div>
  );
};

export default SectionTitle;
