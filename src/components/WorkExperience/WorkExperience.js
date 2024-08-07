import React from 'react';
import { useLanguage } from '../../contests/LanguageContest';
import { workDataEng, workDataUa } from '../../data/workData';
import styles from './WorkExperience.module.sass';

const WorkExperience = () => {
  const { isEng } = useLanguage();
  const text = isEng ? workDataEng : workDataUa;
  const data = text.map(([position, period, descr], index) => (
    <div key={index}>
      <h4 className={styles['position-title']}>{position}</h4>
      <p className={styles.subtitle}>{period}</p>
      <p className={styles.descr}>{descr}</p>
    </div>
  ));

  return (
    <section className={styles.container}>
      <h3 className={styles.title}>
        {isEng ? 'Work Experience' : 'Досвід роботи'}
      </h3>
      {data}
    </section>
  );
};

export default WorkExperience;
