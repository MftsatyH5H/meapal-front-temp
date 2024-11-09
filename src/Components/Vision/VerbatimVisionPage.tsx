/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import '../../style/visionStyle.scss';
import Slider from 'react-slick';

function VerbatimVisionPage() {
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
        <h2 className="homepage-responsive-h2">
          Customer We
          <span className="highlight"> proudly </span>
          Worked With...
        </h2>
        <p style={{ fontWeight: 'bold', fontSize: 'large' }} className="mt-4">
          Professional Services
        </p>
      </div>
      <Slider {...settings}>
        <div className="logo-container">
          <img className="logo-img mt-3" src="havas-logo.svg" alt="ibm-logo" />
        </div>
        <div className="logo-container">
          <img className="logo-img" src="bollore-logo.png" alt="ibm-logo" />
        </div>
        <div className="logo-container">
          <img className="logo-img" src="edf-logo.png" alt="ibm-logo" />
        </div>
        <div className="logo-container">
          <img className="logo-img mt-4" src="sonepar-logo.svg" alt="ibm-logo" />
        </div>
        <div className="logo-container">
          <img className="logo-img mt-3" src="damartex-logo.png" alt="ibm-logo" />
        </div>
      </Slider>
      <div className="homepage-responsive">
        <p style={{ fontWeight: 'bold', fontSize: 'large' }} className="mt-4">
          Time and Material
        </p>
      </div>
      <Slider {...settings}>
        <div className="logo-container">
          <img className="logo-img" src="disneyland-logo.svg" alt="ibm-logo" />
        </div>
        <div className="logo-container">
          <img className="logo-img mt-4" src="airbus-logo.svg" alt="ibm-logo" />
        </div>
        <div className="logo-container">
          <img className="logo-img mt-4" src="safran-logo.png" alt="ibm-logo" />
        </div>
        <div className="logo-container">
          <img className="logo-img mt-4" src="farmatome-logo.svg" alt="ibm-logo" />
        </div>
        <div className="logo-container">
          <img style={{ marginTop: '1.9rem' }} className="logo-img" src="thales-logo.png" alt="ibm-logo" />
        </div>
      </Slider>
      <div className="homepage-responsive">
        <p style={{ fontWeight: 'bold', fontSize: 'large' }} className="mt-4">
          SM / Cloud
        </p>
      </div>
      <Slider {...settings}>
        <div className="logo-container">
          <img className="logo-img mt-3" src="havas-logo.svg" alt="ibm-logo" />
        </div>
        <div className="logo-container">
          <img className="logo-img" src="axway_logo.png" alt="ibm-logo" />
        </div>
        <div className="logo-container">
          <img className="logo-img" src="cafesrichard-logo.png" alt="ibm-logo" />
        </div>
        <div className="logo-container">
          <img className="logo-img mt-4" src="airbus-logo.svg" alt="ibm-logo" />
        </div>
        <div className="logo-container">
          <img className="logo-img" src="Computacenter-logo.png" alt="ibm-logo" />
        </div>
      </Slider>
      <div className="homepage-responsive">
        <p style={{ fontWeight: 'bold', fontSize: 'large' }} className="mt-4">
          TMA / IA
        </p>
      </div>
      <Slider {...settings}>
        <div className="logo-container">
          <img className="logo-img" src="fayat-logo.png" alt="ibm-logo" />
        </div>
        <div className="logo-container">
          <img className="logo-img mt-4" src="greenyellow-logo.png" alt="ibm-logo" />
        </div>
        <div className="logo-container">
          <img style={{ width: '100px', marginLeft: '1.5rem' }} className="logo-img" src="somme-logo.png" alt="ibm-logo" />
        </div>
        <div className="logo-container">
          <img className="logo-img mt-3" src="edf-logo.png" alt="ibm-logo" />
        </div>
        <div className="logo-container">
          <img className="logo-img mt-5" src="sonepar-logo.svg" alt="ibm-logo" />
        </div>
      </Slider>
    </div>
  );
}
export default VerbatimVisionPage;
