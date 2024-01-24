import React from "react";
import "./modal.css";

const DeleteModal = ({ setIsOpen, id }) => {
  
  return (
    <>
      <div className="dark__bg" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modal__header">
            <h5 className="heading">Delete User</h5>
          </div>
          <button className="close__btn" onClick={() => setIsOpen(false)}>
            <i className='bx bx-x'></i>
          </button>
          <div className="modal__content">
            <p>Are you sure you want to delete the user?</p>
          </div>
          <div className="modal__actions">
            <div className="actions__container">
              <button className="delete__btn" onClick={() => setIsOpen(false)}>
                Delete
              </button>
              <button
                className="cancel__btn"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;