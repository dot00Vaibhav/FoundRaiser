import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function Hero() {
  const navigate = useNavigate();

  const handleScroll = () => {
    window.scrollTo({
      top: 600,
      behavior: 'smooth' 
    });
  };

  return (
    <section className="pt-14 pb-10 text-center bg-gradient-to-r from-background-light to-background-default dark:from-background-dark dark:to-surface-dark transition-colors">
      <div className="mb-4">
        <span className="inline-block bg-background-default dark:bg-surface-dark text-primary px-4 py-1 rounded-full font-medium text-sm">
          🎉 Join 1,000+ Interns Making a Difference
        </span>
      </div>
      <h1 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-3">
        Fundraise with <span className="text-accent">Purpose</span>
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto mb-6">
        Join our intern community and make a real impact. Track your fundraising progress,
        earn rewards, and help create positive change in the world.
      </p>
      <div>
        <button className="bg-accent hover:bg-accent-dark dark:bg-accent-dark dark:hover:bg-accent text-gray-900 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white font-semibold rounded-md px-7 py-3 text-lg mr-3 transition" onClick={() => navigate('/leaderboard')}>
          LeaderBoard &rarr;
        </button>
        <button className="bg-white dark:bg-surface-dark hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 font-semibold rounded-md px-6 py-3 text-lg text-gray-900 dark:text-gray-200" onClick={handleScroll}>
          Learn More
        </button>
      </div>
    </section>
  );
}
