
import { useEffect } from 'react'
import HeroSection from '../layouts/HeroSection'

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div className='overflow-x-hidden'>
        <HeroSection />
    </div>
  )
}

export default Home