import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "./Variable";

const products = [
  {
    id: "1",
    image: "/m1.jpg",
    category: " Textile Embroidery Machinery",
    title: " High-Speed Multi-Head Embroidery Machine",
    description:
      "The High-Speed Multi-Head Embroidery Machine is designed for precision stitching on fabrics, enabling large-scale production of intricate embroidery patterns with high efficiency and automation.",
  },
  {
    id: "2",
    image: "/m2.jpg",
    category: "Textile Embroidery Machinery",
    title: " Computerized Embroidery Machine",
    description:
      "The Computerized Embroidery Machine is an advanced textile equipment designed for high-precision embroidery, offering multi-thread functionality, automation, and digital pattern customization for efficient fabric embellishment.",
  },
  {
    id: "3",
    image: "/m3.jpg",
    category: "Embroidery",
    title: "Needle Shirring Smocking Machine",
    description:
      "We manufacture and supply high-quality Needle Shirring Smocking Machines, renowned for excellent performance, low maintenance, and precision in textile design.",
  },
  {
    id: "4",
    image: "/m4.jpg",
    category: "Zipper Manufacturing Machinery",
    title: "Automatic High Speed CFC Zipper Coil Forming Machine",
    description:
      "The Automatic High-Speed CFC Zipper Coil Forming Machine ensures efficient, precise, and high-speed zipper production with low maintenance and energy-efficient operation.",
  },
  {
    id: "5",
    image: "/m5.jpg",
    category: "Textile Warping Machinery",
    title: " Warping Machine.",
    description:
      "The High-Speed Automatic Warping Machine efficiently winds yarn onto warp beams with precision, featuring high-speed operation, automatic tension control, and user-friendly digital controls.",
  },
  {
    id: "6",
    image: "/m6.jpg",
    category: "Textile Weaving Machinery",
    title: "High-Speed Automatic Needle Loom Machine",
    description:
      "The High-Speed Automatic Needle Loom Machine efficiently weaves narrow fabrics like ribbons, elastics, and webbing with precision, high production speed, and durable performance.",
  },
  {
    id: "7",
    image: "/m7.jpg",
    category: " Textile Embroidery Machinery",
    title: " High-Speed Multi-Head Embroidery Machine",
    description:
      "The High-Speed Multi-Head Embroidery Machine is designed for precision stitching on fabrics, enabling large-scale production of intricate embroidery patterns with high efficiency and automation.",
  },
  {
    id: "8",
    image: "/m8.jpg",
    category: "Textile Weaving Machinery",
    title: " Computerized Jacquard Loom Machine",
    description:
      "The Computerized Jacquard Loom Machine is an advanced weaving system designed for high-speed fabric production with intricate patterns, offering digital controls and automated precision for efficient textile manufacturing.",
  },
  {
    id: "9",
    image: "/m9.jpg",
    category: "Textile Machinery",
    title: "High-Speed Ribbon Weaving Machine",
    description:
      "The High-Speed Ribbon Weaving Machine is designed for efficient production of high-quality ribbons, tapes, and narrow fabrics with precise control, ensuring durability and consistency in textile manufacturing.",
  },
  {
    id: "10",
    image: "/m10.jpg",
    category: "Textile Machinery",
    title: "Multi-Head Computerized Embroidery Machine",
    description:
      "The Multi-Head Computerized Embroidery Machine is a high-speed, precision-engineered solution for large-scale embroidery production, ensuring intricate designs, uniform stitching, and high efficiency for bulk orders.",
  },
];

export default function ProductsSection() {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);
  const [products,setProducts]=useState([]);


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
  

  return (
    <section className="bg-[#F1F5F9] py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 flex flex-col md:flex-row items-start justify-between gap-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Our Products
          </h2>
          <p className="text-gray-600 max-w-2xl ">
            We offer a wide range of high-quality textile machinery sourced from
            trusted manufacturers around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(showAll ? products : products.slice(0, 8)).map((product) => (
            <div
              key={product.productId}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={`${API_URL}/${product.image}` || "/placeholder.svg"}
                  alt={product.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-medium text-pink-600 uppercase tracking-wider">
                  {product.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {product.shortDesc}
                </p>
                <button
                  onClick={() => {
                      navigate(`/singleproductpage/${product.productId}`);
                    window.scrollTo(0, 0);
                  }}
                  className="text-pink-600 text-sm font-medium hover:text-pink-700 transition-colors"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-block bg-pink-600 text-white font-medium py-3 px-8 rounded-md hover:bg-pink-700 transition-colors"
          >
            {showAll ? "Show Less" : "View All Products"}
          </button>
        </div>
      </div>
    </section>
  );
}
