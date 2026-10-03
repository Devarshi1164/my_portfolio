import React from 'react';
import { ArrowRight, Bot, Sparkles } from 'lucide-react';
import { heroStats } from '../data/portfolioData';

const Hero = () => {
  return (
    <section id="home" className="hero section">
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <div className="status-pill">
            <span className="dot" />
            Open to AI Engineer Opportunities
          </div>

          <p className="eyebrow">AI Engineer • Cyber Security • LLMs</p>

          <h1>AI Engineer building intelligent and secure digital solutions.</h1>

          <p className="lead">
            Computer Science graduate specializing in Cyber Security, with hands-on
            experience in AI, automation, APIs, Python, and modern developer tools.
          </p>

          <div className="cta-row">
            <a href="#projects" className="btn btn-primary">
              View My Projects
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
            <a href="#contact" className="btn btn-ghost">
              Resume
            </a>
          </div>

          <div className="hero-stats">
            {heroStats.map((stat) => (
              <div key={stat.label} className="stat-box">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual reveal">
          <div className="orb orb-one" />
          <div className="orb orb-two" />

          <div className="panel-card ai-panel">
            <div className="panel-head">
              <Bot size={18} />
              <span>AI System Overview</span>
            </div>

            <div className="network-grid">
              <span className="node node-1" />
              <span className="node node-2" />
              <span className="node node-3" />
              <span className="node node-4" />
              <span className="node node-5" />
              <span className="node node-6" />
            </div>

            <div className="panel-footer">
              <div>
                <small>Model Focus</small>
                <strong>LLMs + RAG</strong>
              </div>
              <div className="spark-wrap">
                <Sparkles size={18} />
              </div>
            </div>
          </div>

          <div className="floating-card card-one">
            <span>Python</span>
            <strong>Secure AI</strong>
          </div>

          <div className="floating-card card-two">
            <span>Automation</span>
            <strong>APIs</strong>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero