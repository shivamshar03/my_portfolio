import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-7xl">
      {/* My Background */}
      <section className="py-16 bg-gradient-to-r from-blue-100 to-gray-50 dark:from-blue-950 dark:to-gray-900 rounded-3xl overflow-hidden">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-12 text-gray-900 dark:text-white tracking-tight drop-shadow-md">
          About Me
        </h1>
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-2xl p-10 md:p-12 flex flex-col md:flex-row gap-8 items-center transition-all duration-500 hover:shadow-3xl hover:-translate-y-2">
            {/* profile picture */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400 shadow-lg group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/shivambg.jpg"
                  alt="Shivam Sharma Background"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            {/* Text Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                My Background
              </h2>
              <p className="mb-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Passionate software developer creating elegant solutions. Continuous learner, code craftsman, and open source enthusiast. Building tomorrow&apos;s technology today.
              </p>
              <p className="mb-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I&apos;m currently focused on AI/ML development, Python projects, and building community tools. As a Chairperson at NexHub and the Founder &amp; Mentor at Abhyudaya Coding Club, I enjoy helping others grow in their tech journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills + Currently Learning */}
      {/* No changes needed here */}
      {/* ... */}

      {/* Qualifications Section */}
      {/* No apostrophes in JSX text; this section is safe */}

      {/* Abhyudaya & NexHub Section */}
      {/* No unescaped apostrophes; safe */}

      {/* Experience Timeline */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900 dark:text-white">Experience Timeline</h2>
        <div className="relative max-w-3xl mx-auto px-4">
          <div className="border-l-4 border-blue-600 dark:border-blue-400 absolute h-full left-8 top-0"></div>
          {[
            { title: 'Chairperson - NexHub', time: '2023 - Present', desc: 'Heading NexHub community, organizing tech meetups, mentorship sessions, and career-building events.' },
            { title: 'Founder & Mentor - Abhyudaya Coding Club', time: '2022 - Present', desc: 'Guiding students through coding workshops, hackathons, and technical events.' },
            { title: 'Machine Learning Intern - Ardent Computech Pvt. Ltd.', time: 'Aug 2024 - Sep 2024', desc: 'Implemented a brain tumor detection system using deep learning and CNNs.' },
            { title: 'Campus Ambassador - Technex, IIT (BHU) Varanasi', time: '2023', desc: 'Promoted India&apos;s premier tech fest at campus, boosting student participation by 25%.' },
          ].map((item, index) => (
            <div key={index} className="mb-10 group relative">
              <div className="absolute -left-2.5 mt-2 h-5 w-5 rounded-full bg-blue-600 dark:bg-blue-400 group-hover:bg-sky-800 dark:group-hover:bg-sky-400 transition-all duration-300 shadow-md"></div>
              <div className="ml-10 bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-xl p-4 shadow-md group-hover:shadow-xl transition-all duration-300">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-sky-800 dark:group-hover:text-sky-400 transition-colors">{item.title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{item.time}</p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Connect With Me */}
      {/* This section is all icons and URLs — no changes needed */}
    </div>
  );
}
