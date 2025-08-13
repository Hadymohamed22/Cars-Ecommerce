import ValueBox from "@/components/about page/ValueBox";
import SubHero from "@/components/SubHero";
import { valuesBoxs } from "@/constants/valuesBoxs";

const page = () => {
  return (
    <main>
      <SubHero title={"About"} />
      <div className="our-values my-12">
        <div className="section-title flex flex-col items-center gap-1 text-center">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary">
            Our Values
          </h3>
          <p className="para-styles w-[80%] md:w-[70%] lg:w-[60%] mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus enim molestiae voluptatem ex repellat ad, maiores nisi
            illo eveniet voluptates quam! Sint unde libero enim, pariatur
            aliquid dolore laborum impedit nulla iure neque, eum quisquam eius
            veritatis, praesentium asperiores tempora corrupti iste velit at
            necessitatibus?
          </p>
        </div>
        <div className="container px-5 grid grid-cols-1 md:grid-cols-2 mt-12 gap-x-5 gap-y-12">
          {valuesBoxs.map((e, index) => (
            <ValueBox
              key={index}
              index={index}
              icon={e.icon}
              title={e.title}
              subtitle={e.subTitle}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default page;
