import React from 'react'
import ReactDom from 'react-dom';

export default function Modal({open, children, onClose}) {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className="overlay"></div>
      <div className="modal">
        <button onClick={() => onClose()}>Close</button>
        <p>{children}</p>
      </div>
    </>,
    document.getElementById('moon')
  );
}
