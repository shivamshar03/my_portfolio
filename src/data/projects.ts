export interface Project {
  id: number;
  title: string;
  description: string;
  image: string; // path relative to public folder
  category: string[];
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    "id": 1,
    "title": "Anaya3 - Personal AI Assistant",
    "description": "Anaya3 is a multimodal AI assistant capable of understanding emotions from voice and facial expressions. It uses advanced NLP with LLMs, speech and facial emotion recognition, and generates empathetic, human-like responses.",
    "category": ["AI/ML", "NLP", "Computer Vision"],
    "techStack": ["Python", "Whisper", "gTTS", "LangChain", "DeepFace", "TensorFlow", "Keras", "Streamlit"],
    "image": "/images/projects/anaya3.jpg",
    "githubUrl": "https://github.com/shivamshar03/Anaya3",
    "featured": true
  },
  {
    "id": 2,
    "title": "Email Generator",
    "description": "A tool that automates the creation of professional emails using predefined templates and user inputs, enhancing productivity and communication efficiency.",
    "category": ["Web Dev", "Automation"],
    "techStack": ["JavaScript", "HTML", "CSS", "Node.js"],
    "image": "/images/projects/email-generator.jpg",
    "githubUrl": "https://github.com/shivamshar03/email-generator",
    "featured": true
  },
  {
    "id": 3,
    "title": "Sketch Filter",
    "description": "Applies artistic sketch filters to images, transforming photos into pencil sketch-like artworks using computer vision techniques.",
    "category": ["AI/ML", "Computer Vision"],
    "techStack": ["Python", "OpenCV", "NumPy"],
    "image": "/images/projects/sketch-filter.jpg",
    "githubUrl": "https://github.com/shivamshar03/sketch-filter",
    "featured": true
  },
  {
    "id": 4,
    "title": "College Jagat",
    "description": "A centralized platform for college students to access events, resources, and announcements built by Abhyudaya Coding Club.",
    "category": ["Web Dev"],
    "techStack": ["Python", "Django", "HTML", "CSS", "JavaScript"],
    "image": "/images/projects/college-jagat.jpg",
    "githubUrl": "https://github.com/shivamshar03/college-jagat",
    "featured": false
  },
  {
    "id": 5,
    "title": "Binary Brains",
    "description": "An open-source platform for collaborative problem-solving and competitive programming.",
    "category": ["Open Source", "Education/Tools"],
    "techStack": ["C++", "Python", "Data Structures", "Algorithms"],
    "image": "/images/projects/binary-brains.jpg",
    "githubUrl": "https://github.com/shivamshar03/binary-brains",
    "featured": false
  },
  {
    "id": 6,
    "title": "Text to Image Generator",
    "description": "Generates images from textual prompts using deep learning and NLP models. Built for a hackathon challenge.",
    "category": ["AI/ML", "Computer Vision", "Hackathons"],
    "techStack": ["Python", "TensorFlow", "NLP", "Computer Vision"],
    "image": "/images/projects/text-image.jpg",
    "githubUrl": "https://github.com/shivamshar03/text-to-image-",
    "featured": false
  },
  {
    "id": 7,
    "title": "Ping Pong Game",
    "description": "A classic ping pong game developed using the Kivy framework in Python.",
    "category": ["Game Dev"],
    "techStack": ["Python", "Kivy"],
    "image": "/images/projects/ping-pong.jpg",
    "githubUrl": "https://github.com/shivamshar03/ping-pong-game",
    "featured": false
  },
  {
    "id": 8,
    "title": "Recruitment Form",
    "description": "A responsive form used for managing recruitment applications in the codeX community.",
    "category": ["Web Dev"],
    "techStack": ["Java", "HTML", "CSS", "JavaScript"],
    "image": "/images/projects/recruitment.jpg",
    "githubUrl": "https://github.com/shivamshar03/recruitment-form",
    "featured": false
  },
  {
    "id": 9,
    "title": "Timesheet Analyser",
    "description": "Analyzes and visualizes developer timesheet data for productivity insights.",
    "category": ["AI/ML", "Data Analytics"],
    "techStack": ["Python", "Pandas", "Matplotlib", "Streamlit"],
    "image": "/images/projects/timesheet-analyser.jpg",
    "githubUrl": "https://github.com/shivamshar03/timesheet_analyser",
    "featured": false
  },
  {
    "id": 10,
    "title": "Ticket Support",
    "description": "A Python-based support ticketing system to manage and resolve user issues.",
    "category": ["Web Dev", "Automation"],
    "techStack": ["Python", "Flask", "SQLite", "HTML", "CSS", "JavaScript"],
    "image": "/images/projects/ticket-support.jpg",
    "githubUrl": "https://github.com/shivamshar03/Ticket_support",
    "featured": false
  },
  {
    "id": 11,
    "title": "Face Identification Attendance System",
    "description": "An attendance system that uses facial recognition to log attendance automatically.",
    "category": ["AI/ML", "Computer Vision"],
    "techStack": ["Python", "OpenCV", "face_recognition"],
    "image": "/images/projects/face-attendance.jpg",
    "githubUrl": "https://github.com/shivamshar03/Face_Identification_Attendance_System",
    "featured": false
  },
  {
    "id": 12,
    "title": "Portfolio Website",
    "description": "My personal portfolio website showcasing my projects and skills.",
    "category": ["Web Dev"],
    "techStack": ["HTML", "CSS", "JavaScript"],
    "image": "/images/projects/portfolio.jpg",
    "githubUrl": "https://github.com/shivamshar03/portfolio-website",
    "featured": false
  },
  {
    "id": 13,
    "title": "CodeX Community Website",
    "description": "The official website for the codeX community, built using React.js.",
    "category": ["Web Dev"],
    "techStack": ["React", "JavaScript", "HTML", "CSS"],
    "image": "/images/projects/codex-website.jpg",
    "githubUrl": "https://github.com/shivamshar03/codex-website",
    "featured": false
  },
  {
    "id": 14,
    "title": "CodeX Community Discord Bot",
    "description": "A feature-rich Discord bot for CodeX community management.",
    "category": ["Automation", "Discord Bots"],
    "techStack": ["Python", "discord.py"],
    "image": "/images/projects/codex-discord-bot.jpg",
    "githubUrl": "https://github.com/shivamshar03/codex-discord-bot",
    "featured": true
  },
  {
    "id": 15,
    "title": "AI Chat App",
    "description": "A Python-based chat application powered by AI to simulate intelligent conversations.",
    "category": ["AI/ML", "Chatbots"],
    "techStack": ["Python", "Flask", "HTML", "CSS", "JavaScript"],
    "image": "/images/projects/ai-chat-app.jpg",
    "githubUrl": "https://github.com/shivamshar03/AI-Chat-App",
    "featured": false
  },
  {
    "id": 16,
    "title": "AI Voice Chat App",
    "description": "Voice-enabled AI chat app that converts voice to text and interacts using intelligent responses.",
    "category": ["AI/ML", "NLP", "Voice Interfaces"],
    "techStack": ["Python", "SpeechRecognition", "gTTS", "Flask"],
    "image": "/images/projects/ai-voice-chat-app.jpg",
    "githubUrl": "https://github.com/shivamshar03/AI-Voice-Chat-app",
    "featured": false
  },
  {
    "id": 17,
    "title": "Anaya3 Voice Voice",
    "description": "A voice-to-voice extension of Anaya3 that captures speech, interprets it via LLM, and responds with generated voice.",
    "category": ["AI/ML", "Voice Interfaces"],
    "techStack": ["Python", "gTTS", "SpeechRecognition", "LangChain"],
    "image": "/images/projects/anaya3-voice-voice.jpg",
    "githubUrl": "https://github.com/shivamshar03/Anaya3-voice-voice",
    "featured": false
  },
  {
    "id": 18,
    "title": "Anonymous Chat Room",
    "description": "A real-time chat application that lets users connect anonymously using Python sockets.",
    "category": ["Networking", "Web Dev"],
    "techStack": ["Python", "Socket Programming", "Tkinter"],
    "image": "/images/projects/anonymous-chat.jpg",
    "githubUrl": "https://github.com/shivamshar03/Anonymous-chat-room",
    "featured": false
  },
  {
    "id": 19,
    "title": "Call Analyzer",
    "description": "A tool to analyze call records and extract key patterns or statistics.",
    "category": ["Data Analytics"],
    "techStack": ["Python", "Pandas", "Matplotlib"],
    "image": "/images/projects/call-analyzer.jpg",
    "githubUrl": "https://github.com/shivamshar03/CallAnalyzer",
    "featured": false
  },
  {
    "id": 20,
    "title": "Chatbot IMC",
    "description": "A chatbot developed for Indore Municipal Corporation to answer citizen queries.",
    "category": ["AI/ML", "NLP", "Hackathons"],
    "techStack": ["Python", "Flask", "Rasa"],
    "image": "/images/projects/chatbot-imc.jpg",
    "githubUrl": "https://github.com/shivamshar03/chatbot_imc",
    "featured": false
  },
  {
    "id": 21,
    "title": "Code Analyser",
    "description": "Analyzes Python code for complexity, functions, and structure insights.",
    "category": ["Dev Tools"],
    "techStack": ["Python"],
    "image": "/images/projects/code-analyser.jpg",
    "githubUrl": "https://github.com/shivamshar03/Code-Analyser",
    "featured": false
  },
  {
    "id": 22,
    "title": "College Hub",
    "description": "A collaborative college portal hub prototype for sharing academic and event-related resources.",
    "category": ["Web Dev"],
    "techStack": ["HTML", "CSS", "JavaScript", "Bootstrap"],
    "image": "/images/projects/college-hub.jpg",
    "githubUrl": "https://github.com/shivamshar03/CollegeHub",
    "featured": false
  },
  {
    "id": 23,
    "title": "Conversational AI",
    "description": "A conversational AI chatbot prototype built with custom intent classification and rule-based logic.",
    "category": ["AI/ML", "NLP"],
    "techStack": ["Python", "scikit-learn", "NLTK"],
    "image": "/images/projects/conversational-ai.jpg",
    "githubUrl": "https://github.com/shivamshar03/conversational-ai",
    "featured": false
  },
  {
    "id": 24,
    "title": "Data Analysis Assistant",
    "description": "An assistant tool that helps users perform exploratory data analysis and visualization.",
    "category": ["Data Analytics", "AI/ML"],
    "techStack": ["Python", "Pandas", "Matplotlib", "Streamlit"],
    "image": "/images/projects/data-analysis-assistant.jpg",
    "githubUrl": "https://github.com/shivamshar03/Data-Analysis--Assistant",
    "featured": false
  },
  {
    "id": 25,
    "title": "EduPath",
    "description": "A platform designed to guide students on educational paths with personalized recommendations.",
    "category": ["Web Dev", "AI/ML"],
    "techStack": ["Python", "Flask", "HTML", "CSS", "JavaScript"],
    "image": "/images/projects/edupath.jpg",
    "githubUrl": "https://github.com/shivamshar03/edupath",
    "featured": false
  },
  {
    "id": 27,
    "title": "Face Identification Attendance System",
    "description": "An attendance system that uses facial recognition technology for secure check-ins.",
    "category": ["AI/ML", "Computer Vision"],
    "techStack": ["Python", "OpenCV", "face_recognition"],
    "image": "/images/projects/face-attendance.jpg",
    "githubUrl": "https://github.com/shivamshar03/face_identification_attendance_system",
    "featured": false
  },
  {
    "id": 28,
    "title": "Independence Day Visual",
    "description": "A creative visualization project developed for Independence Day celebrations.",
    "category": ["Creative"],
    "techStack": ["HTML", "CSS", "JavaScript"],
    "image": "/images/projects/independence-day.jpg",
    "githubUrl": "https://github.com/shivamshar03/Independence-day",
    "featured": false
  },
  {
    "id": 29,
    "title": "Invoice Extractor",
    "description": "Extracts and processes invoice data using OCR and NLP techniques.",
    "category": ["AI/ML", "Document Processing"],
    "techStack": ["Python", "Tesseract OCR", "Pandas"],
    "image": "/images/projects/invoice-extractor.jpg",
    "githubUrl": "https://github.com/shivamshar03/Invoice-Extractor",
    "featured": false
  },
  {
    "id": 30,
    "title": "Lecture Management System",
    "description": "A tool for managing and organizing lectures and class schedules efficiently.",
    "category": ["Web Dev"],
    "techStack": ["Python", "Flask", "SQLite", "HTML", "CSS"],
    "image": "/images/projects/lecture-management.jpg",
    "githubUrl": "https://github.com/shivamshar03/lecture-managment",
    "featured": false
  },
  {
    "id": 31,
    "title": "Marketing Tool",
    "description": "A digital marketing utility for campaign management and analytics.",
    "category": ["Marketing Tools", "Web Dev"],
    "techStack": ["JavaScript", "React", "Firebase"],
    "image": "/images/projects/marketing-tool.jpg",
    "githubUrl": "https://github.com/shivamshar03/marketing-tool",
    "featured": false
  },
  {
    "id": 32,
    "title": "Mini Game Challenge",
    "description": "A console-based mini game created as part of a GitHub Copilot learning challenge.",
    "category": ["Game Dev"],
    "techStack": ["C#", ".NET"],
    "image": "/images/projects/minigame-copilot.jpg",
    "githubUrl": "https://github.com/shivamshar03/mslearn-challenge-project-create-mini-game-with-copilot",
    "featured": false
  },
  {
    "id": 33,
    "title": "My Portfolio",
    "description": "A personal portfolio website showcasing my work and skills.",
    "category": ["Web Dev"],
    "techStack": ["HTML", "CSS", "JavaScript"],
    "image": "/images/projects/portfolio.jpg",
    "githubUrl": "https://github.com/shivamshar03/my_portfolio",
    "featured": false
  },
  {
    "id": 34,
    "title": "NexHub Community Website",
    "description": "The official site for NexHub community with resources and events.",
    "category": ["Web Dev"],
    "techStack": ["React", "JavaScript", "HTML", "CSS"],
    "image": "/images/projects/nexhub-community.jpg",
    "githubUrl": "https://github.com/shivamshar03/nexhub-community-website",
    "featured": false
  },
  {
    "id": 35,
    "title": "Resume Screening Assistance",
    "description": "A tool for automatically analyzing and shortlisting resumes based on job descriptions.",
    "category": ["AI/ML", "NLP"],
    "techStack": ["Python", "Pandas", "NLP"],
    "image": "/images/projects/resume-screening.jpg",
    "githubUrl": "https://github.com/shivamshar03/Resume-Screening-Assistance",
    "featured": false
  },
  {
    "id": 36,
    "title": "Simple Chat App",
    "description": "A basic real-time chat application built using Python and sockets.",
    "category": ["Networking", "Python"],
    "techStack": ["Python", "Socket"],
    "image": "/images/projects/simple-chat-app.jpg",
    "githubUrl": "https://github.com/shivamshar03/Simple-chat-app",
    "featured": false
  },
  {
    "id": 37,
    "title": "Python Pattern Programs",
    "description": "A collection of Python programs to print different types of patterns.",
    "category": ["Education"],
    "techStack": ["Python"],
    "image": "/images/projects/pattern-programs.jpg",
    "githubUrl": "https://github.com/shivamshar03/python-pattern-programs",
    "featured": false
  },
  {
    "id": 38,
    "title": "Call Analyzer",
    "description": "Analyzes and provides insights on call records using Python data processing.",
    "category": ["Data Analysis"],
    "techStack": ["Python", "Pandas"],
    "image": "/images/projects/call-analyzer.jpg",
    "githubUrl": "https://github.com/shivamshar03/CallAnalyzer",
    "featured": false
  },
  {
    "id": 39,
    "title": "CollegeHub",
    "description": "A student portal prototype designed for managing academic and extracurricular activities.",
    "category": ["Web Dev"],
    "techStack": ["HTML", "CSS", "JavaScript"],
    "image": "/images/projects/collegehub.jpg",
    "githubUrl": "https://github.com/shivamshar03/CollegeHub",
    "featured": false
  },
  {
    "id": 40,
    "title": "Anonymous Chat Room",
    "description": "A Python-based anonymous chat application with real-time messaging.",
    "category": ["Networking", "Web Dev"],
    "techStack": ["Python", "Socket", "Flask"],
    "image": "/images/projects/anonymous-chat.jpg",
    "githubUrl": "https://github.com/shivamshar03/Anonymous-chat-room",
    "featured": false
  },
  {
    "id": 41,
    "title": "Conversational AI",
    "description": "A chatbot application using NLP models to generate intelligent responses.",
    "category": ["AI/ML", "NLP"],
    "techStack": ["Python", "NLTK", "Flask"],
    "image": "/images/projects/conversational-ai.jpg",
    "githubUrl": "https://github.com/shivamshar03/conversational-ai",
    "featured": false
  },
  {
    "id": 42,
    "title": "Data Analysis Assistant",
    "description": "An assistant that helps in performing exploratory data analysis tasks.",
    "category": ["AI/ML", "Data Analysis"],
    "techStack": ["Python", "Pandas", "Matplotlib"],
    "image": "/images/projects/data-analysis-assistant.jpg",
    "githubUrl": "https://github.com/shivamshar03/Data-Analysis--Assistant",
    "featured": false
  }
];  