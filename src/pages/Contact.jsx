import { useState, useEffect, useRef } from "react";
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
import { HiArrowUturnRight } from "react-icons/hi2";
import { useAnimation } from "framer-motion";
import FadeWords from "../components/FadeWords";
import contactImg from "../assets/contact.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const leftRef = useRef(null);
  const socialsRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    gsap.fromTo(
      leftRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  const titleControls = useAnimation();

  useEffect(() => {
    titleControls.start("visible");
  }, []);

  useEffect(() => {
    if (socialsRef.current) {
      const childrenArray = Array.from(socialsRef.current.children);

      gsap.fromTo(
        childrenArray,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.6,
          ease: "power3.out",
        }
      );
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="text-secondary min-h-screen py-28 md:pt-32">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          <div className="flex flex-col gap-1">
            <FadeWords
              text="Contact"
              controls={titleControls}
              className="text-2xl sm:text-4xl font-semibold tracking-tight"
            />
            <p className="text-md font-medium text-secondary/70">
              Reach out today and let’s power your project <br />
              with the right engineering team
            </p>
          </div>
          <div className="grid grid-col-2 md:grid-cols-2 gap-4 md:gap-4 text-secondary/70 text-sm">
            {/* Address */}
            <div className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-secondary flex-shrink-0" />
              <div className="min-w-0">
                <h4 className="text-secondary font-semibold">Address</h4>
                <p className="break-words capitalize">
                  Ajman free zone, C1 Building, C1-F1-Sf11705, Ajman, U.A.E
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-2">
              <FaEnvelope className="mt-1 text-secondary flex-shrink-0" />
              <div className="min-w-0">
                <h4 className="text-secondary font-semibold">Email</h4>
                <p className="break-words">info@hydronavixmarine.com</p>
              </div>
            </div>

            {/* Landline*/}
            <div className="flex items-start gap-2">
              <FaPhoneAlt className="mt-1 text-secondary flex-shrink-0" />
              <div className="min-w-0">
                <h4 className="text-secondary font-semibold">Landline</h4>
                <p className="break-words font-mono">065221553</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-2">
              <FaPhoneAlt className="mt-1 text-secondary flex-shrink-0" />
              <div className="min-w-0">
                <h4 className="text-secondary font-semibold">Phone</h4>
                <p className="break-words font-mono">
                  +971-564048037 | +971-564048026
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-5 md:py-12 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-16 text-secondary">
        {/* Left: Info & Socials */}
        <div className="space-y-5">
          <div>
            <div className="flex items-center gap-2 uppercase text-md tracking-widest font-medium text-secondary/80">
              <HiArrowUturnRight /> Information
            </div>
          </div>

          <div className="relative">
            {/* Background Image */}
            <img
              src={contactImg}
              alt="Background"
              className="w-full h-auto md:h-80 object-cover"
            />

            {/* Social Media Icons Overlay */}
            <div
              ref={socialsRef}
              className="absolute top-2 left-2 flex flex-row md:flex-col gap-5 text-bg-secondary text-sm bg-primary p-2 shadow-lg"
            >
              {[
                { href: "https://instagram.com", icon: <FaInstagram /> },
                {
                  href: "https://www.linkedin.com/in/hydronavix-marine-and-offshore-engineering-0b99a2373/",
                  icon: <FaLinkedinIn />,
                },
                { href: "https://twitter.com", icon: <FaTwitter /> },
                { href: "https://facebook.com", icon: <FaFacebookF /> },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent duration-300 transition text-lg"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Right: Contact Form */}
        <form onSubmit={handleSubmit} ref={leftRef} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="md:col-span-2"
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

          <button
            type="submit"
            className="px-8 py-3 rounded-full bg-secondary text-primary font-semibold hover:bg-accent duration-300 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

// Input component
const InputField = ({ placeholder, name, value, onChange, className = "" }) => (
  <input
    type="text"
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={`w-full bg-transparent border-b first-line: border-dotted border-secondary/50 text-secondary placeholder-secondary/60 px-1 py-2 focus:outline-none focus:border-secondary transition ${className}`}
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
    className="w-full bg-transparent border-b border-dotted border-secondary/50 text-secondary placeholder-secondary/50 px-1 py-2 focus:outline-none focus:border-secondary transition resize-none"
  />
);

export default Contact;
