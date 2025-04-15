import React from "react";
import ServiceHome from "../Components/ServiceHome";
import WhatWeOfferSection from "../Components/Offer";
import Clientssay from "../Components/Clientssay";
import ServiceProcessTimeline from "../Components/Process";

const ServicesPage = () => {
  return (
    <>
      <ServiceHome />
      <WhatWeOfferSection />
      <ServiceProcessTimeline />
      <Clientssay />
    </>
  );
};

export default ServicesPage;
