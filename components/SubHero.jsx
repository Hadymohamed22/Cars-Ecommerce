const SubHero = ({ title }) => {
  return (
    <div className="sub-hero h-[350px] elements-center-center relative before:absolute before:w-full before:h-full before:inset-0 before:bg-black/20 before:z-0 bg-[url(../assets/images/hero-bg2.svg)] bg-cover bg-center">
      <h4 className="content relative z-10 text-2xl md:text-3xl lg:text-4xl text-secondary">
        Home/
        <span className="text-white">{title}</span>
      </h4>
    </div>
  );
};

export default SubHero;
