import React from 'react'
import './Year.css'
import { days, months } from '../../helper/Constants';
import Grid from '@mui/material/Grid';
import DayItem from './DayItem';

const YearlyGrid = () => {

  const monthName = (index) => {
    const name = months[index];
    return name[0]
  }

  const createMonth = (days, month) => {
    const currentMonth = [];
    for (let i = 0; i < days; i++) {
      currentMonth.push(i);
    }

    return (
      <Grid container gap={1} direction="column" >
        {
          currentMonth.map((day) => (
            <DayItem key={day} day={day} month={month} />
          ))
        }
      </Grid >
    )
  }

  return (
    <div className="YearlyGrid">
      {
        days.map((days, index) => {
          return (
            <div className="GridColumn" key={index}>
              <p>{monthName(index)}</p>
              {
                createMonth(days, months[index])
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default YearlyGrid
