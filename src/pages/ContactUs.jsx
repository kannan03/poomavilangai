import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all required fields!");
      return;
    }

    // Send data to backend API (replace with your endpoint)
    console.log("Contact Form Data:", formData);

    // Clear form
    setFormData({ name: "", email: "", phone: "", message: "" });
    setSuccess(true);
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      {success && <p className="success-msg">Message sent successfully!</p>}
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name<span>*</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email<span>*</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Phone
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>

        <label>
          Message<span>*</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </label>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
