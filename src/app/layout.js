import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "Harish Ingavale",
	description: "Made with ♥️ by Sameer Ingavale",
	openGraph: {
		title: "Harish Ingavale",
		description: "Made with ♥️ by Sameer Ingavale",
		url: "https://harishingavale.com", // Replace with your actual deployed domain
		siteName: "Harish Ingavale Website",
		images: [
			{
				url: "https://harishingavale.com/pr1.jpeg", // Replace with actual image name
				width: 1200,
				height: 630,
				alt: "An image of Harish Ingavale",
			},
		],
		type: "website",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
