// Product.js

import React, { useState } from "react";
import ProductSimple from "./ProductSimple";

import {
  n7100_1,
  n7100_2,
  n7100_3,
  n7100_4,
  nr3100_1,
  nr3100_2,
  nr3100_3,
  nr3100_4,
  nr3100_5,
  ng8200_1,
  ng8200_2,
  liquidLevelSwitch,
  rn3001_1,
  fep630_1,
  few325,
  mf3000,
  humy300,
  flanges_1,
  flanges_2,
  va500_1,
  va500_2
} from "../assets/product_photos/index.js";

const products = [
  {
    category: "Level Measurement Solutions (UWT)",
    items: [
      {
        title: "NivoRadar ® - NR 7100",
        description:
          'The non-contact 80 GHz FMCW radar sensor NivoRadar® NR 7100 with a narrow beam angle of 8° is used in various industrial applications in storage silos, process tanks and IBC containers for continuous level measurement. The free-radiating level transmitter has a compact design with a 1 1/2" process connection (PVDF) and a measuring range of up to 8 m as well as a very fast response time. The food-compliant radar devices are suitable for use in processes in the food industry. The radar level transmitters can be used in aggressive media such as acids, alkalis and solvents as well as in highly viscous liquids and oils.',
        images: [n7100_1, n7100_2, n7100_3, n7100_4],
      },
      {
        title: "NivoRadar® - NR 3100",
        description:
          "The free-radiating radar sensor NivoRadar® 3100 is mainly used in storage silos for level measurement of bulk solids. The 4 ° narrow beam and a measuring range of up to 100 meters make the sensor a compatible solution for a wide range of applications in the field of non-contact measuring technology. The easy to operate display, the Quick Start Wizard and displayed diagnostic data allow simple installation on site.",
        images: [nr3100_1, nr3100_2, nr3100_3, nr3100_4, nr3100_5],
      },
    ],
  },
  {
    category: "Continuous Level Measurement ",
    items: [
      {
        title: "NivoGuide® - NG 8200",
        description:
          "The guided radar sensor NivoGuide® 8200 measures the level of liquids or oils under most extreme process conditions. The extremely robust sensor construction, resistant materials as well as a special reference line extend the field of application of the TDR sensors by high-pressure, high-temperature and saturated steam applications. Thus, temperature ranges from -196 °C ... 450 °C and process pressures up to 400 bar can be covered.",
        images: [ng8200_1, ng8200_2],
      },
    ],
  },
  {
    category: "Level Switches",
    items: [
      {
        title: "Vibrating Fork Switch ",
        description:
          "Vibrating tuning fork switches are point level switches designed based on the vibrating tuning fork principle. These instruments take point level measurement of solids and liquids and can be used in high static bulk powder environments.",
        images: [liquidLevelSwitch],
      },
      {
        title: "Rotonivo® - RN 3001",
        description:
          "The rotating paddle detector Rotonivo® RN 3001 is used in storage and process vessels as a full, demand and empty detector in all bulk solids. It can be configured for process temperatures up to +1100°C and process overpressure up to 10 bar. Buildup or a dust-intensive process environment does not in any way affect the accuracy of the measurement results of the level indicator. In addition, the sensor, which has been developed in accordance with EHEDG guidelines, meets increased hygiene requirements.",
        images: [rn3001_1],
      },
    ],
  },
  {
    category: "Flow & Pizo Meter with telemetry System",
    items: [
      {
        title: "Electromagnetic flowmeter ProcessMaster FEP630",
        description: "Proven to be tough, reliable and incredibly easy to work with, ProcessMaster FEP630 delivers the power to solve your most demanding process applications. This innovative, next generation electromagnetic flowmeter provides a modular transmitter design combined with SmartSensor technology and built-in verification – technical advances that deliver a clear business and performance benefit. Ethernet IP communication increases operational performance and delivers more real-time data for a better decision making. ProcessMaster FEP630 the perfect fit for your application and the no. 1 choice in sectors such as chemical, power, oil & gas, pulp & paper and metals & mining.",
        images: [fep630_1],
      },
      {
        title: "ABB FEW325 6 WATERMASTER ELECTROMAGNETIC FLOW METER",
        description: "WaterMaster's performance adheres to the most stringent global industry standards and is certified to key international approvals. Proven in the toughest applications, Its rugged, robust and buriable sensors eliminate the need of expensive meter chambers. Thereby, WaterMaster flowmeters provide a long, productive and maintenance-free asset life. Take advantage of its innovative and versatile attributes to achieve interoperability within a wide range of asset management systems.",
        images: [few325],
      },
      {
        title: "MF 3000",
        description: "Equipped with the latest microwave technology, the MF 3000 is used to measure the flow of solids in metallic pipelines. All powders, dusts, pellets and granules can be measured reproducibly in a throughput range from a few kg/h to many t/h. MF 3000 is suitable for inline measurements in pneumatic pipelines or in free fall.",
        images: [mf3000],
      },
      {
        title: "HUMY 3000",
        description: "In-line moisture measurement is also possible in batch processes. The fast measuring process with a high resolution allows a quick and easy calibration and accuracy of up to 0.1%. In addition to an automatic temperature compensation and ageing drift, the self-monitoring device also has an integrated data logger, digital output and alarm outputs, and much more. For product- or process changes, different parameters can be stored for up to 24 products or product groups.",
        images: [humy300],
      },
    ],
  },
  {
    category: "Flanges and Fittings",
    items: [
      {
        title: "Flanges and Fittings",
        description: "Flanges contains nickel and iron. It contains low nickel. At very low temperatures, it has a low coefficient of expansion. Invar 36 Bar is a nickel-iron alloy that contains 36% nickel and 64% iron.",
        images: [ flanges_1, flanges_2],
      },
      
    ],
  },
  {
    category: "Flow Meters",
    items: [
      {
        title: "VA 500 - FLOW METER FOR COMPRESSED AIR AND GASES",
        description: "Recording and reducing energy costs and CO2 emissions while increasing the sustainability of any compressed air system. With our VA500, monitoring your consumption and analysing your leakage flows with just one measuring device is possible. Due to its design, it is also ideal for mobile measurements.",
        images: [va500_1, va500_2], // Example array of images
      },
      // Add more products for Category B if needed
    ],
  },
];

const Product = () => {
  const [openCategories, setOpenCategories] = useState([]);

  const toggleCategory = (category) => {
    if (openCategories.includes(category)) {
      setOpenCategories(openCategories.filter((item) => item !== category));
    } else {
      setOpenCategories([...openCategories, category]);
    }
  };

  return (
    <section id="products" className="overflow-hidden text-gray-700">
      <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
        {products.map((category, index) => (
          <div key={index} className="mb-4">
            <h2
              className="cursor-pointer text-lg font-semibold mb-2 flex items-center justify-between bg-blue-400 text-white rounded-md px-4 py-2 hover:bg-blue-500 transition duration-300"
              onClick={() => toggleCategory(category.category)}
            >
              <span>{category.category}</span>
              <svg
                className={`ml-2 h-4 w-4 transform ${
                  openCategories.includes(category.category) ? "rotate-90" : ""
                } transition-transform duration-300`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </h2>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openCategories.includes(category.category) ? "h-auto" : "h-0"
              }`}
            >
              <div className="flex flex-wrap -m-2 mt-2">
                {category.items.map((product, i) => (
                  <ProductSimple product={product} key={i} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
