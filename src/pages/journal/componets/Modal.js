import './Modal.css'

import { useState } from 'react';

function Modal({ closeModal }) {

let maxId = 100
const [array, setArray] = useState([])
const [done, setDone] = useState('')
const [date, setDate] = useState('')

const onSubmit = (e) => {
  e.preventDefault();
  
  const newObj = {
    done: done,
    date: date,
  } 
    setArray([...array, {newObj}])
  }

const inputDone = (e) => {
  setDone(e.target.value)
}

const inputDate = (e) => {
  setDate(e.target.value)
}

const CreateModal = () => {
  console.log(array)
}

  return (
    <div className='modal-main'>
      <div className='modal-title'>
        <span>Journal</span>
        <span className='modal-done'>Done: {array.length}</span>
      </div>
      <form
        onSubmit={onSubmit}
        className="d-flex modal-elements">
        <input
          type='text'
          value={done}
          onChange={inputDone}
          className="modal-input1"
          placeholder="done..."
        />
        <input 
          type='date'
          value={date} 
          onChange={inputDate} 
          className="modal-input2" />
      </form>
      <ul className='modal-list'>
       {array.map(x => (
          <li
            key={maxId++}
            className='modal-item'
          >
            {x.newObj.done}
          </li>
        ))}
      </ul>
      <div className='modal-button'>
        <button
          className='btn btn-dark btn-hancel'
          onClick={closeModal}>
          Hancel
        </button>
        <button
          className='btn btn-warning'
          onClick={CreateModal}>
          Create
        </button>
      </div>
    </div>
  );
};


export default Modal;