import ChangeColorProvider from '@/context/ColorProvider'
import I18nProvider from '@/context/I18nProvider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <body className={inter.className}>
        <ChangeColorProvider>
          <I18nProvider>
            {children}
          </I18nProvider>
        </ChangeColorProvider>
      </body>
    </html>
  )
}
