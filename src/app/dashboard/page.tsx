'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Button from '../../components/Button/Button'
import type { User } from '../../types/api'
import styles from './dashboard.module.scss'

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (!userData) {
      router.push('/auth')
    } else {
      setUser(JSON.parse(userData))
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('user')
    router.push('/auth')
  }

  if (!user) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
      </div>
    )
  }

  return (
    <main className={styles.dashboardContainer}>
      <div className={styles.dashboardCard}>
        <img
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
          className={styles.avatar}
        />
        <h1 className={styles.welcomeMessage}>
          {user.name.first} {user.name.last}، خوش آمدید!
        </h1>
        <p className={styles.subtext}>شما با موفقیت وارد شدید.</p>
        <Button onClick={handleLogout} variant='secondary'>
          خروج
        </Button>
      </div>
    </main>
  )
}
