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
              VAIBHAV INTERNATIONAL, established in 2002, is the largest
              enterprise in the import and export of textile machinery and
              technology. By introducing the Brand "SIVER SAMURAI"(INDIA).
            </p>

            <p className="text-gray-700 text-justify">
              VAIBHAV INTERNATIONAL focuses its business on many fields such as
              the import and export of textile machinery and the whole set
              equipment, textile technology, textile products, garments, and
              textile raw materials; engineering contracted, etc. Since its
              foundation, the company has made outstanding achievements with its
              good service, personnel training and strengthened management in
              order toenhance the main business of textile machinery, thus
              enjoying a high reputation on market at home and abroad.
            </p>

            <p className="text-gray-700 text-justify">
              VAIBHAV INTERNATIONAL has always aimed to provide service in the
              way of Being honest, customer the highest," and strictly executes
              the ISO 9001 guiding principles for quality. Extensive trade
              partnership and cooperation have been established with more than 5
              Supplier in china and Italy on the basis of equality and mutual
              benefit
            </p>

            <p className="text-gray-700 text-justify">
              The business scope of import and export of textile machinery and
              technology covers Computerized Embroidery Machines Like Flat,
              Sequin, Chain Stitch & Loop, Mix Head Embroidery Machines and many
              other fields. In the 21st century with economic globalization and
              full of opportunities and challenges, based on broad marketing
              network and continuous improvement on service, VAIBHAV
              INTERNATIONAL commits itself to offering systematic scientific and
              effective solutions for the textile market.
            </p>

            <p className="text-gray-700 text-justify">
              Capitalizing on superior quality products, competitive prices,
              timely delivery and pro-client approach, we have been able to grow
              at rapid pace and establish a strong presence in the national
              market.
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
