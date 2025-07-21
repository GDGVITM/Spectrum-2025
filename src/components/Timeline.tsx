"use client"

import { useEffect, useRef, useState } from 'react'
import { Pickaxe, Sword, Shield, Target, Sprout } from "lucide-react"
import "./timeline.css"

const minecraftTimeline = [
	{
		icon: Pickaxe,
		title: "Unveiling",
		date: "28th July 2025 (Monday)",
		venue: "Gate 2",
		description:
			"Decor Unveiling, Banner Unveiling (Events with Dates), All Events explain, Hackbuild Announcement (Online Round along with PBLs and Rules).",
	},
	{
		icon: Target,
		title: "Big-O Battle – Powered by GeeksforGeeks",
		date: "30th July 2025 (Wednesday)",
		venue: "L-Block/M-block Labs",
		description:
			"Individual Participation DSA challenge. We have an ICPC rule for this, but with a twist :)",
	},
	{
		icon: Shield,
		title: "HackBuild – Hackathon",
		date: "2nd and 3rd August 2025",
		venue: "On-campus",
		description:
			"Day-based on-campus hackathon across AI/ML, App Development, Web Development, and Web3/Blockchain domains. Build scalable tech solutions with team collaboration!",
	},
	{
		icon: Sword,
		title: "Launchpad",
		date: "5th and 6th August 2025",
		venue: "TBD",
		description:
			"A two-round AI + SaaS challenge where teams of 2–3 ideate and build innovative SaaS solutions using AI tools and prompt engineering.",
	},
	{
		icon: Sprout,
		title: "GSOC Awareness Session",
		date: "8th August 2025 (Friday)",
		venue: "Auditorium",
		description:
			"Comprehensive guidance session on Google Summer of Code (GSoC) featuring past contributors, mentors, and current selected students. Open to all year students.",
	},
]

export default function Timeline() {
	const timelineRef = useRef<HTMLDivElement>(null)
	const [isAnimated, setIsAnimated] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !isAnimated) {
						setIsAnimated(true)
					}
				})
			},
			{
				threshold: 0.3, // Trigger when 30% of the timeline is visible
				rootMargin: '0px 0px -100px 0px' // Trigger slightly before it's fully visible
			}
		)

		if (timelineRef.current) {
			observer.observe(timelineRef.current)
		}

		return () => {
			if (timelineRef.current) {
				observer.unobserve(timelineRef.current)
			}
		}
	}, [isAnimated])

	return (
		<div ref={timelineRef} className={`minecraft-world ${isAnimated ? 'animate' : ''}`}>
			<div className="background-effects">
				{/* Gradient Overlay */}
				<div className="gradient-overlay"></div>

				{/* Enhanced Particles */}
				<div className="particles">
					{Array.from({ length: 8 }).map((_, i) => (
						<div key={i} className={`particle particle-${i % 4}`}></div>
					))}
				</div>

				{/* Shooting Stars */}
				<div className="shooting-stars">
					{Array.from({ length: 3 }).map((_, i) => (
						<div key={i} className="shooting-star"></div>
					))}
				</div>

				{/* Aurora Waves */}
				<div className="aurora-waves">
					{Array.from({ length: 3 }).map((_, i) => (
						<div key={i} className="aurora-wave"></div>
					))}
				</div>

				{/* Enhanced Grid */}
				<div className="grid-background">
					<div className="grid-lines"></div>
				</div>

				{/* Enhanced Floating Elements */}
				<div className="floating-elements">
					<div className="floating-cube floating-cube-1"></div>
					<div className="floating-cube floating-cube-2"></div>
					<div className="floating-cube floating-cube-3"></div>
					<div className="floating-orb floating-orb-1"></div>
					<div className="floating-orb floating-orb-2"></div>
				</div>

				{/* Enhanced Light Rays */}
				<div className="light-rays">
					<div className="light-ray light-ray-1"></div>
					<div className="light-ray light-ray-2"></div>
					<div className="light-ray light-ray-3"></div>
				</div>

				{/* Pulsing Stars */}
				<div className="pulsing-stars">
					{Array.from({ length: 5 }).map((_, i) => (
						<div key={i} className="star"></div>
					))}
				</div>
			</div>

			<div className="timeline-container">
				{minecraftTimeline.map((event, index) => {
					const IconComponent = event.icon
					return (
						<div key={index} className="timeline-point">
							<IconComponent size={67} strokeWidth={3} />
							<div className="popup">
								<div className="popup-number">{index + 1}</div>
								<div className="popup-details">
									<div className="popup-title">{event.title}</div>
									<div className="popup-date">{event.date}</div>
									<div className="popup-venue">
										📍 {event.venue}
									</div>
									<div className="popup-description">
										{event.description}
									</div>
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}