import { GoArrowUpRight } from "react-icons/go";




const Card1 = ({ title, id, img }) => {
  return (
    <div className="relative group h-72 w-full overflow-hidden rounded-3xl cursor-pointer">
      {/* image */}
       <div className="w-full h-full transition-transform duration-500 group-hover:scale-110">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* overlay in corners */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 via-transparent to-secondary/40 pointer-events-none" />

      {/* icon */}
      <div className="absolute top-3 right-3 z-10">
        <a
          href={`/services/${id}`}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-primary text-secondary hover:scale-110 transition-transform"
        >
          <GoArrowUpRight className="text-xl" />
        </a>
      </div>

      {/* title */}
      <div className="absolute bottom-3 right-3 z-10">
        <p className="text-white text-lg font-semibold">{title}</p>
      </div>
    </div>
  );
};

export default Card1;
