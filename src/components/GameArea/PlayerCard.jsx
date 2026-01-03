import React from 'react';
import PlayerName from './PlayerName'; // Yeni parçamızı çağırdık
import './GameArea.css';

const PlayerCard = ({ name, diceImage, isEditable, onChangeName }) => {
  return (
    <div className="player-card">
      {/* İsim işini ustasına devrettik */}
      <PlayerName 
        name={name} 
        isEditable={isEditable} 
        onChangeName={onChangeName} 
      />
      <img src={diceImage} alt="Dice" className="dice-img" />
    </div>
  );
};

export default PlayerCard;