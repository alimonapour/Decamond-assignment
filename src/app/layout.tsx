import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'پروژه احراز هویت Next.js',
  description: 'پیاده‌سازی صفحه ورود و داشبورد با Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='fa' dir='rtl'>
      <head>
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css'
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
