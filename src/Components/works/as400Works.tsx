/* eslint-disable max-len */
import React from 'react';
import '../../style/visionStyle.scss';

function ASWorks() {
  return (
    <div className="visionpage">
      <div className="proj mb-2">
        <div className="proj-titel-container"><h3 className="proj-title">AS400 Support Services</h3></div>
      </div>

      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
        Operating
        <span className="highlight"> System</span>
      </h3>
      <p className="vision-text mb-3">
        We offer assistance in the installation, configuration, and maintenance of operating systems for AS400 servers. Our team ensures that your system is properly set up for optimal performance and reliability. We also provide ongoing support for routine maintenance tasks to keep your operating system running smoothly and securely.
      </p>

      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
        Software Installation and
        <span className="highlight"> Support</span>
      </h3>
      <p className="vision-text mb-3">
        Our team provides comprehensive support for installing and configuring software applications on AS400 systems. Whether you're setting up a new application or troubleshooting an existing one, we are equipped to assist with all aspects of software deployment and issue resolution. We help ensure that your applications run seamlessly and meet your business needs.
      </p>

      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
        Performance
        <span className="highlight"> Tuning</span>
      </h3>
      <p className="vision-text mb-3">
        We specialize in performance tuning for AS400 servers. Our experts analyze system resources, identify performance bottlenecks, and implement optimizations to enhance the overall performance of your system. By fine-tuning configurations and optimizing resources, we help your AS400 server operate at its peak efficiency.
      </p>

      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
        Backup and
        <span className="highlight"> Recovery</span>
      </h3>
      <p className="vision-text mb-3">
        Our backup and recovery services ensure that your critical data is always protected. In the event of system failure or data loss, we help you restore your data quickly and efficiently. We work with you to design a reliable backup strategy and recovery plan that minimizes downtime and protects your business operations.
      </p>

      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
        Security and
        <span className="highlight"> Compliance</span>
      </h3>
      <p className="vision-text mb-3">
        We help ensure that your AS400 server is secure and compliant with the latest industry standards and regulations. Our team conducts security assessments, implements necessary security measures, and ensures compliance with relevant guidelines to protect your data and maintain regulatory standards.
      </p>
    </div>
  );
}
export default ASWorks;
