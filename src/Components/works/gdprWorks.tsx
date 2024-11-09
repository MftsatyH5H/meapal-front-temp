/* eslint-disable max-len */
import React from 'react';
import '../../style/visionStyle.scss';

function GdprWorks() {
  return (
    <div className="visionpage">
      <div className="proj mb-2">
        <div className="proj-titel-container"><h3 className="proj-title">GDPR Data Protection Services</h3></div>
      </div>
      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
        Data and Inventory
        <span className="highlight"> Planning</span>
      </h3>
      <p className="vision-text mb-3">
        Data and inventory mapping services help businesses identify and plan their data flows while creating a comprehensive inventory of personal data.
      </p>
      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
        Data
        <span className="highlight"> Protection Officer </span>
        (DPO)
      </h3>
      <p className="vision-text mb-3">
        We provide Data Protection Officer (DPO) as a service to support organizations in meeting their data protection obligations. Our experienced DPOs act as advisors and intermediaries, ensuring compliance with data protection regulations such as GDPR. They oversee data handling practices, manage risk assessments, and provide training to staff. By outsourcing DPO responsibilities to us, businesses can focus on their core operations while maintaining a robust and compliant data protection framework.
      </p>
      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
        Data Protection
        <span className="highlight"> Impact Assessments </span>
        (DPIAs)

      </h3>
      <p className="vision-text mb-3">
        DPIA services assist in identifying and assessing risks associated with data processing activities and implementing appropriate preventative measures.
      </p>
    </div>
  );
}
export default GdprWorks;
