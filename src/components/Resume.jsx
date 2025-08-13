import React from 'react';
import '../styles/Resume.css';

const Resume = () => (
  <section className="resume">
    <h2>履歷</h2>
    <embed src={`${import.meta.env.BASE_URL}resume.pdf`} type="application/pdf" width="100%" height="800px" />
    <p><a href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noopener noreferrer">下載 PDF</a></p>
  </section>
);

export default Resume; 