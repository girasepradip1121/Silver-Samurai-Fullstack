"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";

// Location data
const locations = [
  {
    id: 1,
    country: "INDIA",
    address:
      "  6, Ground Floor, Opera House, Mini Bazaar, Varachha Road, SURAT, Gujarat State, INDIA, 395006",
    icon: "/india.svg",
    position: { top: "40%", left: "67%" },
    mobilePosition: { top: "45%", left: "5%" }, // Adjusted for mobile
  },
  {
    id: 2,
    country: "CHINA",
    address:
      "No.156, Guangxiang Road, Xiashan Street, Chaonan District, Shantou City, Guangdong Province, China ",
    icon: "/china.svg",
    position: { top: "30%", left: "71%" },
    mobilePosition: { bottom: "10%", left: "18%" },
  },
];

export default function WorldLocationsMap() {
  const [activeLocation, setActiveLocation] = useState(null);

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* World Map with Location Markers */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] mb-12">
          {/* World Map Image */}
          <img
            src="world.svg"
            alt="World Map"
            className="object-contain w-full h-full"
          />

          {/* Location Markers */}
          {locations.map((location) => (
            <div
              key={location.id}
              className="absolute"
              style={{
                top: location.position.top,
                left: location.position.left,
              }}
            >
              {/* Location Pin (Different Positions for Mobile & Desktop) */}
              <div
                className="relative cursor-pointer md:absolute"
                style={{
                  top: location.mobilePosition.top,
                  left: location.mobilePosition.left,
                }}
                onMouseEnter={() => setActiveLocation(location.id)}
                onMouseLeave={() => setActiveLocation(null)}
              >
                <MapPin className="h-6 w-6 md:h-8 md:w-8 text-pink-500 drop-shadow-md" />

                {/* Tooltip */}
                {activeLocation === location.id && (
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-pink-500 text-white px-4 py-1 rounded-md whitespace-nowrap z-10 animate-fadeIn">
                    {location.country.charAt(0) +
                      location.country.slice(1).toLowerCase()}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-pink-500"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Location Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {locations.map((location) => (
            <div
              key={location.id}
              className="border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center transition-transform hover:shadow-md hover:-translate-y-1"
            >
              {/* Landmark Icon */}
              <div className="w-16 h-16 mb-4">
                <img
                  src={location.icon || "/placeholder.svg"}
                  alt={`${location.country} Landmark`}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Country Name */}
              <h3 className="text-lg font-bold mb-2">{location.country}</h3>

              {/* Address */}
              <p className="text-sm text-gray-600">{location.address}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
