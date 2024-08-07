import React from 'react';
import { useLanguage } from '../../contests/LanguageContest';
import { projectsDataEng, projectsDataUa } from '../../data/projectsData';
import styles from './Projects.module.sass';

const Projects = () => {
  const { isEng } = useLanguage();
  const text = isEng ? projectsDataEng : projectsDataUa;
  const data = text.map(([url, title, technologies], index) => (
    <li key={index} className={styles.item}>
      <a href={url} className={styles.link}>
        {title}
      </a>
      <span className={styles.span}>{technologies}</span>
    </li>
  ));

  return (
    <section className={styles.container}>
      <h3 className={styles.title}>{isEng ? 'Projects' : 'Проєкти'}</h3>
      <ol>{data}</ol>
    </section>
  );
};

export default Projects;
