/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import '../../style/jobsStyle.scss';

function JobsPage() {
  const openLinkInNewWindow = (url: string | URL | undefined) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <div className="jobspage">
      <h2 className="jobspage-h2">
        News &
        <span className="highlight"> Events</span>
      </h2>

      <h2 className="jobspage-h2">
        TECHNICAL DEBT AND SOFTWARE COMPOSITION
        ANALYSIS: "A MULTI DISCIPLINARY APPROACH"
      </h2>
      <p style={{ fontWeight: 'bold' }} className="jobs-text ms-2">
        4 June 2024
      </p>
      <p className="jobs-text">
        Technical debt (TD) is a critical aspect of software development with
        significant economic implications. TD represents shortcuts taken during
        development that create future maintenance burdens, impacting long-term
        costs. This conference gathers scientific, academic and IT industrial stake
        holders to deep dig into the Technical Debt with its negative impact on the it
        market growth and digital integration post COVID. Also this conference aims
        to bring together researchers and practitioners from various computer
        science (CS) majors to explore the intersection of TD, SCA, and their
        economic considerations within a multi-disciplinary framework.
      </p>

      <button onClick={() => openLinkInNewWindow('http://10.10.99.13:4892/')} className="application-button" type="button">
        Go to Website
      </button>
    </div>
  );
}
export default JobsPage;
