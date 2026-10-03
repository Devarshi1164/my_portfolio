import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { navItems } from '../data/portfolioData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav container">
        <a href="#home" className="brand" aria-label="Go to home">
          G. DEVARSHI
        </a>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a href="#contact" className="btn btn-secondary small">
            Resume
          </a>

          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;