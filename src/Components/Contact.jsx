import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault(); 

    const templateParams = {
      sender_name: name,
      sender_email: email,
      message: message,
    };

    emailjs
      .send(
        "service_4251b3p", 
        "template_btylxjo", 
        templateParams,
        "EoCEMGgu3qqPdsPut" 
      )
      .then(
        (response) => {
          alert("Email sent successfully!");
          setName(""); 
          setEmail("");
          setMessage("");
        },
        (error) => {
          alert("Failed to send email.");
          console.error(error);
        }
      );
  };

  return (
    <div className="bg-gradient-to-t from-slate-300 to-slate-400 p-5">
      <form onSubmit={sendEmail}> 
        <table className="bg-gradient-to-t from-violet-400 to-purple-900 border-separate border-spacing-9 border-r-2 w-full rounded-lg">
          <tbody>
            <tr className="space-y-3">
              <td className="font-hero">Name</td>
              <td>
                <input
                  className="rounded-lg p-2"
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="font-hero">Email</td>
              <td>
                <input
                  className="rounded-lg p-2"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="font-hero">Message</td>
              <td>
                <textarea
                  className="rounded-lg p-2"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Message"
                  required
                ></textarea>
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="p-4 px-24 font-hero">
                <button
                  type="submit"
                  className="bg-gradient-to-t from-purple-600 to-blue-900 rounded-lg p-4"
                >
                  Send Message
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Contact;
