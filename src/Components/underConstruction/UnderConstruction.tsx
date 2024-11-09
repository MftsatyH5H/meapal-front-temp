/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import '../../style/jobsStyle.scss';
import { useNavigate } from 'react-router-dom';

function UnderConstruction() {
  const navigate = useNavigate();
  return (
    <div style={{ height: '60vh' }} className="jobspage">
      <h2 className="jobspage-h2">
        This page is still under
        <span className="highlight"> Development</span>
      </h2>
      <p className="jobs-text">
        Sorry for the inconvenience, Please come back later
      </p>

      <button onClick={() => navigate('/ouroffers')} className="application-button" type="button">
        Go Back
      </button>
    </div>
  );
}
export default UnderConstruction;
