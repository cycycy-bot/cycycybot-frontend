import React from 'react';

import './Modal.css';

const Modal = ({
  show, children, close, onSaveClick,
}) => {
  const showing = show;

  const onClose = () => {
    close(showing);
  };

  return (
    <div>
      {
        !showing
          ? null
          : (
            <div className="backdrop">
              <div className="modal" id="modal">
                <div className="content">{children}</div>
                <div className="actions">
                  <button
                    className="edit"
                    onClick={() => {
                      onClose();
                    }}
                  >
                    Cancel
                  </button>
                  <button className="update modal-save" onClick={onSaveClick}>Save</button>
                </div>
              </div>
            </div>
          )
      }
    </div>
  );
};

export default Modal;
