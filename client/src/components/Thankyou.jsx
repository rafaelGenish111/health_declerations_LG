import React from 'react';
import { Typography, Box } from '@mui/material';


export default function Thankyou() {
  return (
      <div className='form'> 
            <Box
                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#d1b3b5' }}
                className='header'
            >

                <Typography variant='h6' component='h2'>הצהרת בריאות</Typography>
            </Box>
          <h1>הטופס התקבל בהצלחה</h1>
          <h3>תודה רבה!</h3>
    </div>
  )
}
