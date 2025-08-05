import React from "react";

const stats = [
	{ icon: "👥", value: "1,247", label: "Active Interns" },
	{ icon: "💲", value: "$847,392", label: "Total Raised" },
	{ icon: "⏳", value: "3,891", label: "Rewards Unlocked" },
	{ icon: "💜", value: "12,847", label: "Lives Impacted" }
];

export default function Stats() {
	return (
		<section className="flex justify-center items-center gap-8 bg-gradient-to-r from-background-light to-background-default dark:from-background-dark dark:to-surface-dark py-6 transition-colors">
			{stats.map((s, idx) => (
				<div key={idx} className="text-center">
					<div className="text-2xl bg-background-default dark:bg-surface-dark rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-1 transition-colors">{s.icon}</div>
					<div className="text-2xl font-extrabold text-gray-900 dark:text-white">{s.value}</div>
					<div className="text-sm text-gray-500 dark:text-gray-300">{s.label}</div>
				</div>
			))}
		</section>
	);
}
