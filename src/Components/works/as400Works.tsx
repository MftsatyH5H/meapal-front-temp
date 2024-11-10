/* eslint-disable max-len */
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../languages/i18n.js';
import '../../style/visionStyle.scss';

function ASWorks() {
  const { t } = useTranslation();

  return (
    <div className="visionpage">
      <div className="proj mb-2">
        <div className="proj-titel-container"><h3 className="proj-title">{t('as400SupportServices')}</h3></div>
      </div>

      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
        {t('operatingSystem').slice(0, t('operatingSystem').lastIndexOf(' '))}
        <span className="highlight">
          {` ${t('operatingSystem').slice(t('operatingSystem').lastIndexOf(' '))}`}
        </span>
      </h3>
      <p className="vision-text mb-3">
        {t('operatingSystemText')}
      </p>

      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
        {t('softwareInstallationAndSupport').slice(0, t('softwareInstallationAndSupport').lastIndexOf(' '))}
        <span className="highlight">
          {` ${t('softwareInstallationAndSupport').slice(t('softwareInstallationAndSupport').lastIndexOf(' '))}`}
        </span>
      </h3>
      <p className="vision-text mb-3">
        {t('softwareInstallationAndSupportText')}
      </p>

      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
        {t('performanceTuning').slice(0, t('performanceTuning').lastIndexOf(' '))}
        <span className="highlight">
          {` ${t('performanceTuning').slice(t('performanceTuning').lastIndexOf(' '))}`}
        </span>
      </h3>
      <p className="vision-text mb-3">
        {t('performanceTuningText')}
      </p>

      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
        {t('backupAndRecovery').slice(0, t('backupAndRecovery').lastIndexOf(' '))}
        <span className="highlight">
          {` ${t('backupAndRecovery').slice(t('backupAndRecovery').lastIndexOf(' '))}`}
        </span>
      </h3>
      <p className="vision-text mb-3">
        {t('backupAndRecoveryText')}
      </p>

      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
        {t('securityAndCompliance').slice(0, t('securityAndCompliance').lastIndexOf(' '))}
        <span className="highlight">
          {` ${t('securityAndCompliance').slice(t('securityAndCompliance').lastIndexOf(' '))}`}
        </span>
      </h3>
      <p className="vision-text mb-3">
        {t('securityAndComplianceText')}
      </p>
    </div>
  );
}
export default ASWorks;
