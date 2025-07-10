
import { useEffect } from 'react'
import HeroSection from '../layouts/HeroSection'
import ServiceSection from '../layouts/ServiceSection';
import AssetSection from '../layouts/AssetSection';

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div className='overflow-x-hidden'>
        <HeroSection />
        <ServiceSection />
        <AssetSection />
    </div>
  )
}

export default Home