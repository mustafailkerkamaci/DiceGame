import React from 'react';
import PlayerCard from './PlayerCard';
import RollButton from './RollButton';
import './GameArea.css';
import diceImages from '../../utils/diceMap';

// player1Name ve setPlayer1Name yeni geldi
const GameContainer = ({ player1Name, setPlayer1Name, player1DiceIndex, player2DiceIndex, onRoll, isRolling }) => {
  
  return (
    <div className="game-container">
      
      <div className="players-wrapper">
        {/* Oyuncu 1: isEditable TRUE -> İsmi değiştirebilir */}
        <PlayerCard 
          name={player1Name} 
          diceImage={diceImages[player1DiceIndex]} 
          isEditable={true}
          onChangeName={setPlayer1Name}
        />
        
        {/* Oyuncu 2: isEditable FALSE -> Sadece PC yazar, değişmez */}
        <PlayerCard 
          name="PC" 
          diceImage={diceImages[player2DiceIndex]} 
          isEditable={false} 
        />
      </div>

      <div style={{ pointerEvents: isRolling ? 'none' : 'auto', opacity: isRolling ? 0.6 : 1 }}>
        <RollButton onRoll={onRoll} />
      </div>

    </div>
  );
};

export default GameContainer;