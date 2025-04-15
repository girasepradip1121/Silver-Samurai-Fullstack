"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    quote:
      "Vaibhav International has been our trusted supplier for years. Their commitment to quality and excellent service has helped our textile business grow. The machinery we've purchased has consistently performed beyond our expectations.",
    author: "Rajesh Sharma",
    position: "CEO, Textile Solutions Ltd.",
  },
  {
    id: 2,
    quote:
      "The technical support team at Vaibhav International is exceptional. They've helped us optimize our production line and increase efficiency by 30%. We couldn't be happier with our partnership.",
    author: "Priya Patel",
    position: "Operations Director, Fabrics International",
  },
  {
    id: 3,
    quote:
      "We've been working with Vaibhav International for over a decade. Their machinery is reliable, durable, and backed by excellent after-sales service. They understand our needs and always deliver.",
    author: "Michael Chen",
    position: "Founder, Global Textiles Co.",
  },
  {
    id: 4,
    quote:
      "Switching to Vaibhav International's advanced looms has transformed our production capabilities. The quality of our fabrics has improved significantly, and we've reduced downtime by 40%.",
    author: "Sarah Johnson",
    position: "Production Manager, Elite Fabrics",
  },
  {
    id: 5,
    quote:
      "As a small textile manufacturer, finding reliable equipment was challenging until we discovered Vaibhav International. Their team provided personalized solutions that fit our budget without compromising on quality.",
    author: "Ahmed Hassan",
    position: "Owner, Hassan Textiles",
  },
];

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(1); // Start with the second item (index 1) as active
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef(null);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Handle navigation
  const goToSlide = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 500); // Match the transition duration
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500); // Match the transition duration
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
    setTimeout(() => setIsAnimating(false), 500); // Match the transition duration
  };

  // Calculate positions and styles for all testimonials
  const getTestimonialStyles = () => {
    return testimonials.map((testimonial, index) => {
      // Calculate the position relative to the active index
      const position =
        (index - activeIndex + testimonials.length) % testimonials.length;

      // Determine if this is the active testimonial or one of the adjacent ones
      const isActive = position === 0;
      const isPrev = position === testimonials.length - 1;
      const isNext = position === 1;

      // Calculate the visibility and styling based on position
      let opacity = 0.4;
      let scale = 0.9;
      let zIndex = 10;
      let visibility = "visible";

      if (isActive) {
        opacity = 1;
        scale = 1;
        zIndex = 20;
      } else if (isPrev || isNext) {
        opacity = 0.4;
        scale = 0.9;
        zIndex = 10;
      } else {
        // Hide testimonials that are not adjacent to the active one
        visibility = "hidden";
      }

      return {
        opacity,
        scale,
        zIndex,
        visibility,
        position: isActive
          ? "current"
          : isPrev
          ? "prev"
          : isNext
          ? "next"
          : "hidden",
      };
    });
  };

  const testimonialStyles = getTestimonialStyles();

  return (
    <section className="py-16 px-4 bg-[#F1F5F9] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from businesses that have partnered with us for their textile
            machinery needs.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative  px-4 py-8">
          {/* Navigation Buttons */}
          {/* <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors hidden md:block"
            aria-label="Previous testimonial"
            disabled={isAnimating}
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors hidden md:block"
            aria-label="Next testimonial"
            disabled={isAnimating}
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button> */}

          {/* Carousel Track */}
          <div className="relative h-[300px] md:h-[280px] lg:h-[260px]">
            <div
              ref={carouselRef}
              className="absolute inset-0 flex items-center justify-center"
            >
              {testimonials.map((testimonial, index) => {
                const style = testimonialStyles[index];

                // Calculate position for the horizontal layout
                let translateX = "0%";
                if (style.position === "prev") translateX = "-100%";
                if (style.position === "next") translateX = "100%";

                // For hidden testimonials, position them far off-screen
                if (style.position === "hidden") {
                  if (index < activeIndex) translateX = "-200%";
                  else translateX = "200%";
                }

                return (
                  <div
                    key={testimonial.id}
                    className="absolute w-full max-w-2xl transition-all duration-500 ease-out"
                    style={{
                      opacity: style.opacity,
                      transform: `translateX(${translateX}) scale(${style.scale})`,
                      zIndex: style.zIndex,
                      visibility: style.visibility,
                    }}
                  >
                    <div
                      className={`
                        bg-white rounded-xl p-6 md:p-8 shadow-sm
                        ${
                          style.position === "current"
                            ? "border border-gray-200"
                            : ""
                        }
                      `}
                    >
                      {style.position === "current" && (
                        <div className="flex justify-center mb-4">
                          <span className="text-5xl text-pink-500 font-serif">
                            "
                          </span>
                        </div>
                      )}

                      <blockquote
                        className={`
                          text-gray-700 mb-4 text-center
                          ${
                            style.position === "current"
                              ? "text-base md:text-lg"
                              : "text-sm"
                          }
                        `}
                      >
                        "{testimonial.quote}"
                      </blockquote>

                      <div className="text-center">
                        <p
                          className={`
                            font-bold text-pink-600
                            ${
                              style.position === "current"
                                ? "text-base"
                                : "text-sm"
                            }
                          `}
                        >
                          {testimonial.author}
                        </p>
                        <p
                          className={`
                            text-gray-500
                            ${
                              style.position === "current"
                                ? "text-sm"
                                : "text-xs"
                            }
                          `}
                        >
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pagination Dots */}
          {/* <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`
                  w-3 h-3 mx-1 rounded-full transition-all duration-300
                  ${
                    activeIndex === index
                      ? "bg-pink-500 scale-110"
                      : "bg-gray-300 hover:bg-gray-400"
                  }
                `}
                aria-label={`Go to testimonial ${index + 1}`}
                disabled={isAnimating}
              />
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
