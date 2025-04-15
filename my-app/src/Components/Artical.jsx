import axios from "axios";
import { Calendar, Clock, User } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "./Variable";

export default function FeaturedArticleSection() {
  const navigate = useNavigate(); // ✅ Initialize useNavigate

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchLatestBlog = async () => {
      try {
        const res = await axios.get(`${API_URL}/blog/getlatest`);
        setBlog(res.data);
        console.log(res.data);
      } catch (err) {
        console.error("Failed to fetch latest blog", err);
      }
    };

    fetchLatestBlog();
  }, []);

  const formattedDate = blog?.publishDate
    ? new Date(blog.publishDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Featured Article
            </h2>
            <p className="text-gray-600 max-w-xl text-justify">
              A featured article delivers in-depth research, clear structure,
              engaging storytelling, credible sources, strong visuals,
              compelling headlines, and valuable insights to inform and engage
              readers.
            </p>
          </div>
        </div>

        {/* Featured Article Card */}
        <div className="flex flex-col md:flex-row gap-8 bg-white rounded-lg overflow-hidden ">
          {/* Article Image */}
          <div className="md:w-2/5 h-64 md:h-auto relative">
            <img
              src={`${API_URL}/${blog?.image}`}
              alt="Textile machinery in operation"
              className="object-cover rounded-lg w-full h-full"
            />
          </div>

          {/* Article Content */}
          <div className="md:w-3/5 py-6 flex flex-col">
            {/* Category */}
            <div className="mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-600">
                {blog?.category}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              {blog?.title}
            </h3>

            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>
                  {formattedDate}
                </span>
              </div>

              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{blog?.readTime} min read</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                <span>{blog?.author}</span>
              </div>
            </div>

            {/* Excerpt */}
            <p className="text-gray-700 mb-6 text-justify">
              {blog?.content?.length > 700
                ? blog?.content?.substring(0, 700) + "..."
                : blog?.content}
            </p>

            {/* CTA Button */}
            <div className="">
              <button
                onClick={() => {
                  navigate(`/artical/${blog?.blogId}`);
                  window.scrollTo(0, 0);
                }}
                className="inline-flex items-center justify-center px-6 py-2 bg-pink-500 text-white font-medium rounded-md hover:bg-pink-600 transition-colors"
              >
                Read Full Article
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
