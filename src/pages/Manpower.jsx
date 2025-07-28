import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import the new section components from the ManpowerSection directory
// Corrected path to go up one directory level from 'pages' to 'src'
import Mp1 from '../ManpowerSection/Mp1';
import Mp2 from '../ManpowerSection/Mp2';
import Mp3 from '../ManpowerSection/Mp3';
import Mp4 from '../ManpowerSection/Mp4';
import Mp5 from '../ManpowerSection/Mp5';
import Mp6 from '../ManpowerSection/Mp6';

// Register GSAP plugin once in the main component
gsap.registerPlugin(ScrollTrigger);

const Manpower = () => {
  return (
    <div>
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
