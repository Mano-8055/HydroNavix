import LogoImg from '../assets/icons/Logo.png';

const Preload = () => {

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-primary relative overflow-hidden">
      <div className={`flex items-center flex-col gap-1 animate-pulse`}>
            {/* Logo Icon */}
            <img
              src={LogoImg}
              alt="Hydro Navix Logo Icon"
              className="h-20 w-auto object-contain"
            />
      
            {/* Text Branding */}
            <div className="leading-tight">
              <div className="text-3xl font-bold text-DarkBlue tracking-wide">
                HYDRO{' '}N
                <span className="text-LightBlue">A</span>
                V
                <span className="text-LightBlue">I</span>
                X
              </div>
              <div className="text-[14px] font-medium uppercase -tracking-[0.01em] text-DarkBlue">
                Marine & Offshore Engineering
              </div>
            </div>
          </div>
      
    </div>
  );
};

export default Preload;


// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';

// const Preload = () => {
//   const circleRef = useRef(null);

//   useEffect(() => {
//     gsap.to(circleRef.current, {
//       rotate: 360,
//       repeat: -1,
//       ease: 'linear',
//       duration: 10,
//       transformOrigin: '50% 50%',
//     });
//   }, []);

//   const text = "HydroNavix • ";
//   const repeatedText = text.repeat(2);

//   return (
//     <div className="h-screen w-screen flex items-center justify-center bg-accent relative overflow-hidden">
//       <div className="relative w-28 h-28">
//         {/* Rotating Outer Circle */}
//         <div
//           ref={circleRef}
//           className="absolute inset-0 flex items-center justify-center"
//         >
//           <svg viewBox="0 0 100 100" className="w-full h-full">
//             {/* Outer Circle Background */}
//             <circle
//               cx="50"
//               cy="50"
//               r="50"
//               className="fill-primary"
//             />

//             {/* Text Path (slightly smaller radius to stay inside) */}
//             <defs>
//               <path
//                 id="circlePath"
//                 d="M50,50 m-41,0 a41,41 0 1,1 82,0 a41,41 0 1,1 -82,0"
//               />
//             </defs>

//             {/* Rotating Text */}
//             <text
//               className="fill-secondary"
//               fontSize="14"
//               style={{ fontWeight: 700, letterSpacing: '2px' }} 
//               dominantBaseline="middle"
//               alignmentBaseline="middle"
//             >
//               <textPath xlinkHref="#circlePath" startOffset="0%">
//                 {repeatedText}
//               </textPath>
//             </text>
//           </svg>
//         </div>

//         {/* Inner Static Circle */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           <svg viewBox="0 0 100 100" className="w-full h-full">
//             <circle
//               cx="50"
//               cy="50"
//               r="35"
//               className="fill-accent"
//             />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Preload;
