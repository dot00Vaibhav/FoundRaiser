import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Component/Navbar";

export default function AuthPage() {
  const [tab, setTab] = useState("signin");
  const navigate = useNavigate();

  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background-light to-background-default dark:from-background-dark dark:to-surface-dark px-4 py-5 transition-colors">
      <div className="w-full max-w-md">
        {/* Avatar */}
        <div className="flex flex-col items-center mb-6">
          <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-full mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="8" r="4" strokeWidth={1.5} fill="none" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 20c0-4 4-6 8-6s8 2 8 6" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Intern Portal</h1>
          <div className="text-gray-500 dark:text-gray-300 text-center mt-2 text-base">
            {tab === "signin"
              ? "Welcome back! Sign in to access your dashboard"
              : "Join our internship program today"}
          </div>
        </div>
        {/* Tabs */}
        <div className="flex rounded-xl bg-white dark:bg-surface-dark shadow-md mb-7 transition-colors">
          <button
            className={`flex-1 px-4 py-2 font-semibold text-lg rounded-xl transition-colors ${
              tab === "signin"
                ? "bg-white dark:bg-surface-dark text-primary shadow"
                : "text-gray-500 dark:text-gray-300"
            }`}
            onClick={() => setTab("signin")}
          >
            Sign In
          </button>
          <button
            className={`flex-1 px-4 py-2 font-semibold text-lg rounded-xl transition-colors ${
              tab === "signup"
                ? "bg-white dark:bg-surface-dark text-primary shadow"
                : "text-gray-500 dark:text-gray-300"
            }`}
            onClick={() => setTab("signup")}
          >
            Sign Up
          </button>
        </div>
        {/* Form */}
        <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-xl transition-colors">
          {tab === "signin" ? <SignInForm navigate={navigate} /> : <SignUpForm navigate={navigate} />}
        </div>
        {/* Switch Links */}
        <div className="my-7 text-center">
          {tab === "signin" ? (
            <span className="text-gray-500 dark:text-gray-300">
              Don't have an account?{" "}
              <button
                onClick={() => setTab("signup")}
                className="text-primary hover:underline transition-colors font-medium"
              >
                Sign up
              </button>
            </span>
          ) : (
            <span className="text-gray-500 dark:text-gray-300">
              Already have an account?{" "}
              <button
                onClick={() => setTab("signin")}
                className="text-primary hover:underline transition-colors font-medium"
              >
                Sign in
              </button>
            </span>
          )}
        </div>
      </div>
    </div>
    </>
  );
}

// -- Sign In Form --
function SignInForm({ navigate }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard'); // Navigate to the dashboard on successful sign-in
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="text-xl font-bold text-center mb-2 text-gray-900 dark:text-white">Sign in to your account</div>
      <div className="text-gray-500 dark:text-gray-300 text-center">Enter your credentials to access your intern dashboard</div>
      <div>
        <label className="block mb-1 font-medium text-gray-900 dark:text-white">Email address</label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-300">
            {/* Email Icon */}
          </span>
          <input
            className="w-full pl-10 pr-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-primary/20 dark:focus:ring-primary/30 bg-white dark:bg-background-dark text-gray-900 dark:text-white"
            type="email"
            required
            placeholder="Enter your email"
          />
        </div>
      </div>
      <div>
        <label className="block mb-1 font-medium text-gray-900 dark:text-white">Password</label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-300">
            {/* Password Icon */}
          </span>
          <input
            className="w-full pl-10 pr-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-primary/20 dark:focus:ring-primary/30 bg-white dark:bg-background-dark text-gray-900 dark:text-white"
            type="password"
            required
            placeholder="Enter your password"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-accent hover:bg-accent-dark text-white font-semibold py-3 rounded-lg mt-3 text-lg shadow"
      >
        Sign In
      </button>
    </form>
  );
}

// -- Sign Up Form --
function SignUpForm({ navigate }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="text-xl font-bold text-center mb-2 text-gray-900 dark:text-white">Create your account</div>
      <div className="text-gray-500 dark:text-gray-300 text-center">Join our internship program and start making an impact</div>
      <div>
        <label className="block mb-1 font-medium text-gray-900 dark:text-white">Full Name</label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-300">
            {/* Name Icon */}
          </span>
          <input
            className="w-full pl-10 pr-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-primary/20 dark:focus:ring-primary/30 bg-white dark:bg-background-dark text-gray-900 dark:text-white"
            type="text"
            required
            placeholder="Enter your full name"
          />
        </div>
      </div>
      <div>
        <label className="block mb-1 font-medium text-gray-900 dark:text-white">Email address</label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-300">
            {/* Email Icon */}
          </span>
          <input
            className="w-full pl-10 pr-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-primary/20 dark:focus:ring-primary/30 bg-white dark:bg-background-dark text-gray-900 dark:text-white"
            type="email"
            required
            placeholder="Enter your email"
          />
        </div>
      </div>
      <div>
        <label className="block mb-1 font-medium text-gray-900 dark:text-white">Password</label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-300">
            {/* Password Icon */}
          </span>
          <input
            className="w-full pl-10 pr-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-primary/20 dark:focus:ring-primary/30 bg-white dark:bg-background-dark text-gray-900 dark:text-white"
            type="password"
            required
            placeholder="Create a password"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-accent hover:bg-accent-dark text-white font-semibold py-3 rounded-lg mt-3 text-lg shadow"
      >
        Create Account
      </button>
    </form>
  );
}
