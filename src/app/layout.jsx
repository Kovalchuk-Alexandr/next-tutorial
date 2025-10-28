import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@components/Footer';
import Navigation from '@components/Navigation';

const inter = Inter({
	variable: '--font-inter',
	subsets: ['cyrillic', 'latin'],
	display: 'swap',
});

// const geistMono = Geist_Mono({
// 	variable: '--font-geist-mono',
// 	subsets: ['latin'],
// });

export const metadata = {
	title: 'Next tutorial',
	description: 'Next tutorial app',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${inter.variable}`}>
			<body>
				<div className="bg-grid"></div>
				<Navigation />

				<main className="container page">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
