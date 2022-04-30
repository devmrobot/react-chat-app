import React from 'react'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
const { io } = require("socket.io-client");
const socket = io.connect("http://localhost:3001");

function Input() {

  const [inputValue, setInputValue] = useState('');

  const handleOnChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    socket.emit("message", inputValue);
    setInputValue('');
    e.target[0].value = '';
  }

  return (
    <>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleOnSubmit}
        >
          <TextField
            fullWidth
            onChange={handleOnChange}
            value={inputValue}
            id="input-with-icon-textfield"
            label="Type a message..."
            InputProps={{
              endAdornment: (
                <InputAdornment
                position="end">
                  <IconButton
                  type="submit"
                  color="primary">
                    <SendIcon/>
                  </IconButton>
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
        </Box>
    </>
  )
}

export default Input