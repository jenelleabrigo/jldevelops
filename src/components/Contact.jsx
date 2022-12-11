import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = () => {
  const form = useRef();
  const [emailStatus, setEmailStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("contact_service", "template_b71zs08", form.current, "06HfazOS2Ld3GWIqY").then(
      (result) => {
        setEmailStatus("Your email has been sent. Thank you!");
        document.getElementById("contactForm").reset();
      },
      (error) => {
        console.log(error);
        setEmailStatus("There was an error sending your email. Please try again.");
      }
    );
  };

  return (
    <>
      <div className="p-contact">
        <div className="u-layout">
          <div className="p-contact__inner">
            <div></div>
            <h2 className="p-contact__inner__title">Get In Touch</h2>
            <form className="c-form" id="contactForm" ref={form} onSubmit={sendEmail}>
              <table className="c-form__table">
                <tbody>
                  <tr className="c-form__table__row">
                    <td className="c-form__table__row__td with-mb">
                      <input type="text" name="fname" placeholder="First Name" className="c-form__input" required />
                    </td>
                    <td className="c-form__table__row__td">
                      <input type="text" name="lname" placeholder="Last Name" className="c-form__input" />
                    </td>
                  </tr>
                  <tr className="c-form__table__row">
                    <td className="c-form__table__row__td with-mb">
                      <input type="email" name="email" placeholder="Email" className="c-form__input" required />
                    </td>
                    <td className="c-form__table__row__td">
                      <input type="tel" name="tel" placeholder="Phone" className="c-form__input" />
                    </td>
                  </tr>
                  <tr className="c-form__table__row">
                    <td colSpan="2" className="c-form__table__row__td">
                      <input type="text" name="subject" placeholder="Subject" className="c-form__input" />
                    </td>
                  </tr>
                  <tr className="c-form__table__row">
                    <td colSpan="2" className="c-form__table__row__td">
                      <textarea name="message" rows="8" cols="80" placeholder="Enter message here..." required className="c-form__textarea"></textarea>
                    </td>
                  </tr>
                </tbody>
              </table>
              <button type="submit" name="send" className="c-button c-form__send">
                Send Email
              </button>
            </form>
            <p className={`p-contact__inner__status ${emailStatus !== null ? "is-success" : "is-fail"}`}>{emailStatus !== null ? emailStatus : ""}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
