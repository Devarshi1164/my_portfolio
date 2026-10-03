import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { projects } from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Projects"
          title="Featured work and AI-driven experimentation."
          subtitle="A portfolio of projects built around AI, automation, and secure software thinking."
        />

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card reveal">
              <div className="project-top">
                <span className="project-tag">AI Project</span>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-link"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github size={18} />
                </a>
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-stack">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <ul className="feature-list">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <div className="project-actions">
                <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-secondary small">
                  GitHub
                </a>

                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-ghost small">
                    Live Demo
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects