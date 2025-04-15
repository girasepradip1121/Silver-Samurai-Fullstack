import { ArrowRight } from "lucide-react";

const AboutUsSection = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-55 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Vaibhav International Quality
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold mt-1">
                <span className="text-pink-500">Textile Machinery</span>{" "}
                Supplier
              </h3>
            </div>

            <p className="text-gray-700 text-justify">
              We specialize in supplying high-quality textile machinery that
              meets international standards, ensuring superior efficiency,
              durability, and innovation. Our machines are designed to enhance
              productivity and streamline textile manufacturing processes,
              catering to the evolving needs of the industry. With cutting-edge
              technology and precision engineering, we provide solutions that
              help businesses achieve high-quality fabric production while
              optimizing operational costs.
            </p>

            <p className="text-gray-700 text-justify">
              As a trusted textile machinery supplier, we prioritize
              reliability, performance, and sustainability. Our wide range of
              products includes advanced weaving, knitting, spinning, and
              finishing machines that integrate modern automation and smart
              technology. Whether for small-scale manufacturers or large
              industrial operations, our machinery delivers consistent results,
              supporting the growth and competitiveness of the global textile
              industry.
            </p>

            {/* Replaced Next.js Link with a regular <a> tag */}
            <a
              href="/about"
              className="inline-flex items-center text-pink-500 font-medium hover:text-pink-600 transition-colors"
            >
              Read More <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>

          {/* Right Column - Image */}
          <div className="relative w-full max-w-[520px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] rounded-lg overflow-hidden">
            <img
              src="au.png"
              alt="Textile machinery with colorful embroidery"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
