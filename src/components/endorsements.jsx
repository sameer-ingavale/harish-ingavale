"use client";

import Image from "next/image";

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
		name: "Vinod Sawant",
		image: "/endorsements/vinod.jpg",
		position: "President, SureVin Finvest",
		isWardResident: true,
	},
	// Add more endorsements here
];

export default function EndorsementsPage() {
	return (
		<main className="max-w-5xl mx-auto px-6 py-12 text-gray-900">
			<header className="mb-12 text-left">
				<h1 className="text-3xl font-bold mb-3">Endorsements & Support</h1>
				<p className="text-lg text-gray-700">
					Individuals and leaders who support the campaign and believe in the
					vision.
				</p>
			</header>

			<section className="grid grid-cols-3 md:grid-cols-4 gap-35 sm:gap-0">
				{endorsements.map((person, i) => (
					<div
						key={i}
						className="flex flex-col items-start text-left hover:opacity-90 transition">
						<div className="relative h-40 w-40 overflow-hidden rounded-lg shadow-lg md:h-48 md:w-48">
							<Image
								src={person.image}
								alt={person.name}
								fill
								className="object-cover"
							/>

							{person.isWardResident && (
								<div className="absolute inset-0  pointer-events-none" />
							)}

							{person.isWardResident && (
								<span className="absolute bottom-2 left-2 text-[11px] font-medium bg-amber-100 text-amber-900 px-2 py-0.5 rounded">
									Ward 22
								</span>
							)}
						</div>

						<h3 className="mt-4 text-lg font-semibold text-gray-900">
							{person.name}
						</h3>

						{person.position && (
							<p className="mt-0.5 text-sm text-gray-600">{person.position}</p>
						)}
					</div>
				))}
			</section>
		</main>
	);
}
