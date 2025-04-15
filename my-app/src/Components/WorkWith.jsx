export default function CTASection() {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden bg-pink-500">
      {/* Background World Map with Nodes */}
      <div
        className="absolute inset-0 bg-cover sm:bg-contain bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage: 'url("/map.svg")',
        }}
      ></div>

      {/* Content Container */}
      <div className="relative container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Ready to Work With Us?
        </h2>
        <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto ">
          Contact our team today to discuss your textile machinery needs and
          discover how we can help your business thrive.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <a
            href="/product"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-pink-500 font-medium hover:bg-gray-100 transition-colors"
          >
            View Our Products
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-transparent text-white font-medium border border-white hover:bg-pink-600 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
