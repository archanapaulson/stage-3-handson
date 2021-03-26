import React from 'react';
import CountPeople from './CountPeople/CountPeople';
import './App.css';
class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <CountPeople />
      </div>
    )
  }

}
export default App;