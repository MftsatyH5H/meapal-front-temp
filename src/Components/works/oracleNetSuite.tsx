/* eslint-disable max-len */
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../languages/i18n.js';
import '../../style/visionStyle.scss';

function OracleNetSuiteServices() {
  const { t } = useTranslation();

  return (
    <div className="visionpage">
      <div className="proj mb-2">
        <div className="proj-titel-container"><h3 className="proj-title">{t('ORACLENETSUITEServices')}</h3></div>
      </div>

      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
        {t('technicalSupportORACLE').slice(0, t('technicalSupportORACLE').lastIndexOf(' '))}
        <span className="highlight">
          {` ${t('technicalSupportORACLE').slice(t('technicalSupportORACLE').lastIndexOf(' '))}`}
        </span>
      </h3>
      <p className="vision-text mb-3">
        {t('technicalSupportORACLEText')}
      </p>

      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
        {t('applicationSupportORACLE').slice(0, t('applicationSupportORACLE').lastIndexOf(' '))}
        <span className="highlight">
          {` ${t('applicationSupportORACLE').slice(t('applicationSupportORACLE').lastIndexOf(' '))}`}
        </span>
      </h3>
      <p className="vision-text mb-3">
        {t('applicationSupportORACLEText')}
      </p>

      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
        {t('customDevelopmentORACLE').slice(0, t('customDevelopmentORACLE').lastIndexOf(' '))}
        <span className="highlight">
          {` ${t('customDevelopmentORACLE').slice(t('customDevelopmentORACLE').lastIndexOf(' '))}`}
        </span>
      </h3>
      <p className="vision-text mb-3">
        {t('customDevelopmentORACLEText')}
      </p>

      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
        {t('trainingAndKnowledgeTransferORACLE').slice(0, t('trainingAndKnowledgeTransferORACLE').lastIndexOf(' '))}
        <span className="highlight">
          {` ${t('trainingAndKnowledgeTransferORACLE').slice(t('trainingAndKnowledgeTransferORACLE').lastIndexOf(' '))}`}
        </span>
      </h3>
      <p className="vision-text mb-3">
        {t('trainingAndKnowledgeTransferORACLEText')}
      </p>
    </div>
  );
}

export default OracleNetSuiteServices;
