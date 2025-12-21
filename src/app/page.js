import Image from "next/image";
import YouTubeEmbed from "../components/video";

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
				{/* 	<div className="w-full text-4xl">
					<div>Educated Outsider. Problem-Solver.</div>
					<div>Real change. Real progress.</div>
					<div>For Ward #22.</div>
				</div> */}

				{/* Desktop Hero */}
				<Image
					src="/desk_banner.png"
					alt="Hero"
					width={1920}
					height={1080}
					className="hidden md:block w-full h-auto"
				/>
				<YouTubeEmbed url="https://www.youtube.com/watch?v=Esh9nABH3zY" />
			</main>
		</div>
	);
}
