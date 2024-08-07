import React from 'react';
import { useLanguage } from '../../contests/LanguageContest';
import AboutMe from '../../components/AboutMe/AboutMe';
import Projects from '../../components/Projects/Projects';
import WorkExperience from '../../components/WorkExperience/WorkExperience';
import Education from '../../components/Education/Education';
import SideBar from '../../components/SideBar/SideBar';
import styles from './MainPage.module.sass';
import outline from '../../images/outline.png';

const MainPage = () => {
  const { isEng, toggleLanguage } = useLanguage();

  return (
    <main className={styles['main-container']}>
      <div className={styles['about-me-container']}>
        <button onClick={toggleLanguage}>{isEng ? 'ua' : 'eng'}</button>
        <img src={outline} alt='outline' className={styles.outline} />
        <AboutMe />
        <Projects />
        <WorkExperience />
        <Education />
      </div>
      <SideBar />
    </main>
  );
};

export default MainPage;
