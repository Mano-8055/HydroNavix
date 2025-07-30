import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Mp1 from '../ManpowerSection/Mp1';
import Mp2 from '../ManpowerSection/Mp2';
import Mp3 from '../ManpowerSection/Mp3';
import Mp4 from '../ManpowerSection/Mp4';
import Mp5 from '../ManpowerSection/Mp5';
import Mp6 from '../ManpowerSection/Mp6';

gsap.registerPlugin(ScrollTrigger);

const Manpower = () => {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className='pt-16'>
      <Mp1 />
      <Mp2 />
      <Mp3 />
      <Mp4 />
      <Mp5 />
      <Mp6 />
    </div>
  );
};

export default Manpower;
