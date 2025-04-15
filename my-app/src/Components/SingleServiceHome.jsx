export default function SingleServiceSection() {
  return (
    <section className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/h3.jpg")',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-center px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
          Our Services{" "}
        </h1>
        <p className="text-lg md:text-xl text-white max-w-xl">
          Comprehensive solutions for all your textile machinery needs{" "}
        </p>
      </div>
    </section>
  );
}
