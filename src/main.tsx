import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppProviders } from '../src/app/providers';
import { HomePage } from './pages/HomePage';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProviders>
      <HomePage />
    </AppProviders>
  </React.StrictMode>
)
