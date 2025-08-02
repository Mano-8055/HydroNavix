import { useEffect } from 'react'
import DroneSection1 from '../droneSection/DroneSection1'
import DroneSection2 from '../droneSection/DroneSection2'
import DroneSection3 from '../droneSection/DroneSection3'
import DroneSection4 from '../droneSection/DroneSection4'
import DroneSection5 from '../droneSection/DroneSection5'
import DroneSection6 from '../droneSection/DroneSection6'
import DroneSection7 from '../droneSection/DroneSection7'

const Drone = () => {

   useEffect(() => {
       window.scrollTo(0, 0);
     }, []);

  return (
    <div className='pt-20'>
        <DroneSection1 />
        <DroneSection2 />
        <DroneSection3 />
        <DroneSection4 />
        <DroneSection5 />
        <DroneSection6 />
        <DroneSection7 />
    </div>
  )
}

export default Drone