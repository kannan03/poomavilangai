import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import devar1 from "../assets/images/devar1.jpg";
import devar2 from "../assets/images/devar2.jpg";
import devar3 from "../assets/images/devar3.jpg";
import "./Home.css";

export default function HomePage() {
  const images = [devar1, devar2, devar3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <div className="home-content">
        <div className="slideshow">
          <img src={images[current]} alt={`Pasumpon Devar ${current + 1}`} className="slideshow-image"/>
        </div>
      </div>
    </Layout>
  );
}
