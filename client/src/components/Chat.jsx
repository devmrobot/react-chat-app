import React from 'react'
import Input from './Input'
import MessagesArea from './MessagesArea';
import Container from '@mui/material/Container';

function Chat() {
  return (
    <>
      <Container maxWidth="sm">
        <MessagesArea />
        <Input />
      </Container>
    </>
  )
}

export default Chat