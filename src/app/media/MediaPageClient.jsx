"use client";

import { useState } from "react";
import Image from "next/image";
import LanguageToggle from "@/components/languageToggle";

const content = {
	en: {
		title: "Media & Public Coverage",
		subtitle:
			"Interviews, news coverage, and public conversations reflecting the work, values, and credibility behind the campaign.",
		featured: "Featured Coverage",
		videos: "Video Interviews",
		articles: "Newspaper & Online Articles",
		photos: "Campaign Photos",
		watch: "Watch →",
	},
	mr: {
		title: "माध्यमांतील व सार्वजनिक कव्हरेज",
		subtitle:
			"कार्य, मूल्ये आणि विश्वासार्हता दर्शवणाऱ्या मुलाखती, बातम्या आणि सार्वजनिक संवाद.",
		featured: "ठळक कव्हरेज",
		videos: "व्हिडिओ मुलाखती",
		articles: "वृत्तपत्रे व ऑनलाइन लेख",
		photos: "छायाचित्र कव्हरेज",
		watch: "पहा →",
	},
};

const mediaData = {
	featuredVideo: {
		title: "Interview on Civic Responsibility & Local Governance",
		topics:
			"Marathi identity, local development, educated leadership, active citizenship, political reform, vision for governance",
		date: "April 2025",
		youtubeId: "s9n3K1Ff8uA",
		channel: {
			name: "Shivbandhan News",
			thumbnail: "/media/channels/shivbandhan.jpg", // local image (best practice)
		},
	},
	videos: [
		{
			title: "Accountability in Local Governance",
			date: "April 2025",
			youtubeId: "Esh9nABH3zY",
		},
		{
			title: "Accountability in Local Governance",
			date: "April 2025",
			youtubeId: "sHx5LpCL2dU",
		},
	],
	articles: [
		{
			title: "Stepping Into Public Life to Serve the Community",
			summary:
				"The article documents Harish Ingavale’s decision to join Shiv Sena with the clear objective of working at the grassroots level and contributing actively to social and civic causes.",
			source: "Lokmat",
			date: "March 2025",
			image: "/media/news_2.jpg",
		},
		{
			title:
				"From Professional Career to Public Service: A Shiv Sena Worker’s Journey",
			summary:
				"The article highlights Harish Ingavale’s journey from a professional career into dedicated public service through Shiv Sena, focusing on long-term civic engagement and citizen welfare.",
			source: "Lokmat",
			date: "March 2025",
			image: "/media/news_5.jpg",
		},
		/* {
			title: "Consistent Social Service by Shiv Sena’s Nerul Division",
			summary:
				"Shiv Sena’s Nerul Division carried out sustained community welfare initiatives including cleanliness drives, free health check-ups, hospital visits, and hands-on social service.",
			source: "Lokmat",
			date: "March 2025",
			image: "/media/news_3.jpg",
		},
		{
			title: "Encouraging Young Talent Through Community-Led Initiatives",
			summary:
				"Shiv Sena leaders in Nerul organized and recognized student competitions to promote confidence, creativity, and positive development among local children.",
			source: "Lokmat",
			date: "March 2025",
			image: "/media/news_4.jpg",
		}, */

		{
			title:
				"Shiv Sena Marches to Navi Mumbai Municipal Headquarters Over Civic Issues",
			summary:
				"Shiv Sena led a coordinated march to the Navi Mumbai Municipal Corporation, pressing for immediate action on long-standing infrastructure and public service issues affecting Nerul.",
			source: "Lokmat",
			date: "March 2025",
			image: "/media/news_6.jpg",
		},
		/* {
			title:
				"Shiv Sena Raises Nerul’s Civic Issues Through Public Representation",
			summary:
				"The report covers Shiv Sena’s proactive submission of citizen concerns to municipal officials, addressing essential issues such as water supply, road conditions, safety, and basic amenities in Nerul.",
			summary: "",
			source: "Lokmat",
			date: "March 2025",
			image: "/media/news_1.jpg",
		}, */
	],
	photos: [
		"/campaign/1.jpeg",
		"/campaign/2.jpeg",
		/* "/campaign/3.jpeg", */
		"/campaign/4.jpeg",
		"/campaign/5.jpeg",
		"/campaign/6.jpeg",
		/* "/campaign/7.jpeg", */
		"/campaign/8.jpeg",
		"/campaign/9.jpeg",
		"/campaign/10.jpeg",
		"/campaign/11.jpeg",
	],
};

export default function MediaPageClient() {
	const [language, setLanguage] = useState("en");
	const [lightbox, setLightbox] = useState(null);
	const t = content[language];

	return (
		<main className="max-w-5xl mx-auto px-6 py-12 text-gray-900">
			<LanguageToggle language={language} setLanguage={setLanguage} />

			<header className="mb-12">
				<h1 className="text-3xl font-bold mb-3">{t.title}</h1>
				<p className="text-lg text-gray-700">{t.subtitle}</p>
			</header>

			{/* Featured Video */}
			<section className="mb-16">
				<h2 className="text-2xl font-semibold mb-6">{t.featured}</h2>

				<div className="grid md:grid-cols-2 gap-6">
					<div className="aspect-video rounded-lg overflow-hidden border border-gray-300">
						<iframe
							className="w-full h-full"
							src={`https://www.youtube.com/embed/${mediaData.featuredVideo.youtubeId}`}
							title={mediaData.featuredVideo.title}
							allowFullScreen
						/>
					</div>

					<div>
						<h3 className="text-xl font-semibold mb-2">
							{mediaData.featuredVideo.title}
						</h3>

						<p className="text-sm text-gray-600 mb-3">
							YouTube · {mediaData.featuredVideo.date}
						</p>

						{/* Topics */}
						<p className="text-sm text-gray-600 mb-4 leading-6">
							<span className="font-medium">Topics:</span>{" "}
							{mediaData.featuredVideo.topics}
						</p>

						{/* Channel info */}
						<div className="flex items-center gap-3">
							<Image
								src={mediaData.featuredVideo.channel.thumbnail}
								alt={mediaData.featuredVideo.channel.name}
								width={40}
								height={40}
								className="rounded-full border border-gray-300"
							/>
							<span className="text-sm font-medium text-gray-800">
								{mediaData.featuredVideo.channel.name}
							</span>
						</div>
					</div>
				</div>
			</section>

			{/* Videos */}
			<section className="mb-16">
				<h2 className="text-2xl font-semibold mb-6">{t.videos}</h2>

				<div className="space-y-6">
					{mediaData.videos.map((v, i) => (
						<a
							key={i}
							href={`https://www.youtube.com/watch?v=${v.youtubeId}`}
							target="_blank"
							className="flex gap-4 border-b pb-4 hover:opacity-90 border-gray-500">
							<Image
								src={`https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg`}
								alt={v.title}
								width={200}
								height={200}
								className="rounded-md border border-gray-300"
								unoptimized
							/>
							<div>
								<h3 className="font-medium">{v.title}</h3>
								<p className="text-sm text-gray-600">YouTube · {v.date}</p>
								<span className="text-amber-600 text-sm">{t.watch}</span>
							</div>
						</a>
					))}
				</div>
			</section>

			{/* Articles */}
			<section className="mb-16">
				<h2 className="text-2xl font-semibold mb-6">{t.articles}</h2>

				<div className="space-y-6">
					{mediaData.articles.map((a, i) => (
						<div
							key={i}
							className="flex gap-4 border-b pb-4 cursor-pointer hover:opacity-90 border-gray-500"
							onClick={() => setLightbox(a.image)}>
							{/* Newspaper thumbnail */}
							<Image
								src={a.image}
								alt={a.title}
								width={200}
								height={200}
								className="rounded-md border shrink-0  border-gray-300"
							/>

							{/* Text content */}
							<div>
								<h3 className="font-medium">{a.title}</h3>

								{/* Summary */}
								{a.summary && <p className="text-gray-600 mt-1">{a.summary}</p>}

								<p className="text-sm text-gray-600 mt-2">
									{a.source} · {a.date}
								</p>
								<span className="text-amber-600 text-sm">Click to view →</span>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Photos */}
			<section>
				<h2 className="text-2xl font-semibold mb-6">{t.photos}</h2>

				<div className="relative overflow-hidden rounded-md">
					<div className="flex gap-4 animate-marquee w-max">
						{/* First set */}
						{mediaData.photos.map((img, i) => (
							<Image
								key={`a-${i}`}
								src={img}
								alt="Campaign"
								width={300}
								height={200}
								className="rounded-lg border shrink-0 border-gray-300"
							/>
						))}

						{/* Duplicate set for seamless loop */}
						{mediaData.photos.map((img, i) => (
							<Image
								key={`b-${i}`}
								src={img}
								alt="Campaign"
								width={300}
								height={200}
								className="rounded-lg border flex-shrink-0 border-gray-300"
							/>
						))}
					</div>
				</div>
			</section>

			{/* Lightbox */}
			{lightbox && (
				<div
					className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
					onClick={() => setLightbox(null)}>
					<Image
						src={lightbox}
						alt="Article"
						width={900}
						height={1200}
						className="max-h-[90vh] w-auto"
					/>
				</div>
			)}
		</main>
	);
}
