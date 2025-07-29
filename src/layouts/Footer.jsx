import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { navItems } from "../json/Navbar"; 
import Logo from "./Logo";

const Footer = () => {
  const footerLinksItems = [
    { text: "Instagram", href: "#", icon: AiFillInstagram },
    { text: "LinkedIn", href: "#", icon: AiFillLinkedin },
  ];

  return (
    <div className="bg-secondary/90 overflow-hidden cursor-follow">
      <footer className="bg-gradient-to-b from-secondary via-secondary/50 to-accent/50 text-primary">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-20 py-20 justify-between">
          {/* Company Info */}
          <div>
            <Logo />
            <p className="text-primary/70 mb-2 text-sm mt-4">info@hydronavix.com</p>
            <p className="text-primary/70 text-sm">+91 - 00000 00000</p>
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
          <div>© 2025. All rights reserved.</div>
          <div className="flex space-x-6 flex-wrap justify-center">
            {footerLinksItems.map((link, index) => (
              <a
                key={index}
                href={link.href}
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
