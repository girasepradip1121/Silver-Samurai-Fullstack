import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ProductPage from "./Pages/ProductPage";
import ServicesPage from "./Pages/ServicesPage";
import BlogPage from "./Pages/BlogPage";
import ContactPage from "./Pages/ContactPage";
import SingleProductPage from "./Pages/SingleProductPage";
import InquiryForm from "./Components/Inquiry";
import SingleBlogPage from "./Pages/SingleBlogPage";
import SingleServicePage from "./Pages/SingleServicePage";
import { Toaster } from "react-hot-toast";

// Admin Panel
import AdminLayout from "./Admin/AdminLayout";
import AdminLogin from "./Pages/AdminLogin";
import Dashboard from "./Admin/pages/Dashboard";
import Products from "./Admin/pages/Products";
import Services from "./Admin/pages/Services";
import Blogs from "./Admin/pages/Blogs";
import Contact from "./Admin/pages/Contact";
import Inquiries from "./Admin/pages/Inquiries";



function App() {
  return (
    <Router>
      <Toaster position="top-right" reverseOrder={false} />

      {/* Public Site Layout */}
      <Routes>
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/product" element={<ProductPage />} />
                <Route path="/service" element={<ServicesPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/inquiry" element={<InquiryForm />} />
                <Route
                  path="/singleproductpage"
                  element={<SingleProductPage />}
                />
                <Route
                  path="/singleproductpage/:productId"
                  element={<SingleProductPage />}
                />
                <Route path="/artical" element={<SingleBlogPage />} />
                <Route path="/artical/:blogId" element={<SingleBlogPage />} />
                <Route
                  path="/singleservicepage"
                  element={<SingleServicePage />}
                />
                <Route
                  path="/singleservicepage/:serviceId"
                  element={<SingleServicePage />}
                />
              </Routes>
              <Footer />
            </>
          }
        />

        {/* Admin Panel Layout */}
        <Route path="/admin/login" element={<AdminLogin />} /> 
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="services" element={<Services />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="inquiries" element={<Inquiries />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
