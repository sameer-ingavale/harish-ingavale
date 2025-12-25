"use client";

import Image from "next/image";
import { useState } from "react";
import LanguageToggle from "@/components/languageToggle";

const content = {
	en: {
		paragraphs: [
			"Every election cycle, we get distracted by emotional topics— religion, caste, nationalism, outrage.",
			"And in that noise, real issues get neglected— infrastructure, corruption, air quality, unemployment.",
			"And yet, it would be convenient— too convenient— to place all the blame on those in power.",
			"But let’s be honest for a second.",
			"A democracy does not merely reflect its leaders. It reflects its voters.",
			"And while public participation is essential, the character of the person we elect matters profoundly.",
			"An elected office is not a throne. It is a duty. It demands responsibility, integrity, and accountability.",
			"Now consider this—",
			"If there exists an individual who has spent decades understanding responsibility not as a slogan, but as a way of life.",
			"Someone proven outside politics, in the real world of corporate work and entrepreneurship.",
			"Such a person is far more likely to govern seriously than one whose only qualification is winning the last election.",
			"I speak not merely as a citizen, but as a son.",
			"I was born in a one-room home in Nerul, Sector 8. Five people, limited space, unlimited resolve.",
			"My father worked long hours—not for recognition, but because responsibility does not punch a clock.",
			"Later, he built a business from scratch in a highly technical engineering field, competing with global corporations.",
			"What sustained him was discipline, planning, and an uncompromising commitment to quality.",
			"In 2022, when I took charge of the business, he stepped into public life—not out of ambition, but obligation.",
			"Development, to an engineer, is not rhetoric. It is design, execution, and maintenance.",
			"In the past three years— initiatives for safety, environment, and livability— without holding office.",
			"If this is possible without authority, imagine what is possible with a mandate.",
			"The choice is not dramatic. It is deliberate.",
			"Vote for responsibility.",
			"Vote for accountability.",
			"Vote for Harish Ingavale.",
		],
	},

	mr: {
		paragraphs: [
			"प्रत्येक निवडणुकीत आपण भावना प्रधान मुद्द्यांत अडकतो— धर्म, जात, राष्ट्रवाद, गोंधळ.",
			"आणि त्या गोंधळात खरे प्रश्न दुर्लक्षित राहतात— पायाभूत सुविधा, भ्रष्टाचार, हवा प्रदूषण, बेरोजगारी.",
			"संपूर्ण दोष सत्ताधाऱ्यांवर टाकणे सोपे आहे— कदाचित फारच सोपे.",
			"पण थोडा वेळ प्रामाणिकपणे विचार करूया.",
			"लोकशाही फक्त नेत्यांचे प्रतिबिंब नसते. ती मतदारांचे प्रतिबिंब असते.",
			"लोकसहभाग महत्त्वाचा असला तरी आपण निवडतो त्या व्यक्तीचा स्वभाव अधिक महत्त्वाचा असतो.",
			"निवडून दिलेले पद हे सिंहासन नाही. ती एक जबाबदारी आहे— प्रामाणिकपणा, कर्तव्यभावना आणि उत्तरदायित्व मागणारी.",
			"आता हे विचारात घ्या—",
			"जर एखादी व्यक्ती दशकानुदशके जबाबदारी घोषवाक्य म्हणून नाही, तर जीवनपद्धती म्हणून जगत असेल.",
			"राजकारणाबाहेर, उद्योग आणि उद्योजकतेच्या कठोर वास्तवात स्वतःला सिद्ध केले असेल.",
			"तर अशी व्यक्ती केवळ मागील निवडणूक जिंकलेल्या व्यक्तीपेक्षा अधिक गांभीर्याने प्रशासन करेल.",
			"मी केवळ नागरिक म्हणून नाही, तर एक मुलगा म्हणून बोलतो.",
			"नेरूळ सेक्टर ८ मधील एका खोलीच्या घरात माझा जन्म झाला. पाच जण, मर्यादित जागा, पण अमर्याद जिद्द.",
			"माझे वडील दीर्घ तास काम करत— ओळखीकरिता नाही, कारण जबाबदारी वेळ पाहत नाही.",
			"नंतर त्यांनी तांत्रिक अभियांत्रिकी क्षेत्रात शून्यातून व्यवसाय उभारला— जागतिक कंपन्यांशी स्पर्धा करत.",
			"त्यांना टिकवून ठेवले ते प्रमाण नव्हे, तर शिस्त, नियोजन आणि गुणवत्तेची तडजोड न करणारी वृत्ती.",
			"२०२२ मध्ये मी व्यवसायाची जबाबदारी स्वीकारल्यानंतर त्यांनी सार्वजनिक जीवनात प्रवेश केला— महत्त्वाकांक्षेपोटी नाही, कर्तव्यभावनेतून.",
			"अभियंत्यासाठी विकास म्हणजे भाषण नाही. तो डिझाइन, अंमलबजावणी आणि देखभाल असतो.",
			"मागील तीन वर्षांत— सुरक्षितता, पर्यावरण आणि राहणीमान सुधारण्यासाठी उपक्रम— पद नसतानाही.",
			"अधिकारांशिवाय हे शक्य असेल, तर अधिकार मिळाल्यावर काय शक्य होईल याची कल्पना करा.",
			"हा निर्णय नाट्यमय नाही. तो जाणीवपूर्वक आहे.",
			"जबाबदारीसाठी मतदान करा.",
			"उत्तरदायित्वासाठी मतदान करा.",
			"हरीश इंगवले यांना मतदान करा.",
		],
	},
};

export default function Prospectus() {
	const [language, setLanguage] = useState("en");
	const t = content[language];

	return (
		<div className="max-w-4xl mx-auto mt-12 mb-16 px-6 text-[1.15rem] leading-8 text-gray-900">
			<LanguageToggle language={language} setLanguage={setLanguage} />

			{t.paragraphs.map((text, i) => (
				<p key={i} className="mb-4 text-justify">
					{text}
				</p>
			))}
		</div>
	);
}
