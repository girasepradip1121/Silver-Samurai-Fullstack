import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { API_URL } from '../../Components/Variable';
import { toast } from "react-hot-toast";


const ProductModal = ({ isOpen, onClose, product, refreshProducts }) => {
  const token=localStorage.getItem('adminToken')

  const [formData, setFormData] = useState({
    title: '',
    category: '',
    shortDesc: '',
    fullDesc: '',
    features: '[]',
    image: null
  });
  const [previewImage, setPreviewImage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [featureInput, setFeatureInput] = useState('');

  // Initialize form when product changes
  useEffect(() => {
    if (product) {
      setFormData({
        title: product.title,
        category: product.category || '',
        shortDesc: product.shortDesc,
        fullDesc: product.fullDesc,
        features: typeof product.features === 'string' ? product.features : JSON.stringify(product.features),
        image: null
      });
      setPreviewImage(product.image ? `${API_URL}/${product.image}` : '');
    } else {
      setFormData({
        title: '',
        category: '',
        shortDesc: '',
        fullDesc: '',
        features: '[]',
        image: null
      });
      setPreviewImage('');
    }
  }, [product]);

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

  const addFeature = () => {
    if (featureInput.trim()) {
      const currentFeatures = JSON.parse(formData.features);
      const updatedFeatures = [...currentFeatures, featureInput.trim()];
      setFormData(prev => ({ ...prev, features: JSON.stringify(updatedFeatures) }));
      setFeatureInput('');
    }
  };

  const removeFeature = (index) => {
    const currentFeatures = JSON.parse(formData.features);
    const updatedFeatures = currentFeatures.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, features: JSON.stringify(updatedFeatures) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formPayload = new FormData();
    formPayload.append('title', formData.title);
    formPayload.append('category', formData.category);
    formPayload.append('shortDesc', formData.shortDesc);
    formPayload.append('fullDesc', formData.fullDesc);
    formPayload.append('features', formData.features);
    if (formData.image) {
      formPayload.append('image', formData.image);
    }

    try {
      if (product) {
        // Update existing product
        await axios.put(`${API_URL}/product/update/${product.productId}`, formPayload, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
          }
        });
        toast.success('Product Updated')
      } else {
        // Create new product
        await axios.post(`${API_URL}/product/create`, formPayload, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
          }
        });
        toast.success('Product Added')
      }
      refreshProducts();
      onClose();
    } catch (error) {
      console.error('Error saving product:', error);
      toast.error('Something went wrong')

    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  const featuresList = JSON.parse(formData.features);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-xl font-semibold">
            {product ? 'Edit Product' : 'Add New Product'}
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
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Short Description *</label>
            <textarea
              name="shortDesc"
              value={formData.shortDesc}
              onChange={handleInputChange}
              rows={2}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Description *</label>
            <textarea
              name="fullDesc"
              value={formData.fullDesc}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Features</label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={featureInput}
                onChange={(e) => setFeatureInput(e.target.value)}
                placeholder="Add feature"
                className="flex-grow px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="button"
                onClick={addFeature}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Add
              </button>
            </div>
            <div className="space-y-2">
              {featuresList.map((feature, index) => (
                <div key={index} className="flex justify-between items-center bg-gray-50 p-2 rounded">
                  <span>{feature}</span>
                  <button
                    type="button"
                    onClick={() => removeFeature(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {product ? 'Update Image' : 'Product Image *'}
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
            {!product && !formData.image && (
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
              disabled={isSubmitting || (!product && !formData.image)}
              className={`px-4 py-2 rounded-md text-white ${isSubmitting || (!product && !formData.image) ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'}`}
            >
              {isSubmitting ? 'Saving...' : 'Save Product'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;