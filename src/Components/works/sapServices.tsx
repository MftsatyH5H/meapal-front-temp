/* eslint-disable max-len */
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../languages/i18n.js';
import '../../style/visionStyle.scss';

function SapServices() {
  const { t } = useTranslation();

  return (
    <div className="visionpage">
      <div className="proj mb-2">
        <div className="proj-titel-container"><h3 className="proj-title">{t('sapServices')}</h3></div>
      </div>

      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
        {t('technicalSupportSAP').slice(0, t('technicalSupportSAP').lastIndexOf(' '))}
        <span className="highlight">
          {` ${t('technicalSupportSAP').slice(t('technicalSupportSAP').lastIndexOf(' '))}`}
        </span>
      </h3>
      <p className="vision-text mb-3">
        {t('technicalSupportSAPText')}
      </p>

      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
        {t('applicationSupport').slice(0, t('applicationSupport').lastIndexOf(' '))}
        <span className="highlight">
          {` ${t('applicationSupport').slice(t('applicationSupport').lastIndexOf(' '))}`}
        </span>
      </h3>
      <p className="vision-text mb-3">
        {t('applicationSupportText')}
      </p>

      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
        {t('upgradesAndMigrations').slice(0, t('upgradesAndMigrations').lastIndexOf(' '))}
        <span className="highlight">
          {` ${t('upgradesAndMigrations').slice(t('upgradesAndMigrations').lastIndexOf(' '))}`}
        </span>
      </h3>
      <p className="vision-text mb-3">
        {t('upgradesAndMigrationsText')}
      </p>

      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
        {t('performanceOptimization').slice(0, t('performanceOptimization').lastIndexOf(' '))}
        <span className="highlight">
          {` ${t('performanceOptimization').slice(t('performanceOptimization').lastIndexOf(' '))}`}
        </span>
      </h3>
      <p className="vision-text mb-3">
        {t('performanceOptimizationText')}
      </p>

      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
        {t('customDevelopment').slice(0, t('customDevelopment').lastIndexOf(' '))}
        <span className="highlight">
          {` ${t('customDevelopment').slice(t('customDevelopment').lastIndexOf(' '))}`}
        </span>
      </h3>
      <p className="vision-text mb-3">
        {t('customDevelopmentText')}
      </p>

      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
        {t('trainingAndKnowledgeTransfer').slice(0, t('trainingAndKnowledgeTransfer').lastIndexOf(' '))}
        <span className="highlight">
          {` ${t('trainingAndKnowledgeTransfer').slice(t('trainingAndKnowledgeTransfer').lastIndexOf(' '))}`}
        </span>
      </h3>
      <p className="vision-text mb-3">
        {t('trainingAndKnowledgeTransferText')}
      </p>
    </div>
  );
}

export default SapServices;
