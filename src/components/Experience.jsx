import { BriefcaseBusiness } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { experience } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Experience"
          title="Hands-on internships and applied learning."
          subtitle="Experience across AI workflows, security testing, and automation."
        />

        <div className="timeline reveal">
          {experience.map((item) => (
            <div key={item.company} className="timeline-item">
              <div className="timeline-dot">
                <BriefcaseBusiness size={14} />
              </div>
              <div className="timeline-content">
                <p className="timeline-company">{item.company}</p>
                <h3>{item.role}</h3>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience