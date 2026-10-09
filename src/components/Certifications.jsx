import React from 'react';
import SectionTitle from './SectionTitle';
import { certifications } from '../data/portfolioData';

const Certifications = () => {
  return (
    <section className="section page-section">
      <div className="container">
        <SectionTitle
          eyebrow="Certifications"
          title="Workshops and credentials."
          subtitle="Selected learning milestones in AI and technology."
        />

        <div className="cert-grid">
          {certifications.map((item) => (
            <div key={item} className="cert-card reveal">
              <span className="cert-badge">Workshop</span>
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications