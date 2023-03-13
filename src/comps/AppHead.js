/* rfce auto fills with necessarry functions. */
import React, { useState } from 'react';
import Button, { ChooseButton } from './Button';
import styles from '../styles/modules/app.module.scss';
import TDM from './TDM';

function AppHead() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className={styles.appHeader}>
      <Button variant="main" onClick={() => setModalOpen(true)}>
        Add To Do
      </Button>
      <ChooseButton id="status">
        <option value="all">All</option>

        <option value="incomplete">Incomplete</option>
        <option value="complete">Completed</option>
      </ChooseButton>
      <TDM type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

export default AppHead;
