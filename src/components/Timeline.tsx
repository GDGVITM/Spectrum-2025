"use client"

import { Pickaxe, Sword, Shield, Target, Sprout } from "lucide-react"
import "./timeline.css"

const minecraftTimeline = [
  {
    icon: Pickaxe,
    title: "Unveiling & Creatives & Hackbuild PBL Release",
    date: "28th July 2025 (Monday)",
    venue: "Gate 2",
    description: "Decor Unveiling, Banner Unveiling (Events with Dates), All Events explain, Hackbuild Announcement (Online Round along with PBLs and Rules).",
  },
  {
    icon: Target,
    title: "Big-O Battle – Powered by GeeksforGeeks",
    date: "30th July 2025 (Wednesday)",
    venue: "L-Block/M-block Labs",
    description: "Individual Participation DSA challenge. Participants who will successfully pass all test cases/submit each question will get a balloon attached to their chair.",
  },
  {
    icon: Shield,
    title: "HackBuild – Hackathon",
    date: "2nd and 3rd August 2025",
    venue: "On-campus",
    description: "Day-based on-campus hackathon across AI/ML, App Development, Web Development, and Web3/Blockchain domains. Build scalable tech solutions with team collaboration!",
  },
  {
    icon: Sword,
    title: "Launchpad – Vibe Coding Challenge",
    date: "5th and 6th August 2025",
    venue: "TBD",
    description: "A two-round AI + SaaS challenge where teams of 2–3 ideate and build innovative SaaS solutions using AI tools and prompt engineering.",
  },
  {
    icon: Sprout,
    title: "GSOC Awareness Session",
    date: "8th August 2025 (Friday)",
    venue: "Auditorium",
    description: "Comprehensive guidance session on Google Summer of Code (GSoC) featuring past contributors, mentors, and current selected students. Open to all year students.",
  },
]

export default function Timeline() {
  return (
    <div className="minecraft-world">
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
                  <div className="popup-venue">📍 {event.venue}</div>
                  <div className="popup-description">{event.description}</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
