import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const SocialContactBox = ({ icon, link }) => {
  const icons = {
    linkedin: { color: "#0a66c2", icon: <FaLinkedinIn /> },
    whatsapp: { color: "#075e54", icon: <FaWhatsapp /> },
    instagram: { color: "#f56040", icon: <FaInstagram /> },
    facebook: { color: "#1877f2", icon: <FaFacebookF /> },
  };
  return (
    <a
      className="social-link-box w-7 h-7 md:w-8 md:h-8 elements-center-center rounded-full text-white duration-300 hover:shadow-lg hover:scale-110"
      style={{ backgroundColor: icons[icon].color }}
      href={link}
      target="_blank"
    >
      {icons[icon].icon}
    </a>
  );
};

export default SocialContactBox;
