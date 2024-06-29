import React from "react";
import { Business, Clients, Footer, Hero, Stats } from "../components";
import Product from "../components/Product";
import styles from "../style";
import ProductView from "../components/ProductView";

const Home = () => {
  return (
    <>
      <div className={`bg-white ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Clients />
          <Business />
          {/* <Photos/> */}
          <Product/>
          
          {/* <CardDeal /> */}
          {/* <Testimonials /> */}
          {/* <CTA /> */}
          
        </div>
      </div>
    </>
  );
};

export default Home;
