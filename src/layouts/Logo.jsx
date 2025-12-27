import LogoImg from '../assets/icons/Logo.png';

const Logo = ({ className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Logo Icon */}
      <img
        src={LogoImg}
        alt="Hydro Navix Logo Icon"
        className="h-12 w-auto object-contain"
      />

      {/* Text Branding */}
      <div className="ml-4 leading-tight">
        <div className="text-2xl font-bold text-DarkBlue tracking-wide">
          HYDRO{' '}N
          <span className="text-LightBlue">A</span>
          V
          <span className="text-LightBlue">I</span>
          X
        </div>
        <div className="text-[10px] font-medium uppercase tracking-[0.06em] text-DarkBlue">
          Marine & Offshore Engineering
        </div>
      </div>
    </div>
  );
};

export default Logo;
