import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Admin from '../components/Admin'
import Tasks from './project/Tasks';

const Home = () => {

  const [selectedItem, setSelectedItem] = useState(null);
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1, height: '100%' }}>
        <Grid container className='p-1'>
          <Grid item xs={3} className='border'>
            <Admin handleClick={handleItemClick} />
          </Grid>
          <Grid className='border' item xs={9}>
            <Tasks selectedItem={selectedItem} />
          </Grid>
        </Grid>
      </Box>


    </>
  )
}

export default Home