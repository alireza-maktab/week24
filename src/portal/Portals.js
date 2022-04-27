import React, { useState } from "react";
import Modal from './Modal';
import './portal.css';

export default function Portals() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className="button-wrapper">
        <button onClick={() => setShowModal(true)}>Open Modal</button>

        <Modal open={showModal} onClose={() => setShowModal(false)}>Fancy Modal :)</Modal>
      </div>
      <p className="other-content">
        Voluptate incididunt labore nostrud aliqua sit commodo nulla sit.
        Laborum laboris irure incididunt quis sint voluptate adipisicing sunt
        occaecat proident in aliquip proident. In mollit Lorem fugiat officia
        irure veniam. Qui excepteur velit esse sunt proident occaecat nulla
        adipisicing culpa cupidatat incididunt in. Et nostrud labore elit
        reprehenderit esse sit enim amet laborum elit. Non duis cupidatat
        laboris reprehenderit sint adipisicing exercitation labore nulla commodo
        consectetur magna. Et ea aliquip nulla adipisicing.
      </p>
    </>
  );
}
