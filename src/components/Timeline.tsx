"use client"

import { useEffect, useRef, useState } from 'react'
import { Pickaxe, Sword, Shield, Target, Sprout } from "lucide-react"
import "./timeline.css"

const minecraftTimeline = [
	{
		icon: Pickaxe,
		title: "Unveiling",
		date: "12th August 2025",
		venue: "Gate 2",
		description:
			"Unveling the biggest TechFest with lots of suprises and fun!",
	},
	{
		icon: Target,
		title: "Big-O Battle – Powered by GeeksforGeeks",
		date: "14th August 2025",
		venue: "L-Block labs",
		description:
			"Individual Participation DSA challenge. We have an ICPC rule for this, but with a twist :)",
	},
		{
		icon: Sword,
		title: "Launchpad",
		date: "18th & 19th August 2025",
		venue: "3rd floor M-Block labs",
		description:
			"A two-round AI + SaaS challenge where teams of 2–3 ideate and build innovative SaaS solutions using AI tools and prompt engineering.",
	},
	{
		icon: Sprout,
		title: "GSOC Awareness Session",
		date: "21st August 2025",
		venue: "Auditorium",
		description:
			"Comprehensive guidance session on Google Summer of Code (GSoC) featuring past contributors, mentors, and current selected students. Open to all year students.",
	},
	{
		icon: Shield,
		title: "HackBuild – Hackathon",
		date: "12th to 23rd August 2025",
		venue: "On-campus",
		description:
			"Our major hackathon of the year, focusing on innovative solutions across various domains. This is a hybrid event with round 1 being online and round 2 being on-campus.",
	},
]

export default function Timeline() {
	const timelineRef = useRef<HTMLDivElement>(null)
	const [isAnimated, setIsAnimated] = useState(false)
	const [isMobile, setIsMobile] = useState(false)
	const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768)
		}
		
		checkMobile()
		window.addEventListener('resize', checkMobile)
		
		return () => window.removeEventListener('resize', checkMobile)
	}, [])

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const index = parseInt(entry.target.getAttribute('data-index') || '0')
					if (entry.isIntersecting) {
						setVisibleItems(prev => new Set([...prev, index]))
					}
				})
			},
			{
				threshold: 0.3,
				rootMargin: '0px 0px -50px 0px'
			}
		)

		// Observe timeline container for background animations
		const containerObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !isAnimated) {
						setIsAnimated(true)
					}
				})
			},
			{
				threshold: 0.1,
				rootMargin: '0px 0px -100px 0px'
			}
		)

		if (timelineRef.current) {
			containerObserver.observe(timelineRef.current)
			
			// Observe each timeline point
			const timelinePoints = timelineRef.current.querySelectorAll('.timeline-point')
			timelinePoints.forEach((point) => {
				observer.observe(point)
			})
		}

		return () => {
			if (timelineRef.current) {
				containerObserver.unobserve(timelineRef.current)
				const timelinePoints = timelineRef.current.querySelectorAll('.timeline-point')
				timelinePoints.forEach((point) => {
					observer.unobserve(point)
				})
			}
		}
	}, [isAnimated])

	return (
		<div ref={timelineRef} className={`minecraft-world ${isAnimated ? 'animate' : ''} ${isMobile ? 'mobile' : ''}`}>
			<div className="background-effects">
				{/* Gradient Overlay */}
				<div className="gradient-overlay"></div>

				{/* Enhanced Particles */}
				<div className="particles">
					{Array.from({ length: isMobile ? 4 : 8 }).map((_, i) => (
						<div key={i} className={`particle particle-${i % 4}`}></div>
					))}
				</div>

				{/* Shooting Stars */}
				<div className="shooting-stars">
					{Array.from({ length: isMobile ? 2 : 3 }).map((_, i) => (
						<div key={i} className="shooting-star"></div>
					))}
				</div>

				{/* Aurora Waves */}
				<div className="aurora-waves">
					{Array.from({ length: isMobile ? 2 : 3 }).map((_, i) => (
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
					{!isMobile && <div className="floating-cube floating-cube-3"></div>}
					<div className="floating-orb floating-orb-1"></div>
					{!isMobile && <div className="floating-orb floating-orb-2"></div>}
				</div>

				{/* Enhanced Light Rays */}
				<div className="light-rays">
					<div className="light-ray light-ray-1"></div>
					<div className="light-ray light-ray-2"></div>
					{!isMobile && <div className="light-ray light-ray-3"></div>}
				</div>

				{/* Pulsing Stars */}
				<div className="pulsing-stars">
					{Array.from({ length: isMobile ? 3 : 5 }).map((_, i) => (
						<div key={i} className="star"></div>
					))}
				</div>
			</div>

			<div className="timeline-container">
				{minecraftTimeline.map((event, index) => {
					const IconComponent = event.icon
					const iconSize = isMobile ? 45 : 67
					const strokeWidth = isMobile ? 2 : 3
					const isVisible = visibleItems.has(index)
					
					return (
						<div 
							key={index} 
							className={`timeline-point ${isVisible ? 'visible' : ''}`}
							data-index={index}
						>
							{!isMobile && <IconComponent size={iconSize} strokeWidth={strokeWidth} />}
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
