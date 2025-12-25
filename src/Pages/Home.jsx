import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Welcome</h1>
      <p className="text-sm text-gray-500">Use the navigation to view cards and tables.</p>
      <Link to="/cards" className="inline-block bg-orange-500 text-white px-4 py-2 rounded">View Cards</Link>
    </div>
  );
}