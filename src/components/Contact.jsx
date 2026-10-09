import React from 'react';
import { Mail, Phone } from 'lucide-react';
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
      label: 'Phone',
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone.replace(/\s/g, '')}`,
      icon: Phone,
    },
  ]

  return (
    <section className="section page-section">
      <div className="container">
        <SectionTitle
          eyebrow="Contact"
          title="Let's Build Something Intelligent."
          subtitle="I’m open to opportunities in AI Engineering, Generative AI, and related software engineering roles."
        />

        <div className="contact-shell reveal">
          <div className="contact-grid">
            {contactLinks.map(({ label, value, href, icon: Icon }) => (
              <a key={label} href={href} className="contact-card">
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