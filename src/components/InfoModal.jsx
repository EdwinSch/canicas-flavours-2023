import { FaRegWindowClose } from "react-icons/fa";

const InfoModal = ({ info, setShowInfo }) => {
  return (
    <div className="info-modal-overlay">
      <p className="info-text">{info}</p>
      <FaRegWindowClose
        onClick={() => setShowInfo(false)}
        className="close-btn"
      />
    </div>
  );
};

export default InfoModal;
