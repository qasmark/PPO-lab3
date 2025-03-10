// src/components/ResumeSection.jsx
import React from 'react';
import styles from './ResumeSection.module.css';

function ResumeSection({ title, content, id }) {
  return (
    <section id={id} className={styles.resumeSection}>
      <h2>{title}</h2>
      <div>{content}</div>
    </section>
  );
}

export default ResumeSection;