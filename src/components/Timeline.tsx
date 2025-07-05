import { FC, ReactElement } from "react";
import {
  FaIcons,
  FaCopyright,
  FaBullseye,
  FaCompass,
  FaGrinBeamSweat,
} from "react-icons/fa";

interface TimelineItem {
  icon: ReactElement;
  title: string;
  description: string;
  color: string;
}

const items: TimelineItem[] = [
  {
    icon: <FaIcons />,
    title: "Icons",
    description:
      "Lorem ipsum dolor sit amet conse adipisicing elit. Dicta vitae voluptates id hic recusandae omnis cupiditate odit quis, assumenda optio?",
    color: "#c1121f",
  },
  {
    icon: <FaCopyright />,
    title: "CopyRight",
    description:
      "Lorem ipsum dolor sit amet conse adipisicing elit. Dicta vitae voluptates id hic recusandae omnis cupiditate odit quis, assumenda optio?",
    color: "#ffc300",
  },
  {
    icon: <FaBullseye />,
    title: "Target",
    description:
      "Lorem ipsum dolor sit amet conse adipisicing elit. Dicta vitae voluptates id hic recusandae omnis cupiditate odit quis, assumenda optio?",
    color: "#2ec4b6",
  },
  {
    icon: <FaCompass />,
    title: "Compass",
    description:
      "Lorem ipsum dolor sit amet conse adipisicing elit. Dicta vitae voluptates id hic recusandae omnis cupiditate odit quis, assumenda optio?",
    color: "#6536ff",
  },
  {
    icon: <FaGrinBeamSweat />,
    title: "IDK",
    description:
      "Lorem ipsum dolor sit amet conse adipisicing elit. Dicta vitae voluptates id hic recusandae omnis cupiditate odit quis, assumenda optio?",
    color: "#3a86ff",
  },
];

const Timeline: FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 min-h-screen bg-[#212529] p-8 font-[Nunito Sans]">
      {items.map((item, index) => (
        <div
          key={index}
          className="relative group w-[134px] h-[134px] rounded-full flex items-center justify-center text-[67px] font-black transition-all duration-300"
          style={{
            background: "linear-gradient(145deg, #1e2125, #23282c)",
            boxShadow: "13.4px 13.4px 40.2px #1c1f23, -13.4px -13.4px 40.2px #262b2f",
            color: item.color,
          }}
        >
          {/* Conic border effect */}
          <div
            className="absolute w-[200px] h-[200px] rounded-full -z-10"
            style={{
              background: `conic-gradient(${item.color} 180deg, transparent 0deg 360deg)`,
              transform: index % 2 === 0 ? "rotate(-90deg)" : "rotate(90deg) scaleY(-1)",
              animation: `spin 1s ease ${index}s forwards`,
            }}
          ></div>

          {item.icon}

          {/* Popup */}
          <div
            className={`absolute w-[320px] grid grid-cols-[16%_84%] text-white rounded-[30px] overflow-hidden
              ${
                index % 2 === 0
                  ? "bottom-[220px]"
                  : "top-[220px]"
              } opacity-0 group-hover:opacity-100 transition-all duration-500`}
            style={{
              backgroundColor: item.color,
            }}
          >
            <div className="flex items-center justify-center text-2xl font-bold">
              {index + 1}
            </div>
            <div className="p-4 text-sm font-medium text-justify bg-[#1c1f23] rounded-[30px]">
              <div className="text-lg font-black mb-1" style={{ color: item.color }}>
                {item.title}
              </div>
              {item.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;