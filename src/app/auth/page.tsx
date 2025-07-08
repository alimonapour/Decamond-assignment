'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import { validateIranianPhoneNumber } from '../../utils/validation'
import type { RandomUserResponse, User } from '../../types/api'
import styles from './auth.module.scss'

export default function AuthPage() {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (localStorage.getItem('user')) {
      router.push('/dashboard')
    }
  }, [router])

  const handleLogin = async () => {
    setError('')
    if (!validateIranianPhoneNumber(phoneNumber)) {
      setError('لطفا یک شماره تلفن معتبر ایرانی وارد کنید (مثال: 09123456789).')
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch(
        'https://randomuser.me/api/?results=1&nat=us',
      )
      if (!response.ok) {
        throw new Error('خطا در دریافت اطلاعات کاربر.')
      }
      // Apply the type to the response data
      const data: RandomUserResponse = await response.json()
      const user: User = data.results[0]

      localStorage.setItem('user', JSON.stringify(user))

      router.push('/dashboard')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'یک خطای غیرمنتظره رخ داد.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className={styles.authContainer}>
      <div className={styles.authForm}>
        <h1 className={styles.title}>ورود</h1>
        <p className={styles.subtitle}>
          برای ادامه، شماره تلفن خود را وارد کنید
        </p>
        <Input
          type='tel'
          placeholder='مثال: 09123456789'
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          error={error}
          aria-label='شماره تلفن'
        />
        {error && <p className={styles.errorMessage}>{error}</p>}
        <Button onClick={handleLogin} disabled={isLoading}>
          {isLoading ? 'در حال ورود...' : 'ورود'}
        </Button>
      </div>
    </main>
  )
}
