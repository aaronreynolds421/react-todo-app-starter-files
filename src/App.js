import React from 'react';
import { Toaster } from 'react-hot-toast';
import AppCont from './comps/AppCont';
import AppHead from './comps/AppHead';
import Title from './comps/Title';
import styles from './styles/modules/app.module.scss';

function App() {
  return (
    <>
      <div className="container">
        <Title>TODO LIST </Title>
        <div className={styles.app__wrapper} />
        <AppHead />
        <AppCont />
      </div>
      <Toaster
        position="top-right"
        toastOptions={{ style: { fontSize: '2.0rem' } }}
      />
    </>
  );
}

export default App;
