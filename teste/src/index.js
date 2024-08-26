import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // ou o caminho do seu CSS
import { createRoot } from "react-dom/client";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  
    <App />,
);
