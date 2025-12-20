import Image from "next/image";

export default function Home() {
	return (
		<div className="flex min-h-screen items-center justify-center">
			<main className="flex min-h-screen w-full flex-col items-center justify-between text-gray-900">
				{/* Mobile Hero */}
				<Image
					src="/mobile_hero.png"
					alt="Hero"
					width={1080}
					height={1350}
					className="block md:hidden w-full h-auto"
				/>

				{/* Desktop Hero */}
				<Image
					src="/mobile_hero.png"
					alt="Hero"
					width={1920}
					height={1080}
					className="hidden md:block w-full h-auto"
				/>
			</main>
		</div>
	);
}
