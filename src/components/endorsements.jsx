import Image from "next/image";

const endorsements = [
	{
		name: "Vinod Sawant",
		image: "/endorsements/vinod.jpg",
	},
];

export default function Endorsements() {
	return (
		<section className="w-full py-12">
			<div className="mx-auto max-w-6xl px-4">
				<h2 className="mb-10 text-center text-2xl font-semibold md:text-3xl">
					Endorsed By
				</h2>

				<div className="flex flex-col items-center gap-10 md:flex-row md:justify-center">
					{endorsements.map((person) => (
						<div key={person.name} className="flex flex-col items-center">
							<div className="relative h-40 w-40 overflow-hidden rounded-full shadow-lg md:h-48 md:w-48">
								<Image
									src={person.image}
									alt={person.name}
									fill
									className="object-cover"
								/>
							</div>

							<div className="mt-4 rounded-full bg-blue-700 px-6 py-2 text-sm font-semibold text-white">
								{person.name.toUpperCase()}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
