"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation";

export default function Navbar() {
	const [open, setOpen] = useState(false);

	return (
		<nav className="w-full shadow-sm text-gray-900">
			<div className="mx-auto px-4">
				<div className="flex h-20 items-center justify-between">
					{/* Logo */}
					<Link href="/" className="flex items-center">
						<Image
							src="/logo.png"
							alt="Harish Ingavale"
							width={150}
							height={150}
							className="object-contain"
							priority
						/>
					</Link>

					{/* Desktop Menu */}
					<div className="hidden md:flex items-center gap-6">
						<NavLinks />
						<SocialLinks />
					</div>

					{/* Mobile Menu Button */}
					<button
						className="md:hidden text-2xl"
						aria-label="Toggle menu"
						aria-expanded={open}
						onClick={() => setOpen(!open)}>
						{open ? <HiX /> : <HiMenu />}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{open && (
				<div className="md:hidden border-t bg-white">
					<div className="flex flex-col gap-4 px-4 py-6">
						<NavLinks mobile onClick={() => setOpen(false)} />
						<SocialLinks />
					</div>
				</div>
			)}
		</nav>
	);
}

/* ---------------- Components ---------------- */

function NavLinks({ mobile = false, onClick }) {
	const pathname = usePathname();

	const base = "font-medium transition-colors hover:text-amber-600";
	const size = mobile ? "text-lg" : "text-base md:text-lg lg:text-xl";

	const linkClass = (href) =>
		`${base} ${size} ${pathname === href ? "text-amber-600" : "text-gray-900"}`;

	return (
		<>
			<Link
				href="/biography"
				className={linkClass("/biography")}
				onClick={onClick}>
				Biography
			</Link>

			<Link href="/media" className={linkClass("/media")} onClick={onClick}>
				Media
			</Link>

			<Link
				href="/prospectus"
				className={linkClass("/prospectus")}
				onClick={onClick}>
				Prospectus
			</Link>

			<Link
				href="/endorsements"
				className={linkClass("/endorsements")}
				onClick={onClick}>
				Endorsements
			</Link>
		</>
	);
}

function SocialLinks() {
	return (
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
				href="https://www.linkedin.com/in/harish-ingavale"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="LinkedIn">
				<FaLinkedin />
			</a>
		</div>
	);
}
