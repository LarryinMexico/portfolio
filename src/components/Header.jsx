import React from 'react';
import '../styles/Header.css';

const Header = () => (
  <header className="header">
    <nav>
      <ul>
        <li><a href="#hero">首頁</a></li>
        <li><a href="#about">關於我</a></li>
        <li><a href="#projects">作品集</a></li>
        <li><a href="#resume">履歷</a></li>
        <li><a href="#contact">聯絡方式</a></li>
      </ul>
    </nav>
  </header>
);

export default Header; 