import React from "react";
import { motion } from "framer-motion";
import MyTextInput from "./InputElement";
import { Form, Formik } from "formik";
import TextArea from "./TextArea";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

// alert
const test = () => {
  Swal.fire({
    title: "Your Email got me well.",
    icon: "success",
    toast: true,
    timer: 3000,
    showConfirmButton: false,
    position: "top-right",
    customClass: {
      container: "alert-container",
      title: "alert-message",
      icon: "alert-icon",
    },
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
};

const Contact = () => {
  const sendEmail = (value, { setSubmitting, resetForm }) => {
    emailjs
      .sendForm(
        "service_e77ppzz",
        "template_fykv0ku",
        "#email_form",
        "KGXTkLRVxcFX2wkq-"
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          resetForm();
        },
        (error) => {
          console.error("Error sending email:", error);
        }
      )
      .finally(() => {
        setSubmitting(false);
      });

    test();
  };

  return (
    <>
      <motion.section
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-white body-font relative w-full mb-10"
      >
        <div className="container  mx-auto flex">
          <div className=" rounded-lg flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className=" font-bold uppercase text-xl font-main border-b-2 mb-2 ">
              Hit me up.
            </h2>
            <p className="lg:text-base text-xs text-gray-300 font-body">
              Feel free to contact me and i will get back to you ASAP.
            </p>
            <Formik
              initialValues={{
                name: "",
                email: "",
                message: "",
              }}
              validationSchema={Yup.object({
                email: Yup.string().required("* Enter your email address."),
                message: Yup.string().required(
                  "* Please add some message to send."
                ),
                name: Yup.string().required("* Please your name."),
              })}
              onSubmit={sendEmail}
            >
              <Form id="email_form" className="flex flex-col">
                <MyTextInput
                  label="Name"
                  id="name"
                  name="name"
                  placeholder="your name please"
                  type="text"
                />
                <MyTextInput
                  label="Email"
                  id="email"
                  name="email"
                  placeholder="Enter email address"
                  type="email"
                />
                <TextArea label="Message" name="message" id="message" />

                <button
                  type="submit"
                  className="text-white bg-purple-900  border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 active:bg-purple-400 hover:text-white rounded text-lg transition-all duration-150 "
                >
                  <p className="font-bold">Send</p>
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;
