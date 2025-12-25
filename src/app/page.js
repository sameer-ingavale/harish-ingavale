import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="text-gray-900">
			{/* ================= HERO ================= */}
			<section className="min-h-[80vh] flex items-center">
				<div className="mx-auto max-w-7xl px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
					{/* Left: Text */}
					<div>
						<h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug">
							Responsible Voice for{" "}
							<span className="bg-amber-100 px-1">Ward 22</span>
						</h1>

						<p className="mt-4 text-lg text-gray-700 max-w-xl">
							Focused on local issues, transparent governance, and citizen-first
							development.
						</p>
					</div>

					{/* Right: Image */}
					<div className="relative h-[420px] md:h-[520px]">
						<Image
							src="/hero_harish.png" // transparent background image
							alt="Harish Ingavale"
							fill
							className="object-contain object-bottom pt-16 px-8"
							priority
						/>
					</div>
				</div>
			</section>

			{/* ================= ABOUT PREVIEW ================= */}
			<section className="py-20 bg-[#FCF9F2]">
				<div className="mx-auto max-w-7xl px-4 grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
					{/* Text */}
					<div className="md:col-span-3">
						<h2 className="text-2xl font-semibold mb-4">
							About Harish Ingavale
						</h2>

						<p className="text-gray-700 leading-relaxed max-w-3xl">
							Born and raised in the constituency, Harish Ingavale understands
							the everyday realities of local citizens. He believes governance
							should be accessible, accountable, and rooted in public service.
						</p>

						<Link
							href="/biography"
							className="inline-block mt-4 text-amber-600 font-medium hover:underline">
							Read Full Biography →
						</Link>
					</div>
				</div>
			</section>

			{/* ================= FOOTER ================= */}
			<footer className="py-10 border-t text-sm text-gray-600">
				<div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row justify-between gap-4">
					<div>© {new Date().getFullYear()} Harish Ingavale · Ward 22</div>
					<div>Election campaign website</div>
				</div>
			</footer>
		</main>
	);
}
