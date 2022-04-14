import {useState} from 'react';
import './App.css';
import Post from './Components/Post/Post';
import Posts from './Containers/Posts/Posts';
import Dashboard from './Containers/Dashboard';

function App() {
  return (
    <div className="App">
      <h3>MIU </h3>
      <Dashboard />
    </div>
  );
}

export default App;
