import { format } from 'date-fns/esm';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { DeleteToDo } from '../reducers/todoSlice';
import styles from '../styles/modules/todoItem.module.scss';
import { getClass } from '../utilities/getClass';
import TDM from './TDM';

function ToDoItem({ ToDo }) {
  const dispatch = useDispatch();
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  const handleDelete = () => {
    dispatch(DeleteToDo(ToDo.id));
    toast.success('Task was successfully deleted');
  };
  const handleUpdate = () => {
    setUpdateModalOpen(true);
  };
  return (
    <>
      <div className={styles.item}>
        <div className={styles.ToDoDetails}>
          [ ]
          <div className={styles.texts}>
            <p
              className={getClass([
                styles.ToDoText,
                ToDo.status === 'complete' && styles['ToDoText--Done'],
              ])}
            >
              {ToDo.title}
            </p>
            <p className={styles.time}>
              {format(new Date(ToDo.time), 'p, MM/dd/yyyy')}
            </p>
          </div>
        </div>
        <div className={styles.ToDoActions}>
          <div
            className={styles.icon}
            onClick={handleDelete}
            onKeyDown={handleDelete}
            role="button"
            tabIndex={0}
          >
            <MdDelete />
          </div>
          <div
            className={styles.icon}
            onClick={handleUpdate}
            onKeyDown={handleUpdate}
            role="button"
            tabIndex={0}
          >
            <MdEdit />
          </div>
        </div>
      </div>
      <TDM
        type="update"
        ToDo={ToDo}
        modalOpen={updateModalOpen}
        setModalOpen={setUpdateModalOpen}
      />
    </>
  );
}

export default ToDoItem;
