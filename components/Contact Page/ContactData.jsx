import ContactDataBox from "./ContactDataBox";
import SocialContactBox from "./SocialContactBox";

const ContactData = ({ className = "", title }) => {
  return (
    <div className={`${className} contact-data rounded-2xl p-5 bg-primary/10`}>
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary mb-2">
        {title}
      </h3>
      <div className="content flex flex-col gap-3">
        <ContactDataBox title={"Address"} info={"Vienna - 132 Branch Rd SE"} />
        <ContactDataBox title={"Phone"} info={"+34 044 593 2009"} />
        <ContactDataBox title={"Email"} info={"Vienna483@yahoo.com"} />
      </div>
      <div className="social-links mt-3">
        <h5 className="text-xl md:text-2xl mb-2 text-secondary">
          Follow Us On
        </h5>
        <div className="links flex items-center gap-3">
          <SocialContactBox
            icon="whatsapp"
            link="https://wa.me/+201029379363"
          />
          <SocialContactBox
            icon="linkedin"
            link="https://wa.me/+201029379363"
          />
          <SocialContactBox
            icon="instagram"
            link="https://wa.me/+201029379363"
          />
          <SocialContactBox
            icon="facebook"
            link="https://wa.me/+201029379363"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactData;
