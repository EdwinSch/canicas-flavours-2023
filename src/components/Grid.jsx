import assortment from "../data";
import Item from "./Item";

import GeneralInfo from "../components/GeneralInfo";

const Grid = () => {
  return (
    <>
      <p className="viewport-error">
        Please view this site on a bigger window or device.
      </p>
      <h1>december assortiment 2023</h1>
      {/* Grid map */}
      <section className="assortment-container">
        {assortment.map((item) => {
          return <Item key={item.id} {...item} />;
        })}
      </section>
      <GeneralInfo />
    </>
  );
};

export default Grid;
