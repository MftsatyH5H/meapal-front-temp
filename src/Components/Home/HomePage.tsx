/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../../style/homePage.scss';
import { useTranslation } from 'react-i18next';
import '../../languages/i18n.js';

function HomePage() {
  const { t } = useTranslation();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="container-fluid">
        <div className="homepage-responsive">
          <p className="homepage-responsive-text">
            {t('dataScienceParagraph')}
          </p>
          <h2 className="homepage-responsive-h2">
            {t('futureOfWorld')}
            <span className="highlight">
              {' '}
              {t('linked')}
              {' '}
            </span>
            {t('toIntelligence')}
          </h2>
          <p className="homepage-responsive-text">
            “
            {t('visionParagraph')}
            ”
          </p>
          <button type="button" className="vision-button">{t('meapalVision')}</button>
          <p className="homepage-responsive-text mt-4">{t('homeKnowHow')}</p>
          <h2 className="homepage-responsive-h2">
            <span className="title-highlight">
              {t('meapal')}
              {' '}
            </span>
            <span className="highlight"> Values </span>
          </h2>
        </div>
        <div className="homepage">
          <main className="homepage-content">
            <div className="cards-container">
              <div className="card purple-card">
                <h3 className="card-title">{t('performanceAndInnovation')}</h3>
                <p className="card-subtitle">Our commitment to Performance & Innovation fuels growth, delivering advanced solutions that drive success.</p>
                <span className="card-link">See more</span>
              </div>
              <div className="card red-card">
                <h3 className="card-title">Skill & Team cohesion</h3>
                <p className="card-subtitle">Skill & Team Cohesion empowers us to collaborate seamlessly, leveraging expertise for outstanding results.</p>
                <span className="card-link">See more</span>
              </div>
              <div className="card purple-card">
                <h3 className="card-title">Customer Satisfaction</h3>
                <p className="card-subtitle">Customer Satisfaction is at the heart of our mission, driving us to exceed expectations and build lasting trust.</p>
                <span className="card-link">See more</span>
              </div>
            </div>
          </main>
        </div>
        <div className="homepage-responsive">
          <h2 className="homepage-responsive-h2 mt-3">
            <span className="title-highlight">Meapal </span>
            <span className="highlight"> Services </span>
          </h2>
        </div>
      </div>

      <div className="homepage">
        <main className="homepage-content">
          <div className="text-sections">
            <div className="text-row">
              <div className="text-block">
                <h3 className="text-title red-text">Software Development</h3>
                <p className="text-description">
                  Meapal Software Development Services include tailored Custom Software Development, impactful Web Development for websites and e-commerce, and Mobile Application Development for iOS and Android. We also offer Cloud Computing Services for scalable cloud hosting, application development, and secure data storage—empowering businesses to leverage technology for growth.
                </p>
              </div>
              <div className="text-block">
                <h3 className="text-title purple-text">Legacy Systems Modernization</h3>
                <p className="text-description">
                  Meapal Legacy Systems Modernization service updates outdated systems using strategies like Replatforming, Rebuilding, Redesigning, Replacement, and Integration. These methods ensure older systems stay efficient, user-friendly, and compatible with new technologies, keeping businesses competitive and adaptable.
                </p>
              </div>
            </div>
            <div className="horizontal-divider" />
            <div className="text-row">
              <div className="text-block">
                <h3 className="text-title purple-text">Data Science Services</h3>
                <p className="text-description">
                  Meapal Data Science Services apply statistical, mathematical, and computational techniques to uncover insights and knowledge from data. These services include Data Analysis, Predictive Modeling, Machine Learning, Data Visualization, and Data Engineering to support informed decision-making and drive innovation.
                </p>
              </div>
              <div className="text-block">
                <h3 className="text-title red-text">Cloud Services</h3>
                <p className="text-description">
                  Meapal Cloud Services include hybrid, public, private, and on-premise solutions, covering servers, databases, storage, software, and more, supported by five data centers. These services can handle a wide range of applications and workloads, from basic storage and backup to advanced data analytics and machine learning.
                </p>
              </div>
            </div>
            <div className="horizontal-divider" />
            <div className="text-row">
              <div className="text-block">
                <h3 className="text-title red-text">GDPR Data Protection Services</h3>
                <p className="text-description">
                  Meapal GDPR Data Protection Services help businesses ensure compliance and protect personal data through several key offerings. We assist with Data Mapping and Inventory to identify and document data flows, conduct Data Protection Impact Assessments (DPIAs) to assess risks related to data processing activities, and provide Data Protection Officer (DPO) as a Service for expert guidance in data protection management.
                </p>
              </div>
              <div className="text-block">
                <h3 className="text-title purple-text">Cybersecurity Services</h3>
                <p className="text-description">
                  Meapal Cybersecurity Services offer robust protection against cyber threats through Risk Assessments, Security Planning, and continuous monitoring for breaches. We respond quickly to incidents with Incident Response Plans, analyze Threat Intelligence, and conduct regular Security Testing and audits. Additionally, we provide Security Awareness Training for employees, ensure compliance with regulations, and design secure system architectures.
                </p>
              </div>
            </div>
            <div className="horizontal-divider" />
            <div className="text-row">
              <div className="text-block">
                <h3 className="text-title red-text">SAP Services</h3>
                <p className="text-description">
                  Meapal SAP Services offer comprehensive support for organizations using SAP systems, including Technical Support for installation and maintenance, Application Support, and assistance with Upgrades and Migrations. We optimize system performance, develop Custom Solutions tailored to specific needs, and provide Training and Knowledge Transfer to maximize the value of SAP applications.
                </p>
              </div>
              <div className="text-block">
                <h3 className="text-title purple-text">NetSuite Services</h3>
                <p className="text-description">
                  Meapal NetSuite Services offer comprehensive support for Oracle NetSuite systems, including Technical Support for installation, configuration, and maintenance, as well as Application Support for NetSuite applications. We also provide Custom Development to meet specific business needs and offer Training and Knowledge Transfer to help organizations maximize their use of NetSuite.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="trusted-section">
            <p className="trusted-small-text">They trusted us...</p>
            <div className="bt-container">
              <p className="trusted-large-text">
                See Meapal
                {' '}
                <span className="red-text">references</span>
              </p>

              <div className="trusted-buttons">
                <button className="vision-button" type="button">&lt;</button>
                <button className="vision-button" type="button">&gt;</button>
              </div>
            </div>
            <div className="trusted-logos">
              <img src="Group 46.png" alt="Logo 1" className="small-logo" />
              <img src="Group 47.png" alt="Logo 2" className="small-logo" />
              <img src="Group 48.png" alt="Logo 3" className="small-logo" />
              <img src="Group 49.png" alt="Logo 4" className="small-logo" />
              <img src="Group 50.png" alt="Logo 5" className="small-logo" />
              <img src="Group 51.png" alt="Logo 6" className="small-logo" />
            </div>
          </div> */}
        </main>
      </div>
      <div className="info-box-container mt-3 mb-5">
        <div className="info-box-responsive">
          <div className="row ms-5">
            <div className="col-9">
              <h2 className="homepage-responsive-h2">
                Aims and scope in
                <span className="highlight"> technical support </span>
              </h2>
              <p className="homepage-responsive-text">
                “Our Pilotage IT Support Team operates around the clock, providing seamless support 24/7 through three dedicated shifts (AM, PM, and Night). New team members undergo a rigorous one-month training period to ensure they meet our high standards of service. With over 150 clients relying on us, the team handles approximately 100 tickets daily, maintaining efficient, responsive service for each request. The team consists of 16 skilled pilots who are committed to managing client needs with expertise and reliability at all hours.”
              </p>
              <button type="button" className="vision-button mb-3">Discover</button>
            </div>
            <div className="col-3">
              <img style={{ width: '260px' }} src="/public/handshake-img.png" alt="handshake" />
            </div>
          </div>
        </div>
        {/* <img alt="planet-background" className="planet-background-right" src="/public/planet (2).png" /> */}
      </div>
      <div className="info-box-container-right mt-3 mb-5">
        <div className="info-box-responsive-right mb-0">
          <div className="row ms-2">
            <div className="col-3">
              <img style={{ width: '260px' }} src="/public/Mask group.png" alt="handshake" />
            </div>
            <div className="col-9">
              <p className="homepage-responsive-text mb-1 mt-2" />
              <h2 className="homepage-responsive-h2">
                Aims and scope in
                <span className="highlight"> data science </span>
              </h2>
              <p className="homepage-responsive-text">
                “we harness the power of data to drive innovation and deliver actionable insights. Our data science projects are designed to transform complex data into clear, meaningful information that supports strategic decision-making. By employing advanced statistical techniques, machine learning algorithms, and data visualization tools, we tackle real-world challenges across various industries. ”
              </p>
              <button type="button" className="vision-button mb-3">Discover</button>
            </div>
          </div>
        </div>
        {/* <img alt="planet-background" className="planet-background-right" src="/public/planet (2).png" /> */}
      </div>
      <div className="homepage-responsive mb-3 mt-3">
        <div className="homepage-responsive-text">
          <h2 className="homepage-responsive-h2">
            See Meapal
            <span className="highlight"> References </span>
          </h2>
        </div>
      </div>
      <div style={{ height: '50px' }} className="container mb-3">
        <Carousel responsive={responsive}>
          <img src="Safran_-_logo_2016.png" alt="Logo 1" className="small-logo" />
          <img src="Sanofi-Logo-Vector.png" alt="Logo 2" className="small-logo" />
          <img src="Thales.png" alt="Logo 3" className="small-logo" />
          <img src="Safran_-_logo_2016.png" alt="Logo 1" className="small-logo" />
          <img src="Sanofi-Logo-Vector.png" alt="Logo 2" className="small-logo" />
          <img src="Thales.png" alt="Logo 3" className="small-logo" />
        </Carousel>
      </div>
    </>
  );
}
export default HomePage;
