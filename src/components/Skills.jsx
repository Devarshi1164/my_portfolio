import React from 'react';
import SectionTitle from './SectionTitle';
import { skillGroups } from '../data/portfolioData';

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Skills"
          title="Tools, technologies, and foundations I work with."
          subtitle="A mix of AI, backend, security, and cloud-focused capabilities."
        />

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-card reveal">
              <h3>{group.title}</h3>
              <div className="skill-list">
                {group.items.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills