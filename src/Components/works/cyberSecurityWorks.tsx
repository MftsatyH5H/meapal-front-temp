/* eslint-disable max-len */
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../languages/i18n.js';
import '../../style/visionStyle.scss';

function CyberSecurityWorks() {
  const { t } = useTranslation();

  return (
    <div className="visionpage">
      <div className="proj mb-2">
        <div className="proj-titel-container"><h3 className="proj-title">{t('cyberSecurityServices')}</h3></div>
      </div>

      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
        {t('riskAssessment').slice(0, t('riskAssessment').lastIndexOf(' '))}
        <span className="highlight">
          {` ${t('riskAssessment').slice(t('riskAssessment').lastIndexOf(' '))}`}
        </span>
      </h3>
      <p className="vision-text mb-3">
        {t('riskAssessmentText')}
      </p>

      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
        {t('securityPlanning').slice(0, t('securityPlanning').lastIndexOf(' '))}
        <span className="highlight">
          {` ${t('securityPlanning').slice(t('securityPlanning').lastIndexOf(' '))}`}
        </span>
      </h3>
      <p className="vision-text mb-3">
        {t('securityPlanningText')}
      </p>

      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
        {t('securityMonitoring').slice(0, t('securityMonitoring').lastIndexOf(' '))}
        <span className="highlight">
          {` ${t('securityMonitoring').slice(t('securityMonitoring').lastIndexOf(' '))}`}
        </span>
      </h3>
      <p className="vision-text mb-3">
        {t('securityMonitoringText')}
      </p>

      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
        {t('incidentResponse').slice(0, t('incidentResponse').lastIndexOf(' '))}
        <span className="highlight">
          {` ${t('incidentResponse').slice(t('incidentResponse').lastIndexOf(' '))}`}
        </span>
      </h3>
      <p className="vision-text mb-3">
        {t('incidentResponseText')}
      </p>

      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
        {t('threatIntelligence').slice(0, t('threatIntelligence').lastIndexOf(' '))}
        <span className="highlight">
          {` ${t('threatIntelligence').slice(t('threatIntelligence').lastIndexOf(' '))}`}
        </span>
      </h3>
      <p className="vision-text mb-3">
        {t('threatIntelligenceText')}
      </p>

      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
        {t('securityTesting').slice(0, t('securityTesting').lastIndexOf(' '))}
        <span className="highlight">
          {` ${t('securityTesting').slice(t('securityTesting').lastIndexOf(' '))}`}
        </span>
      </h3>
      <p className="vision-text mb-3">
        {t('securityTestingText')}
      </p>

      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
        {t('securityAwarenessTraining').slice(0, t('securityAwarenessTraining').lastIndexOf(' '))}
        <span className="highlight">
          {` ${t('securityAwarenessTraining').slice(t('securityAwarenessTraining').lastIndexOf(' '))}`}
        </span>
      </h3>
      <p className="vision-text mb-3">
        {t('securityAwarenessTrainingText')}
      </p>

      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
        {t('complianceManagement').slice(0, t('complianceManagement').lastIndexOf(' '))}
        <span className="highlight">
          {` ${t('complianceManagement').slice(t('complianceManagement').lastIndexOf(' '))}`}
        </span>
      </h3>
      <p className="vision-text mb-3">
        {t('complianceManagementText')}
      </p>

      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
        {t('securityArchitectureDesign').slice(0, t('securityArchitectureDesign').indexOf(' '))}
        <span className="highlight">
          {` ${t('securityArchitectureDesign').slice(t('securityArchitectureDesign').indexOf(' '))}`}
        </span>
      </h3>
      <p className="vision-text mb-3">
        {t('securityArchitectureDesignText')}
      </p>

      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
        {t('securityAudits').slice(0, t('securityAudits').lastIndexOf(' '))}
        <span className="highlight">
          {` ${t('securityAudits').slice(t('securityAudits').lastIndexOf(' '))}`}
        </span>
      </h3>
      <p className="vision-text mb-3">
        {t('securityAuditsText')}
      </p>
    </div>
  );
}

export default CyberSecurityWorks;
