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
    id: 1,
    title: 'Personal AI Assistant',
    description: 'AI Girl Assistant: Your personalized virtual companion offering assistance, empathy & continuous improvement. Advanced NLP, ML & UI for human-like interactions.',
    image: '/images/projects/ai-assistant.jpg',
    category: ['AI/ML'],
    techStack: ['Python', 'NLP', 'ML', 'UI'],
    githubUrl: 'https://github.com/shivamshar03/Personal-AI-Assistant',
    featured: true
  },
  {
    id: 2,
    title: 'College Jagat',
    description: 'College Jagat, your ultimate destination for all things college-related! Developed by Abhyudaya, the coding club of SVVV.',
    image: '/images/projects/college-jagat.jpg',
    category: ['Web Dev'],
    techStack: ['Python', 'Django', 'HTML/CSS', 'JavaScript'],
    githubUrl: 'https://github.com/shivamshar03/college-jagat',
    featured: true
  },
  {
    id: 3,
    title: 'Binary Brains',
    description: 'A collaborative development project focused on competitive programming and algorithm challenges.',
    image: '/images/projects/binary-brains.jpg',
    category: ['Open Source'],
    techStack: ['JavaScript', 'Algorithms', 'Data Structures'],
    githubUrl: 'https://github.com/shivamshar03/binary-brains',
    featured: false
  },
  {
    id: 4,
    title: 'Text to Image Generator',
    description: 'A machine learning model that generates images from textual descriptions using advanced AI techniques.',
    image: '/images/projects/text-image.jpg',
    category: ['AI/ML', 'Hackathons'],
    techStack: ['Python', 'TensorFlow', 'NLP', 'Computer Vision'],
    githubUrl: 'https://github.com/shivamshar03/text-to-image-',
    featured: true
  },
  {
    id: 5,
    title: 'Ping Pong Game',
    description: 'A classic ping pong game implementation using Python with the Kivy framework.',
    image: '/images/projects/ping-pong.jpg',
    category: ['Game Dev'],
    techStack: ['Python', 'Kivy'],
    githubUrl: 'https://github.com/shivamshar03/ping-pong-game',
    featured: false
  },
  {
    id: 6,
    title: 'Recruitment Form',
    description: 'codeX Community Recruitment Form for managing team applications.',
    image: '/images/projects/recruitment.jpg',
    category: ['Web Dev'],
    techStack: ['Java', 'HTML/CSS', 'JavaScript'],
    githubUrl: 'https://github.com/shivamshar03/recruitment-form',
    featured: false
  },
]; 