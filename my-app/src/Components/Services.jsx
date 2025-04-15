export default function RelatedServicesSection() {
  const services = [
    {
      id: 1,
      title: "Maintenance & Repair",
      description:
        "Professional maintenance and repair services to keep your machinery running at optimal performance.",
    },
    {
      id: 2,
      title: "Installation & Training",
      description:
        "Expert installation services and comprehensive training for your team to maximize productivity.",
    },
    {
      id: 3,
      title: "Spare Parts Supply",
      description:
        "Genuine spare parts for all machinery to ensure longevity and optimal performance.",
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Related Services
          </h2>
          <p className="text-lg text-gray-600 max-w-xl ml-auto text-left text-justify">
            Related Services include complementary offerings that enhance
            primary solutions. These may involve Quality, Integrity, Innovation,
            Customer Focus, etc.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-pink-500">
                  {service.id}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
