/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import '../../style/headerStyle.scss';
import { useNavigate } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
// @ts-ignore
import i18n from '../../languages/i18n.js';

function Header() {
  const [selectedNav, setSelectedNav] = useState('home');
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();
  function setNav(name: string, path: string) {
    setSelectedNav(name);
    navigate(path);
    setShowDropdown(false);
  }
  function changeLanguage(lang: string) {
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang);
  }
  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <nav style={{ backgroundColor: 'transparent' }} className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid ms-4 me-4">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <img className="navbar-toggler-icon-custom" alt="toggler" src="navbar-toggler.png" />
        </button>
        <a onClick={() => setNav('home', '/')} className="navbar-brand">
          <img className="navbar-logo" alt="Logo" src="meapal-logo.png" />
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-1 mt-2">
            <li className="nav-item ms-3">
              <li className="dropdown" onClick={handleDropdownToggle}>
                <a className="nav-link">
                  {t('services')}
                  {' '}
                  <DownOutlined />
                </a>
                {showDropdown && (
                <div className="dropdown-menu">
                  <div className="dropdown-column">
                    <h4 onClick={() => setNav('works-development', '/works-development')}>Software development</h4>
                    <ul>
                      <li onClick={() => setNav('works-development', '/works-development')}>Web Development</li>
                      <li onClick={() => setNav('works-development', '/works-development')}>Mobile Development</li>
                      <li onClick={() => setNav('works-development', '/works-development')}>Cloud computing services</li>
                    </ul>
                    <h4 onClick={() => setNav('works-dataScience', '/works-dataScience')}>Data Science</h4>
                    <ul>
                      <li onClick={() => setNav('works-dataScience', '/works-dataScience')}>Custom Large Language Models</li>
                      <li onClick={() => setNav('works-dataScience', '/works-dataScience')}>Port Terminal Smart Solutions</li>
                      <li onClick={() => setNav('works-dataScience', '/works-dataScience')}>Intelligent Video Surveillance</li>
                      <li onClick={() => setNav('works-dataScience', '/works-dataScience')}>AI-Powered Recruitment Platform</li>
                    </ul>
                    <h4 onClick={() => setNav('works-legacy', '/works-legacy')}>Legacy Systems</h4>
                    <ul>
                      <li onClick={() => setNav('works-legacy', '/works-legacy')}>Re-platforming</li>
                      <li onClick={() => setNav('works-legacy', '/works-legacy')}>Reconstruction</li>
                      <li onClick={() => setNav('works-legacy', '/works-legacy')}>Redesign</li>
                      <li onClick={() => setNav('works-legacy', '/works-legacy')}>Replacement</li>
                      <li onClick={() => setNav('works-legacy', '/works-legacy')}>Integration</li>
                    </ul>
                    <h4 onClick={() => setNav('works-gdpr', '/works-gdpr')}>GDPR data protection</h4>
                    <ul>
                      <li onClick={() => setNav('works-gdpr', '/works-gdpr')}>Data and Inventory Planning</li>
                      <li onClick={() => setNav('works-gdpr', '/works-gdpr')}>Data Protection Officer (DPO) as a service</li>
                      <li onClick={() => setNav('works-gdpr', '/works-gdpr')}>Data Protection Impact Assessments (DPIAs)</li>
                    </ul>
                  </div>
                  <div className="dropdown-column">
                    <h4 onClick={() => setNav('works-cyber', '/works-cyber')}>Cybersecurity</h4>
                    <ul>
                      <li onClick={() => setNav('works-cyber', '/works-cyber')}>Risk Assessment</li>
                      <li onClick={() => setNav('works-cyber', '/works-cyber')}>Security planning</li>
                      <li onClick={() => setNav('works-cyber', '/works-cyber')}>Security surveillance</li>
                      <li onClick={() => setNav('works-cyber', '/works-cyber')}>Incident response</li>
                      <li onClick={() => setNav('works-cyber', '/works-cyber')}>Threat information</li>
                      <li onClick={() => setNav('works-cyber', '/works-cyber')}>Security testing</li>
                      <li onClick={() => setNav('works-cyber', '/works-cyber')}>Security awareness training</li>
                      <li onClick={() => setNav('works-cyber', '/works-cyber')}>Compliance</li>
                      <li onClick={() => setNav('works-cyber', '/works-cyber')}>Security architecture design</li>
                      <li onClick={() => setNav('works-cyber', '/works-cyber')}>Security audits</li>
                    </ul>
                    <h4 onClick={() => setNav('works-sap', '/works-sap')}>SAP Services</h4>
                    <ul>
                      <li onClick={() => setNav('works-sap', '/works-sap')}>Technical support</li>
                      <li onClick={() => setNav('works-sap', '/works-sap')}>Application support</li>
                      <li onClick={() => setNav('works-sap', '/works-sap')}>Promotions and migrations</li>
                      <li onClick={() => setNav('works-sap', '/works-sap')}>Performance tuning</li>
                      <li onClick={() => setNav('works-sap', '/works-sap')}>Training and knowledge transfer</li>
                    </ul>
                    <h4 onClick={() => setNav('works-managing', '/works-managing')}>Managing technical support and crises</h4>
                    <ul>
                      <li onClick={() => setNav('works-managing', '/works-managing')}>Troubleshooting</li>
                      <li onClick={() => setNav('works-managing', '/works-managing')}>Installation and setup help</li>
                      <li onClick={() => setNav('works-managing', '/works-managing')}>Software updates and upgrades</li>
                      <li onClick={() => setNav('works-managing', '/works-managing')}>User training</li>
                    </ul>
                  </div>
                  <div className="dropdown-column">
                    <h4 onClick={() => setNav('works-netsuite', '/works-netsuite')}>Net Suite</h4>
                    <ul>
                      <li onClick={() => setNav('works-netsuite', '/works-netsuite')}>Technical Support</li>
                      <li onClick={() => setNav('works-netsuite', '/works-netsuite')}>Application Support</li>
                      <li onClick={() => setNav('works-netsuite', '/works-netsuite')}>Custom development</li>
                      <li onClick={() => setNav('works-netsuite', '/works-netsuite')}>Training and knowledge transfer</li>
                    </ul>
                    <h4 onClick={() => setNav('works-as400', '/works-as400')}>IBM AS400 Technical Support</h4>
                    <ul>
                      <li onClick={() => setNav('works-as400', '/works-as400')}>Operating system</li>
                      <li onClick={() => setNav('works-as400', '/works-as400')}>Software installation and support</li>
                      <li onClick={() => setNav('works-as400', '/works-as400')}>Performance tuning</li>
                      <li onClick={() => setNav('works-as400', '/works-as400')}>Backup and recovery</li>
                      <li onClick={() => setNav('works-as400', '/works-as400')}>Security and compliance</li>
                    </ul>
                    <h4 onClick={() => setNav('works-sdm', '/works-sdm')}>Digital transformation</h4>
                    <ul>
                      <li onClick={() => setNav('works-sdm', '/works-sdm')}>Digital strategy development</li>
                      <li onClick={() => setNav('works-sdm', '/works-sdm')}>Process re-engineering</li>
                      <li onClick={() => setNav('works-sdm', '/works-sdm')}>Customer Experience Design</li>
                      <li onClick={() => setNav('works-sdm', '/works-sdm')}>Data analytics</li>
                      <li onClick={() => setNav('works-sdm', '/works-sdm')}>Cloud computing</li>
                      <li onClick={() => setNav('works-sdm', '/works-sdm')}>Internet of Things</li>
                      <li onClick={() => setNav('works-sdm', '/works-sdm')}>Artificial intelligence </li>
                      <li onClick={() => setNav('works-sdm', '/works-sdm')}>Cybersecurity</li>
                      <li onClick={() => setNav('works-sdm', '/works-sdm')}>Change management</li>
                    </ul>
                  </div>
                </div>
                )}
              </li>
            </li>
            <li className="nav-item ms-3">
              <a className={`nav-link ${selectedNav === 'know-how' ? 'active' : ''}`} onClick={() => setNav('know-how', '/ouroffers')}>{t('industries')}</a>
            </li>
            <li className="nav-item ms-3">
              <a className={`nav-link ${selectedNav === 'meapal' ? 'active' : ''}`} onClick={() => setNav('meapal', '/our-vision')}>{t('partners')}</a>
            </li>
            <li className="nav-item ms-3">
              <a className={`nav-link ${selectedNav === 'v-vision' ? 'active' : ''}`} onClick={() => setNav('v-vision', '/verbatim-vision')}>{t('customers')}</a>
            </li>
            <li className="nav-item ms-3">
              <a className={`nav-link ${selectedNav === 'jobs' ? 'active' : ''}`} href="#" onClick={() => setNav('jobs', '/jobs')}>{t('newsAndEvents')}</a>
            </li>
            {/* <li className="nav-item ms-3">
              <a className={`nav-link ${selectedNav === 'jobs' ? 'active' : ''}`} href="#" onClick={() => setNav('jobs', '/jobs')}>{t('aboutUs')}</a>
            </li> */}
          </ul>
          <form className="d-flex mt-2">
            <div className="header-options">
              <div className="language-options">
                <span onClick={() => { changeLanguage('fr'); }} className={`language ${selectedLanguage === 'fr' ? 'active' : ''}`}>FR</span>
                <span className="separator">|</span>
                <span onClick={() => { changeLanguage('en'); }} className={`language ${selectedLanguage === 'en' ? 'active' : ''}`}>EN</span>
                <span className="separator">|</span>
                <span onClick={() => { changeLanguage('ar'); }} className={`language ${selectedLanguage === 'ar' ? 'active' : ''}`}>AR</span>
              </div>
              <button type="button" className="contact-button">Contact us</button>
            </div>

          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
