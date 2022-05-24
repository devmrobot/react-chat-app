import './App.css';
import * as React from 'react';
import Chat from './components/Chat';
import { Routes, Route} from "react-router-dom";
import Home from './components/Home';

function App() {
  
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="chatroom" element={<Chat />} />
        </Routes>
    </>
  );
}

export default App;
