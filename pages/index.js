import { useState } from "react";
import Image from "next/image";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <main className={
      (darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900") +
      " min-h-screen font-sans"
    }>
      <section className="max-w-4xl mx-auto py-12 px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Image
              src="/profile.jpg"
              alt="Profile picture of AFURIKA Onesme"
              width={100}
              height={100}
              className="rounded-full border border-gray-700"
            />
            <div>
              <h1 className="text-4xl font-bold mb-2">AFURIKA Onesme</h1>
              <p className="text-gray-400 text-lg">Software Engineer</p>
            </div>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-700 hover:bg-gray-600 text-sm px-4 py-2 rounded transition"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
        <p className="mt-6 text-gray-300">
          I am a dedicated Software Engineer student in AUCA from Rwanda experienced in software development and web application using modern frameworks. I enjoy creating innovative solutions that convert complex problems into efficient and user-friendly applications.
        </p>
        <div className="mt-6">
          <a
            href="/resume.pdf"
            download
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded transition"
          >
            Download Resume
          </a>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-10 px-6">
        <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-6">Featured Project</h2>
        <div className={(darkMode ? "bg-gray-800" : "bg-gray-200") + " p-6 rounded-xl shadow-md"}>
          <h3 className="text-xl font-semibold mb-2">Online Tickets Booking Project</h3>
          <p className="text-gray-400">
            A web-based or mobile platform that enables users to search, reserve, and purchase bus tickets remotely without needing to visit the bus station physically. It streamlines the process of booking intercity or intracity bus travel by automating key operations for both passengers and bus operators.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-10 px-6">
        <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-6">Skills & Technologies</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Data Structures & Algorithms</li>
          <li>Database Design & Development</li>
          <li>Software Testing</li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto py-10 px-6">
        <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-6">Programming Languages</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>C / C++</li>
          <li>Java</li>
          <li>JavaScript</li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto py-10 px-6">
        <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-6">Education</h2>
        <ul className="space-y-4 text-gray-300">
          <li>
            <strong>Adventist University of Central Africa</strong> (2022–2026)<br />
            BSc in Software Engineering
          </li>
          <li>
            <strong>GS Mater Dei</strong> (2018–2021)<br />
            Physics, Computer Science and Mathematics
          </li>
          <li>
            <strong>GS Janja</strong>(2015-2017)<br />
            Ordinary Level
          </li>
          <li>
            <strong>Regina Pacis</strong>(2006-2014)<br />
            Primary level
          </li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto py-10 px-6">
        <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2 mb-6">Experience</h2>
        <ul className="space-y-4 text-gray-300">
          <li>
            <strong>Web Developer</strong> (2024–Present)<br />
            Working on various web-based solutions with a focus on user-centered design and modern technologies.
          </li>
        </ul>
      </section>

      <footer className="text-center text-gray-500 py-10 text-sm">
        &copy; {new Date().getFullYear()} AFURIKA Onesme. All rights reserved.
      </footer>
    </main>
  );
}