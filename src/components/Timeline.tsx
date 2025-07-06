"use client"

import { Pickaxe, Sword, Shield, Target } from "lucide-react"
import "./timeline.css"

const minecraftTimeline = [
  {
    icon: Pickaxe,
    title: "Getting Wood",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: Target,
    title: "Benchmarking",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: Shield,
    title: "Getting an Upgrade",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: Sword,
    title: "Time to Strike!",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
                  {event.description}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
