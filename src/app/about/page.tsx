export default function AboutPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">My Background</h2>
          <p className="mb-4">
            Passionate software developer creating elegant solutions. Continuous learner, 
            code craftsman, and open source enthusiast. Building tomorrow's technology today.
          </p>
          <p className="mb-4">
            I'm currently focused on AI/ML development, Python projects, and building 
            community tools. As a Chairperson at NexHub and the Founder & Mentor at 
            Abhyudaya Coding Club, I enjoy helping others grow in their tech journey.
          </p>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Experience Timeline</h3>
            <div className="relative border-l-2 border-gray-200 dark:border-gray-700 pl-4">
              <div className="mb-6">
                <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-blue-500"></div>
                <h4 className="font-semibold">Chairperson - NexHub</h4>
                <p className="text-sm opacity-80">2023 - Present</p>
                <p className="mt-2">Leading community initiatives and tech events.</p>
              </div>
              <div className="mb-6">
                <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-blue-500"></div>
                <h4 className="font-semibold">Founder & Mentor - Abhyudaya Coding Club</h4>
                <p className="text-sm opacity-80">2022 - Present</p>
                <p className="mt-2">Guiding students in their coding journey.</p>
              </div>
              <div className="mb-6">
                <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-blue-500"></div>
                <h4 className="font-semibold">Software Development Projects</h4>
                <p className="text-sm opacity-80">2021 - Present</p>
                <p className="mt-2">Worked on various AI/ML and full-stack web applications.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">My Skills</h2>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium">Python</span>
                <span>90%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium">C/C++</span>
                <span>85%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium">MySQL</span>
                <span>80%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium">Flask</span>
                <span>85%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium">HTML/CSS</span>
                <span>90%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium">JavaScript</span>
                <span>75%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium">AI/ML Frameworks</span>
                <span>80%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Currently Learning</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">
                FastAPI
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">
                LangChain
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">
                Whisper
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">
                Kotlin
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">
                AI/ML Frameworks
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 