export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string[];
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Anaya3 — Multimodal AI Assistant',
    description:
      'A multimodal personal AI assistant that understands voice commands and detects facial emotions. Features advanced NLP, computer vision, and LLM-powered context-aware conversations.',
    image: '/images/projects/anaya-ai.png',
    category: ['AI/ML'],
    techStack: ['Python', 'OpenCV', 'LLM', 'Whisper', 'LangChain'],
    githubUrl: 'https://github.com/shivamshar03/Anaya3',
    featured: true,
  },
  {
    id: 2,
    title: 'AutoFormX — Smart Form Automation',
    description:
      'Intelligent web form automation tool that uses fuzzy text matching algorithms to auto-fill dynamic forms with high accuracy. Eliminates manual data entry.',
    image: '/images/projects/autoformx.png',
    category: ['AI/ML', 'Web Dev'],
    techStack: ['Python', 'Selenium', 'Fuzzy Matching', 'FastAPI'],
    githubUrl: 'https://github.com/shivamshar03/AutoFormX',
    featured: true,
  },
  {
    id: 3,
    title: 'Face ID Attendance System',
    description:
      'Real-time face recognition attendance system using deep learning and computer vision. Automates attendance tracking with high-accuracy facial identification.',
    image: '/images/projects/face-id.png',
    category: ['AI/ML'],
    techStack: ['Python', 'OpenCV', 'Deep Learning', 'Face Recognition'],
    githubUrl: 'https://github.com/shivamshar03/face_identification_attendance_system',
    featured: true,
  },
  {
    id: 4,
    title: 'Data Analysis Assistant',
    description:
      'Interactive data analytics dashboard built with Pandas and Streamlit. Automates data processing pipelines and generates visual insights from datasets.',
    image: '/images/projects/data-analysis.png',
    category: ['AI/ML', 'Web Dev'],
    techStack: ['Python', 'Pandas', 'Streamlit', 'NumPy'],
    githubUrl: 'https://github.com/shivamshar03/data-analysis-assistant',
    featured: true,
  },
  {
    id: 5,
    title: 'Chat Application',
    description:
      'Real-time encrypted messaging application built with FastAPI WebSockets. Features end-to-end encryption, live socket connections, and a modern chat interface.',
    image: '/images/projects/chat-app.png',
    category: ['Web Dev'],
    techStack: ['FastAPI', 'WebSocket', 'React', 'Encryption'],
    githubUrl: 'https://github.com/shivamshar03/chat-application',
    featured: true,
  },
  {
    id: 6,
    title: 'Speech Emotion Predictor',
    description:
      'ML model that detects emotions from speech audio using feature extraction and classification. Analyzes vocal patterns to predict mood and emotional state.',
    image: '/images/projects/speech-emotion.png',
    category: ['AI/ML'],
    techStack: ['Python', 'Librosa', 'Scikit-learn', 'TensorFlow'],
    githubUrl: 'https://github.com/shivamshar03/speech_emotion_mood_prediction_model',
    featured: false,
  },
  {
    id: 7,
    title: 'Email Generator',
    description:
      'AI-powered professional email template generator with smart suggestions, template selection, and intelligent formatting for business communication.',
    image: '/images/projects/email-generator.png',
    category: ['AI/ML', 'Web Dev'],
    techStack: ['Python', 'LLM', 'FastAPI', 'React'],
    githubUrl: 'https://github.com/shivamshar03/email-generator',
    featured: false,
  },
  {
    id: 8,
    title: 'Sketch Filter',
    description:
      'Creative Python tool that transforms photographs into artistic pencil sketches using image processing and computer vision algorithms.',
    image: '/images/projects/sketch-filter.png',
    category: ['AI/ML'],
    techStack: ['Python', 'OpenCV', 'Image Processing'],
    githubUrl: 'https://github.com/shivamshar03/sketch-filter',
    featured: false,
  },
];