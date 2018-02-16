import * as React from 'react';
import 'semantic-ui-css/semantic.min.css';
import 'animate.css';
import 'hover.css/css/hover-min.css';
import './App.css';
import HeaderComponent from './components/Header';
import BodyComponent from './components/Body';
import FooterComponent from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent/>
        <BodyComponent/>
        <FooterComponent/>
      </div>
    );
  }
}

export default App;
