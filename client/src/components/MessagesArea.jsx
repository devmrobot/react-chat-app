import Box from '@mui/material/Box';

function MessagesArea() {
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
        Jane : Hello it's me !
      </Box>
    </>
  )
}

export default MessagesArea