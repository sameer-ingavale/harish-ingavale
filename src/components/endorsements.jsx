"use client";

import Image from "next/image";
import { useState } from "react";

const endorsements = [
	{
		name: "Amit Bhatija",
		image: "/endorsements/amit.png",
		position: "Director, Paradise Group",
		isWardResident: true,
	},
	{
		name: "Prakash Patil",
		image: "/endorsements/prakash.jpeg",
		position: "Shiv Sena Leader",
		isWardResident: false,
	},
	{
		name: "Manoj Jamsutkar",
		image: "/endorsements/manoj.png",
		position: "Shiv Sena Leader",
		isWardResident: false,
	},
	{
		name: "Ramesh Krishnan",
		image: "/endorsements/ramesh.jpeg",
		position: "CEO, The Nepal Distilleries",
		isWardResident: false,
	},
	{
		name: "Ravi Varma",
		image: "/endorsements/ravi.jpg",
		position: "Director, Hypro Group",
		isWardResident: false,
	},
	{
		name: "Ranesh Sinha",
		image: "/endorsements/ranesh.jpeg",
		position: "Vice President, United Spirits",
		isWardResident: false,
	},
	{
		name: "Sahil Jaidhara",
		image: "/endorsements/sahil.jpg",
		position: "Director, Sahil Associates",
		isWardResident: true,
	},
	{
		name: "Vinod Sawant",
		image: "/endorsements/vinod.jpg",
		position: "President, SureVin Finvest",
		isWardResident: true,
	},
];

export default function EndorsementsPage() {
	const [showWardOnly, setShowWardOnly] = useState(false);

	const filteredEndorsements = showWardOnly
		? endorsements.filter((e) => e.isWardResident)
		: endorsements;

	return (
		<main className="max-w-5xl mx-auto px-4 py-12 text-gray-900">
			{/* Header */}
			<header className="mb-8">
				<h1 className="text-3xl font-bold mb-2">Endorsements & Support</h1>
				<p className="text-gray-700">
					Leaders and residents who support the campaign and its vision.
				</p>
			</header>

			{/* Filter */}
			<div className="mb-8 flex gap-3">
				<button
					onClick={() => setShowWardOnly(false)}
					className={`px-4 py-2 rounded-full text-sm font-medium border ${
						!showWardOnly
							? "bg-amber-600 text-white"
							: "bg-amber-50 text-gray-700 cursor-pointer"
					}`}>
					All
				</button>

				<button
					onClick={() => setShowWardOnly(true)}
					className={`px-4 py-2 rounded-full text-sm font-medium border ${
						showWardOnly
							? "bg-amber-600 text-white"
							: "bg-amber-50 text-gray-700 cursor-pointer"
					}`}>
					Ward 22 Residents
				</button>
			</div>

			{/* Grid */}
			<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
				{filteredEndorsements.map((person, i) => (
					<div key={i} className="flex flex-col">
						{/* Image */}
						<div className="relative h-[200px] w-full max-w-[200px] rounded-lg overflow-hidden shadow">
							<Image
								src={person.image}
								alt={person.name}
								fill
								className="object-cover"
							/>

							{person.isWardResident && (
								<span className="absolute bottom-2 left-2 text-[11px] font-medium bg-amber-100 text-amber-900 px-2 py-0.5 rounded">
									Ward 22
								</span>
							)}
						</div>

						{/* Text */}
						<h3 className="mt-4 text-lg font-semibold">{person.name}</h3>
						{person.position && (
							<p className="text-sm text-gray-600">{person.position}</p>
						)}
					</div>
				))}
			</section>
		</main>
	);
}
