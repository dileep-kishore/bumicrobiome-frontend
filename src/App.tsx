import * as React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import HeaderComponent from './components/Header';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent/>
      </div>
    );
  }
}

export default App;
