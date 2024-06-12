import { MdLocationPin } from "react-icons/md";
import Filter from "@/components/Filter";

const Hero = () => {
  return (
    <section
      className="max_padd_container w-full relative flexCenter"
      id="inicio"
    >
<div className="absolute h-full w-full bg-[#2f6a7f7f] top-0 bottom-0 z-10"></div>
      <video
        src={"./video.mp4"}
        muted
        autoPlay
        loop
        className="absolute h-full w-full top-0 bottom-0 object-cover"
      ></video>
      {/* content */}
      <div className="w-full h-max pt-28 pb-12 flex gap-y-3 flex-col justify-center m-auto z-20 lg:pt-64 lg:pb-24">
        <div className="px-0 py-8 text-white">
          <span className="uppercase regular-18">Viajes al mejor precio</span>
          <h2 className="h2 max-w-[777px]"><span className='text-secondary'>BUSCADOR DE FERRIS</span> Nº1 EN ESPAÑA</h2>
          <div className="flex space-x-4">
            <span className="bg-blue-500 text-white px-4 py-2 rounded">✓ Pago seguro</span>
            <span className="bg-blue-500 text-white px-4 py-2 rounded">✓ Mejor precio garantizado</span>
            <span className="bg-blue-500 text-white px-4 py-2 rounded">✓ Atención por teléfono y Whatsapp</span>
          </div>
        </div>

        {/* Form */}
        <Filter  />
      </div>
    </section>
  );
};

export default Hero;
