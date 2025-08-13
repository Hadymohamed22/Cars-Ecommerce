"use client";

import { sendMessage } from "@/actions/sendMessage";
import { useActionState, useEffect } from "react";
import ContactInput from "./ContactInput";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = ({ className = "" }) => {
  const [state, formAction] = useActionState(sendMessage, {
    message: "",
    error: true,
    status: "",
  });

  useEffect(() => {
    if (state.status === "fail") {
      toast.error(state.message);
    } else if (state.status === "success") {
      toast.success(state.message);
    }
  }, [state]);

  return (
    <>
      <form action={formAction} className={`${className} p-5`}>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary mb-2">
          Send Message
        </h3>
        <div className="inputs flex flex-col gap-3">
          <ContactInput
            id={"name"}
            label={"Name"}
            name={"name"}
            placeholder={"Enter Your Name"}
            type="text"
          />
          <ContactInput
            id={"email"}
            label={"Email"}
            name={"email"}
            placeholder={"Enter Your Email"}
            type="email"
          />
          <ContactInput
            id={"phone"}
            label={"Phone"}
            name={"phone"}
            placeholder={"Enter Your Phone"}
            type="phone"
          />
          <ContactInput
            id={"message"}
            name={"message"}
            placeholder={"Enter Message"}
            type="textarea"
          />
        </div>
        <div className="submit-container flex justify-end mt-5">
          <button
            type="submit"
            className="w-full md:w-fit bg-primary duration-300 hover:bg-secondary text-white hover:text-primary py-2.5 px-4 rounded-md cursor-pointer"
          >
            Send Message
          </button>
        </div>
      </form>
      <Toaster position="bottom-right" />
    </>
  );
};

export default ContactForm;
