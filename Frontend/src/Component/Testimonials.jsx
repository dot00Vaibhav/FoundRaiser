import React from "react";

const testimonials = [
	{
		initials: "SJ",
		name: "Sarah Johnson",
		role: "Marketing Intern",
		text: "This platform made fundraising so much easier! I've already raised over $500 and unlocked 3 rewards.",
	},
	{
		initials: "MC",
		name: "Mike Chen",
		role: "Tech Intern",
		text: "Love the gamification aspect. The rewards system keeps me motivated to reach higher goals!",
	},
	{
		initials: "ED",
		name: "Emily Davis",
		role: "Design Intern",
		text: "Amazing community and great cause. Proud to be part of this fundraising initiative.",
	},
];

export default function Testimonials() {
	return (
		<section className="py-12 bg-transparent">
			<h2 className="text-2xl font-extrabold text-center mb-1 text-gray-900 dark:text-white">
				What Our Interns Say
			</h2>
			<div className="text-center text-gray-500 dark:text-gray-300 mb-8">
				Real stories from real fundraisers
			</div>
			<div className="flex flex-wrap gap-6 justify-center max-w-5xl mx-auto">
				{testimonials.map((t, i) => (
					<div
						key={i}
						className="bg-white dark:bg-surface-dark rounded-lg border border-gray-100 dark:border-gray-700 shadow-lg p-7 flex flex-col items-start w-80 transition-colors"
					>
						<div className="flex items-center gap-4 mb-3">
							<div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white text-lg font-bold">
								{t.initials}
							</div>
							<div>
								<div className="font-semibold text-gray-900 dark:text-white">
									{t.name}
								</div>
								<div className="text-gray-400 dark:text-gray-300 text-sm">
									{t.role}
								</div>
							</div>
						</div>
						<div className="text-gray-700 dark:text-gray-200 font-medium mb-4 italic">
							&quot;{t.text}&quot;
						</div>
						<div className="text-yellow-500 text-lg">★★★★★</div>
					</div>
				))}
			</div>
		</section>
	);
}
