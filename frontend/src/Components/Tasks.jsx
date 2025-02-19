import { useState } from "react";
import TaskForm from "./TaskForm";

function SectionInfo({ title, details }) {
  return (
    <div className="bg-gray-100 p-6 rounded-md shadow-md m-6 text-center">
      <h3 className="text-2xl font-bold text-blue-600">{title} Info</h3>
      <p className="mt-2 text-gray-700">{details}</p>
    </div>
  );
}

export default function Tasks() {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      title: "Design",
      color: "bg-sky-600",
      info: "This section covers all the design-related tasks.",
      icon: "🎨",
    },
    {
      title: "Development",
      color: "bg-blue-500",
      info: "Development section covers coding tasks and functionality.",
      icon: "💻",
    },
    {
      title: "Testing",
      color: "bg-green-400",
      info: "This section is for quality checks and testing tasks.",
      icon: "🧪",
    },
    {
      title: "Release",
      color: "bg-orange-500",
      info: "Release section handles final deployment and product launch.",
      icon: "🚀",
    },
  ];

  return (
    <div className="p-8">
          <div className="flex justify-center items-center mt-8 mb-10">
      <h1 className="text-4xl space-y-9 md:text-5xl lg:text-6xl font-bold text-center bg-gradient-to-r from-green-400 via-blue-500 to-indigo-600 text-transparent bg-clip-text  transition-all transform rounded-lg p-6 border-b-4 border-indigo-400">
        TaskTrak: Your Project Companion
      </h1>
    </div>

      <div className="p-8 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 rounded-2xl shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`relative group bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center gap-4 transition-transform transform hover:scale-105 hover:shadow-xl ${section.color}`}
            >
              {/* Decorative Background Circle */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-white to-gray-100 opacity-40 group-hover:opacity-70"></div>

              {/* Section Icon */}
              <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center text-3xl font-bold text-gray-800">
                {section.icon ? section.icon : "?"}
              </div>

              {/* Section Title */}
              <h3 className="text-xl font-extrabold text-gray-900">{section.title}</h3>

              {/* Info Button */}
              <button
                onClick={() =>
                  setActiveSection(activeSection === index ? null : index)
                }
                className="px-6 py-2 bg-gray-900 text-white text-sm font-semibold rounded-full shadow-sm hover:bg-gray-700 transition-all"
              >
                {activeSection === index ? "CLOSE" : "CREATE TASK"}
              </button>
            </div>
          ))}
        </div>

        {/* Conditional Section Display */}
        {activeSection !== null && (
          <div className="mt-8 bg-white p-6 rounded-2xl shadow-lg">
            <SectionInfo
              title={sections[activeSection].title}
              details={sections[activeSection].info}
            />
            <div className="mt-4">
              <TaskForm section={sections[activeSection].title} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
