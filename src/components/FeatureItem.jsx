import React from 'react';

// FeatureItem component used to display a single feature in a list of features
const FeatureItem = ({ icon, title, description }) => (
  <div className="feature-item">
    <img src={icon} alt="Feature Icon" className="feature-icon" />
    <h3 className="feature-item-title">{title}</h3>
    <p>{description}</p>
  </div>
);

export default FeatureItem;
