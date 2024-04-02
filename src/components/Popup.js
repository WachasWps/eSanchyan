import React from 'react';
import PropTypes from 'prop-types';
import "./popup.css"

const Popup = (props) => {
  const { togglePopup } = props;

  return (
    <div className="popup">
      <div className="popup-inner">
        <span className="popup-close-icon" onClick={togglePopup}>
          X
        </span>
        <h1 className="pop-up-text">{props.heading}</h1>
        <span className="pop-up-text1">{props.case}</span>
        <input
          type="text"
          placeholder={props.textinputPlaceholder}
          className="pop-up-textinput input"
        />
        <span className="pop-up-text2">{props.text}</span>
        <input
          type="text"
          placeholder={props.textinputPlaceholder1}
          className="pop-up-textinput1 input"
        />
        <span className="pop-up-text3">{props.text2}</span>
        <input
          type="text"
          placeholder={props.textinputPlaceholder2}
          className="pop-up-textinput2 input"
        />
        <span className="pop-up-text4">{props.text3}</span>
        <select className="pop-up-select">
          <option value="Option 1" selected>
            Open
          </option>
          <option value="Option 2">Closed</option>
          <option value="Option 3">Pending</option>
        </select>
        <span className="pop-up-text5">{props.text4}</span>
        <input
          type="text"
          placeholder={props.textinputPlaceholder4}
          className="pop-up-textinput3 input"
        />
        <span className="pop-up-text6">{props.text5}</span>
        <input
          type="text"
          placeholder={props.textinputPlaceholder5}
          className="pop-up-textinput4 input"
        />
        <button type="button" className="pop-up-button button" onClick={togglePopup}>
          {props.button}
        </button>
      </div>
    </div>
  );
};

Popup.defaultProps = {
  textinputPlaceholder3: 'Status',
  text: 'Case Name',
  textinputPlaceholder4: 'Date Open',
  textinputPlaceholder1: 'Case Name',
  heading: 'ADD YOUR CASE',
  button: 'ADD CASE',
  textinputPlaceholder: 'Case Number',
  text2: 'Client Name',
  text6: 'Text',
  textinputPlaceholder5: 'Date Closed',
  case: 'Case Number',
  textinputPlaceholder6: 'placeholder',
  text3: 'Status',
  text5: 'Date Closed',
  textinputPlaceholder2: 'Client Name',
  text7: 'Text',
  text1: 'Text',
  text4: 'Date Open',
};

Popup.propTypes = {
  textinputPlaceholder3: PropTypes.string,
  text: PropTypes.string,
  textinputPlaceholder4: PropTypes.string,
  textinputPlaceholder1: PropTypes.string,
  heading: PropTypes.string,
  button: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  text2: PropTypes.string,
  text6: PropTypes.string,
  textinputPlaceholder5: PropTypes.string,
  case: PropTypes.string,
  textinputPlaceholder6: PropTypes.string,
  text3: PropTypes.string,
  text5: PropTypes.string,
  textinputPlaceholder2: PropTypes.string,
  text7: PropTypes.string,
  text1: PropTypes.string,
  text4: PropTypes.string,
};

export default Popup;
