import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const leftRef = useRef(null);
  const marqueeRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    gsap.fromTo(
      leftRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    if (marqueeRef.current) {
      gsap.to(marqueeRef.current, {
        x: "-100%",
        duration: 20,
        repeat: -1,
        ease: "linear",
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-white text-black min-h-screen pt-24">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <h1 className="text-5xl font-bold tracking-tight">Contact</h1>
          <div className="flex flex-col gap-4 text-black/70 text-sm">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-black" />
              <div>
                <h4 className="text-black font-semibold">Address</h4>
                <p>1234 Pine Street, San Francisco, CA 94109</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaEnvelope className="mt-1 text-black" />
              <div>
                <h4 className="text-black font-semibold">Email</h4>
                <p>hello@ondex.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaPhoneAlt className="mt-1 text-black" />
              <div>
                <h4 className="text-black font-semibold">Phone</h4>
                <p>(415) 876-5432</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden py-10 mt-10 border-y border-black/10">
        <div
          ref={marqueeRef}
          className="whitespace-nowrap text-6xl font-bold text-black/5 uppercase"
        >
          <span className="mx-10 text-black">
            Request a Demo · Request a Demo · Request a Demo · Request a Demo ·
          </span>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16">
        <form
          onSubmit={handleSubmit}
          ref={leftRef}
          className="space-y-10 text-black"
        >
          <div className="max-w-4xl mx-auto px-6 md:px-10 mt-10">
  <p className="uppercase text-xs tracking-widest font-medium text-black/80">
    ↳ Information
  </p>
</div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <InputField
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <InputField
              placeholder="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <InputField
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <TextAreaField
            placeholder="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />

          <div>
            <button
              type="submit"
              className="px-8 py-3 rounded-full bg-black text-white font-semibold hover:bg-black/80 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Input component
const InputField = ({ placeholder, name, value, onChange }) => (
  <input
    type="text"
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="w-full bg-transparent border-b border-dotted border-black/30 text-black placeholder-black/50 px-1 py-2 focus:outline-none focus:border-black transition"
  />
);

// Textarea component
const TextAreaField = ({ placeholder, name, value, onChange }) => (
  <textarea
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    rows={5}
    className="w-full bg-transparent border-b border-dotted border-black/30 text-black placeholder-black/50 px-1 py-2 focus:outline-none focus:border-black transition resize-none"
  />
);

export default Contact;
