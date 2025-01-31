import React from 'react'
import classes from './StartSoon.module.css'
import Waiting from '../Assets/penguins.gif'

const StartSoon = () => {
  return (
    <div className={classes.startSoon}>
        <div><img className={classes.waiting} src={Waiting} alt="" /></div>
        <div className={classes.register}>Registration Has Not Started Yet...</div>
    </div>
  )
}

export default StartSoon
