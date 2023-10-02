import React from 'react';
import ReactDOM from 'react-dom/client';
import {IntlProvider} from 'react-intl';
import Arabic from './languages/ar.json';
import English from './languages/en.json';
import './index.css';
import App from './App';
import Wrapper from './Components/Wrapper';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Wrapper>
     <App />
     </Wrapper>
  </React.StrictMode>
);


