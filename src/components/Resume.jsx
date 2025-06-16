import React from 'react';
import '../styles/Resume.css';

const Resume = () => (
  <section className="resume">
    <h2>履歷</h2>
    <embed src="/resume.pdf" type="application/pdf" width="100%" height="600px" />
    <p><a href="/resume.pdf" target="_blank" rel="noopener noreferrer">下載 PDF</a></p>
  </section>
);

export default Resume; 