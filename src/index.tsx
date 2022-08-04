import React, {createElement as e} from 'react';
// import React, {createElement as e} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Container from './Container';
import reportWebVitals from './reportWebVitals';
import Tst from "./Tst";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Container />
);

