import React from 'react'
import styles from './Input.module.scss'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

const Input: React.FC<InputProps> = ({ error, ...props }) => {
  const hasError = !!error
  return (
    <div className={styles.inputWrapper}>
      <input
        className={`${styles.inputField} ${hasError ? styles.error : ''}`}
        {...props}
      />
    </div>
  )
}

export default Input
