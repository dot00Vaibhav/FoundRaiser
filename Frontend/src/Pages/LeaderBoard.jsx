import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import axios from "axios";

export default function LeaderboardPage() {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const url = `${import.meta.env.VITE_BACKEND_URL}/api/users/get`
        const response = await axios.get(url);
        setLeaders(response.data.sort((a, b) => b.amountRaised - a.amountRaised));
      } catch (error) {
        console.error("Error fetching leaderboard", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark flex flex-col transition-colors">
      <Navbar />
      <div className="flex-grow max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-accent-dark dark:text-accent">Leaderboard</h2>
        {loading ? (
          <div className="flex justify-center items-center h-60 text-lg font-medium text-gray-900 dark:text-white">Loading...</div>
        ) : (
          <div className="overflow-x-auto bg-white dark:bg-surface-dark rounded-2xl shadow-md transition-colors">
            <table className="w-full text-left">
              <thead className="bg-accent-dark dark:bg-accent text-white">
                <tr>
                  <th className="py-3 px-6">Rank</th>
                  <th className="py-3 px-6">Intern Name</th>
                  <th className="py-3 px-6">Referral Code</th>
                  <th className="py-3 px-6">Total Donations</th>
                </tr>
              </thead>
              <tbody>
                {leaders.map((leader, index) => (
                  <tr
                    key={index}
                    className={`border-b ${index < 3 ? "bg-accent/10 dark:bg-accent/20" : "hover:bg-accent/5 dark:hover:bg-accent/10"}`}
                  >
                    <td className="py-4 px-6 font-semibold text-accent-dark dark:text-accent">#{index + 1}</td>
                    <td className="py-4 px-6 text-gray-900 dark:text-white">{leader.username}</td>
                    <td className="py-4 px-6 text-gray-900 dark:text-white">{leader.referralCode}</td>
                    <td className="py-4 px-6 text-accent-dark dark:text-accent font-medium">₹{leader.amountRaised.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
