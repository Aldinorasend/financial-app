import { Button } from "@/components/ui/button";
import { CoinsIcon } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Financial App ",
  description: "Your personal financial app with AI-powered insights.",
};
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24">
      <CoinsIcon className="text-primary size-16" />
      <h1 className="mt-4 text-xl font-bold text-primary">
        Welcome to the Financial App
      </h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400">
        This is a simple financial app with AI-powered features.
      </p>
      <Link href="/dashboard">
        <Button className="mt-4">Go to Dashboard</Button>
      </Link>
    </main>
  );
}
