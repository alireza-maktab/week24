import React, { useState } from "react";
import Modal from "./Modal";
import "./portals.css";

export default function Portal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="first-section">
        <button onClick={() => setShowModal(true)}>open modal</button>
        <Modal open={showModal} onClose={() => setShowModal(false)}>
          Fancy Modal
        </Modal>
      </div>
      <div className="second-section">
        some text test test. other content some text test test. other content
        some text test test. other content some text test test. other content
      </div>
    </>
  );
}
