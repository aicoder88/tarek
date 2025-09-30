import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TrueNorth Construction',
  description: 'Professional construction and renovation services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}