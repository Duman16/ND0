import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// РџРѕРґРєР»СЋС‡РµРЅРёРµ СЃС‚РёР»РµР№
import './styles/styles.css';  // РЈР±РµРґРёС‚РµСЃСЊ, С‡С‚Рѕ РїСѓС‚СЊ РїСЂР°РІРёР»СЊРЅС‹Р№

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Р”Р»СЏ РёР·РјРµСЂРµРЅРёСЏ РїСЂРѕРёР·РІРѕРґРёС‚РµР»СЊРЅРѕСЃС‚Рё (РїРѕ Р¶РµР»Р°РЅРёСЋ)
reportWebVitals();
