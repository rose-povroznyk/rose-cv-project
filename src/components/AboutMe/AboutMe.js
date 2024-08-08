import React from 'react';
import { useLanguage } from '../../contests/LanguageContest';
import { aboutMeDataEng, aboutMeDataUa } from '../../data/aboutMeData';
import styles from './AboutMe.module.sass';
import galaxy from '../../images/galaxy_bg.png';

const AboutMe = () => {
  const { isEng } = useLanguage();
  const text = isEng ? aboutMeDataEng : aboutMeDataUa;

  const data = text.map((paragraph, index) => {
    if (paragraph.includes('room')) {
      const parts = paragraph.split('room');
      return (
        <p key={index}>
          {parts[0]}
          <s>room</s>
          {parts[1]}
        </p>
      );
    } else if (paragraph.includes('кімнату')) {
      const parts = paragraph.split('кімнату');

      return (
        <p key={index}>
          {parts[0]}
          <s>кімнату</s>
          {parts[1]}
        </p>
      );
    } else {
      return <p key={index}>{paragraph}</p>;
    }
  });

  return (
    <section className={styles.container}>
      <header>
        <h2 className={styles.title}>
          Full Stack JS Developer |
          <span className={styles.animated}>HTTP/1.1 451 Fahrenheit 🔥</span>
        </h2>
        <h1
          style={{ backgroundImage: `url(${galaxy})` }}
          className={styles.heading}
        >
          {isEng ? 'Rose Povroznyk' : 'Роза Поврозник'}
        </h1>
      </header>
      <div className={styles['main-descr']}>{data}</div>
    </section>
  );
};

export default AboutMe;
