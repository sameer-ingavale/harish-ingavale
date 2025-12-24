// app/check-voter-name/page.jsx

import CheckVoterNameClient from "./CheckVoterNameClient";

export const metadata = {
	title: "Search Name in Voterlist",
	description:
		"Search your name in the official voter list for Ward 22. Step-by-step guide to check EPIC details and polling booth information.",
	openGraph: {
		title: "Search Name in Voterlist",
		description:
			"Find your name in the Ward 22 voter list using the official Election Commission website.",
		url: "https://yourdomain.com/check-voter-name",
		siteName: "Ward 22 Voter Info",
		images: [
			{
				url: "/og/voter-search-ward-22.jpg", // must be in /public
				width: 1200,
				height: 630,
				alt: "Search Name in Voter List – Ward 22",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Search Name in Voterlist",
		description:
			"Check your name in the Ward 22 voter list and find your polling booth.",
		images: ["/og/voter-search-ward-22.jpg"],
	},
};

export default function Page() {
	return <CheckVoterNameClient />;
}
