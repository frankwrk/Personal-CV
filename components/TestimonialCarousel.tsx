"use client";

import type React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
	ChevronLeftIcon,
	ChevronRightIcon,
	QuoteIcon,
} from "@radix-ui/react-icons";
import { useTheme } from "@/contexts/ThemeContext";

interface Testimonial {
	id: number;
	name: string;
	company: string;
	text: string;
}

const testimonials: Testimonial[] = [
	{
		id: 1,
		name: "Rachel Breen",
		company: "LessonPlans.ie",
		text: "Francisc's redesign of our e-commerce platform resulted in a 40% increase in conversions from both vendors and customers. His attention to detail and design approach made all the difference.",
	},
	{
		id: 2,
		name: "Mark Forman",
		company: "dublinbonders.com",
		text: "Francisc transformed our complex requirements—spanning e-commerce integration and accessibility—into a user-friendly, cohesive design. Every design choice was aligned with our business goals, making our site more engaging and intuitive.",
	},
	{
		id: 3,
		name: "Sarah Fogarty",
		company: "H&MV Engineering",
		text: "Francisc and Avalanche Design team consolidated our country-specific sites into one multilingual platform, streamlining both user experience and content management. Their iterative design approach ensured a professional, cohesive website that's easy to maintain.",
	},
];

const TestimonialCarousel: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const { theme } = useTheme();

	const nextTestimonial = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
	};

	const prevTestimonial = () => {
		setCurrentIndex(
			(prevIndex) =>
				(prevIndex - 1 + testimonials.length) % testimonials.length,
		);
	};

	return (
		<Card
			className={`${theme === "light" ? "bg-zinc-100" : "bg-zinc-900/50"} ${theme === "light" ? "gold-border" : "border-zinc-800"}`}
			data-oid="s1z.pr9"
		>
			<CardContent className="p-3 md:p-4" data-oid="igvglqe">
				<div className="relative" data-oid="7vwxqlu">
					<AnimatePresence mode="wait" data-oid="uj.upr5">
						<motion.div
							key={currentIndex}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.3 }}
							className="text-center"
							data-oid="zaj2.9r"
						>
							<QuoteIcon
								className={`mx-auto mb-2 ${theme === "light" ? "text-zinc-400" : "text-zinc-600"}`}
								width={32}
								height={32}
								data-oid="2xcb5:h"
							/>
							<p
								className={`text-sm md:text-base mb-2 ${theme === "light" ? "text-zinc-700" : "text-zinc-300"}`}
								data-oid="igcbo6."
							>
								"{testimonials[currentIndex].text}"
							</p>
							<p
								className={`font-semibold ${theme === "light" ? "text-black" : "text-white"}`}
								data-oid="irwkq2z"
							>
								{testimonials[currentIndex].name}
							</p>
							<p
								className={`${theme === "light" ? "text-zinc-600" : "text-zinc-400"}`}
								data-oid="eu.67ba"
							>
								{testimonials[currentIndex].company}
							</p>
						</motion.div>
					</AnimatePresence>
					<button
						type="button"
						onClick={prevTestimonial}
						className={`absolute top-1/2 left-0 transform -translate-y-1/2 ${
							theme === "light"
								? "text-zinc-400 hover:text-zinc-600"
								: "text-zinc-600 hover:text-zinc-400"
						}`}
						aria-label="Previous testimonial"
						data-oid="3r_5ne-"
					>
						<ChevronLeftIcon width={24} height={24} data-oid="51ihwqk" />
					</button>
					<button
						type="button"
						onClick={nextTestimonial}
						className={`absolute top-1/2 right-0 transform -translate-y-1/2 ${
							theme === "light"
								? "text-zinc-400 hover:text-zinc-600"
								: "text-zinc-600 hover:text-zinc-400"
						}`}
						aria-label="Next testimonial"
						data-oid="4i23186"
					>
						<ChevronRightIcon width={24} height={24} data-oid=".k:s1gk" />
					</button>
				</div>
			</CardContent>
		</Card>
	);
};

export default TestimonialCarousel;
