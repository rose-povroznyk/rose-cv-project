import React from 'react';
import { useLanguage } from '../../contests/LanguageContest';
import {
  softSkillsEng,
  softSkillsUa,
  techSkills,
} from '../../data/sideBarData';
import styles from './SideBar.module.sass';
import photo from '../../images/photo1.jpg';

const SideBar = () => {
  const { isEng } = useLanguage();
  const softSkills = isEng ? softSkillsEng : softSkillsUa;

  return (
    <aside className={styles.sidebar}>
      <section className={styles.box}>
        <img src={photo} alt='Full stack developer' className={styles.image} />
        <div className={styles.middle}>
          <p className={styles.text}>
            Hello world, <br />I am Rose! &#9880;
          </p>
        </div>
      </section>

      <section className={styles.container}>
        <h3 className={styles.title}>{isEng ? 'Contacts' : 'Контакти:'}</h3>
        <ul>
          <li key='mail' className={styles.item}>
            <a
              href='mailto:rosepovroznyk@gmail.com'
              className={styles.link}
              target='_blank'
            >
              rosepovroznyk@gmail.com
            </a>
          </li>
          <li key='github' className={styles.item}>
            <a
              href='https://github.com/rose-povroznyk'
              className={styles.link}
              target='_blank'
            >
              GitHub
            </a>
          </li>
        </ul>
      </section>

      <section className={styles.container}>
        <h3 className={styles.title}>
          {isEng ? 'Tech skills' : 'Течнічні навички:'}
        </h3>
        <ul>
          {techSkills.map((item, index) => (
            <li key={index} className={styles.item}>
              <span className={styles.link}>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.container}>
        <h3 className={styles.title}>
          {isEng ? 'Soft skills' : 'Гнучкі навички:'}
        </h3>
        <ul>
          {softSkills.map((item, index) => (
            <li key={index} className={styles.item}>
              <span href={item} className={styles.link}>
                {item}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
};

export default SideBar;
