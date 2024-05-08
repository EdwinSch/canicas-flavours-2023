import assortment from "../data";
import Item from "./Item";
import Filters from "./Filters";
import GeneralInfo from "../components/GeneralInfo";
import { useState } from "react";

const Grid = () => {
  // Set full assortment data on load
  const [activeData, setActiveData] = useState(assortment);

  return (
    <>
      <p className="viewport-error">
        Please view this site on a bigger window or device.
      </p>
      <h1>Assortiment 2024</h1>

      {/* Filter btns */}
      <Filters setActiveData={setActiveData} />

      {/* Grid map */}
      <section className="assortment-container">
        {activeData.map((item) => {
          return <Item key={item.id} {...item} />;
        })}
      </section>
      <GeneralInfo />
    </>
  );
};

export default Grid;
