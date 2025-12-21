export default function YouTubeEmbed({ url }) {
	const getVideoId = (url) => {
		const match = url.match(
			/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^&?/]+)/
		);
		return match ? match[1] : null;
	};

	const videoId = getVideoId(url);

	if (!videoId) return null;

	return (
		<div className="w-full aspect-video">
			<iframe
				className="w-full h-full rounded-lg"
				src={`https://www.youtube-nocookie.com/embed/${videoId}`}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			/>
		</div>
	);
}
