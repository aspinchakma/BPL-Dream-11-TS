# 🏏 BPL Dream 11

BPL Dream 11 is a modern fantasy cricket team-building web application inspired by the Bangladesh Premier League (BPL).

Users can explore available players, manage their credits, select players for their dream team, and build a team within their available budget.

## 🚀 Live Demo

[Live Demo](https://bpl-dream-11-ts.netlify.app/)

## ✨ Features

- 🏏 Browse BPL cricket players
- 💰 Credit/coin management system
- ➕ Select players for the dream team
- ❌ Remove selected players
- 🚫 Prevent unavailable players from being selected
- 📱 Fully responsive design
- 🎨 Modern and clean UI
- ✨ Smooth scroll animations
- 🎬 Motion-based animations
- 🔔 Toast notifications for user actions
- 📊 Display available and selected players separately

---

## 🛠️ Technologies Used

### Frontend

- React
- TypeScript
- Tailwind CSS
- Vite

### Libraries

- Motion
- React Icons
- React Toastify

### Concepts Practiced

- React Components
- Props
- TypeScript Interfaces
- Context API
- React Hooks
- useState
- useContext
- useEffect
- Local Storage
- Conditional Rendering
- Event Handling
- Array Methods
- Responsive Design
- Scroll-based Animation

---

## 🎯 Main Functionalities

### Player Selection

Users can select available players and add them to their dream team.

The application checks:

- Player availability
- Available credits
- Team selection rules

### Credit System

Users start with a certain amount of credits.

Credits are used when selecting players.

If the user does not have enough credits, the application prevents the player from being selected.

### Selected Players

Selected players are displayed separately from the available players.

Users can remove a player from their team and recover the corresponding credits.

### Local Storage

Selected player information is stored in the browser's Local Storage so that the selected team can persist after refreshing the page.

---

## ✨ Animation

Motion is used to create smooth and interactive animations.

Examples include:

- Player cards entering the viewport
- Player cards animating every time they appear in the viewport
- Hero background zoom animation
- Hero title moving based on scroll position
- Smooth UI transitions

---

## 📱 Responsive Design

The application is designed to work across different screen sizes:

- 📱 Mobile
- 📲 Tablet
- 💻 Desktop

Tailwind CSS responsive utilities are used to create the responsive layout.
