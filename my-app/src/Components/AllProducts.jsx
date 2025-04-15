"use client";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import axios from "axios"
import { API_URL } from "./Variable";
// const productsData = [
//   {
//     id: 1,
//     title: "High-Speed Needle Loom Machine",
//     category: "Textile Machinery",
//     description:
//       "The High-Speed Needle Loom Machine is an advanced textile weaving machine designed for producing narrow fabrics like ribbons, webbings, and elastic bands. It offers high-speed operation, precise needle control, and an adjustable tension system, ensuring consistent quality and efficiency in textile manufacturing.",
//     image: "/m11.jpg",
//     features: [
//       "High-speed operation for increased productivity.",
//       "Precision needle control for uniform weaving.",
//       "Adjustable tension system for different fabric types.",
//       "Durable metal construction for long-term use.",
//     ],
//   },
//   {
//     id: 2,
//     title: " Automatic Fabric Rolling Machine",
//     category: "Textile Machinery",
//     description:
//       "The Automatic Fabric Rolling Machine is designed for precise winding, measuring, and cutting of textile materials. It features automated tension control, a digital display for accurate measurements, and heavy-duty rollers for smooth fabric handling, making it ideal for textile production and quality control.",
//     image: "/m19.jpg", // Using same image as placeholder
//     features: [
//       "Automated fabric rolling with adjustable tension control.",
//       "Integrated digital display for accurate measurement.",
//       "Adjustable tension system for different fabric types.",
//       "Heavy-duty rollers ensure smooth and even fabric winding.",
//     ],
//   },
//   {
//     id: 3,
//     title: " Multi-Head High-Speed Needle Loom Machine",
//     category: "Spinning Equipment",
//     description:
//       "The Multi-Head High-Speed Needle Loom Machine is designed for the mass production of narrow fabrics such as webbings, elastic bands, and ribbons. It ensures high-speed operation with precision weaving, making it ideal for large-scale textile manufacturing.",
//     image: "/m13.jpg", // Using same image as placeholder
//     features: [
//       "Multi-head system for high-efficiency weaving.",
//       "Adjustable tension control for fabric consistency.",
//       "Heavy-duty rollers for smooth operation.",
//       "User-friendly control panel for easy adjustments.",
//     ],
//   },
// ];

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [products,setProducts]=useState([]);
  const navigate = useNavigate(); // ✅ Initialize useNavigate


  useEffect(()=>{
    const fetchProducts=async()=>{
      try {
        const response=await axios(`${API_URL}/product/getall`)
        setProducts(response.data)
        console.log("response prodyuct",response.data);
        
      } catch (error) {
        console.error("Error Fetching Products:", error);
        setProducts([]);
      }
    }
    fetchProducts()
  },[])

  // Filter products based on search query
  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.features.some((feature) =>
        feature.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      {/* Header and Search */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          All Products
        </h1>
        <div className="relative w-full md:w-80">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search Product..."
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Introduction */}
      <p className="text-gray-600 mb-12 text-justify">
        Discover our premium textile machinery, designed for efficiency,
        precision, and durability. From weaving to finishing, our cutting-edge
        solutions enhance productivity and quality.
      </p>

      {/* Products List */}
      <div className="space-y-12">
        {filteredProducts?.length > 0 ? (
          filteredProducts?.map((product, index) => (
            <div
              key={product.productId}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-6 overflow-hidden`}
            >
              {/* Product Image */}
              <div className="lg:w-1/2 h-80 md:h-70 lg:h-110">
                <img
                  src={`${API_URL}/${product.image}` || "/placeholder.svg"}
                  alt={product.title}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Product Details */}
              <div className="lg:w-1/2 p-6 flex flex-col">
                <div className="mb-1">
                  <span className="text-sm text-gray-600">
                    {product.category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-pink-500 mb-3">
                  {product.title}
                </h2>
                <p className="text-gray-700 mb-6 text-justify">
                  {product.shortDesc}
                </p>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features?.map((feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => {
                      navigate(`/singleproductpage/${product.productId}`);
                      window.scrollTo(0, 0);
                    }}
                    className="px-6 py-2 bg-pink-500 text-white font-medium rounded-md hover:bg-pink-600 transition-colors"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => {
                      navigate(`/inquiry`);
                      window.scrollTo(0, 0);
                    }}
                    className="px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No products found matching your search criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
