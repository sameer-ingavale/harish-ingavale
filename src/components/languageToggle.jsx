"use client";

export default function LanguageToggle({ language, setLanguage }) {
	return (
		<div className="flex justify-end mb-6">
			<div className="flex items-center bg-amber-100 rounded-full p-1 text-sm font-medium">
				<button
					onClick={() => setLanguage("en")}
					className={`px-4 py-1 rounded-full transition cursor-pointer ${
						language === "en"
							? "bg-white shadow text-gray-900"
							: "text-gray-600"
					}`}>
					English
				</button>
				<button
					onClick={() => setLanguage("mr")}
					className={`px-4 py-1 rounded-full transition cursor-pointer ${
						language === "mr"
							? "bg-white shadow text-gray-900"
							: "text-gray-600"
					}`}>
					मराठी
				</button>
			</div>
		</div>
	);
}
