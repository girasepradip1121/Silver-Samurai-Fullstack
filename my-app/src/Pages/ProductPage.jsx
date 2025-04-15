import React from "react";
import ProductSection from "../Components/ProductHome";
import ProductsPage from "../Components/AllProducts";
import RelatedServicesSection from "../Components/Services";

const ProductPage = () => {
  return (
    <>
      <ProductSection />
      <ProductsPage />
      <RelatedServicesSection />
    </>
  );
};

export default ProductPage;
