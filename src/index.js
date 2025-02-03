import React from 'react';
import { createRoot } from 'react-dom/client';
import Portfolio from './Portfolio';
import './index.css';


const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
);
