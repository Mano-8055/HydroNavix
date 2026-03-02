import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { navItems } from "../json/Navbar";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import Logo from "./Logo";

const Footer = () => {
  const footerLinksItems = [
    { text: "Instagram", href: "https://www.instagram.com/hydronavix?igsh=NGttYTdpNDJ6ZGxv", icon: AiFillInstagram },
    {
      text: "Facebook",
      href: "https://www.facebook.com/share/16yCpRRx5B",
      icon: AiFillFacebook,
    },
    {
      text: "Linkedin",
      href: "https://www.linkedin.com/company/hydronavix-marine-and-offshore-engineering",
      icon: AiFillLinkedin,
    },
  ];

  return (
    <div className="bg-secondary/90 overflow-hidden cursor-follow">
      <footer className="bg-gradient-to-b from-secondary via-secondary/50 to-accent/50 text-primary">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-20 py-20 justify-between">
          {/* Company Info */}
          <div>
            <Logo />

            {/* Address */}
            <div className="text-bold text-lg mt-6"></div>
            <div className="flex flex-col items-start gap-1 capitalize text-primary/70 text-sm mt-1">
              <div className="font-semibold text-lg">UAE</div>
              <div className="flex items-start gap-2 text-primary/70 text-sm mt-1">
                <FaMapMarkerAlt className="text-primary/70" />
                <div>
                Ajman free zone, C1 Building, C1-F1-Sf11705, Ajman, U.A.E
                </div>
              </div>
            </div>

            {/* Email */}
            <p className="flex items-start gap-2 lowercase text-primary/70 text-sm mt-1">
              <FaEnvelope className="text-primary/70 mt-0.5" />
              info@hydronavixmarine.com
            </p>

            {/* Landline */}
            <div className="flex items-start gap-2 text-primary/70 font-mono text-sm mt-1">
              <FaPhoneAlt className="text-primary/70 mt-0.5" />
              <div>
                <span className="font-medium mr-1">Landline:</span> 065221553
              </div>
            </div>

            {/* Mobile Phones */}
            <div className="flex items-start gap-2 text-primary/70 font-mono text-sm mt-1">
              <FaPhoneAlt className="text-primary/70 mt-0.5" />
              <div>
                +971-564048037 | +971-564048026
              </div>
            </div>
          </div>

          {/* Location Columns
          <div className="grid grid-cols-2 gap-4 text-sm text-primary/70">
            <div>
              <div className="mb-6">
                <p className="font-semibold text-primary mb-1">UAE</p>
                <p>
                  Office 602, 6th Floor
                  <br />
                  Dubai Maritime City
                </p>
              </div>
              <div className="mb-6">
                <p className="font-semibold text-primary mb-1">Mumbai</p>
                <p>
                  Boomerang Building,
                  <br />
                  Chandivali Road, Powai
                </p>
              </div>
              <div className="mb-6">
                <p className="font-semibold text-primary mb-1">Kolkata</p>
                <p>
                  #8, Chandi Ghosh Road,
                  <br />
                  Tollygunge
                </p>
              </div>
            </div>
            <div>
              <div className="mb-6">
                <p className="font-semibold text-primary mb-1">Kochi</p>
                <p>
                  Panampilly Nagar,
                  <br />
                  Manorama Junction
                </p>
              </div>
              <div className="mb-6">
                <p className="font-semibold text-primary mb-1">Kuwait</p>
                <p>
                  Al-Khaleeq Tower,
                  <br />
                  Hawalli
                </p>
              </div>
              <div className="mb-6">
                <p className="font-semibold text-primary mb-1">Abu Dhabi</p>
                <p>
                  Mussafah M-9,
                  <br />
                  3rd Salami Street
                </p>
              </div>
            </div>
          </div> */}

          {/* Quick Links */}
          {/* <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li key={index} className="text-primary/70 hover:text-accent transition-colors">
                  <a href={item.path}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary/80 text-sm font-medium text-primary/80 px-6 md:px-20 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>© 2026. All rights reserved.</div>
          <div className="flex space-x-6 flex-wrap justify-center">
            {footerLinksItems.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                className="hover:text-accent transition-colors"
              >
                <link.icon className="text-xl" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
