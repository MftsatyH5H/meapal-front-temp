/* eslint-disable max-len */
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../languages/i18n.js';
import '../../style/visionStyle.scss';

function ManagingServices() {
  const { t } = useTranslation();

  return (
    <div className="visionpage">
      <div className="proj mb-2">
        <div className="proj-titel-container"><h3 className="proj-title">{t('managingTechnicalSupportServices')}</h3></div>
      </div>

      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
        {t('troubleshootingSupport').slice(0, t('troubleshootingSupport').lastIndexOf(' '))}
        <span className="highlight">
          {` ${t('troubleshootingSupport').slice(t('troubleshootingSupport').lastIndexOf(' '))}`}
        </span>
      </h3>
      <p className="vision-text mb-3">
        {t('troubleshootingSupportText')}
      </p>

      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
        {t('installationAndSetupAssistance').slice(0, t('installationAndSetupAssistance').lastIndexOf(' '))}
        <span className="highlight">
          {` ${t('installationAndSetupAssistance').slice(t('installationAndSetupAssistance').lastIndexOf(' '))}`}
        </span>
      </h3>
      <p className="vision-text mb-3">
        {t('installationAndSetupAssistanceText')}
      </p>

      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
        {t('softwareUpdatesAndUpgrades').slice(0, t('softwareUpdatesAndUpgrades').lastIndexOf(' '))}
        <span className="highlight">
          {` ${t('softwareUpdatesAndUpgrades').slice(t('softwareUpdatesAndUpgrades').lastIndexOf(' '))}`}
        </span>
      </h3>
      <p className="vision-text mb-3">
        {t('softwareUpdatesAndUpgradesText')}
      </p>

      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
        {t('userTraining').slice(0, t('userTraining').lastIndexOf(' '))}
        <span className="highlight">
          {` ${t('userTraining').slice(t('userTraining').lastIndexOf(' '))}`}
        </span>
      </h3>
      <p className="vision-text mb-3">
        {t('userTrainingText')}
      </p>
    </div>
  );
}

export default ManagingServices;
