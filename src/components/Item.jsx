import { FaCircleInfo } from "react-icons/fa6";

const Item = ({
  id,
  title,
  type,
  img,
  doc,
  smaak,
  druiven,
  rijping,
  prijs,
  uitverkocht,
}) => {
  return (
    <article className="item-wrapper">
      {/* Product image*/}
      <img src={img} className="product-img" alt="item image" />

      {/* Product description */}
      <div className="description-container">
        <h2>{title}</h2>
        <p className="type">{type}</p>
        <p className="sub-text">
          <span className="emph">Smaak: </span>
          {smaak}
        </p>
        <p className="sub-text capitalize">
          <span className="emph">Druiven: </span>
          {druiven}
        </p>
        <p className="sub-text">
          <span className="emph">Rijping: </span>
          {rijping}
        </p>

        {/* Stock state */}
        {uitverkocht ? (
          <p className="price">
            <span className="emph">Prijs per fles: </span>
            <span className="no-stock">Uitverkocht</span>
          </p>
        ) : (
          <p className="price">
            <span className="emph">Prijs per fles: </span>
            &euro; {prijs}
          </p>
        )}

        {/* Stock state */}
        <button className="info-btn">
          <FaCircleInfo />
        </button>
      </div>
    </article>
  );
};

export default Item;
