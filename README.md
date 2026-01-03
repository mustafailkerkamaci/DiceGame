# 🎲 Dice Game (React + Vite)

A modern, interactive Dice Game built with **React** and **Vite**. This project demonstrates component-based architecture, state management, and CSS animations.

![Project Screenshot](<img width="1257" height="907" alt="image" src="https://github.com/user-attachments/assets/e3c7570c-5f97-45f0-b496-4a5ce5d50646" />
) 


## ✨ Features

- **Dynamic Rolling Animation:** The dice faces change rapidly for 3 seconds to simulate a real rolling effect.
- **Player vs PC Logic:** Player 1 plays against the Computer.
- **Editable Player Name:** Player 1 can click on their name to update it.
- **Win/Loss/Draw Detection:** Automatic winner calculation after the dice stop rolling.
- **Modular Architecture:** Built using the "3-Piece" component rule for better maintainability.

## 🛠️ Technologies Used

- **React (Hooks):** `useState`, `useEffect` for game logic and animations.
- **Vite:** For fast development and building.
- **CSS3:** Flexbox and custom animations (Shake effect, Hover states).
- **Google Fonts:** Used 'Lobster' font for a playful UI.

## 📂 Project Structure

The project follows a strict modular file structure where each section is divided into logical sub-components:

```text
src/
├── assets/          # Images and static files
├── components/
│   ├── Header/      # Header section (Title & Icon)
│   │   ├── HeaderContainer.jsx
│   │   ├── ResultTitle.jsx
│   │   ├── HeaderIcon.jsx
│   │   └── Header.css
│   └── GameArea/    # Main game board (Dice, Players, Buttons)
│       ├── GameContainer.jsx
│       ├── PlayerCard.jsx
│       ├── PlayerName.jsx
│       ├── RollButton.jsx
│       └── GameArea.css
├── utils/           # Helper functions & Data (diceMap.js)
└── App.jsx          # Main Game Logic & State (Lifting State Up)
