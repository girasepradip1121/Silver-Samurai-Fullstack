import axios from "axios";
import { Calendar, Clock, User } from "lucide-react";
import { useEffect, useState } from "react";
import { API_URL } from "./Variable";
import { useParams } from "react-router-dom";

export default function MainBlogSection() {

const [blog,setBlog]=useState([])
const {blogId}=useParams()

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${API_URL}/blog/getbyid/${blogId}`);
        setBlog(res.data);
        console.log("blog",res.data);
      } catch (err) {
        console.error("Failed to fetch latest blog", err);
      }
    };
    fetchBlogs();
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
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Article Content */}
          <div className="lg:w-1/2">
            {/* Category */}
            <div className="mb-2">
              <span className="text-pink-500 font-medium">{blog?.category}</span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {/* <span className="text-gray-900">The Evolution of </span>
              <span className="text-pink-500">Textile Machinery</span>
              <span className="text-gray-900">: Past, Present, and Future</span> */}
              {blog?.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{formattedDate}</span>
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

            {/* Article Content */}
            <div className="space-y-4 text-gray-700 text-justify">
              <p>
                {blog?.content}
              </p>
            </div>
          </div>

          {/* Article Image */}
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <div className="rounded-lg overflow-hidden">
              <img
                src={`${API_URL}/${blog?.image}`}
                alt="Advanced embroidery machine with colorful thread spools and intricate fabric design"
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
