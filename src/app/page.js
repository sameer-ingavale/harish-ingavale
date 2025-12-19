import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

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
						<div className="flex gap-4 text-xl">
							<a
								href="https://www.facebook.com/profile.php?id=100089787927783"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Facebook">
								<FaFacebook />
							</a>
							<a
								href="https://www.instagram.com/harishingavaleofficial"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Instagram">
								<FaInstagram />
							</a>

							<a
								href="https://www.youtube.com/watch?v=s9n3K1Ff8uA"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="YouTube">
								<FaYoutube />
							</a>
							<a
								href="	https://www.linkedin.com/in/harish-ingavale"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn">
								<FaLinkedin />
							</a>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
