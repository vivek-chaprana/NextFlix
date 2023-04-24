"use client";

import { useState } from "react";
import styles from "../contact/contact.module.css";

import { Mulish } from "next/font/google";

const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
});

const ContactForm = () => {
  const initialState = {
    username: "",
    email: "",
    phone: "",
    message: "",
  };

  const [user, setUser] = useState(initialState);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });

    // setUser(prevUser => ({...prevUser,[data]:name}))
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          phone: user.phone,
          message: user.message,
        }),
      });

      if (res.status === 200) {
        setUser(initialState);
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={styles.contact_form} onSubmit={handleSubmit}>
      <div className={styles.input_field}>
        <label htmlFor="username" className={styles.label}>
          Enter your name:
          <input
            value={user.name}
            onChange={handleChange}
            autoComplete="off"
            required
            type="text"
            name="username"
            id="username"
            placeholder="Jhon Wick"
            className={mulish.className}
          />
        </label>
      </div>
      <div className={styles.input_field}>
        <label htmlFor="email" className={styles.label}>
          Enter your email:
          <input
            value={user.email}
            onChange={handleChange}
            autoComplete="off"
            required
            type="email"
            name="email"
            id="email"
            placeholder="jhonwick@continental.com"
            className={mulish.className}
          />
        </label>
      </div>
      <div className={styles.input_field}>
        <label htmlFor="phone" className={styles.label}>
          Enter your phone:
          <input
            value={user.phone}
            onChange={handleChange}
            autoComplete="off"
            required
            type="number"
            name="phone"
            id="phone"
            placeholder="+9199xxxx"
            className={mulish.className}
          />
        </label>
      </div>
      <div className={styles.input_field}>
        <label htmlFor="message" className={styles.label}>
          Message:
          <textarea
            value={user.message}
            onChange={handleChange}
            autoComplete="off"
            required
            name="message"
            id="message"
            placeholder="I love dogs.. "
            rows={5}
            className={mulish.className}
          />
        </label>
      </div>

      <div>
        {status === "success" && (
          <p className={styles.success_msg}>Thank you for your message!</p>
        )}
        {status === "error" && (
          <p className={styles.error_msg}>
            There was an error submitting your message, please try again after
            some time!
          </p>
        )}

        <button type="submit" className={mulish.className}>
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
