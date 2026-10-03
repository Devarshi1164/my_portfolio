import React from 'react';
import { Cpu, Lock, Sparkles } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { aboutCards, learningTopics } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="About"
          title="Building practical AI with a security-first mindset."
          subtitle="I focus on responsible, useful, and deployable AI systems."
        />

        <div className="about-layout reveal">
          <div className="about-copy">
            <p>
              I’m a Computer Science graduate with a specialization in Cyber Security
              and a strong interest in Artificial Intelligence and Generative AI.
            </p>

            <p>
              I enjoy building practical AI-powered applications, working with LLMs and
              APIs, automating workflows, and exploring how AI can be combined with secure
              software engineering.
            </p>

            <p>
              My current focus is growing as an AI Engineer by working with Python, LLMs,
              RAG, LangChain, automation, APIs, and cloud technologies.
            </p>
          </div>

          <div className="about-highlights">
            {aboutCards.map((item) => (
              <div key={item.title} className="mini-card">
                <div className="mini-icon">
                  {item.title.includes('Cyber') ? (
                    <Lock size={16} />
                  ) : item.title.includes('AI') ? (
                    <Sparkles size={16} />
                  ) : (
                    <Cpu size={16} />
                  )}
                </div>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="learning-box reveal">
          <h3>Currently learning</h3>
          <div className="learning-list">
            {learningTopics.map((topic) => (
              <span key={topic} className="chip">
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About