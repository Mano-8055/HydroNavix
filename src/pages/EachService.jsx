import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Services } from "../json/services";
import { useAnimation } from "framer-motion";
import FadeWords from "../components/FadeWords";

const EachService = () => {
  const { id } = useParams();
  const [serviceData, setServiceData] = useState(null);
  const titleControls = useAnimation();

  useEffect(() => {
    const matchedService = Services.find((s) => s.id === id);
    setServiceData(matchedService);
    window.scrollTo(0, 0);

    if (matchedService) {
      setTimeout(() => {
        titleControls.start("visible");
      }, 100); 
    }
  }, [id]);

  if (!serviceData) {
    return;
  }

  return (
    <div className="py-24 min-h-screen">

      <div className="flex flex-col gap-1 justify-center items-center pb-4 md:pb-8">
        {serviceData.title && (
          <FadeWords
            text={serviceData.title}
            controls={titleControls}
            className="text-2xl sm:text-4xl font-semibold tracking-tight text-center mb-1.5"
          />
        )}
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-12">
        {serviceData.services.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-primary/20 shadow-md rounded-xl overflow-hidden transition-transform hover:scale-[1.02]"
          >
            <div className="h-[180px] w-full">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex flex-col gap-2">
              <h3 className="text-secondary font-semibold text-lg flex items-center gap-2">
                {item.title}
              </h3>
              <p className="text-sm text-secondary/80">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EachService;
