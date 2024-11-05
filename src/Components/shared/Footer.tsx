/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import '../../style/footer.scss';
import { Divider } from 'antd';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();
  return (
  // <div className="footer-container">
  //   <div className="footer-content">

  //     <div className="footer-icon-and-links">
  //       <div className="footer-icon">
  //         <img src="Meapal logo new 2-04.png" alt="Footer Icon" />

  //         <p>
  //           Correlating data means making it
  //           <br />
  //           {' '}
  //           efficient, honest, compliant,
  //           <br />
  //           {' '}
  //           structured, indexed &
  //           <br />
  //           {' '}
  //           homogeneous.
  //         </p>
  //       </div>

  //       <div className="footer-section">
  //         <h3>Company</h3>
  //         <ul>
  //           <li><a href="#about">About Us</a></li>
  //           <li><a href="#why-choose-us">Why Choose Us</a></li>
  //           <li><a href="#know-how">Know How</a></li>
  //           <li><a href="#customers">Customers</a></li>
  //         </ul>
  //       </div>

  //       <div className="footer-section">
  //         <h3>Resources</h3>
  //         <ul>
  //           <li><a href="#privacy-policy">Privacy Policy</a></li>
  //           <li><a href="#terms">Terms and Conditions</a></li>
  //           <li><a href="#blog">Blog</a></li>
  //           <li><a href="#contact">Contact Us</a></li>
  //         </ul>
  //       </div>

  //       <div className="footer-section">
  //         <h3>Product</h3>
  //         <ul>
  //           <li><a href="#project-management">Project Management</a></li>
  //           <li><a href="#time-tracker">Time Tracker</a></li>
  //           <li><a href="#time-schedule">Time Schedule</a></li>
  //           <li><a href="#lead-generate">Lead Generate</a></li>
  //           <li><a href="#remote-collaboration">Remote Collaboration</a></li>
  //         </ul>
  //       </div>
  //     </div>

  //     <div className="footer-contact-info">
  //       <p>
  //         Contact us:
  //         <br />
  //         {' '}
  //         <strong>+33 (0)1 58 87 32 00 </strong>
  //       </p>
  //     </div>
  //     <div className="footer-contact-info2">
  //       <p>
  //         Where to find us ?:
  //         <br />
  //         {' '}
  //         <strong>
  //           Al Lasilki, Ezbet Fahmy, Maadi,
  //           <br />
  //           {' '}
  //           Cairo Governorate 11435
  //           {' '}
  //         </strong>
  //       </p>
  //     </div>
  //     <div className="footer-divider">
  //       <hr />
  //       {' '}
  //       <hr />
  //       <p><small>Copyright @MEAPAL2023</small></p>
  //       <img src="Social (2).png" alt="Small Icon" className="small-icon" />

    //     </div>
    //   </div>
    // </div>
    <div className="container-fluid footer">
      <div className="row ms-4 me-4 p-2">
        <div className="col-12 col-sm-3 mt-2 mb-0">
          <img className="navbar-logo" alt="Logo" src="/public/meapal-logo-white.png" />
          <p className="p-footer mt-3">
            Correlating data means making it efficient, honest,
            compliant, structured, indexed & homogeneous.
          </p>
        </div>
        <div className="col-12 col-sm-3 mt-3">
          <p className="list-title">
            Company

          </p>
          <ul>
            <li>About Us</li>
            <li>Why Choose Us</li>
            <li>Know How</li>
            <li>Customers</li>
          </ul>
        </div>
        <div className="col-12 col-sm-3 mt-3">
          <p className="list-title">
            Resources
          </p>
          <ul>
            <li onClick={() => { navigate('/privacy-policy'); }}>Privacy Policy</li>
            <li onClick={() => { navigate('/terms-and-conditions'); }}>Terms and Condition</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="col-12 col-sm-3 mt-3">
          <p className="list-title">
            Product
          </p>
          <ul>
            <li>Project management</li>
            <li>Time tracker</li>
            <li>Time schedule</li>
            <li>Lead generate</li>
            <li>Remote Collaboration</li>
          </ul>
        </div>
      </div>
      <div className="row ms-4 me-4 p-2 mt-0">
        <div className="col-12 col-sm-4">
          <p className="p-contact-us mb-0">
            Contact us :
          </p>
          <span className="p-number mt-0">
            +33 (0)1 58 87 32 00
          </span>
        </div>
        <div className="col-12 col-sm-4">
          <p className="p-contact-us mb-0">
            Where to find us ?
          </p>
          <span className="p-number mt-0">
            Degla Plaza, Street 199, Maadi, Cairo Governorate 11435
          </span>
        </div>
        <Divider className="mt-3 mb-0" plain style={{ borderColor: 'white', color: 'white' }}>Copyright @MEAPAL2023</Divider>
      </div>

    </div>
  );
}

export default Footer;
