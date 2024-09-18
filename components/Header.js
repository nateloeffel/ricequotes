"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ButtonSignin from "./ButtonSignin";
import logo from "@/app/icon.png";
import config from "@/config";

const links = [
	{
		href: "/#pricing",
		label: "Pricing",
	},
	{
		href: "/#testimonials",
		label: "Reviews",
	},
	{
		href: "/#faq",
		label: "FAQ",
	},
];

const cta = <ButtonSignin extraStyle="btn-primary" />;

// A header with a logo on the left, links in the center (like Pricing, etc...), and a CTA (like Get Started or Login) on the right.
// The header is responsive, and on mobile, the links are hidden behind a burger button.
const Header = () => {
	const searchParams = useSearchParams();
	const [isOpen, setIsOpen] = useState(false);

	// setIsOpen(false) when the route changes (i.e: when the user clicks on a link on mobile)
	useEffect(() => {
		setIsOpen(false);
	}, [searchParams]);

	return (
		<header className="bg-base-200 fixed w-full">
			<nav
				className="container flex items-center justify-between px-8 py-4 mx-auto"
				aria-label="Global"
			>
				{/* Your logo/name on large screens */}
				<div className="flex lg:flex-1 w-full justify-center">
					<Link
						className="flex items-center gap-2 shrink-0 "
						href="/"
						title={`${config.appName} hompage`}
					>
						<Image
							src={logo}
							alt={`${config.appName} logo`}
							className="w-8"
							placeholder="blur"
							priority={true}
							width={32}
							height={32}
						/>
						<span className="font-extrabold text-lg">
							{config.appName}
						</span>
					</Link>
				</div>
			</nav>
		</header>
	);
};

export default Header;
