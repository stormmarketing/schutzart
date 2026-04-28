import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kennel SchutzArt | Malinois & Cockapoo',
  description: 'Kennel SchutzArt driver oppdrett av malinois til sport og tjeneste, og cockapoo som aktive familiehunder. Helse, mentalitet og trygg oppfølging i fokus.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no">
      <body>{children}</body>
    </html>
  )
}
