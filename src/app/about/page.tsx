'use client'

import { useState } from 'react'
import Image from 'next/image'

const teamMembers = [
  { name: "Aisha Rahman", role: "Founder & Islamic Scholar", image: "/aisha-rahman.jpg" },
  { name: "Yusuf Ali", role: "Quran & Tajweed Instructor", image: "/yusuf-ali.jpg" },
  { name: "Maryam Hassan", role: "Islamic History Expert", image: "/maryam-hassan.jpg" },
  { name: "Omar Farooq", role: "Fiqh & Shariah Specialist", image: "/omar-farooq.jpg" },
]

const milestones = [
  { year: 2010, event: "Founding of our online Islamic education platform" },
  { year: 2015, event: "Reached 10,000 students worldwide" },
  { year: 2018, event: "Launched advanced Islamic studies programs" },
  { year: 2020, event: "Introduced interactive virtual classroom technology" },
  { year: 2023, event: "Celebrated 100,000 graduates" },
]

export default function AboutUsPage() {
  const [activeTeamMember, setActiveTeamMember] = useState(0)
// bg-gradient-to-br from-green-600 via-emerald-600 to-teal-500
// text-transparent bg-gradient-to-r from-green-300 via-emerald-400 to-teal-300
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#069A70] via-[#0DA98B] to-[#14B7A5] text-[#FFFDE7] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-16 animate-fade-in-down">
          <h1 className="text-6xl font-extrabold mb-4 bg-clip-text text-[#F0E68C]">About Us</h1>
          <p className="text-xl mb-8">Nurturing Knowledge, Cultivating Faith</p>
        </header>

        <section className="mb-20 animate-fade-in">
          <div className="bg-[#006A4E] bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-2xl border border-green-600">
            <h2 className="text-3xl font-bold mb-6 text-center text-[#FFDAB9]">Our Mission</h2>
            <p className="text-lg mb-4">
              At the core of our institution lies a deep-rooted commitment to fostering Islamic knowledge and spiritual growth. We aim to create a vibrant, inclusive learning environment where seekers of knowledge from all backgrounds can explore the rich tapestry of Islamic wisdom and apply its timeless teachings to contemporary life.
            </p>
            <p className="text-lg">
              Our mission is to bridge traditional Islamic scholarship with modern educational approaches, making authentic knowledge accessible and relevant to a global community of learners.
            </p>
          </div>
        </section>

        <section className="mb-20 animate-fade-in">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#FFDAB9]">Meet Our Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`cursor-pointer transition-all duration-300 transform  ${
                  activeTeamMember === index ?  null:'hover:scale-105'
                }`}
                onClick={() => setActiveTeamMember(index)}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={290}
                  height={200}
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
          <div className="mt-8 bg-[#037A5D] bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-lg p-6 border border-green-600">
            <h3 className="text-2xl font-bold mb-2 text-[#FFDAB9]">{teamMembers[activeTeamMember].name}</h3>
            <p className="text-lg mb-4">{teamMembers[activeTeamMember].role}</p>
            <p className="text-lg">
              {teamMembers[activeTeamMember].name} brings a wealth of knowledge and experience to our team. Their passion for Islamic education and commitment to excellence inspire both our students and fellow educators.
            </p>
          </div>
        </section>

        <section className="mb-20 animate-fade-in">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#FFDAB9]">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#FFDAB9]"></div>
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`bg-[#037A5D] sm:z-0 z-10 bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-lg p-6 w-full md:w-1/2 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} border border-green-600`}>
                  <h3 className="text-2xl font-bold mb-2 text-[#FFDAB9]">{milestone.year}</h3>
                  <p className="text-lg">{milestone.event}</p>
                </div>
                <div className="w-4 h-4 bg-[#037A5D] rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
              </div>
            ))}
          </div>
        </section>

        <section className="animate-fade-in">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#FFDAB9]">Join Our Community</h2>
          <div className="bg-[#037A5D] bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-lg p-8 text-center border border-green-600">
            <p className="text-xl mb-6">
              Embark on a transformative journey of Islamic learning with us. Together, let&apos;s explore the richness of our faith and cultivate a brighter future.
            </p>
            <button className="bg-gradient-to-r from-green-400 to-emerald-500 text-green-900 font-bold py-3 px-8 rounded-full hover:from-emerald-500 hover:to-green-400 transition duration-300 transform hover:scale-105 ">
              Start Your Journey
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}