"use client"
import { Suspense, useState } from "react";
import Header from "@/components/Header";
import Quote from "@/components/Quote";
import Modal from "@/components/Modal";


const quotes = [
	{
		quote: "The only limit to our realization of tomorrow is our doubts of today.",
		date: "September 8th, 2024",
	},
	{
		quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
		date: "September 9th, 2024",
	},
	{
		quote: "Life is 10% what happens to us and 90% how we react to it.",
		date: "September 10th, 2024",
	},
];

function getQuoteForToday() {
	const today = new Date();
	const dayOfYear = Math.floor(
		(today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24
	);
	const quoteIndex = dayOfYear % quotes.length;
	return quotes[quoteIndex];
}


export default function Home() {
	// if date is october 18th, show modal
	const today = new Date();
	const day = today.getDate();
	const month = today.getMonth() + 1;
	let modalOpened = false;
	if (day === 6 && month === 10) {
		modalOpened = true
	}

	const [isModalOpen, setIsModalOpen] = useState(modalOpened);
	const todaysQuote = getQuoteForToday();

	return (
		<>
			<Suspense>
				<Header />
			</Suspense>
			<main className="w-full h-3/5 pt-64">
				<Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
				<div className="h-full w-full flex items-center justify-center">
					<Quote quote={todaysQuote.quote} date={todaysQuote.date} />
				</div>
			</main>
		</>
	);
}
