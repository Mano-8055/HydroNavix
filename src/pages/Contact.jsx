import React, { useState } from "react";
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

  return (
    <div className="min-h-screen relative font-sans text-black bg-white overflow-hidden">
      {/* Left Section */}
      <div className="absolute top-0 left-0 w-full md:w-1/2 h-full min-h-screen flex flex-col justify-between p-10 md:p-16 bg-white z-0">
        <div>
          <h1 className="text-5xl font-bold leading-tight mb-6 relative z-10">
            Let’s get in touch
          </h1>
          <p className="text-lg font-medium text-gray-800 mb-8">
            Don’t be afraid to say hello with us!
          </p>

          <div className="space-y-6 text-sm">
            <div>
              <h4 className="uppercase text-gray-500 font-semibold text-xs mb-1">
                Phone
              </h4>
              <p>+(2) 578-365-379</p>
            </div>
            <div>
              <h4 className="uppercase text-gray-500 font-semibold text-xs mb-1">
                Email
              </h4>
              <p>hello@slabs.com</p>
            </div>
            <div>
              <h4 className="uppercase text-gray-500 font-semibold text-xs mb-1">
                Office
              </h4>
              <p>
                230 Norman Street New York,
                <br /> QC (USA) H8R 1A1
              </p>
              <a
                href="#"
                className="text-sm text-black mt-1 inline-flex items-center space-x-1 underline"
              >
                <span>See on Google Map</span> <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section: */}
      <div className="relative z-10 ml-auto w-full md:w-1/2 flex flex-col h-full min-h-screen">
        {/* Top Box: Icons + Arrow */}
        <div className="flex-1 bg-white p-10 md:p-16 relative flex items-center justify-center">
          {/* Arrow from left side */}
          <svg
            className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:block"
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

        {/* Bottom Box: Contact Form */}
        <div className="flex-1 bg-black text-white p-10 md:p-16">
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-lg font-medium text-white mb-8">Contact us</p>
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
              className="w-full bg-yellow-400 text-black font-bold py-3 rounded-md hover:bg-yellow-300 transition"
            >
              Send to us
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Social Icon component
const SocialIcon = ({ icon }) => (
  <div className="w-10 h-10 rounded-full bg-white text-black border border-black flex items-center justify-center hover:bg-gray-100 transition">
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
    className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300"
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
    className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300 resize-none"
  />
);

export default Contact;
