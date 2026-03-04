# Image Gallery Creator

A fully interactive gallery creation web application built using React. Allows users to upload, edit and manage image collections with persistent storage utilising LocalStorage. The application demonstrates a component-based responsive UI architecture, global state management using the Context API and dynamic form-driven editing features. 

## Live Preview 
![App Preview]()
Click Here to view [Live Preview](https://image-gallery-creator.vercel.app/)

## Features 
- Interactive image gallery interface
- Global state management using React Context API
- Persistent data storage with LocalStorage
- Add, edit, and manage image metadata:
- - Date
- - Location
- - Description
- Dynamic overlay editor for image updates
- Reusable UI components for scalability
- Responsive layout for modern browsers

## Tech Stack 
- React
- Vite
- JavaScript (ES6+)
- Tailwind CSS
- HTML
- Context API
- LocalStorage

## Learning Objects 
This project demonstrates:

- Building scalable React component architecture
- Implementing global state management
- Persisting client-side data with LocalStorage
- Creating reusable UI components and interactive overlays
- Managing form-driven updates for application data

## Project Structure 
```
Image Gallery Creator/
├── public/
├── src/
│    ├── assets/
│    │        └── test-images/ (can be deleted)
│    │                 ├── img1-min.jpg
│    │                 ├── img2.jpg
│    │                 └── img3.jpg
│    │            
│    ├── components/
│    │          ├── HeaderInput.jsx
│    │          ├── Library.jsx
│    │          ├── UI.jsx
│    │          ├── UIButton.jsx
│    │          └── UIInput.jsx
│    │
│    ├── context/
│    │         └── libraryContext.jsx 
│    │
│    ├── App.css
│     ├── App.jsx
│     ├── index.css
│     └── main.jsx
│
├── .gitignore
├── LICENSE
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js
```
## Liscense 
MIT License - Copyright (c) 2026 Dylan Jones
