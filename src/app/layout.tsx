import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

import Header from '@/components/Header/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Logic Tools',
	description: 'Logic Tools',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" data-theme="dark">
			<body className={inter.className}>
				<Header />
				<main className="main">{children}</main>
				<ToastContainer />
			</body>
		</html>
	)
}
