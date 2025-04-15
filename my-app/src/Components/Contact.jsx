"use client";

import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import axios from "axios";
import { API_URL } from "./Variable";
import { toast } from "react-hot-toast";

export default function ContactUs() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  // Validate email format
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    try {
      const response = await axios.post(`${API_URL}/contact/create`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Form submitted:", response.data);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      toast.success("Request Sent Successfully");
    } catch (error) {
      console.error("Error sending request:", error);
      toast.error("Failed to send request");
    }
  };

  return (
    <section className="py-12 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 md:mb-0">
            Contact Us
          </h2>
          <p className="text-gray-600">
            Get in touch with our team for inquiries about our products and
            services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="mb-4 text-pink-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-4">
                  Your message has been sent successfully.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="5"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-pink-600 text-white py-3 px-4 rounded-md hover:bg-pink-700 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Information and Map */}
          <div className="flex flex-col">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-4">Get in touch</h3>
              <div className="flex space-x-4">
                <a
                  href="tel:+91  9825776309"
                  className="flex items-center justify-center w-12 h-12 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors"
                  aria-label="Call us"
                >
                  <Phone className="w-5 h-5" />
                </a>
                <a
                  href="mailto:ivaibhavinternational06@gmail.com"
                  className="flex items-center justify-center w-12 h-12 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors"
                  aria-label="Email us"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://maps.google.com/?q=your+location"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors"
                  aria-label="Find us on map"
                >
                  <MapPin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Google Map */}
            <div className="flex-grow rounded-lg overflow-hidden h-[300px] md:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119024.19110697167!2d72.70028029726558!3d21.2117756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f0293c45057%3A0x982ae98b557fdc11!2sOpera%20House!5e0!3m2!1sen!2sin!4v1742906665184!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Opera House Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
