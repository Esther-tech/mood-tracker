import React from 'react'
import MoodYear from './Year/MoodYear'
import MoodMonth from './Month/MoodMonth'
import Navigation from './Navigation/Navigation'
import './AppContainer.css'

const AppContainer = () => {
  const view = "year";

  return (
    <div className="AppContainer">
      <Navigation />
      {
        view === "year" ?
          <MoodYear />
          :
          <MoodMonth />
      }
    </div>
  )
}



export default AppContainer
