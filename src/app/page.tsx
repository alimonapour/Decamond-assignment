'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import styles from './page.module.scss'

export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    const user = localStorage.getItem('user')

    if (user) {
      router.push('/dashboard')
    } else {
      router.push('/auth')
    }
  }, [router])

  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
    </div>
  )
}
