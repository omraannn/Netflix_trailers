import { hidePopup } from "../../redux/popupSlice";
import "./popup.scss";
import { useDispatch } from "react-redux";

const Popup = () => {

    const dispatch = useDispatch();

    const handleClose = (e) => {
        e.preventDefault();
        dispatch(hidePopup());
    };

  return (
    <div id="popup1" className="overlay">
      <div className="popup">
        <h2>Welcome To NX Trailers</h2>
        <a onClick={handleClose}  className="close" href="#">
          &times;
        </a>
        <div className="content">
          <h3 className="section-title">How to Use</h3>
          <ul className="instruction-list">
            <li>
              <span className="step-number">1. </span>Click on the movie to open the
              trailer.
            </li>
            <li>
              <span className="step-number">2. </span>Double-click on it to close the
              trailer.
            </li>
            <li>
              <span className="step-number">3. </span>Triple-click on it to find
              another trailer.
            </li>
          </ul>

          <h3 className="section-title">How to Use on PC</h3>
          <ol className="pc-instruction-list">
            <li>Shift + Scroll to navigate between movies in the same row.</li>
          </ol>

          <h3 className="section-title-end">Hope you enjoy your time</h3>
        </div>
      </div>
    </div>
  );
};

export default Popup;
