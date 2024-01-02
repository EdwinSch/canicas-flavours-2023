import { GoInfo } from "react-icons/go";
import { FaChevronUp } from "react-icons/fa6";
import { useState } from "react";

const Item = ({
  id,
  title,
  type,
  img,
  smaak,
  druiven,
  rijping,
  prijs,
  uitverkocht,
  info,
}) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <article className="item-container">
        {/* IMG + Description */}
        <div className="product-wrapper">
          {/* Product image*/}
          <img src={img} className="product-img" alt="item image" />

          {/* Product description */}
          <div className="description-wrapper">
            <h2>{title}</h2>
            <p className="type">{type}</p>
            <p className="sub-text">
              <span className="emph">Smaak: </span>
              {smaak}
            </p>
            <p className="sub-text capitalize">
              <span className="emph">Blend: </span>
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
                <span className="strike">&euro; {prijs}</span>
                <span className="no-stock">Uitverkocht!</span>
              </p>
            ) : (
              <p className="price">
                <span className="emph">Prijs per fles: </span>
                &euro; {prijs}
              </p>
            )}

            {/* Info button */}
            <button
              onClick={() => setShowInfo(!showInfo)}
              className="info-btn"
              type="button"
            >
              <span className="icon">
                <GoInfo />
              </span>
              {showInfo ? "Verberg info" : "Toon info"}
            </button>
          </div>
        </div>

        {/* INFO */}
        {showInfo && (
          <div className="info-wrapper">
            <p className="info-txt">{info}</p>
            <div className="btn-wrapper">
              <button
                onClick={() => setShowInfo(false)}
                className="close-btn"
                type="button"
              >
                <FaChevronUp />
              </button>
            </div>
          </div>
        )}
      </article>
    </>
  );
};

export default Item;
