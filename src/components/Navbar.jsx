import React from 'react';
import { navItems } from '../data/portfolioData';

const Navbar = ({ currentPage }) => (
  <header className="site-header">
    <nav className="nav container" aria-label="Main navigation">
      <a href="#home" className="brand" aria-label="Gudapati Devarshi — home">
        GD
      </a>

      <div className="nav-links">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            aria-current={currentPage === item.href.slice(1) ? 'page' : undefined}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  </header>
);

export default Navbar;
