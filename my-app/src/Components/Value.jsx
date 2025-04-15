export default function CoreValuesSection() {
  const coreValues = [
    {
      id: 1,
      title: "Quality",
      description:
        "We are committed to providing the highest quality machinery and services to our clients.",
    },
    {
      id: 2,
      title: "Integrity",
      description:
        "We conduct our business with honesty, transparency, and ethical practices.",
    },
    {
      id: 3,
      title: "Innovation",
      description:
        "We continuously seek innovative solutions to meet the evolving needs of the textile industry.",
    },
    {
      id: 4,
      title: "Customer Focus",
      description:
        "Our clients are at the center of everything we do, and their success is our priority.",
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600 max-w-xl ml-auto text-left text-justify">
            Integrity, accountability, innovation, and excellence shape our
            actions, ensuring transparency, collaboration, and meaningful impact
            in everything we do.
          </p>
        </div>

        {/* Core Values Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value) => (
            <div
              key={value.id}
              className="border border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-pink-500">
                  {value.id}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
