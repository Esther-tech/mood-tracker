import React, { useState } from 'react'
import Modal from '../../helper/Modal';
import './Year.css'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  backgroundColor: theme.palette.secondary,
  height: '1.5rem',
  width: '1.5rem',
}));



const DayItem = ({ day, month }) => {
  const [moodModal, setMoodModal] = useState(false);

  const saveDayMood = () => {
    console.log('Youre saving')
  }

  return (
    <div>
      <Grid
        item
        key={day}
        onClick={() => setMoodModal(true)} >
        <Item></Item>
      </Grid >

      <Modal
        title={`${month} ${day + 1}, 2022`}
        description={createMoodModal()}
        open={moodModal}
        handleClose={() => setMoodModal(false)}
        handleAction={() => saveDayMood()}
        actionTitle="Save"
      />
    </div>
  )

  function createMoodModal() {
    return (
      <div>
        How do you feel today?
        checkboxes

      </div>
    )
  }
}



export default DayItem
