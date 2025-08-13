"use server";
export async function sendMessage(prevState, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const message = formData.get("message");
  if (name !== "" && email !== "" && phone !== "" && message !== "") {
    return {
      message: "we receive your message and will contact with you soon 🥰",
      error: false,
      status: "success",
    };
  } else {
    return {
      message: "make sure all data is full and send again 😓",
      error: true,
      status: "fail",
    };
  }
}
