import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Mp1 from '../ManpowerSection/Mp1';
import Mp2 from '../ManpowerSection/Mp2';
import Mp3 from '../ManpowerSection/Mp3';
import Mp4 from '../ManpowerSection/Mp4';
import Mp5 from '../ManpowerSection/Mp5';

gsap.registerPlugin(ScrollTrigger);

const Manpower = () => {

     useEffect(() => {
    window.scrollTo(0, 0);

    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      }
    }
  }, []);

  return (
    <div className='pt-16'>
      <Mp1 />
      <Mp2 />
      <Mp3 />
      <div id="industry-sectors">
      <Mp4 />
      </div>
      <Mp5 />
    </div>
  );
};

export default Manpower;
