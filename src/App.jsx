import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

const pages = new Set(['home', 'profile', 'skills', 'projects', 'certifications', 'contact']);

const getCurrentPage = () => {
  const page = window.location.hash.slice(1);
  return pages.has(page) ? page : 'home';
};

function App() {
  const [currentPage, setCurrentPage] = React.useState(getCurrentPage);

  useEffect(() => {
    const updatePage = () => {
      setCurrentPage(getCurrentPage());
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', updatePage);
    return () => window.removeEventListener('hashchange', updatePage);
  }, []);

  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    revealItems.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [currentPage])

  return (
    <div className="page-shell">
      <Navbar currentPage={currentPage} />
      <main>
        {currentPage === 'home' && <Hero />}
        {currentPage === 'profile' && (
          <>
            <About />
            <Experience />
          </>
        )}
        {currentPage === 'skills' && <Skills />}
        {currentPage === 'projects' && <Projects />}
        {currentPage === 'certifications' && <Certifications />}
        {currentPage === 'contact' && <Contact />}
      </main>
      {currentPage !== 'home' && <Footer />}
    </div>
  )
}

export default App