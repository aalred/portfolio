import styles from '../styles/Content.module.css';

import { NextPage } from 'next';

import Fade from '@mui/material/Fade';

import Layout from '../components/Layout/layout';
import TechSkills from '../components/Skills/TechSkills';
import { skills } from '../Interfaces';

const Aboutme: NextPage = () => {

  return (
    <div>
      <Layout>
        <div className={styles.content}>
          <div className={styles['content__description']}>
            <br />
            <b>
              Hello! I&apos;m a web developer and I have experience with teamwork, stack MERN, DB managment {'(relationals and no relationals)'}, API REST, SCRUM and a great predisposition. <br />
              I studied +700 hrs in the bootcamp <a href='https://www.soyhenry.com/hiring-en'> Soy Henry </a> with theoretical and practical exercises. <br />
              I developed an individual and group project that allowed me to lay the foundations to start in this new tech world.
            </b>
            <div className={styles['content__skills']}>
              <h2>Tech-Skills</h2>
              <TechSkills />
            </div>
            <div className={styles['content__skills']}>
              <h2>Soft-Skills</h2>
              <ul>
                {skills.map((e, i) => <li key={i}>{e.name}</li>)}
              </ul>
              <br />
              <br />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Aboutme;