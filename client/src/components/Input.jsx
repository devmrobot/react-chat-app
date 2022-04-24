import React from 'react'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';

function Input() {
  return (
    <>
        <Box
          component="form"
          noValidate
          autoComplete="off"
        >
          <TextField
            fullWidth
            id="input-with-icon-textfield"
            label="Type a message..."
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton color="primary">
                    <SendIcon />
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