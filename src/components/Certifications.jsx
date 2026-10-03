import React from 'react';
import SectionTitle from './SectionTitle';
import { certifications } from '../data/portfolioData';

const Certifications = () => {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Certifications & Learning"
          title="Continuous learning and upskilling."
          subtitle="Focused on AI, cloud, and security fundamentals."
        />

        <div className="cert-grid">
          {certifications.map((item) => (
            <div key={item} className="cert-card reveal">
              <span className="cert-badge">Learning</span>
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications