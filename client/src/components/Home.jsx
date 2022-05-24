import { Routes, Route, Link } from "react-router-dom";
import { Button } from '@mui/material';
import { Box } from '@mui/system';

function Home() {
  return (
    <div>
        <Box
          sx={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
           <Link to="/chatroom"><Button variant="contained">Enter</Button></Link>
        </Box>
    </div>
  )
}

export default Home