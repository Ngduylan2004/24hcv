import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin", "vietnamese"],
  variable: '--font-inter'
});
const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin", "vietnamese"],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: 'Công ty TNHH Công Nghệ 24HCV',
  description: 'Công ty TNHH Công Nghệ 24HCV - Chuyển đổi số, số hóa tài liệu, chỉnh lý lưu trữ và cung cấp thiết bị CNTT hàng đầu Việt Nam',
  generator: '24HCV',
  icons: {
    icon: [
      {
        url: '/logo24hcv.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logo24hcv.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/logo24hcv.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
