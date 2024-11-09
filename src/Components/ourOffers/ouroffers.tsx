/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import '../../style/ouroffers.scss';
import { useNavigate } from 'react-router-dom';

function OurOffers() {
  const navigate = useNavigate();
  return (
    <div className="offerspage text-center">
      <h2 className="offerspage-h2 text-center">
        <span className="highlight"> Industries</span>
      </h2>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <div onClick={() => navigate('/underConstruction')} className="card" style={{ width: '18rem' }}>
              <img src="predictive-maintenance-1.png" className="card-img-top industry-card-img" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">Predictive Maintenance & Quality Control</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div onClick={() => navigate('/underConstruction')} className="card" style={{ width: '18rem' }}>
              <img src="optimzation.jpg" className="card-img-top industry-card-img" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">Process Optimization & Automation</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div onClick={() => navigate('/underConstruction')} className="card" style={{ width: '18rem' }}>
              <img src="monitoring.jpg" className="card-img-top industry-card-img" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">Real-Time Tracking & Monitoring</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 col-md-4">
            <div onClick={() => navigate('/underConstruction')} className="card" style={{ width: '18rem' }}>
              <img src="anomaly.jpg" className="card-img-top industry-card-img" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">Anomaly Detection</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div onClick={() => navigate('/underConstruction')} className="card" style={{ width: '18rem' }}>
              <img src="security.jpg" className="card-img-top industry-card-img" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">Safety & Security</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div onClick={() => navigate('/underConstruction')} className="card" style={{ width: '18rem' }}>
              <img src="cars.jpg" className="card-img-top industry-card-img" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">Car/Trucks Related Products</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 col-md-4">
            <div onClick={() => navigate('/underConstruction')} className="card" style={{ width: '18rem' }}>
              <img src="marketing.jpg" className="card-img-top industry-card-img" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">Marketing</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div onClick={() => navigate('/underConstruction')} className="card" style={{ width: '18rem' }}>
              <img src="hr.jpg" className="card-img-top industry-card-img" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">Human Resources</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div onClick={() => navigate('/underConstruction')} className="card" style={{ width: '18rem' }}>
              <img src="bank.jpg" className="card-img-top industry-card-img" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">Financial / Banking Services</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 col-md-4">
            <div onClick={() => navigate('/underConstruction')} className="card" style={{ width: '18rem' }}>
              <img src="education.jpg" className="card-img-top industry-card-img" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">Educational</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div onClick={() => navigate('/underConstruction')} className="card" style={{ width: '18rem' }}>
              <img src="service.jpg" className="card-img-top industry-card-img" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">Service Management</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div onClick={() => navigate('/underConstruction')} className="card" style={{ width: '18rem' }}>
              <img src="agriculture.jpg" className="card-img-top industry-card-img" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">Agricultural</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 col-md-4">
            <div onClick={() => navigate('/underConstruction')} className="card" style={{ width: '18rem' }}>
              <img src="healthcare.jpg" className="card-img-top industry-card-img" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">Healthcare</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div onClick={() => navigate('/underConstruction')} className="card" style={{ width: '18rem' }}>
              <img src="nlp.jpg" className="card-img-top industry-card-img" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">NLP & LLM</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div onClick={() => navigate('/underConstruction')} className="card" style={{ width: '18rem' }}>
              <img src="iot.jpg" className="card-img-top industry-card-img" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">Smart Internet of things</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurOffers;
