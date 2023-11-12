import assortment from "../data";
import Item from "./Item";

const Grid = () => {
  return (
    <section className="assortment-container">
      {assortment.map((item) => {
        return <Item key={item.id} {...item} />;
      })}
    </section>
  );
};

export default Grid;
