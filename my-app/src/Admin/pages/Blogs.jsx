import React, { useState, useEffect } from "react";
import {
  PlusIcon,
  PencilSquareIcon,
  TrashIcon,
  ArrowPathIcon,
  CalendarIcon,
  ClockIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import axios from "axios";
import BlogModal from "./BlogModal";
import { API_URL } from "../../Components/Variable";
import toast from "react-hot-toast";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/blog/getall`);
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
      fetchBlogs();
    }, []);

  const handleDelete = async (blogId) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        await axios.delete(`${API_URL}/blog/delete/${blogId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('adminToken')}`,
            'Content-Type': 'application/json'
          }
        });
        toast.success("Blog Deleted...");
        fetchBlogs();
      } catch (error) {
        console.error("Error deleting blog:", error);
        toast.error('Something Went Wrong')
      }
    }
  };

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.category?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Blog Management</h1>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search blogs..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <button
            onClick={() => {
              setCurrentBlog(null);
              setIsModalOpen(true);
            }}
            className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <PlusIcon className="h-5 w-5" />
            <span>Add Blog</span>
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <ArrowPathIcon className="h-12 w-12 text-gray-400 animate-spin" />
        </div>
      ) : filteredBlogs.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500 text-lg">No blogs found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog) => (
            <div
              key={blog.blogId}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                {blog.image && (
                  <img
                    src={`${API_URL}/${blog.image}`}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute top-3 right-3 flex space-x-2">
                  <button
                    onClick={() => {
                      setCurrentBlog(blog);
                      setIsModalOpen(true);
                    }}
                    className="p-2 bg-white rounded-full shadow text-indigo-600 hover:bg-indigo-50"
                  >
                    <PencilSquareIcon className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(blog.blogId)}
                    className="p-2 bg-white rounded-full shadow text-red-600 hover:bg-red-50"
                  >
                    <TrashIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded">
                    {blog.category || "Uncategorized"}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {blog.content}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center">
                    <UserIcon className="h-3 w-3 mr-1" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center">
                    <CalendarIcon className="h-3 w-3 mr-1" />
                    <span>{formatDate(blog.publishDate)}</span>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="h-3 w-3 mr-1" />
                    <span>{blog.readTime} min read</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <BlogModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        blog={currentBlog}
        refreshBlogs={fetchBlogs}
      />
    </div>
  );
};

export default Blogs;
