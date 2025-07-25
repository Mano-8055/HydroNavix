
import { useEffect } from 'react'
import HeroSection from '../layouts/HeroSection'
import AssetSection from '../layouts/AssetSection';
import AboutSection from '../layouts/AboutSection';
import CTASection from '../layouts/CTASection';
import Home1 from './Home1';

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div className='overflow-x-hidden hide-scroll'>
        <HeroSection />
        {/* <Home1 /> */}
        <AboutSection />
        <AssetSection />
        <CTASection />
    </div>
  )
}

export default Home