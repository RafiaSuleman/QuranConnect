import Image from 'next/image'
import Link from 'next/link'

const features = [
  "Learn essential daily duas",
  "Master the steps of salah",
  "Understand the meanings behind prayers",
  "Correct pronunciation guidance",
  "Interactive prayer practice sessions",
  "Dua memorization techniques",
]

const syllabus = [
  { module: 1, topic: "Introduction to Salah and Its Importance" },
  { module: 2, topic: "Wudu and Preparation for Prayer" },
  { module: 3, topic: "Steps and Postures of Salah" },
  { module: 4, topic: "Essential Duas for Daily Life" },
  { module: 5, topic: "Understanding the Meanings of Prayers" },
  { module: 6, topic: "Sunnah and Nafl Prayers" },
  { module: 7, topic: "Duas from the Quran and Sunnah" },
  { module: 8, topic: "Perfecting Your Salah and Dua Practice" },
]

export default function DuasAndSalahPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br pt-24 from-[#095D41] via-[#288D74] to-blue-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-16 animate-fade-in-down">
          <h1 className="text-5xl font-extrabold mb-4">Duas and Salah Course</h1>
          <p className="text-xl mb-8">Enhance your connection with Allah through perfect prayer and supplication</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Strengthen Your Spiritual Practice</h2>
            <p className="mb-4">
              Our Duas and Salah course is designed to deepen your understanding and improve your practice of daily prayers and supplications. Whether you&apos;re new to Islam or looking to enhance your existing knowledge, this course offers comprehensive guidance.
            </p>
            <p className="mb-4">
              Learn the proper methods of performing salah, understand the meanings behind your prayers, and memorize essential duas to enrich your daily spiritual life.
            </p>
            <div className="mt-8">
              <Link href="/enroll-duas-salah" className="bg-white text-[#304FB5] font-bold py-3 px-6 rounded-full hover:bg-[#b8c5ee] transition duration-300">
                Enrich Your Prayers
              </Link>
            </div>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl animate-fade-in">
            <Image
              src="/prayer.jpg"
              alt="Duas and Salah Illustration"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <section className="mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-8 text-center">Course Highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white text-[#304FB5] rounded-lg p-6 shadow-lg transform transition duration-500 hover:scale-105">
                <svg className="w-8 h-8 mb-4 text-[#2ba060]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                <h3 className="text-xl font-semibold mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-8 text-center">Course Modules</h2>
          <div className="bg-white text-[#304FB5] rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {syllabus.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-[#2BA060] text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
                    {item.module}
                  </div>
                  <p className="font-semibold">{item.topic}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Teaching Approach</h2>
          <div className="bg-white text-[#304FB5] rounded-lg shadow-lg p-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-2xl font-bold mb-4">Interactive Learning</h3>
                <p>Engage in live demonstrations and practice sessions to perfect your salah and dua recitation.</p>
              </div>
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-2xl font-bold mb-4">Comprehensive Resources</h3>
                <p>Access a rich library of audio and visual materials to support your learning journey.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Personal Guidance</h3>
                <p>Receive one-on-one feedback and support from experienced instructors to refine your practice.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Elevate Your Spiritual Connection</h2>
          <p className="mb-8">Join our Duas and Salah course to transform your daily prayers and supplications.</p>
          <Link href="/free-salah-assessment" className="bg-white text-[#304FB5] font-bold py-3 px-6 rounded-full hover:bg-amber-100 transition duration-300 mr-4">
            Free Salah Assessment
          </Link>
          <Link href="/duas-salah-programs" className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-full hover:bg-white hover:text-amber-700 transition duration-300">
            Explore Course Options
          </Link>
        </div>
      </div>
    </main>
  )
}