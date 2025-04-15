"use client";
import { useEffect, useState } from "react";
import { Calendar, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "./Variable";

// Sample articles data
// const allArticles = [
//   {
//     id: 1,
//     title:
//       "The Evolution of Textile Machinery: From Handlooms to Smart Factories",
//     category: "Industry Trends",
//     categorySlug: "industry",
//     description:
//       "The evolution of textile machinery has transformed fabric production from manual handlooms to highly automated smart factories.",
//     image: "/a1.png",
//     date: "April 5, 2023",
//     readTime: "10 min read",
//     slug: "future-textile-manufacturing",
//   },
//   {
//     id: 2,
//     title: "How Automation is Transforming the Textile Industry",
//     category: "Industry Trends",
//     categorySlug: "industry",
//     description:
//       "Automation is revolutionizing the textile industry by enhancing efficiency, reducing labor costs, and improving production quality.",
//     image: "/a2.png",
//     date: "April 5, 2023",
//     readTime: "10 min read",
//     slug: "future-textile-manufacturing-2",
//   },
//   {
//     id: 3,
//     title: "The Role of AI and IoT in Modern Textile Machinery",
//     category: "Industry Trends",
//     categorySlug: "industry",
//     description:
//       "AI and IoT are optimizing textile machinery with real-time monitoring, predictive maintenance, and enhanced automation.",
//     image: "/a3.png",
//     date: "April 5, 2023",
//     readTime: "10 min read",
//     slug: "future-textile-manufacturing-3",
//   },
//   {
//     id: 4,
//     title: "Sustainable Innovations in Textile Manufacturing Equipment",
//     category: "Industry Trends",
//     categorySlug: "industry",
//     description:
//       "Sustainable textile machinery is reducing waste, conserving energy, and promoting eco-friendly production practices.",
//     image: "/a4.png",
//     date: "April 5, 2023",
//     readTime: "10 min read",
//     slug: "future-textile-manufacturing-4",
//   },
//   {
//     id: 5,
//     title: "Top 5 Cutting-Edge Technologies Revolutionizing Textile Machinery",
//     category: "Guides",
//     categorySlug: "guides",
//     description:
//       "Discover the top five groundbreaking technologies transforming textile machinery for faster, smarter, and more efficient production.",
//     image: "/a5.png",
//     date: "March 15, 2023",
//     readTime: "12 min read",
//     slug: "beginners-guide-textile-equipment",
//   },
//   {
//     id: 6,
//     title: "A Beginner’s Guide to Different Types of Textile Machines",
//     category: "Tips",
//     categorySlug: "tips",
//     description:
//       "Explore the essential types of textile machines, their functions, and how they contribute to fabric production.",
//     image: "/a6.png",
//     date: "February 28, 2023",
//     readTime: "8 min read",
//     slug: "tips-maintaining-textile-machinery",
//   },
//   {
//     id: 7,
//     title:
//       "The Future of Textile Machinery: Trends and Predictions for the Next Decade",
//     category: "Industry Trends",
//     categorySlug: "industry",
//     description:
//       "Discover the upcoming trends and technological advancements shaping the future of textile machinery in the next decade.",
//     image: "/a7.png",
//     date: "April 5, 2023",
//     readTime: "10 min read",
//     slug: "future-textile-manufacturing-4",
//   },
//   {
//     id: 8,
//     title: "How Smart Machines are Enhancing Textile Production Efficiency",
//     category: "Guides",
//     categorySlug: "guides",
//     description:
//       "Explore how smart machines are revolutionizing textile production by improving efficiency, precision, and automation.",
//     image: "/a8.png",
//     date: "March 15, 2023",
//     readTime: "12 min read",
//     slug: "beginners-guide-textile-equipment",
//   },
//   {
//     id: 9,
//     title:
//       "From Traditional Weaving to Digital Printing: The Journey of Textile Machinery",
//     category: "Tips",
//     categorySlug: "tips",
//     description:
//       "Discover the evolution of textile machinery from traditional weaving techniques to advanced digital printing, transforming fabric production.",
//     image: "/a9.png",
//     date: "February 28, 2023",
//     readTime: "8 min read",
//     slug: "tips-maintaining-textile-machinery",
//   },
// ];

export default function MoreArtical() {
  const navigate = useNavigate(); // ✅ Initialize useNavigate

  // State for active category filter and visible articles count
  const [activeCategory, setActiveCategory] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchLatestBlog = async () => {
      try {
        const res = await axios.get(`${API_URL}/blog/getall`);
        setBlogs(res.data);
        console.log("all response", res.data);
      } catch (err) {
        console.error("Failed to fetch latest blog", err);
      }
    };

    fetchLatestBlog();
  }, []);

  const categories = [
    { label: "All", slug: null },
    { label: "Industry Trends", slug: "industrytrends" },
    { label: "Guides", slug: "guides" },
    { label: "Tips", slug: "tips" },
  ];

  const filteredArticles = activeCategory
    ? blogs.filter(
        (blog) =>
          blog.category?.toLowerCase().replace(/\s+/g, "") === activeCategory
      )
    : blogs;

  // Articles to display based on visible count
  const displayBlog = filteredArticles?.slice(0, visibleCount);

  // Handle category filter click
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setVisibleCount(6); // Reset visible count when changing category
  };

  // Handle load more click
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header with Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
          <h2 className="text-3xl font-bold text-gray-900">Featured Article</h2>

          {/* Category Filters */}
          <div className="bg-gray-100 rounded-full p-1 flex flex-wrap">
            {categories?.map((cat) => (
              <button
                key={cat.slug ?? "all"}
                onClick={() => handleCategoryClick(cat.slug)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  (cat.slug === null && activeCategory === null) ||
                  activeCategory === cat.slug
                    ? "bg-pink-500 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayBlog?.map((blog) => (
            <div
              key={blog.blogId}
              className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm transition-transform hover:shadow-md hover:-translate-y-1"
            >
              <img
                src={`${API_URL}/${blog.image}`}
                alt={blog.title}
                onClick={() => {navigate(`/artical/${blog?.blogId}`);
                window.scrollTo(0, 0);
              }}
                className="h-48 w-full object-cover"
              />

              {/* Article Content */}
              <div className="p-5">
                <div className="mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-600">
                    {blog?.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {blog?.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {blog?.content}
                </p>

                {/* Metadata */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>
                        {blog.publishDate &&
                          new Date(blog.publishDate).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{blog?.readTime} min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {displayBlog?.length < filteredArticles?.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={handleLoadMore}
              className="px-6 py-3 bg-pink-500 text-white font-medium rounded-md hover:bg-pink-600 transition-colors"
            >
              Load More Article
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
