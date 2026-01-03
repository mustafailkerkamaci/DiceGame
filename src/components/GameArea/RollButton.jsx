import React from 'react';
import './GameArea.css';

const RollButton = ({ onRoll }) => {
  return (
    <button className="roll-btn" onClick={onRoll}>
      <span className="btn-icon">🔀</span> {/* Şimdilik emoji, sonra icon yaparız */}
    </button>
  );
};

export default RollButton;