import './App.css';
import * as React from 'react';
import Chat from './components/Chat';
import Container from '@mui/material/Container';

function App() {
  
  return (
    <>
      <Container maxWidth="sm"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <h1>React X socket.io</h1>
        <Chat />
      </Container>
    </>
  );
}

export default App;
