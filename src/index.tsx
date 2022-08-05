import React, {createElement as e} from 'react';
// import React, {createElement as e} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Container from './Container';
import reportWebVitals from './reportWebVitals';
import Tst from "./Tst";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement );
root.render( <Container />);

/*
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
function tick() {
  const element = (
    <div>
      <h1>Привет, мир!</h1>
      <h2>Сейчас {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}
setInterval(tick, 100);
*/
/*

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Привет, мир!</h1>
        <h2>Сейчас {this.state.new Date().toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root')as HTMLElement);
root.render(<Clock />);

*/
