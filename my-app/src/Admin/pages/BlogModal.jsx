import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { XMarkIcon } from '@heroicons/react/24/outline';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { API_URL } from '../../Components/Variable';
import { toast } from "react-hot-toast";



// Define your categories
const categories = [
  { label: "Industry Trends", slug: "industrytrends" },
  { label: "Guides", slug: "guides" },
  { label: "Tips", slug: "tips" },
  { label: "Technology", slug: "technology" },
  { label: "Business", slug: "business" }
];

const BlogModal = ({ isOpen, onClose, blog, refreshBlogs }) => {
  const token=localStorage.getItem('adminToken')
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    author: '',
    readTime: '',
    publishDate: new Date(),
    content: '',
    image: null
  });
  const [previewImage, setPreviewImage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (blog) {
      setFormData({
        title: blog.title,
        category: blog.category || '',
        author: blog.author,
        readTime: blog.readTime,
        publishDate: new Date(blog.publishDate),
        content: blog.content,
        image: null
      });
      setPreviewImage(blog.image ? `${API_URL}/${blog.image}` : '');
    } else {
      setFormData({
        title: '',
        category: '',
        author: '',
        readTime: '',
        publishDate: new Date(),
        content: '',
        image: null
      });
      setPreviewImage('');
    }
  }, [blog]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, image: file }));
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formPayload = new FormData();
    formPayload.append('title', formData.title);
    formPayload.append('category', formData.category);
    formPayload.append('author', formData.author);
    formPayload.append('readTime', formData.readTime);
    formPayload.append('publishDate', formData.publishDate.toISOString().split('T')[0]);
    formPayload.append('content', formData.content);
    if (formData.image) {
      formPayload.append('image', formData.image);
    }

    try {
      if (blog) {
        await axios.put(`${API_URL}/blog/update/${blog.blogId}`, formPayload, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
          }
        });
        toast.success('Blog Updated')
      } else {
        await axios.post(`${API_URL}/blog/create`, formPayload, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
          }
        });
        toast.success('Blog Added')
      }
      refreshBlogs();
      onClose();
    } catch (error) {
      console.error('Error saving blog:', error);
      toast.error('Something Went Wrong')
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-xl font-semibold">
            {blog ? 'Edit Blog' : 'Add New Blog'}
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category.slug} value={category.slug}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Author *</label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Read Time (Minutes) *</label>
              <input
                type="number"
                name="readTime"
                value={formData.readTime}
                onChange={handleInputChange}
                placeholder="e.g. 5"
                min="1"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Publish Date *</label>
            <DatePicker
              selected={formData.publishDate}
              onChange={(date) => setFormData(prev => ({ ...prev, publishDate: date }))}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Content *</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              rows={6}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {blog ? 'Update Image' : 'Blog Image *'}
            </label>
            <div className="flex items-center gap-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
              />
              {previewImage && (
                <img
                  src={previewImage}
                  alt="Preview"
                  className="h-16 w-16 object-cover rounded"
                />
              )}
            </div>
            {!blog && !formData.image && (
              <p className="mt-1 text-sm text-red-600">Image is required</p>
            )}
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting || (!blog && !formData.image)}
              className={`px-4 py-2 rounded-md text-white ${isSubmitting || (!blog && !formData.image) ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'}`}
            >
              {isSubmitting ? 'Saving...' : 'Save Blog'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogModal;