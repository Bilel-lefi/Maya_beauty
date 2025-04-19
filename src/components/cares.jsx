import React, { useState } from "react";
import servicesData from "../constants/serviceData";

const categories = [
  "Tout",
  "Beauté Du Regard",
  "Épilation définitive laser",
  "Beauté Des Pieds",
  "Extension",
  "Maquillage permanent",
  "Épilation à la cire",
];
const Cares = () => {
  const [filter, setFilter] = useState("Tout");
  const filteredServices =
    filter === "Tout"
      ? servicesData
      : servicesData.filter((service) => service.category === filter);
  return (
    <div className="p-2 font-sans">
      <h2 className="font-semibold mb-4 font-serif text-xl">Soins :</h2>

      {/* Filter Buttons */}
      <div className="mb-6 flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium shadow-sm transition ${
              filter === cat
                ? "bg-tertiary text-black hover:text-white"
                : "bg-gray-100 text-black "
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <span className="block w-full h-px bg-black my-2 md:hidden"></span>

      {/* Services List */}

      <div className="space-y-2 max-h-screen overflow-y-scroll">
        {filteredServices.map((service, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b pb-3 mr-3"
          >
            {/* Partie gauche : image + nom */}
            <div className="flex items-center gap-4 w-[70%]">
              <img
                src={service.image}
                alt={service.name}
                className="w-12 h-12 object-cover rounded"
              />
              <div className="text-base font-medium">{service.name}</div>
            </div>

            {/* Partie droite : temps + prix */}
            <div className="flex items-center gap-4 text-sm">
              {service.time && (
                <div className="w-16  text-nowrap flex-shrink-0  text-right underline font-bold text-tertiary">
                  {service.time}
                </div>
              )}
              <div className="w-12 flex-shrink-0 pl-2 under text-black">
                {service.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cares;
