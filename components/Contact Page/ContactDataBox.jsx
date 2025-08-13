const ContactDataBox = ({ title, info }) => {
  return (
    <div className="contact-data-box">
      <h5 className="text-xl md:text-2xl mb-1 text-secondary">{title}</h5>
      <p className="para-styles">{info}</p>
    </div>
  );
};

export default ContactDataBox;
