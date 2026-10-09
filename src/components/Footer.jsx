import React from 'react';
import { contactInfo } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-name">Gudapati Devarshi</p>
          <p className="footer-tag">Building with AI • Code • Curiosity</p>
        </div>
        <div className="footer-contact">
          <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}>{contactInfo.phone}</a>
        </div>
        <p className="footer-copy">© 2026 Gudapati Devarshi. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer