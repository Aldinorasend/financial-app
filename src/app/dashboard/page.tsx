import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Financial App Dashboard",
  description: "Your personal financial dashboard with AI-powered insights.",
};
export default function DashboardPage() {
  return (
    <div className="p-2 space-y-4">
      <section id="header">
        <h1 className="text-2xl font-bold text-primary">Dashboard</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Get an overview of your financial activities and insights.
        </p>
      </section>
      <section id="content"></section>
    </div>
  );
}
