import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "./Variable";

export default function WhatWeOfferSection() {
  const navigate = useNavigate(); // Initialize navigate
  const [services,setServices]=useState([]);

  // const services = [
  //   {
  //     id: 1,
  //     title: "Machinery Supply",
  //     description:
  //       "We source and supply high-quality textile machinery from trusted manufacturers worldwide.",
  //     features: [
  //       "Wide range of textile machinery",
  //       "Competitive pricing",
  //       "Quality assurance",
  //       "Global sourcing network",
  //     ],
  //     image: "/m14.png",
  //   },
  //   {
  //     id: 2,
  //     title: "Installation & Setup",
  //     description:
  //       "Our expert team provides professional installation and setup services for all machinery.",
  //     features: [
  //       "Efficient installation team",
  //       "Efficient setup process",
  //       "Minimal downtime",
  //       "Comprehensive testing",
  //     ],
  //     image: "/m15.png",
  //   },
  //   {
  //     id: 3,
  //     title: "Training & Support",
  //     description:
  //       "We provide comprehensive training and ongoing support for optimal machinery operation.",
  //     features: [
  //       "Hands-on operator training",
  //       "Technical documentation",
  //       "Troubleshooting guidance",
  //       "Regular follow-ups",
  //     ],
  //     image: "/m16.png",
  //   },
  //   {
  //     id: 4,
  //     title: "Maintenance & Repair",
  //     description:
  //       "Our maintenance and repair services ensure your machinery operates at peak performance.",
  //     features: [
  //       "Preventive maintenance plans",
  //       "Quick response repair service",
  //       "Genuine spare parts",
  //       "Extended warranty options",
  //     ],
  //     image: "/m17.png",
  //   },
  //   {
  //     id: 5,
  //     title: "Consulting Services",
  //     description:
  //       "Expert consulting to help you select the right machinery for your specific requirements.",
  //     features: [
  //       "Needs assessment",
  //       "Technology recommendations",
  //       "ROI analysis",
  //       "Implementation planning",
  //     ],
  //     image: "/m18.png",
  //   },
  // ];
  useEffect(()=>{
    const fetchServices=async()=>{
      try {
        const response=await axios(`${API_URL}/service/getall`)
        setServices(response.data)
        console.log("response prodyuct",response.data);
        
      } catch (error) {
        console.error("Error Fetching Products:", error);
        setServices([]);
      }
    }
    fetchServices()
  },[])

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What We Offer
            </h2>
            <p className="text-gray-600 max-w-xl text-justify">
              From machinery supply to maintenance and support, we provide
              end-to-end services to meet all your textile machinery
              requirements.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="space-y-8">
          {services.map((service) => (
            <div
              key={service.serviceId}
              className="flex flex-col md:flex-row gap-6 bg-white overflow-hidden"
            >
              {/* Service Image */}
              <div className="md:w-2/5 h-64 md:h-auto relative">
                <img
                  src={`${API_URL}/${service.image}` || "/placeholder.svg"}
                  alt={service.title}
                  className="object-cover w-full h-full "
                />
              </div>

              {/* Service Content */}
              <div className="md:w-3/5 p-6 flex flex-col">
                <h3 className="text-xl font-bold text-pink-500 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-4">{service.shortDesc}</p>

                {/* Features List */}
                <ul className="mb-6 space-y-1">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-pink-500 mr-2">•</span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="">
                  <button
                    onClick={() => {
                      navigate(`/singleservicepage/${service.serviceId}`);
                      window.scrollTo(0, 0);
                    }}
                    className="inline-flex items-center justify-center px-6 py-2 bg-pink-500 text-white font-medium rounded-md hover:bg-pink-600 transition-colors"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
