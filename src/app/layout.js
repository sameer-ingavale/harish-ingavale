import Navbar from "./components/navbar";
import "./globals.css";
import { Merriweather, Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const merriweather = Merriweather({
	subsets: ["latin"],
	weight: ["300", "400", "700", "900"], // only available weights
	variable: "--font-merriweather", // optional CSS variable name
});

export const metadata = {
	title: "Harish Ingavale",
	description: "Made with ♥️ by Sameer Ingavale",
	openGraph: {
		title: "Harish Ingavale",
		description: "Made with ♥️ by Sameer Ingavale",
		url: "https://www.harishingavale.com", // Replace with your actual deployed domain
		siteName: "Harish Ingavale Website",
		images: [
			{
				url: "https:/www.harishingavale.com/pr1.jpeg", // Replace with actual image name
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
				className={`${merriweather.className} antialiased `}
				style={{ backgroundColor: "#FEFBF3" }}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
