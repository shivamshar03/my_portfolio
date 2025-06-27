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
                <img
                  src="/images/shivambg.jpg" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Text Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                My Background
              </h2>
              <p className="mb-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Passionate software developer creating elegant solutions. Continuous learner, code craftsman, and open source enthusiast. Building tomorrow's technology today.
              </p>
              <p className="mb-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm currently focused on AI/ML development, Python projects, and building community tools. As a Chairperson at NexHub and the Founder & Mentor at Abhyudaya Coding Club, I enjoy helping others grow in their tech journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Remaining Sections (Unchanged) */}
      {/* Skills + Currently Learning */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-gray-100 dark:from-blue-950 dark:to-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900 dark:text-white">My Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4">
            {[
              { name: 'Python', level: 90 },
              { name: 'C/C++', level: 85 },
              { name: 'MySQL', level: 80 },
              { name: 'Flask', level: 85 },
              { name: 'HTML/CSS', level: 90 },
              { name: 'JavaScript', level: 75 },
              { name: 'AI/ML Frameworks', level: 80 },
            ].map((skill, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">{skill.name}</span>
                  <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-blue-600 h-3 rounded-full transition-all duration-700 group-hover:bg-blue-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 mx-4">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">Currently Learning</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['FastAPI', 'LangChain', 'Whisper', 'Kotlin', 'AI/ML Frameworks'].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-800 hover:text-blue-900 dark:hover:text-blue-300 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-16 bg-white dark:bg-gray-800 rounded-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900 dark:text-white">Qualifications</h2>
        <div className="relative max-w-3xl mx-auto px-4">
          <div className="border-l-4 border-blue-600 dark:border-blue-400 absolute h-full left-8 top-0"></div>
          <ul className="space-y-12">
            {[
              {
                title: 'B.Tech in Computer Science',
                time: 'XYZ University, 2021 - 2025',
                desc: 'Specialized in Artificial Intelligence and Machine Learning. Graduated with distinction.',
                iconColor: 'text-blue-600 dark:text-blue-400',
                bgColor: 'bg-blue-100 dark:bg-blue-900',
              },
              {
                title: 'Certified Python Developer',
                time: 'Coursera, 2023',
                desc: 'Completed an advanced Python programming certification with hands-on projects.',
                iconColor: 'text-green-600 dark:text-green-400',
                bgColor: 'bg-green-100 dark:bg-green-900',
              },
              {
                title: 'AI/ML Hackathon Winner',
                time: 'NexHub, 2024',
                desc: 'Led a team to victory in a national-level AI/ML hackathon, building an innovative solution for real-world problems.',
                iconColor: 'text-purple-600 dark:text-purple-400',
                bgColor: 'bg-purple-100 dark:bg-purple-900',
              },
            ].map((item, index) => (
              <li key={index} className="relative flex items-start group">
                <span
                  className={`flex-shrink-0 w-14 h-14 ${item.bgColor} rounded-full flex items-center justify-center border-4 border-white dark:border-gray-800 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <svg className={`w-8 h-8 ${item.iconColor}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    {index === 0 && (
                      <>
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14v7" />
                        <path d="M5 19a7 7 0 0 0 14 0" />
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <path d="M12 20l9-5-9-5-9 5 9 5z" />
                        <path d="M12 12V4" />
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <circle cx="12" cy="8" r="7" />
                        <path d="M8 21l4-4 4 4" />
                      </>
                    )}
                  </svg>
                </span>
                <div className="ml-10">
                  <h3 className={`text-xl font-semibold group-hover:${item.iconColor} transition-colors`}>{item.title}</h3>
                  <span className="block text-sm text-gray-500 dark:text-gray-400 mb-2">{item.time}</span>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Abhyudaya & Nexhub */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900 dark:text-white">Community Contributions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 flex flex-col items-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-5 mb-6 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
              <svg className="w-12 h-12 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">About Abhyudaya</h3>
            <p className="text-gray-700 dark:text-gray-300 text-center mb-6 leading-relaxed">
              Abhyudaya is a vibrant student-led initiative focused on fostering innovation, leadership, and holistic development among students. Through various events, workshops, and community-driven projects, Abhyudaya empowers individuals to realize their potential and make a positive impact.
            </p>
            <a
              href="https://abhyudaya.example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Visit Website
              <svg className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 flex flex-col items-center transition-all duration-300">
            <div className="bg-green-100 dark:bg-green-900 rounded-full p-5 mb-6 group-hover:bg-green-200 dark:group-hover:bg-blue-800 transition-colors">
              <svg className="w-12 h-12 text-green-600 dark:text-green-400 group-hover:text-green-700 dark:group-hover:text-green-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">About Nexhub</h3>
            <p className="text-gray-700 dark:text-gray-300 text-center mb-6 leading-relaxed">
              NexHub is a dynamic tech community dedicated to connecting enthusiasts, developers, and learners in the field of AI, ML, and software development. As a community lead, I help organize meetups, hackathons, and knowledge-sharing sessions to inspire growth and collaboration.
            </p>
            <a
              href="https://nexhub.example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-8 py-3 bg-green-600 text-white rounded-full font-semibold shadow-lg hover:bg-green-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300"
            >
              Know More
              <svg className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900 dark:text-white">Experience Timeline</h2>
        <div className="relative max-w-3xl mx-auto px-4">
          <div className="border-l-4 border-blue-600 dark:border-blue-400 absolute h-full left-8 top-0"></div>
          {[
            { title: 'Chairperson - NexHub', time: '2023 - Present', desc: 'Leading community initiatives and tech events.' },
            { title: 'Founder & Mentor - Abhyudaya Coding Club', time: '2022 - Present', desc: 'Guiding students in their coding journey.' },
            { title: 'Software Development Projects', time: '2021 - Present', desc: 'Worked on various AI/ML and full-stack web applications.' },
          ].map((item, index) => (
            <div key={index} className="mb-10 group relative">
              <div className="absolute -left-2.5 mt-2 h-5 w-5 rounded-full bg-blue-600 dark:bg-blue-400 group-hover:bg-orange-500 dark:group-hover:bg-orange-400 transition-all duration-300 shadow-md"></div>
              <div className="ml-10 bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-xl p-6 shadow-md group-hover:shadow-lg transition-all duration-300">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">{item.title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{item.time}</p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Connect With Me */}
      <section className="py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900 dark:text-white">
          Connect With Me
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Instagram */}
          <a
            href="https://instagram.com/shivamsharma.py"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 p-1 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
          >
            <div className="bg-white dark:bg-gray-900 rounded-full p-4 flex items-center justify-center group-hover:bg-pink-50 dark:group-hover:bg-pink-900 transition-colors">
              <svg className="w-8 h-8 text-pink-600 group-hover:text-pink-700 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a5.25 5.25 0 1 1-5.25 5.25 5.25 5.25 0 0 1 5.25-5.25zm0 1.5a3.75 3.75 0 1 0 3.75 3.75A3.75 3.75 0 0 0 12 5.25zm5.5 1.25a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/>
              </svg>
            </div>
            <span className="absolute left-1/2 -bottom-2 translate-x-[-50%] translate-y-full bg-gray-900 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-10">
              Instagram
            </span>
          </a>
          {/* Discord */}
          <a
            href="https://discord.com/users/1042284338982682634"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group bg-gradient-to-tr from-indigo-500 via-blue-500 to-purple-500 p-1 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
          >
            <div className="bg-white dark:bg-gray-900 rounded-full p-4 flex items-center justify-center group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900 transition-colors">
              <svg className="w-8 h-8 text-indigo-600 group-hover:text-indigo-700 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.369A19.791 19.791 0 0 0 16.885 3.1a.074.074 0 0 0-.079.037c-.34.607-.719 1.396-.984 2.021-2.963-.447-5.926-.447-8.89 0-.266-.625-.645-1.414-.985-2.021a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.684 4.369a.069.069 0 0 0-.032.027C.533 9.09-.32 13.579.099 18.021a.082.082 0 0 0 .031.056c3.733 2.747 7.348 2.21 10.923 1.963.527-.037 1.054-.074 1.579-.111.527.037 1.054.074 1.579.111 3.574.247 7.19.784 10.923-1.963a.082.082 0 0 0 .031-.056c.419-4.442-.434-8.931-3.553-13.625a.07.07 0 0 0-.032-.027zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.334.956-2.419 2.157-2.419 1.201 0 2.157 1.085 2.157 2.419 0 1.334-.956 2.419-2.157 2.419zm7.96 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.334.956-2.419 2.157-2.419 1.201 0 2.157 1.085 2.157 2.419 0 1.334-.956 2.419-2.157 2.419z"/>
              </svg>
            </div>
            <span className="absolute left-1/2 -bottom-2 translate-x-[-50%] translate-y-full bg-gray-900 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-10">
              Discord
            </span>
          </a>
          {/* Snapchat */}
          <a
            href="https://snapchat.com/shivamshar0310"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group bg-gradient-to-tr from-yellow-400 to-yellow-200 p-1 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
          >
            <div className="bg-white dark:bg-gray-900 rounded-full p-4 flex items-center justify-center group-hover:bg-yellow-50 dark:group-hover:bg-yellow-900 transition-colors">
              {/* Official Snapchat Icon Image */}
              <img
                src="/images/snapchat.png"
                alt="Snapchat"
                className="w-8 h-8"
                draggable={false}
              />
            </div>
            <span className="absolute left-1/2 -bottom-2 translate-x-[-50%] translate-y-full bg-gray-900 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-10">
              Snapchat
            </span>
          </a>
          {/* WhatsApp */}
          <a
            href="https://wa.me/916266061914"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group bg-gradient-to-tr from-green-400 to-green-600 p-1 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
          >
            <div className="bg-white dark:bg-gray-900 rounded-full p-4 flex items-center justify-center group-hover:bg-green-50 dark:group-hover:bg-green-900 transition-colors">
              <svg className="w-8 h-8 text-green-600 group-hover:text-green-700 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.52 3.48A12.07 12.07 0 0 0 12 0C5.37 0 0 5.37 0 12a11.93 11.93 0 0 0 1.64 6.06L0 24l6.18-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12a12.07 12.07 0 0 0-3.48-8.52zM12 22a9.93 9.93 0 0 1-5.29-1.53l-.38-.23-3.67.96.98-3.57-.25-.37A9.93 9.93 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.43-2.25-1.37-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.02-.22-.54-.45-.47-.62-.48-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1.01-1 2.46 0 1.45 1.03 2.85 1.18 3.05.15.2 2.03 3.1 4.92 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.89-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.18-.53-.32z"/>
              </svg>
            </div>
            <span className="absolute left-1/2 -bottom-2 translate-x-[-50%] translate-y-full bg-gray-900 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-10">
              WhatsApp
            </span>
          </a>
          {/* Kaggle */}
          <a
            href="https://www.kaggle.com/shivamsharmapy"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group bg-gradient-to-tr from-blue-400 to-blue-700 p-1 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
          >
            <div className="bg-white dark:bg-gray-900 rounded-full p-4 flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-900 transition-colors">
              {/* Official Kaggle Icon */}
              <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <rect width="32" height="32" rx="16" fill="#20BEFF"/>
                  <path d="M22.5 8.5H20.7L16.6 14.1L14.2 11.1V8.5H11.5V23.5H14.2V15.6L16.6 18.7L20.7 23.5H22.5L17.8 17.6L22.5 8.5Z" fill="#fff"/>
                </g>
              </svg>
            </div>
            <span className="absolute left-1/2 -bottom-2 translate-x-[-50%] translate-y-full bg-gray-900 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-10">
              Kaggle
            </span>
          </a>
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/shivam-sharma-ab489721b/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group bg-gradient-to-tr from-blue-700 to-blue-400 p-1 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
          >
            <div className="bg-white dark:bg-gray-900 rounded-full p-4 flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-900 transition-colors">
              <svg className="w-8 h-8 text-blue-700 group-hover:text-blue-800 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.61 2.01 3.61 4.62v4.69z"/>
              </svg>
            </div>
            <span className="absolute left-1/2 -bottom-2 translate-x-[-50%] translate-y-full bg-gray-900 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-10">
              LinkedIn
            </span>
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/shivamshar03"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group bg-gradient-to-tr from-gray-700 to-gray-900 p-1 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
          >
            <div className="bg-white dark:bg-gray-900 rounded-full p-4 flex items-center justify-center group-hover:bg-gray-100 dark:group-hover:bg-gray-800 transition-colors">
              <svg className="w-8 h-8 text-gray-800 dark:text-gray-200 group-hover:text-black dark:group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.92.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
              </svg>
            </div>
            <span className="absolute left-1/2 -bottom-2 translate-x-[-50%] translate-y-full bg-gray-900 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-10">
              GitHub
            </span>
          </a>
          {/* X (Twitter) */}
          <a
            href="https://x.com/ShivamShar03"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group bg-gradient-to-tr from-gray-900 to-gray-700 p-1 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
          >
            <div className="bg-white dark:bg-gray-900 rounded-full p-4 flex items-center justify-center group-hover:bg-gray-100 dark:group-hover:bg-gray-800 transition-colors">
              {/* X (Twitter) PNG logo */}
              <img src="/images/twitter.png" alt="X (Twitter)" className="w-8 h-8" draggable={false} />
            </div>
            <span className="absolute left-1/2 -bottom-2 translate-x-[-50%] translate-y-full bg-gray-900 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-10">
              X (Twitter)
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}