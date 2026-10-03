import React from 'react';

const SectionTitle = ({ eyebrow, title, subtitle }) => {
  return (
    <div className="section-header reveal">
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  )
}

export default SectionTitle