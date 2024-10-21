import React from 'react'

import styles from './Button.module.css'
const Button = (props) => {
    console.log(props);
    const {} =props
  return (
    <button className={props.isOutline? styles.outline_btn : styles.primary_btn}>
        
        {props.icon}
      {props.text}
    </button>
  )
}

export default Button
