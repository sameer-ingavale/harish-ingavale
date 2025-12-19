import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
			<main className="flex min-h-screen w-full flex-col items-center justify-between py-12 px-16 bg-white sm:items-start">
				{/* 	<Image
					src="/banner.jpg"
					alt="sourcebay-logo"
					width={720}
					height={720}
					className="rounded-lg object-contain"
				/> */}
				<div className="flex items-center justify-between w-full">
					<Image
						src="/logo.png"
						alt="sourcebay-logo"
						width={150}
						height={150}
						className="rounded-lg object-contain"
					/>
					<div className="flex gap-5 text-black">
						<Link className="hover:text-amber-600 font-medium" href="/">
							Home
						</Link>
						<Link
							className="hover:text-amber-600 font-medium"
							href="/biography">
							Biography
						</Link>
						<Link
							className="hover:text-amber-600 font-medium"
							href="/issues-priorities">
							Issues & Priorities
						</Link>
						<Link
							className="hover:text-amber-600 font-medium"
							href="/endorsements">
							Endorsements
						</Link>
						<a>
							<Image
								src="/fb.png"
								alt="sourcebay-logo"
								width={15}
								height={15}
								className="rounded-lg object-contain"
							/>
						</a>
						<a>
							<Image
								src="/ig.png"
								alt="sourcebay-logo"
								width={25}
								height={25}
								className="rounded-lg object-contain"
							/>
						</a>
						<a>
							<Image
								src="/yt.png"
								alt="sourcebay-logo"
								width={25}
								height={25}
								className="rounded-lg object-contain"
							/>
						</a>
					</div>
				</div>
			</main>
		</div>
	);
}
