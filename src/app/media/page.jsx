// app/media/page.jsx

import MediaPageClient from "./MediaPageClient";

export const metadata = {
	title: "Media Coverage | Harish Ingavale",
	description:
		"Interviews, news coverage, and public media featuring Harish Ingavale and his work in public life.",
	openGraph: {
		title: "Media Coverage | Harish Ingavale",
		description:
			"Selected interviews, articles, and public coverage reflecting credibility, work, and values.",
		url: "https://yourdomain.com/media",
		siteName: "Harish Ingavale",
		images: [
			{
				url: "/og-media.jpg",
				width: 1200,
				height: 630,
				alt: "Media Coverage",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Media Coverage | Harish Ingavale",
		description:
			"Interviews and public media coverage highlighting work and credibility.",
		images: ["/og-media.jpg"],
	},
};

export default function MediaPage() {
	return <MediaPageClient />;
}
