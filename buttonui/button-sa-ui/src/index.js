import React from 'react'
import styles from './styles.module.css'

export const RengarButton = ({text, type}) => {
  return  (
     <button   className={styles[type]}>Example Component: {text}</button>
  )
  
}
