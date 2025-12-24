"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LanguageToggle from "@/components/languageToggle";

const content = {
	en: {
		title: "Check Your Name in the Voter List (Ward #22)",
		intro:
			"Follow the steps below to check whether your name is included in the official voter list. This ensures you can vote on election day.",

		step1Title: "Step 1: Open the official voter search website",
		step1Text:
			"Visit the official Maharashtra Election Commission website using the link below.",
		button: "Open Voter List Website",

		step2Title: "Step 2: Search Your Name By",
		step2Text: `Pick the "EPIC Number Wise" option`,

		step3Title: "Step 3: Select Local Body Type",
		step3Text: `Pick the "Municipal Corporations" option`,

		step4Title: "Step 4: Select District",
		step4Text: `Pick the "Thane" option`,

		step5Title: "Step 5: Select Local Body Name",
		step5Text: `Pick the "Navi Mumbai Corporation" option`,

		step6Title: "Step 6: Enter Your EPIC Number",
		step6Text: `Type the 10-digit alphanumeric number from your voter card in the “EPIC NO” field.`,

		step7Title: "Step 7: View Your Voter Details",
		step7Text: `Wait a few moments while the website loads. Once found, your voter information and polling booth details will appear.`,

		note: `If your name does not appear in the online search, you can refer to the complete, officially published voter list below for Ward 22.`,
	},

	mr: {
		title: "मतदार यादीत आपले नाव तपासा (वार्ड #२२)",
		intro:
			"खालील टप्पे पूर्ण करून अधिकृत मतदार यादीत आपले नाव नोंदलेले आहे की नाही हे तपासा. यामुळे निवडणुकीच्या दिवशी आपले मतदान सुनिश्चित होते.",

		step1Title: "टप्पा 1: अधिकृत मतदार शोध संकेतस्थळ उघडा",
		step1Text:
			"खाली दिलेल्या दुव्यावर क्लिक करून महाराष्ट्र राज्य निवडणूक आयोगाचे अधिकृत संकेतस्थळ उघडा.",
		button: "मतदार यादी संकेतस्थळ उघडा",

		step2Title: "टप्पा 2: शोध पद्धत निवडा",
		step2Text: `“EPIC Number Wise” हा पर्याय निवडा`,

		step3Title: "टप्पा 3: स्थानिक स्वराज्य संस्थेचा प्रकार निवडा",
		step3Text: `“Municipal Corporations” हा पर्याय निवडा`,

		step4Title: "टप्पा 4: जिल्हा निवडा",
		step4Text: `“Thane” हा पर्याय निवडा`,

		step5Title: "टप्पा 5: स्थानिक स्वराज्य संस्थेचे नाव निवडा",
		step5Text: `“Navi Mumbai Corporation” हा पर्याय निवडा`,

		step6Title: "टप्पा 6: आपला EPIC क्रमांक भरा",
		step6Text: `आपल्या मतदार ओळखपत्रावर नमूद असलेला 10 अंकी अल्फान्यूमेरिक क्रमांक “EPIC NO” या फील्डमध्ये भरा.`,

		step7Title: "टप्पा 7: आपले मतदार तपशील पहा",
		step7Text: `संकेतस्थळ लोड होण्यासाठी काही क्षण थांबा. माहिती उपलब्ध झाल्यावर आपले मतदार तपशील आणि मतदान केंद्राची माहिती स्क्रीनवर दिसेल.`,

		note: "ऑनलाईन शोधामध्ये आपले नाव आढळले नाही, तर खाली दिलेल्या वार्ड २२ साठीच्या संपूर्ण व अधिकृतरीत्या प्रसिद्ध केलेल्या मतदार यादीचा संदर्भ घेऊ शकता.",
	},
};

export default function CheckVoterNameClient() {
	const [language, setLanguage] = useState("en");
	const t = content[language];

	return (
		<main className="max-w-3xl mx-auto px-4 py-10 text-gray-900">
			<LanguageToggle language={language} setLanguage={setLanguage} />

			<h1 className="text-3xl font-bold mb-4">{t.title}</h1>
			<p className="mb-8 text-lg">{t.intro}</p>

			{/* Step 1 */}
			<section className="mb-10">
				<h2 className="text-xl font-semibold mb-2">{t.step1Title}</h2>
				<p className="mb-4">{t.step1Text}</p>

				<Link
					href="https://mahasecvoterlist.in/ObjectionOnClick/SearchVoterName"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-block bg-amber-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-amber-700">
					{t.button}
				</Link>

				{/* 	<div className="mt-4">
					<Image
						src="/screenshots/step1.png"
						alt="Voter list website homepage"
						width={800}
						height={450}
						className="rounded-lg border"
					/>
				</div> */}
			</section>

			{/* Step 2 */}
			<section className="mb-10">
				<h2 className="text-xl font-semibold mb-2">{t.step2Title}</h2>
				<p className="mb-4">{t.step2Text}</p>

				<Image
					src="/screenshots/step2.png"
					alt="Enter voter details"
					width={800}
					height={450}
					className="rounded-lg border border-gray-300"
				/>
			</section>

			{/* Step 3 */}
			<section className="mb-10">
				<h2 className="text-xl font-semibold mb-2">{t.step3Title}</h2>
				<p className="mb-4">{t.step3Text}</p>

				<Image
					src="/screenshots/step3.png"
					alt="Voter search result"
					width={800}
					height={450}
					className="rounded-lg border border-gray-300"
				/>
			</section>

			{/* Step 4 */}
			<section className="mb-10">
				<h2 className="text-xl font-semibold mb-2">{t.step4Title}</h2>
				<p className="mb-4">{t.step4Text}</p>

				<Image
					src="/screenshots/step4.png"
					alt="Voter search result"
					width={800}
					height={450}
					className="rounded-lg border border-gray-300"
				/>
			</section>

			{/* Step 5 */}
			<section className="mb-10">
				<h2 className="text-xl font-semibold mb-2">{t.step5Title}</h2>
				<p className="mb-4">{t.step5Text}</p>

				<Image
					src="/screenshots/step5.png"
					alt="Voter search result"
					width={800}
					height={450}
					className="rounded-lg border border-gray-300"
				/>
			</section>

			{/* Step 6 */}
			<section className="mb-10">
				<h2 className="text-xl font-semibold mb-2">{t.step6Title}</h2>
				<p className="mb-4">{t.step6Text}</p>

				<Image
					src="/screenshots/step6.png"
					alt="Voter search result"
					width={800}
					height={450}
					className="rounded-lg border border-gray-300"
				/>
			</section>

			{/* Step 7 */}
			<section className="mb-10">
				<h2 className="text-xl font-semibold mb-2">{t.step7Title}</h2>
				<p className="mb-4">{t.step7Text}</p>

				<Image
					src="/screenshots/step7.png"
					alt="Voter search result"
					width={800}
					height={450}
					className="rounded-lg border border-gray-300"
				/>
			</section>

			{/* Note */}
			<div className="mt-12 p-4 bg-yellow-50 border-l-4 border-yellow-400">
				<p className="font-medium">⚠️ {t.note}</p>
				<a
					href="/FinalList_Ward_22.pdf"
					target="_blank"
					rel="noopener noreferrer"
					className="text-amber-700 underline font-medium hover:text-amber-800">
					View Ward #22 Final Voter List (PDF)
				</a>
			</div>
		</main>
	);
}
