import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const leftRef = useRef(null);
  const rightRef = useRef(null);

useEffect(() => {
  gsap.fromTo(
    leftRef.current,
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
  );

  gsap.fromTo(
    rightRef.current,
    { opacity: 0, x: 60 },
    { opacity: 1, x: 0, duration: 1, delay: 0.2, ease: "power3.out" }
  );
}, []);


  return (
    <div className="min-h-screen pt-24 text-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
          <h1 className="text-3xl md:text-6xl max-w-md font-bold leading-tight">
            Let's get <br className="hidden md:block" /> in touch
          </h1>
          <div className="flex items-center justify-start gap-10">
            <svg
              className="hidden md:block"
              width="100"
              height="20"
              viewBox="0 0 100 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,10 L90,10 M90,10 L85,7 M90,10 L85,13"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <SocialIcon icon={<FaFacebookF />} />
              <SocialIcon icon={<FaTwitter />} />
              <SocialIcon icon={<FaLinkedinIn />} />
              <SocialIcon icon={<FaInstagram />} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div
          ref={leftRef}
          className="max-w-lg mx-auto px-4 py-5 w-full"
        >
          <div className="space-y-4 text-sm">
            <p className="text-2xl font-medium mb-6">
              Don't be afraid to say hello with us!
            </p>

            <div>
              <h4 className="uppercase text-secondary/60 font-semibold text-xs mb-1">
                Phone
              </h4>
              <p>+(2) 578-365-379</p>
            </div>
            <div>
              <h4 className="uppercase text-secondary/60 font-semibold text-xs mb-1">
                Email
              </h4>
              <p>hello@slabs.com</p>
            </div>
            <div>
              <h4 className="uppercase text-secondary/60 font-semibold text-xs mb-1">
                Location
              </h4>
              <p>
                230 Norman Street New York,
                <br /> QC (USA) H8R 1A1
              </p>
              <a
                href="#"
                className="text-sm text-secondary mt-1 inline-flex items-center space-x-1 underline"
              >
                <span>See on Google Map</span> <span>↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Section: Form */}
        <div
          ref={rightRef}
          className="w-full mt-6 md:mt-20"
        >
          <div className="bg-secondary text-primary p-10 md:p-14 w-full">
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-lg font-medium text-primary mb-8">
                Contact us
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <InputField
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  placeholder="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <InputField
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <TextAreaField
                placeholder="Tell us about your interest"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="w-full bg-accent text-secondary font-bold py-3 hover:bg-accent/80 transition"
              >
                Send to us
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// Social Icon component
const SocialIcon = ({ icon }) => (
  <div className="w-10 h-10 rounded-full cursor-pointer bg-primary text-secondary border border-secondary flex items-center justify-center hover:bg-accent duration-300 ease-linear transition">
    {icon}
  </div>
);

// Input field
const InputField = ({ placeholder, name, value, onChange }) => (
  <input
    type="text"
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="w-full px-4 py-2 bg-transparent border border-primary text-primary placeholder-gray-400 focus:outline-none focus:border-accent"
  />
);

// Textarea field
const TextAreaField = ({ placeholder, name, value, onChange }) => (
  <textarea
    name={name}
    rows={4}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="w-full px-4 py-2 bg-transparent border border-primary text-primary placeholder-gray-400 focus:outline-none focus:border-accent resize-none"
  />
);

export default Contact;
