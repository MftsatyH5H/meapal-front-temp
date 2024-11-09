import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './Components/Home/HomePage';
import PrivacyPolicyPage from './Components/Policy/PrivacyPolicyPage';
import OurVisionPage from './Components/Vision/OurVisionPage';
import VerbatimVisionPage from './Components/Vision/VerbatimVisionPage';
import JobsPage from './Components/Jobs/Jobs';
import TermsAndConditionsPage from './Components/Policy/TermsAndConditionsPage';
import DataScienceWorks from './Components/works/dataScienceWorks';

import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUs from './Components/contactUs/contactUs';
import JoinUs from './Components/joinUs/joinus';
import OurOffers from './Components/ourOffers/ouroffers';
import Header from './Components/shared/Header';
import Footer from './Components/shared/Footer';
import ITWorks from './Components/works/itWorks';
import ZosWorks from './Components/works/zosWorks';
import ASWorks from './Components/works/as400Works';
import DevelopmentWorks from './Components/works/developemntWorks';
import SDMWorks from './Components/works/sdmWorks';
import LegacyWorks from './Components/works/leagacyWorks';
import GdprWorks from './Components/works/gdprWorks';
import CyberSecurityWorks from './Components/works/cyberSecurityWorks';
import SapServices from './Components/works/sapServices';
import ManagingServices from './Components/works/managingWorks';
import OracleNetSuiteServices from './Components/works/oracleNetSuite';
import UnderConstruction from './Components/underConstruction/UnderConstruction';

// @ts-ignore
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/our-vision" element={<OurVisionPage />} />
        <Route path="/verbatim-vision" element={<VerbatimVisionPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route
          path="/terms-and-conditions"
          element={<TermsAndConditionsPage />}
        />
        <Route path="/" element={<HomePage />} />
        <Route path="/joinus" element={<JoinUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/ouroffers" element={<OurOffers />} />
        <Route path="/works-dataScience" element={<DataScienceWorks />} />
        <Route path="/works-It" element={<ITWorks />} />
        <Route path="/works-as400" element={<ASWorks />} />
        <Route path="/works-zos" element={<ZosWorks />} />
        <Route path="/works-development" element={<DevelopmentWorks />} />
        <Route path="/works-sdm" element={<SDMWorks />} />
        <Route path="/works-legacy" element={<LegacyWorks />} />
        <Route path="/works-gdpr" element={<GdprWorks />} />
        <Route path="/works-cyber" element={<CyberSecurityWorks />} />
        <Route path="/works-sap" element={<SapServices />} />
        <Route path="/works-managing" element={<ManagingServices />} />
        <Route path="/works-netsuite" element={<OracleNetSuiteServices />} />
        <Route path="/underConstruction" element={<UnderConstruction />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
