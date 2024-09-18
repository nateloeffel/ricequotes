import { Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Quote from "@/components/Quote";

export default function Home() {
	// Example Quote: "I don't know what to put here but it should be funny."
	// Example Date: "2022-01-01"

	return (
		<>
			<Suspense>
				<Header />
			</Suspense>
			<main className="w-full h-3/5 pt-64">
				<div className="h-full w-full flex items-center justify-center">
					<Quote
						quote="I don't know what to put here but it should be funny."
						date="September 8th, 2024"
					/>
				</div>
			</main>
		</>
	);
}
