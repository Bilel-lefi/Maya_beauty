import React, { useState } from "react";
import servicesData from "../constants/serviceData";

const categories = ["All", "Eyes", "Permanent", "Other"];

const Cares = () => {
  const [filter, setFilter] = useState("All");

  const filteredServices =
    filter === "All"
      ? servicesData
      : servicesData.filter((service) => service.category === filter);

  return (
    <div className="p-2 font-sans">
      <h2 className="font-semibold mb-4 font-serif text-xl">Cares :</h2>

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

      {/* Services List */}
      <div className="space-y-4">
        {filteredServices.map((service, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b pb-3"
          >
            <div className="text-base font-medium">{service.name}</div>
            <div className="text-sm text-gray-600">{service.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cares;
