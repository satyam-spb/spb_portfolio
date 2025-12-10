import React from 'react';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Contact } from './components/Contact';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen relative selection:bg-zinc-900 selection:text-zinc-50 dark:selection:bg-zinc-100 dark:selection:text-zinc-900">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main className="flex flex-col items-center w-full">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Education />
      </main>
      
      <Contact />
    </div>
  );
}

export default App;