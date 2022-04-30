import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useState, useEffect } from 'react';
const { io } = require("socket.io-client");
const socket = io.connect("http://localhost:3001");

function MessagesArea() {

  const [messagesList, setMessagesList] = useState([]);

  useEffect(() => {
    socket.on('receiveMsg', (message) => {
      setMessagesList([...messagesList, message])
    })
  },[messagesList])
  
  return (
    <>
      <Box
        sx={{
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minHeight: 500,
        }}
      >
        <List>
          { 
          messagesList.length > 0 &&
          messagesList.map((message) => 
          <ListItem>
            {message}
          </ListItem>)
          }
        </List>

      </Box>
    </>
  )
}

export default MessagesArea