/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
import React from 'react';
import '../../style/visionStyle.scss';
import Slider from 'react-slick';

function OurVisionPage() {
  const settings = {
    className: 'center',
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 5,
    swipeToSlide: true,
  };
  return (
    <div className="visionpage">

      <div className="homepage-responsive">
        <h2 className="homepage-responsive-h2 mb-5">
          Meapal
          <span className="highlight"> Partners </span>
        </h2>
      </div>
      <Slider {...settings}>
        <div className="logo-container">
          <img className="logo-img mt-3" src="microsoft-logo.png" alt="ibm-logo" />
        </div>
        <div className="logo-container">
          <img className="logo-img" src="ibm-logo.png" alt="ibm-logo" />
        </div>
        <div className="logo-container">
          <img className="logo-img mt-1" src="citrix-logo.svg" alt="ibm-logo" />
        </div>
        <div className="logo-container">
          <img className="logo-img" src="veeam-logo.svg" alt="ibm-logo" />
        </div>
        <div className="logo-container">
          <img className="logo-img mt-4" src="netapp-logo.svg" alt="ibm-logo" />
        </div>
      </Slider>
      <div className="homepage-responsive">
        <h2 className="homepage-responsive-h2 mb-5">
          <p style={{ fontWeight: 'bold', fontSize: 'large' }} className="mt-4">
            Complex & convergent Infrastructures

          </p>
        </h2>
      </div>
      <Slider {...settings}>
        <div className="logo-container">
          <img className="logo-img mt-3" src="lenovo-logo.svg" alt="ibm-logo" />
        </div>
        <div className="logo-container">
          <img className="logo-img" src="cisco-logo.png" alt="ibm-logo" />
        </div>
        <div className="logo-container">
          <img className="logo-img mt-1" src="aws-logo.png" alt="ibm-logo" />
        </div>
        <div className="logo-container">
          <img className="logo-img" src="azure-logo.svg" alt="ibm-logo" />
        </div>
        <div className="logo-container">
          <img className="logo-img mt-4" src="netapp-logo.svg" alt="ibm-logo" />
        </div>
      </Slider>
      <div className="homepage-responsive">
        <h2 className="homepage-responsive-h2 mb-5">
          <p style={{ fontWeight: 'bold', fontSize: 'large' }} className="mt-4">
            Application & User experience

          </p>
        </h2>
      </div>
      <div className="logo-container">
        <img className="logo-img mt-3" src="office365-logo.png" alt="ibm-logo" />
      </div>
      <div className="homepage-responsive">
        <h2 className="homepage-responsive-h2 mb-5">
          <p style={{ fontWeight: 'bold', fontSize: 'large' }} className="mt-4">
            Data Management

          </p>
        </h2>
      </div>
      <Slider {...settings}>
        <div className="logo-container">
          <img className="logo-img mt-3" src="oracle-logo.svg" alt="ibm-logo" />
        </div>
        <div className="logo-container">
          <img className="logo-img" src="ibm-logo.png" alt="ibm-logo" />
        </div>
        <div className="logo-container">
          <img className="logo-img mt-3" src="oracle-logo.svg" alt="ibm-logo" />
        </div>
        <div className="logo-container">
          <img className="logo-img" src="ibm-logo.png" alt="ibm-logo" />
        </div>
        <div className="logo-container">
          <img className="logo-img mt-3" src="oracle-logo.svg" alt="ibm-logo" />
        </div>
        <div className="logo-container">
          <img className="logo-img" src="ibm-logo.png" alt="ibm-logo" />
        </div>
      </Slider>
      <div className="homepage-responsive">
        <h2 className="homepage-responsive-h2 mb-5">
          <p style={{ fontWeight: 'bold', fontSize: 'large' }} className="mt-4">
            Cloud & Power Systems

          </p>
        </h2>
      </div>
      <Slider {...settings}>
        <div className="logo-container">
          <img className="logo-img mt-3" src="precisely-logo.svg" alt="ibm-logo" />
        </div>
        <div className="logo-container">
          <img className="logo-img" src="ibm-logo.png" alt="ibm-logo" />
        </div>
        <div className="logo-container">
          <img className="logo-img mt-3" src="oracle-logo.svg" alt="ibm-logo" />
        </div>
        <div className="logo-container">
          <img className="logo-img" src="ibm-logo.png" alt="ibm-logo" />
        </div>
        <div className="logo-container">
          <img className="logo-img mt-3" src="precisely-logo.svg" alt="ibm-logo" />
        </div>
      </Slider>
    </div>
  );
}
export default OurVisionPage;
