import React from "react";

import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedHome from "../../components/featuredHome/FeaturedHome";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <main className="home-container">
        <h2 className="home-title">Featured</h2>
        <Featured />
        <h2 className="home-title">Browse by property type</h2>
        <PropertyList />
        <h2 className="home-title">Home guests love</h2>
        <FeaturedHome />
        <MailList />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
