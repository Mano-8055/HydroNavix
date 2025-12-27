import { GoArrowUpRight } from "react-icons/go";

const Card1 = ({ title, id, img }) => {
  return (
    <div className="relative group h-72 overflow-hidden shadow-md cursor-pointer">
      <a href={`/engineering-services/${id}`} className="block w-full h-full">
        
        {/* Background Image with Zoom Effect */}
        <div className="w-full h-full transition-transform duration-500 group-hover:scale-110">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom-to-Top Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent pointer-events-none z-0" />

        {/* Arrow Icon */}
        <div className="absolute top-3 right-3 z-10">
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-primary text-secondary hover:scale-110 transition-transform">
            <GoArrowUpRight className="text-xl" />
          </div>
        </div>

        {/* Title Text */}
        <div className="absolute bottom-3 right-3 z-10">
          <p className="text-primary text-md text-right font-semibold">{title}</p>
        </div>

      </a>
    </div>
  );
};

export default Card1;
