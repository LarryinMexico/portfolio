import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Header from './components/Header';

const projects = [
  { title: '智慧導遊-AI帶你玩轉花蓮', imgs: ['/images/1.png'], desc: '專案一簡介', link: 'https://invigorated-example-485041.framer.app' },
  { title: 'RAG ON CLASS', imgs: ['/images/2.png', '/images/2-1.png'], desc: '專案二簡介', link: 'https://larryinmexico.github.io/RAG_on_class/frontend/index.html' },
  { title: '政大廁所系統', imgs: ['/images/3.png'], desc: '專案三簡介', link: 'https://nccu-dbms-g5.vercel.app' },
];

function App() {
  const [preview, setPreview] = useState(null);

  return (
    <div className="App">
      <Header />
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="projects">
        <Projects setPreview={setPreview} />
      </section>
      <section id="resume"><Resume /></section>
      <section id="contact"><Contact /></section>
      {preview !== null && (
        <div className="project-preview-overlay" onClick={() => setPreview(null)}>
          <div className="project-preview" onClick={e => e.stopPropagation()}>
            {projects[preview].imgs.map((img, idx) => (
              <img key={idx} src={img} alt={projects[preview].title} style={{ marginBottom: '1.5rem' }} />
            ))}
            <h3>{projects[preview].title}</h3>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
