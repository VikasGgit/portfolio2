import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Email is invalid";
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSending(true);
      emailjs
        .send(
          "service_wg68im7",
          "template_g17779i",
          formData,
          "JrLuthKSP4ctIW61g"
        )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Message sent successfully");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((err) => {
          console.log("Failed", err);
          toast.error("Failed to send message. Please try again");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <div className="max-w-3xl p-4 mx-auto" id="contact">
      <Toaster />
      <h2 className="my-8 text-4xl font-semibold tracking-tighter text-center">
        Let's Connect
      </h2>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="mb-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Name"
            onChange={handleChange}
            className={`w-full px-3 py-2 mb-1 text-sm bg-transparent border-b-2 ${
              errors.name ? "border-pink-700" : "border-gray-900"
            } focus:border-gray-400 focus:outline-none`}
          />
          {errors.name && (
            <p className="text-sm text-pink-700">{errors.name}</p>
          )}
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
            className={`w-full px-3 py-2 mb-1 text-sm bg-transparent border-b-2 ${
              errors.email ? "border-pink-700" : "border-gray-900"
            } focus:border-gray-400 focus:outline-none`}
          />
          {errors.email && (
            <p className="text-sm text-pink-700">{errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            placeholder="Message"
            onChange={handleChange}
            className={`w-full px-3 py-2 mb-1 text-sm bg-transparent border-b-2 ${
              errors.message ? "border-pink-700" : "border-gray-900"
            } focus:border-gray-400 focus:outline-none`}
          />
          {errors.message && (
            <p className="text-sm text-pink-700">{errors.message}</p>
          )}
        </div>
        <button
          type="submit"
          className={`mb-8 w-full rounded bg-yellow-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-yellow-500 ${
            isSending ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={isSending}
        >
          {isSending ? "Sending" : "Send"}
        </button>
      </motion.form>
    </div>
  );
};

export default ContactForm;
