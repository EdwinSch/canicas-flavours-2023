import { FaRegWindowClose } from "react-icons/fa";

const InfoModal = ({ id, setShowInfo }) => {
  return (
    <div className="info-modal-overlay">
      <p className="info-text">{id}</p>
      <FaRegWindowClose
        onClick={() => setShowInfo(false)}
        className="close-btn"
      />
    </div>
  );
};

export default InfoModal;
