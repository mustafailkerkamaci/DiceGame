import React, { useState } from 'react';
import './GameArea.css';

const PlayerName = ({ name, onChangeName, isEditable }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(name);

  // Düzenleme yetkisi yoksa sadece ismi yaz geç
  if (!isEditable) {
    return <p className="player-name">{name}</p>;
  }

  // Kaydetme fonksiyonu
  const handleSave = () => {
    if (tempName.trim() !== "") { // Boş isim olmasın
      onChangeName(tempName);
    } else {
      setTempName(name); // Boşsa eskiye dön
    }
    setIsEditing(false);
  };

  // Enter tuşuna basınca kaydet
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSave();
  };

  // Düzenleme modundaysa Input göster
  if (isEditing) {
    return (
      <div className="name-edit-wrapper">
        <input
          className="name-input"
          value={tempName}
          onChange={(e) => setTempName(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleSave} // Dışarı tıklayınca da kaydet
          autoFocus
        />
      </div>
    );
  }

  // Normal moddaysa İsim + Kalem İkonu göster
  return (
    <div className="name-display-wrapper" onClick={() => setIsEditing(true)}>
      <p className="player-name pointer-cursor">
        {name} <span style={{ fontSize: '1rem', opacity: 0.6 }}>✎</span>
      </p>
    </div>
  );
};

export default PlayerName;