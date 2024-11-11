/* eslint-disable max-len */
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../languages/i18n.js';
import '../../style/visionStyle.scss';

function SDMWorks() {
  const { t } = useTranslation();

  return (
    <div className="visionpage">
      <div className="proj mb-2">
        <div className="proj-titel-container"><h3 className="proj-title">{t('digitalTransformationServices')}</h3></div>
      </div>

      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
        {t('digitalStrategyDevelopment').slice(0, t('digitalStrategyDevelopment').lastIndexOf(' '))}
        <span className="highlight">
          {` ${t('digitalStrategyDevelopment').slice(t('digitalStrategyDevelopment').lastIndexOf(' '))}`}
        </span>
      </h3>
      <p className="vision-text mb-3">
        {t('digitalStrategyDevelopmentText')}
      </p>

      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
        {t('businessProcessReengineering').slice(0, t('businessProcessReengineering').lastIndexOf(' '))}
        <span className="highlight">
          {` ${t('businessProcessReengineering').slice(t('businessProcessReengineering').lastIndexOf(' '))}`}
        </span>
      </h3>
      <p className="vision-text mb-3">
        {t('businessProcessReengineeringText')}
      </p>

      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
        {t('customerExperienceDesign').slice(0, t('customerExperienceDesign').lastIndexOf(' '))}
        <span className="highlight">
          {` ${t('customerExperienceDesign').slice(t('customerExperienceDesign').lastIndexOf(' '))}`}
        </span>
      </h3>
      <p className="vision-text mb-3">
        {t('customerExperienceDesignText')}
      </p>

      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
        {t('dataAnalytics').slice(0, t('dataAnalytics').lastIndexOf(' '))}
        <span className="highlight">
          {` ${t('dataAnalytics').slice(t('dataAnalytics').lastIndexOf(' '))}`}
        </span>
      </h3>
      <p className="vision-text mb-3">
        {t('dataAnalyticsText')}
      </p>

      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
        {t('cloudComputing').slice(0, t('cloudComputing').lastIndexOf(' '))}
        <span className="highlight">
          {` ${t('cloudComputing').slice(t('cloudComputing').lastIndexOf(' '))}`}
        </span>
      </h3>
      <p className="vision-text mb-3">
        {t('cloudComputingText')}
      </p>

      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
        {t('internetOfThings').slice(0, t('internetOfThings').lastIndexOf(' '))}
        <span className="highlight">
          {` ${t('internetOfThings').slice(t('internetOfThings').lastIndexOf(' '))}`}
        </span>
      </h3>
      <p className="vision-text mb-3">
        {t('internetOfThingsText')}
      </p>

      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
        {t('artificialIntelligenceAndMachineLearning').slice(0, t('artificialIntelligenceAndMachineLearning').indexOf('('))}
        <span className="highlight">
          {` ${t('artificialIntelligenceAndMachineLearning').slice(t('artificialIntelligenceAndMachineLearning').indexOf('('))}`}
        </span>
      </h3>
      <p className="vision-text mb-3">
        {t('artificialIntelligenceAndMachineLearningText')}
      </p>

      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
        {t('cybersecuritySolutions').slice(0, t('cybersecuritySolutions').lastIndexOf(' '))}
        <span className="highlight">
          {` ${t('cybersecuritySolutions').slice(t('cybersecuritySolutions').lastIndexOf(' '))}`}
        </span>
      </h3>
      <p className="vision-text mb-3">
        {t('cybersecuritySolutionsText')}
      </p>

      <h3 style={{ marginBottom: '0px' }} className="visionpage-h2 mb-0">
        {t('changeManagement').slice(0, t('changeManagement').lastIndexOf(' '))}
        <span className="highlight">
          {` ${t('changeManagement').slice(t('changeManagement').lastIndexOf(' '))}`}
        </span>
      </h3>
      <p className="vision-text mb-3">
        {t('changeManagementText')}
      </p>
    </div>
  );
}
export default SDMWorks;
