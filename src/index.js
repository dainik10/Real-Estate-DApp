import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ContractProvider } from './context/ContractContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContractProvider>
        <App />
    </ContractProvider>
);
