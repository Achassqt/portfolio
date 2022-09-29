import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

function Contact() {
  const { register, handleSubmit } = useForm();

  const sendForm = (templateId, serviceId, data) => {
    emailjs
      .send(templateId, serviceId, data, "RU2i9IHGZ7LwXdqCQ")
      .then((res) => {
        console.log("Message envoyé");
      })
      .catch((err) => console.log(err));
  };

  const onSubmit = async (data, r) => {
    console.log(data);
    alert("Votre message à bien été envoyé");
    const serviceId = "service_p2je54p";
    const templateId = "template_tyia4vb";
    sendForm(serviceId, templateId, {
      firstName: data.firstName,
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
      reply_to: r.target.reset(),
    });
  };

  return (
    <div className="contact-container">
      <h2>Me contacter</h2>
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="contact-form__infos">
          <input
            type="text"
            {...register("firstName", {
              required: "Please enter your first name.",
            })}
            className="contact-form__infos__value"
            placeholder="Nom"
            spellCheck="false"
          />
          <input
            type="text"
            {...register("name", { required: "Please enter your name." })}
            className="contact-form__infos__value"
            placeholder="Prénom"
            spellCheck="false"
          />
          <input
            type="email"
            {...register("email", { required: "Please enter your email." })}
            className="contact-form__infos__value"
            placeholder="Email"
            spellCheck="false"
          />
          <input
            type="tel"
            {...register("phone", {
              required: "Please enter your phone number.",
            })}
            className="contact-form__infos__value"
            placeholder="Numéro de téléphone"
            spellCheck="false"
          />
        </div>
        <textarea
          {...register("message", {
            required: "Please enter your message.",
          })}
          className="contact-form__message"
          placeholder="Message"
          spellCheck="false"
        ></textarea>
        <input type="submit" className="contact-form__btn" value="Envoyer" />
      </form>
    </div>
  );
}

export default Contact;
