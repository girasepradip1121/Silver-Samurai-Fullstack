export default function ServiceProcessTimeline() {
  const processSteps = [
    {
      id: 1,
      title: "Initial Consultation",
      description:
        "We begin with a detailed consultation to understand your specific requirements and challenges.",
    },
    {
      id: 2,
      title: "Needs Assessment",
      description:
        "Our experts conduct a thorough assessment to identify the most suitable solutions for your business.",
    },
    {
      id: 3,
      title: "Proposal & Quotation",
      description:
        "We provide a comprehensive proposal with detailed specifications and competitive pricing.",
    },
    {
      id: 4,
      title: "Order Processing",
      description:
        "Once approved, we process your order and coordinate with manufacturers for timely delivery.",
    },
    {
      id: 5,
      title: "Installation & Setup",
      description:
        "Our technical team handles the installation and setup of machinery at your facility.",
    },
    {
      id: 6,
      title: "Training & Handover",
      description:
        "We provide thorough training to your staff and ensure smooth handover of operations.",
    },
    {
      id: 7,
      title: "Ongoing Support",
      description:
        "We offer continuous support and maintenance services to ensure optimal performance.",
    },
  ];

  return (
    <section className="w-full py-16 bg-[#F1F5F9]">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Service Process
            </h2>
            <p className="text-gray-600 max-w-xl text-justify">
              We follow a structured approach to ensure high-quality service
              delivery and customer satisfaction.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>

          {/* Process Steps */}
          <div className="space-y-6">
            {processSteps.map((step) => (
              <div key={step.id} className="relative flex items-start">
                {/* Circle with Number */}
                <div className="absolute z-10 flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full bg-pink-500 text-white font-bold text-sm md:text-lg">
                  {step.id}
                </div>

                {/* Content Card */}
                <div className="ml-16 md:ml-24 bg-white rounded-lg border border-gray-200 p-6 w-full">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
