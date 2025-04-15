import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "./Variable";
import axios from "axios";

export default function ConsultingServicesSection() {
  const { serviceId } = useParams(); // Assume route like /product/:id
  const [service, setService] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get(`${API_URL}/service/getbyid/${serviceId}`);
        setService(res.data);
        console.log("response", res.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchServices();
  }, [serviceId]);

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Content */}
          <div className="lg:w-1/2">
            {/* Category */}
            <div className="mb-2">
              <span className="text-pink-500 font-medium">{service?.category}</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {service?.title}
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-4 text-gray-700 text-justify">
              <p>{service?.fullDesc}</p>
            </div>

            {/* Bullet Points */}
            {service?.features && (
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Image */}
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <div className="rounded-lg overflow-hidden">
              <img
                src={`${API_URL}/${service?.image}`}
                alt="Advanced embroidery machine with colorful thread spools and fabric"
                width={600}
                height={450}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
