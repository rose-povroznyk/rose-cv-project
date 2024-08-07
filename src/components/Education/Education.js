import React from 'react';
import { educationDataEng, educationDataUa } from '../../data/educationData';
import { useLanguage } from '../../contests/LanguageContest';
import styles from './Education.module.sass';

const Education = () => {
  const { isEng } = useLanguage();
  const text = isEng ? educationDataEng : educationDataUa;
  const data = text.map(([place, faculty, years], index) => (
    <div key={index}>
      <h4 className={styles['place-title']}>{place}</h4>
      <h5 className={styles['faculty-title']}>{faculty}</h5>
      <p className={styles.subtitle}>{years}</p>
    </div>
  ));

  return (
    <section>
      <h3 className={styles.title}>{isEng ? 'Education' : 'Освіта'}</h3>
      {data}
    </section>
  );
};

export default Education;
