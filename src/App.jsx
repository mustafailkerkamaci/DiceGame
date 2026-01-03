import React, { useState, useEffect } from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import GameContainer from './components/GameArea/GameContainer';

function App() {
  // --- STATE'LER ---
  const [player1Name, setPlayer1Name] = useState("Player 1"); // İSİM STATE'İ EKLENDİ
  const [player1Dice, setPlayer1Dice] = useState(5);
  const [player2Dice, setPlayer2Dice] = useState(5);
  const [result, setResult] = useState("Let's Play!");
  const [isRolling, setIsRolling] = useState(false);

  // --- MANTIK ---
  
  const determineWinner = (dice1, dice2) => {
    if (dice1 > dice2) {
      setResult(`🚩 ${player1Name} Wins!`); // Kazanınca ismiyle hitap etsin
    } else if (dice2 > dice1) {
      setResult("PC Wins! 🚩");
    } else {
      setResult("Draw!");
    }
  };

  const handleRollClick = () => {
    if (isRolling) return;

    setIsRolling(true);
    setResult("Rolling...");
  };

  useEffect(() => {
    let interval;
    let timeout;

    if (isRolling) {
      interval = setInterval(() => {
        setPlayer1Dice(Math.floor(Math.random() * 6));
        setPlayer2Dice(Math.floor(Math.random() * 6));
      }, 100);

      timeout = setTimeout(() => {
        clearInterval(interval);
        setIsRolling(false);
        
        const finalDice1 = Math.floor(Math.random() * 6);
        const finalDice2 = Math.floor(Math.random() * 6);
        
        setPlayer1Dice(finalDice1);
        setPlayer2Dice(finalDice2);

        determineWinner(finalDice1, finalDice2);

      }, 3000);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [isRolling, player1Name]); // player1Name değişirse de useEffect güncel kalsın

  const appStyle = {
    backgroundColor: '#393E46',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  return (
    <div style={appStyle}>
      <HeaderContainer result={result} />
      
      {/* State'i aşağı gönderiyoruz */}
      <GameContainer 
        player1Name={player1Name}
        setPlayer1Name={setPlayer1Name}
        player1DiceIndex={player1Dice}
        player2DiceIndex={player2Dice}
        onRoll={handleRollClick}
        isRolling={isRolling}
      />
    </div>
  );
}

export default App;