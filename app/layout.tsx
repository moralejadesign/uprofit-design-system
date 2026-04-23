import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'UPROFIT — Operations Design System',
  description: 'Component showcase and design token reference for the UPROFIT operations platform.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
