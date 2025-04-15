import { Check } from "lucide-react";

export default function MissionVisionSection() {
  return (
    <section className="w-full py-16 bg-[#F1F5F9]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Mission & Vision
          </h2>
          <p className="text-lg text-gray-600 md:text-right max-w-xl">
            Driving innovation and excellence in the textile machinery industry
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Mission Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 mb-8 text-justify">
              To provide high-quality textile machinery and exceptional service
              to our clients, enabling them to achieve operational excellence
              and business growth. We are committed to sourcing the best
              products from trusted manufacturers and delivering them with
              integrity and professionalism.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 p-1 rounded-full bg-pink-500 text-white mr-3 mt-0.5">
                  <Check size={16} />
                </span>
                <span className="text-gray-600">
                  Deliver superior quality machinery
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 p-1 rounded-full bg-pink-500 text-white mr-3 mt-0.5">
                  <Check size={16} />
                </span>
                <span className="text-gray-600">
                  Provide exceptional customer service
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 p-1 rounded-full bg-pink-500 text-white mr-3 mt-0.5">
                  <Check size={16} />
                </span>
                <span className="text-gray-600">
                  Build long-term relationships with clients
                </span>
              </li>
            </ul>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 mb-8 text-justify">
              To be the leading supplier of textile machinery in the global
              market, recognized for our commitment to quality, innovation, and
              customer satisfaction. We aim to contribute to the advancement of
              the textile industry by providing cutting-edge technology and
              solutions.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 p-1 rounded-full bg-pink-500 text-white mr-3 mt-0.5">
                  <Check size={16} />
                </span>
                <span className="text-gray-600">
                  Become a global leader in textile machinery supply
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 p-1 rounded-full bg-pink-500 text-white mr-3 mt-0.5">
                  <Check size={16} />
                </span>
                <span className="text-gray-600">
                  Drive innovation in the textile industry
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 p-1 rounded-full bg-pink-500 text-white mr-3 mt-0.5">
                  <Check size={16} />
                </span>
                <span className="text-gray-600">
                  Expand our product range to meet evolving market needs
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
