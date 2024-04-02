import React, { useState } from 'react';
import Popup from './Popup'; // Import the Popup component
import './caseup.css';

const CaseManagement = (props) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="case-management-container">
      <div className="case-management-container01">
        <span className="case-management-text">
          <span>Case Management</span>
          <br></br>
        </span>
        <button type="button" onClick={togglePopup} className="case-management-button button">
          + New Case
        </button>
      </div>
      
      {showPopup && (
        <Popup togglePopup={togglePopup} /> // Pass togglePopup as a prop to Popup
      )}
      <div className="case-management-container02">
        <div className="case-management-caseno">
          <span className="case-management-text03">Case no.</span>
          <span className="case-management-text04">NG -1</span>
          <span className="case-management-text05">NG -2</span>
          <span className="case-management-text06">NG -3</span>
          <span className="case-management-text07">NG -4</span>
          <span className="case-management-text08">NG -5</span>
          <span className="case-management-text09">NG -6</span>
          <span className="case-management-text10">NG -7</span>
          <span className="case-management-text11">NG -8</span>
        </div>
        <div className="case-management-casename">
          <span className="case-management-text12">
            Case Name                                              
          </span>
          <span className="case-management-text13">
            Roe v. Wade Women&apos;s Health Clinic
          </span>
          <span className="case-management-text14">State v. Anderson:</span>
          <span className="case-management-text15">
            Smithers v. Johnson County School Board
          </span>
          <span className="case-management-text16">
            Johnson Estate v. Taxation Authority
          </span>
          <span className="case-management-text17">
            Acme Corporation v. Widget Industries
          </span>
          <span className="case-management-text18">State v. Davis</span>
          <span className="case-management-text19">
            Johnson Family Trust v. Estate of Brown
          </span>
          <span className="case-management-text20">
            Town of Springfield v. Riverfront Developers
          </span>
        </div>
        <div className="case-management-clientname">
          <span className="case-management-text21">
            Client/Lawyer Name                                            
          </span>
          <span className="case-management-text22">
            Mary Johnson                                           
          </span>
          <span className="case-management-text23">
            Jennifer White                                             
          </span>
          <span className="case-management-text24">
            Lisa Martinez                                             
          </span>
          <span className="case-management-text25">
            David Williams                                         
          </span>
          <span className="case-management-text26">
            John Smith                                         
          </span>
          <span className="case-management-text27">Karen Taylor</span>
          <span className="case-management-text28">
            James Anderson                                            
          </span>
          <span className="case-management-text29">
            Sarah Davis                                            
          </span>
        </div>
        <div className="case-management-clientstatus">
          <span className="case-management-text30">Status</span>
          <span className="case-management-text31">Closed</span>
          <span className="case-management-text32">Pending</span>
          <span className="case-management-text33">Pending</span>
          <span className="case-management-text34">Closed</span>
          <span className="case-management-text35">Pending</span>
          <span className="case-management-text36">Closed</span>
          <span className="case-management-text37">Closed</span>
          <span className="case-management-text38">
            <span>Pending</span>
            <br></br>
          </span>
        </div>
        <div className="case-management-case-dateopen">
          <span className="case-management-text41">Date Open</span>
          <span className="case-management-text42">12.08.2020</span>
          <span className="case-management-text43">20.01.2022</span>
          <span className="case-management-text44">18.04.2022</span>
          <span className="case-management-text45">06.01.2023</span>
          <span className="case-management-text46">15.02.2023</span>
          <span className="case-management-text47">21.04.2023</span>
          <span className="case-management-text48">05.06.2023</span>
          <span className="case-management-text49">14.07.2023</span>
        </div>
        <div className="case-management-casedateclosed">
          <span className="case-management-text50">Date Closed</span>
          <span className="case-management-text51">13.11.2023</span>
          <span className="case-management-text52">25.09.2022</span>
          <span className="case-management-text53">-</span>
          <span className="case-management-text54">-</span>
          <span className="case-management-text55">22.06.2023</span>
          <span className="case-management-text56">23.07.2023</span>
          <span className="case-management-text57">-</span>
          <span className="case-management-text58">-</span>
        </div>
        <div className="case-management-casebutton">
          <div className="case-management-container03">
            <button type="button" className="case-management-button01 button">
              View 
            </button>
            <button type="button" className="button">
              Upload
            </button>
          </div>
          <div className="case-management-container04">
            <button type="button" className="case-management-button03 button">
              View 
            </button>
            <button type="button" className="case-management-button04 button">
              Upload
            </button>
          </div>
          <div className="case-management-container05">
            <button type="button" className="case-management-button05 button">
              View 
            </button>
            <button type="button" className="case-management-button06 button">
              Upload
            </button>
          </div>
          <div className="case-management-container06">
            <button type="button" className="case-management-button07 button">
              View 
            </button>
            <button type="button" className="case-management-button08 button">
              Upload
            </button>
          </div>
          <div className="case-management-container07">
            <button type="button" className="case-management-button09 button">
              View 
            </button>
            <button type="button" className="case-management-button10 button">
              Upload
            </button>
          </div>
          <div className="case-management-container08">
            <button type="button" className="case-management-button11 button">
              View 
            </button>
            <button type="button" className="case-management-button12 button">
              Upload
            </button>
          </div>
          <div className="case-management-container09">
            <button type="button" className="case-management-button13 button">
              View 
            </button>
            <button type="button" className="case-management-button14 button">
              Upload
            </button>
          </div>
          <div className="case-management-container10">
            <button type="button" className="case-management-button15 button">
              View 
            </button>
            <button type="button" className="case-management-button16 button">
              Upload
            </button>
          </div>
          <div className="case-management-container11">
            <button type="button" className="case-management-button17 button">
              View 
            </button>
            <button type="button" className="case-management-button18 button">
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseManagement
