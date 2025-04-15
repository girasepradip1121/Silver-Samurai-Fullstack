// Sample feature data
const features = [
  {
    number: 1,
    title: "Experience",
    description: "Operating since 2005 with extensive industry knowledge.",
  },
  {
    number: 2,
    title: "Quality Assurance",
    description:
      "Partnering with trusted vendors to ensure premium quality machinery.",
  },
  {
    number: 3,
    title: "Wide Range",
    description:
      "Importing specialized textile machinery including electronics.",
  },
  {
    number: 4,
    title: "Strong Network",
    description: "Well-established global connections for reliable sourcing.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10 flex flex-col md:flex-row items-start justify-between gap-8">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
          <p className="text-gray-600 md:max-w-md text-justify">
            With years of experience and dedication to quality, we provide the
            best textile machinery solutions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="bg-white rounded-lg p-3 w-70 h-70 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col items-center justify-center mx-auto"
            >
              {/* Number Icon */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-100 mb-4">
                <span className="text-pink-600 font-bold text-lg">
                  {feature.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
