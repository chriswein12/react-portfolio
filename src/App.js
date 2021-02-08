import React, { useState } from 'react';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';




function App() {

  const [sections] = useState([
    { name: "About Me" },
    { name: "Portfolio" },
    { name: "Contact" },
    { name: "Resume" }
  ]);

  const [currentSection, setCurrentSection] = useState(sections[0]);

  function displayPage() {
    switch (currentSection.name) {
      case 'About Me':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <Header
        sections={sections}
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}
      ></Header>
      <main>
        {displayPage()}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
