import React from 'react';

const FooterBottom = React.forwardRef(
  ({ copyrightRef, footerLinksRef, footerLinksItems }, _) => (
    <div className="bottom-footer relative z-20 border-t border-gray-800 text-sm text-gray-500 px-6 md:px-20 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <div
        ref={copyrightRef}
        className="opacity-0 transform translate-y-5"
      >
        © 2025. All rights reserved.
      </div>
      <div className="flex space-x-6 flex-wrap justify-center">
        {footerLinksItems.map((link, index) => (
          <a
            key={index}
            href={link.href}
            ref={el => footerLinksRef.current[index] = el}
            className="hover:text-white transition-colors opacity-0 transform translate-y-5"
          >
            {link.text}
          </a>
        ))}
      </div>
    </div>
  )
);

export default FooterBottom;
