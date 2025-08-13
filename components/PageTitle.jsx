const PageTitle = ({ title }) => {
  return (
    <div className="title py-5">
      <div className="container mx-auto px-5">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center md:text-start capitalize">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default PageTitle;
