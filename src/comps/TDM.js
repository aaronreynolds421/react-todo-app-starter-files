import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { MdOutlineClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import styles from '../styles/modules/modal.module.scss';
import { addToDo, UpdateToDo } from '../reducers/todoSlice';

function TDM({ type, modalOpen, setModalOpen, ToDo }) {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('incomplete');

  const dispatch = useDispatch();

  useEffect(() => {
    if (type === 'update' && ToDo) {
      setTitle(ToDo.title);
      setStatus(ToDo.status);
    } else {
      setTitle('');
      setStatus('incomplete');
    }
  }, [type, ToDo, modalOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === '') {
      toast.error('Please enter a Name');
      return;
    }
    if (title && status) {
      if (type === 'add') {
        dispatch(
          addToDo({
            id: uuid(),
            title,
            status,
            time: new Date().toLocaleString(),
          })
        );
        toast.success('Task Added');
        setModalOpen(false);
      }
      if (type === 'update') {
        if (ToDo.title !== title || ToDo.status !== status) {
          dispatch(
            UpdateToDo({
              ...ToDo,
              title,
              status,
            })
          );
        } else {
          toast.error('No Changes Made');
        }
      }
    } else {
      toast.error('Title can not be empty');
    }
  };
  return (
    modalOpen && (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div
            className={styles.closeButton}
            onClick={() => setModalOpen(false)}
            onKeyDown={() => setModalOpen(false)}
            tabIndex={0}
            role="button"
          >
            <MdOutlineClose />
          </div>
          <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
            <h1 className={styles.formTitle}>
              {type === 'update' ? 'Update' : 'Add'} To Do
            </h1>
            <label htmlFor="title">
              Title
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label htmlFor="status">
              Status
              <select
                name="status"
                id="status"
                value={status}
                onChange={(e) => setTitle(e.target.value)}
              >
                <option value="incomplete">To Be Done</option>
                <option value="complete">Done</option>
              </select>
            </label>
            <div className={styles.buttonContainer}>
              <button type="submit" variant="main">
                {type === 'update' ? 'Update' : 'Add'} To Do
              </button>
              <button
                type="button"
                variant="other"
                onClick={() => setModalOpen(false)}
                onKeyDown={() => setModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
}

export default TDM;
