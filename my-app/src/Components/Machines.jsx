import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "./Variable";


export default function ProductDetailSection() {

  const { productId } = useParams(); // Assume route like /product/:id
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${API_URL}/product/getbyid/${productId}`);
        setProduct(res.data);
        console.log("response".res.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Product Information */}
          <div className="lg:w-1/2 flex flex-col">
            {/* Category */}
            <div className="mb-2">
              <span className="text-pink-500 text-sm font-medium">
                {product?.category}
              </span>
            </div>

            {/* Product Title */}
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              {/* <span className="text-gray-900">High-Speed </span>
              <span className="text-pink-500">Multi-Head Embroidery</span>
              <span className="text-gray-900"> Machine</span> */}
              {product?.title}
            </h1>

            {/* Product Description */}
            <div className="space-y-4 text-gray-700 text-justify">
              <p>
              {product?.fullDesc}
              </p>
            </div>

            {/* Inquiry Button */}
            <div className="mt-8">
            <a
                href={`/inquiry?product=${product?.title}`}
                className="inline-flex items-center justify-center px-6 py-3 bg-pink-500 text-white font-medium rounded-md hover:bg-pink-600 transition-colors"
              >
                Inquiry Now
              </a>
            </div>
          </div>

          {/* Product Image */}
          <div className="lg:w-1/2">
            <div className="rounded-lg overflow-hidden">
              <img
                src={`${API_URL}/${product?.image}`}
                alt={product?.title}
                width={600}
                height={450}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
