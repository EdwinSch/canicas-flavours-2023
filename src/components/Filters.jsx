import assortment from "../data";

const Filters = ({ setActiveData }) => {
  // Get brands from data
  const getBrands = assortment.map((brand) => brand.merklijn);
  // Reduce brands to singles set
  const reduceBrands = new Set(getBrands);
  // Convert new Set to Array of buttons
  const filterBtnsSet = ["alle cava", ...reduceBrands];

  const filterBrands = (brand) => {
    if (brand === "alle cava") {
      setActiveData(assortment);
      return;
    }

    // Filter by passed category && update data state
    const newItems = assortment.filter((item) => {
      return item.merklijn === brand;
    });
    setActiveData(newItems);
  };

  return (
    <section className="filters-container">
      <div className="btns-wrapper">
        {filterBtnsSet.map((button, index) => {
          return (
            <button
              onClick={() => filterBrands(button)}
              className="filter-btn"
              key={index}
              type="button"
            >
              {button}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Filters;
