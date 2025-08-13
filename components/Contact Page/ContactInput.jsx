const ContactInput = ({ label, type, name, placeholder, id }) => {
  return (
    <div className="contact-input-box flex flex-col gap-1">
      {type !== "textarea" ? (
        <>
          <label htmlFor={id} className="text-lg md:text-xl mb-1">
            {label}
          </label>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            id={id}
            className="rounded-lg bg-primary/10 border-2 border-primary text-secondary placeholder:text-gray-400 w-full py-2 px-3 duration-300 focus:border-secondary focus:shadow-lg"
          />
        </>
      ) : (
        <textarea
          className="rounded-lg bg-primary/10 border-2 border-primary text-secondary placeholder:text-gray-400 w-full py-2 px-3 min-h-[200px]"
          placeholder={placeholder}
        ></textarea>
      )}
    </div>
  );
};

export default ContactInput;
