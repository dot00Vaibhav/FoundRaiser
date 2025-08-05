import React from "react";

const features = [
	{
		icon: "👥",
		title: "Join Our Community",
		description: "Connect with fellow interns and make a difference together",
	},
	{
		icon: "💲",
		title: "Track Your Impact",
		description: "See how much you've raised and track your fundraising progress",
	},
	{
		icon: "🏆",
		title: "Earn Rewards",
		description: "Unlock achievements and rewards as you reach fundraising milestones",
	},
	{
		icon: "❤️",
		title: "Make a Difference",
		description: "Every donation counts towards making a positive impact in the world",
	},
];

export default function WhyChooseUs() {
	return (
		<section className="py-12 bg-background-light dark:bg-background-dark transition-colors">
			<h2 className="text-center font-black text-3xl mb-2 text-gray-900 dark:text-white">
				Why Choose Our Platform?
			</h2>
			<div className="text-center text-gray-500 dark:text-gray-300 mb-8 text-lg">
				Everything you need to succeed in your fundraising journey
			</div>
			<div className="flex flex-wrap justify-center items-stretch gap-6 max-w-5xl mx-auto">
				{features.map((f, i) => (
					<div
						key={i}
						className="flex flex-col bg-white dark:bg-surface-dark shadow-md rounded-lg p-6 w-64 text-center transition-colors"
					>
						<div className="text-2xl bg-background-light dark:bg-background-dark rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
							{f.icon}
						</div>
						<div className="font-semibold text-lg mb-1 text-gray-900 dark:text-white">
							{f.title}
						</div>
						<div className="text-gray-600 dark:text-gray-300 text-sm">
							{f.description}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
