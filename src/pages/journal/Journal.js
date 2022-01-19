import './Journal.css'

import { useState } from 'react';
import { Link } from "react-router-dom";
import Modal from './componets/Modal';

function Journal() {
  const [modal, setModal] = useState(false)

  const openModal = () => {
    setModal(true)
  }

  const closeModal = () => {
    setModal(false)
  }

  return (
    <div className='journal'>
      <h1 className='journal-title'>
        Journaling
      </h1>
      <button
        type="button"
        className="btn btn-dark">
        <Link to="/">back</Link>
      </button>
      <button
        type="button"
        className="btn btn-danger"
        onClick={openModal}>
        Create Journal +
      </button>
      <div className='journal-modal'>
        { modal ? <Modal closeModal={closeModal} /> : false }
      </div>
    </div>
  );
};

export default Journal;