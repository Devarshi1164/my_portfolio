import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { contactInfo } from '../data/portfolioData';

const Contact = () => {
  const contactLinks = [
    {
      label: 'Email',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      icon: Mail,
    },
    {
      label: 'LinkedIn',
      value: 'YOUR_USERNAME',
      href: contactInfo.linkedin,
      icon: Linkedin,
    },
    {
      label: 'GitHub',
      value: 'YOUR_USERNAME',
      href: contactInfo.github,
      icon: Github,
    },
  ]

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Contact"
          title="Let's Build Something Intelligent."
          subtitle="I’m currently open to opportunities in AI Engineering, Generative AI, and related software engineering roles."
        />

        <div className="contact-shell reveal">
          <div className="github-callout">
            <p>Explore my code, experiments, and AI projects.</p>
            <a href={contactInfo.github} target="_blank" rel="noreferrer" className="btn btn-primary">
              GitHub
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="contact-grid">
            {contactLinks.map(({ label, value, href, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="contact-card">
                <div className="contact-icon">
                  <Icon size={18} />
                </div>
                <div>
                  <small>{label}</small>
                  <strong>{value}</strong>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact