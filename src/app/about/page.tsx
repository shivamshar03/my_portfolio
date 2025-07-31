"use client";

import Image from 'next/image';
import React, { useRef } from "react";
import { motion, useScroll, useInView } from "framer-motion";

// Define interface for Details component props
interface DetailsProps {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  work: string;
  index: number;
}

const Details: React.FC<DetailsProps> = ({ position, company, companyLink, time, work, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.li
      ref={ref}
      className="my-10 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%] xs:w-[90%]"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20, delay: index * 0.2 }}
    >
      <motion.div
        className="absolute -left-2.5 mt-2 h-6 w-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600 shadow-lg group-hover:scale-125 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.7)] transition-all duration-300 animate-pulse"
        whileHover={{ scale: 1.3 }}
      />
      <motion.div
        className="ml-12 bg-white/95 dark:bg-gray-800/95 backdrop-blur-lg rounded-2xl p-6 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-700"
        whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {position}{" "}
          <a
            className="capitalize text-blue-600 dark:text-blue-400 font-semibold hover:underline decoration-2 decoration-blue-500"
            href={companyLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-gray-500 dark:text-gray-400 font-medium text-sm xs:text-xs">
          {time}
        </span>
        <p className="font-medium w-full text-gray-700 dark:text-gray-200 md:text-sm mt-3 leading-relaxed">
          {work}
        </p>
      </motion.div>
    </motion.li>
  );
};

export default function AboutPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="container mx-auto px-4 py-20 max-w-7xl font-sans">
      {/* My Background */}
      <motion.section
        className="py-16 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-950 dark:to-indigo-950 rounded-3xl overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-center mb-12 text-gray-900 dark:text-white tracking-tight drop-shadow-lg"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h1>
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-2xl shadow-2xl p-10 md:p-12 flex flex-col md:flex-row gap-8 items-center transition-all duration-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400 shadow-xl transition-all duration-300">
                <Image
                  src="/images/shivambg.jpg"
                  alt="Shivam Sharma Background"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  priority
                />
              </div>
            </motion.div>
            <div className="flex-1">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                My Background
              </motion.h2>
              <motion.p
                className="mb-6 text-lg text-gray-700 dark:text-gray-200 leading-relaxed"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Passionate software developer creating elegant solutions. Continuous learner, code craftsman, and open source enthusiast. Building tomorrow&apos;s technology today.
              </motion.p>
              <motion.p
                className="mb-6 text-lg text-gray-700 dark:text-gray-200 leading-relaxed"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                I&apos;m currently focused on AI/ML development, Python projects, and building community tools. As a Chairperson at NexHub and the Founder & Mentor at Abhyudaya Coding Club, I enjoy helping others grow in their tech journey.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* My Skills */}
      <motion.section
        className="py-16 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950 dark:to-blue-950"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            My Skills
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4">
            {[
              { name: 'Machine Learning (ML)', level: 80, desc: 'Building predictive models and algorithms.' },
              { name: 'Artificial Intelligence (AI)', level: 75, desc: 'Developing intelligent systems and agents.' },
              { name: 'Data Analysis & Pandas', level: 85, desc: 'Data manipulation and insights with Python.' },
              { name: 'Computer Vision (OpenCV)', level: 70, desc: 'Image processing and object detection.' },
              { name: 'Natural Language Processing (NLP)', level: 65, desc: 'Text analysis and language models.' },
              { name: 'Flask & Django (Backend)', level: 85, desc: 'Building robust web applications.' },
              { name: 'MySQL / Database Management', level: 75, desc: 'Efficient data storage and querying.' },
              { name: 'Next.js / React.js (Frontend)', level: 65, desc: 'Creating dynamic user interfaces.' },
              { name: 'Docker', level: 80, desc: 'Containerizing applications for deployment.' },
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="group relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">{skill.name}</span>
                  <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className="bg-gradient-to-r from-blue-500 to-blue-700 h-3 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </div>
                <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 bg-gray-900 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-10">
                  {skill.desc}
                </span>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="mt-12 mx-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">Currently Learning</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['FastAPI', 'Gen AI', 'Deep Learning', 'Multi-Model LLMs', 'Game Developments', 'AR/VR Technologies'].map((tech, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-800 hover:text-blue-900 dark:hover:text-blue-300 transition-all duration-300"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Qualifications */}
      <motion.section
        className="py-16 bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Qualifications
        </motion.h2>
        <div className="relative max-w-3xl mx-auto px-4">
          <motion.div
            className="border-l-4 border-blue-600 dark:border-blue-400 absolute h-full left-8 top-0"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          />
          <ul className="space-y-12">
            {[
              {
                title: 'B.Tech in Computer Science',
                time: 'Shri Vaishnav Vidhyapeeth Vishwavidyalaya, 2021 - 2025',
                desc: 'Pursuing a Bachelor of Technology in Computer Science with a focus on Artificial Intelligence, Machine Learning, and Software Development. Engaged in various hands-on projects, hackathons, and leadership roles, including founding and mentoring coding communities on campus.',
                iconColor: 'text-blue-600 dark:text-blue-400',
                bgColor: 'bg-blue-100 dark:bg-blue-900',
              },
              {
                title: 'Artificial Intelligence Certification',
                time: 'IBM, 2025',
                desc: 'Completed an advanced artificial intelligence certification with hands-on projects.',
                iconColor: 'text-green-600 dark:text-green-400',
                bgColor: 'bg-green-100 dark:bg-green-900',
              },
              {
                title: '5 Star in Python Programming',
                time: 'HackkerRank, 2024',
                desc: 'Achieved a 5-star rating in Python programming on HackkerRank, demonstrating advanced coding skills and problem-solving abilities.',
                iconColor: 'text-purple-600 dark:text-purple-400',
                bgColor: 'bg-purple-100 dark:bg-purple-900',
              },
            ].map((item, index) => (
              <motion.li
                key={index}
                className="relative flex items-start group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.span
                  className={`flex-shrink-0 w-14 h-14 ${item.bgColor} rounded-full flex items-center justify-center border-4 border-white dark:border-gray-800 shadow-lg group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300`}
                  whileHover={{ scale: 1.15, rotate: 5 }}
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
                </motion.span>
                <motion.div
                  className="ml-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-xl p-6 shadow-lg group-hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className={`text-xl font-semibold group-hover:${item.iconColor} transition-colors`}>{item.title}</h3>
                  <span className="block text-sm text-gray-500 dark:text-gray-400 mb-2">{item.time}</span>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed">{item.desc}</p>
                </motion.div>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Abhyudaya & Nexhub */}
      <motion.section
        className="py-20 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Community Contributions
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
          {[
            {
              name: 'Abhyudaya',
              imgSrc: '/images/Logo/abhyudaya.jpeg',
              desc: 'Abhyudaya is the official student-led coding and innovation club at SVVV. As the founding president, I initiated a platform that encourages learning through real-world projects, expert workshops, and collaborative events — nurturing technical leadership and creative problem-solving.',
              link: 'https://abhyudaya-svvv.vercel.app',
              borderColor: 'border-sky-700 dark:border-sky-900',
              buttonColor: 'bg-sky-700 hover:bg-sky-900',
              shadowColor: 'hover:shadow-sky-800 dark:hover:shadow-sky-900',
            },
            {
              name: 'NexHub',
              imgSrc: '/images/Logo/nexhub.jpeg',
              desc: 'NexHub is a fast-growing tech community dedicated to emerging technologies like AI, ML, automation, and developer growth. As the current Chairperson, I facilitate technical discussions, peer learning circles, networking meetups, and weekly events that bridge theory and practice.',
              link: 'https://nexhubcommunity.vercel.app',
              borderColor: 'border-indigo-700 dark:border-indigo-700',
              buttonColor: 'bg-indigo-600 hover:bg-indigo-800',
              shadowColor: 'hover:shadow-indigo-700 dark:hover:shadow-indigo-800',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl shadow-2xl p-10 flex flex-col items-center transform transition-all duration-500 ${item.shadowColor}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03, rotate: index % 2 === 0 ? 1 : -1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className={`w-20 h-20 rounded-full shadow-md object-cover border-4 ${item.borderColor} bg-white`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={item.imgSrc}
                  alt={`${item.name} Logo`}
                  width={80}
                  height={80}
                  className="w-full h-full rounded-full object-cover"
                  priority
                />
              </motion.div>
              <h3 className="text-2xl font-bold mt-4 mb-4 text-center text-gray-900 dark:text-white">{item.name}</h3>
              <p className="text-gray-700 dark:text-gray-200 text-center mb-6 leading-relaxed max-w-md">
                {item.desc}
              </p>
              <motion.a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center px-8 py-3 ${item.buttonColor} text-white rounded-full font-semibold shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name === 'Abhyudaya' ? 'Visit Website' : 'Know More'}
                <svg className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Experience Timeline */}
      <motion.section
        className="py-16 bg-gradient-to-r from-gray-50 to-blue-100 dark:from-gray-900 dark:to-blue-950 rounded-3xl overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-gray-900 dark:text-white tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Experience Timeline
        </motion.h2>
        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full px-4">
          <motion.div
            className="absolute left-9 top-0 w-[4px] h-full bg-gradient-to-b from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600 origin-top"
            style={{ scaleY: scrollYProgress }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute w-full h-2 bg-blue-300 dark:bg-blue-200 opacity-50 animate-pulse"
              style={{ scaleY: scrollYProgress }}
            />
          </motion.div>
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            {[
              {
                position: "Chairperson",
                company: "NexHub",
                time: "2023 - Present",
                companyLink: "https://nexhubcommunity.vercel.app",
                work: "Heading NexHub community, organizing tech meetups, mentorship sessions, and career-building events.",
              },
              {
                position: "Founder & Mentor",
                company: "Abhyudaya Coding Club",
                time: "2022 - Present",
                companyLink: "https://abhyudaya-svvv.vercel.app",
                work: "Guiding students through coding workshops, hackathons, and technical events.",
              },
              {
                position: "Machine Learning Intern",
                company: "Ardent Computech Pvt. Ltd.",
                time: "Aug 2024 - Sep 2024",
                companyLink: "#",
                work: "Implemented a brain tumor detection system using deep learning and CNNs.",
              },
              {
                position: "Campus Ambassador",
                company: "Technex, IIT (BHU) Varanasi",
                time: "2023",
                companyLink: "#",
                work: "Promoted India&apos;s premier tech fest at campus, boosting student participation by 25%.",
              },
            ].map((item, index) => (
              <Details
                key={index}
                index={index}
                position={item.position}
                company={item.company}
                companyLink={item.companyLink}
                time={item.time}
                work={item.work}
              />
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Connect With Me */}
      <motion.section
        className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Connect With Me
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            {
              name: 'Instagram',
              href: 'https://instagram.com/shivamsharma.py',
              gradient: 'from-pink-500 via-red-500 to-yellow-500',
              iconColor: 'text-pink-600 group-hover:text-pink-700',
              hoverBg: 'group-hover:bg-pink-50 dark:group-hover:bg-pink-900',
              svg: (
                <svg className="w-8 h-8 text-pink-600 group-hover:text-pink-700 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a5.25 5.25 0 1 1-5.25 5.25 5.25 5.25 0 0 1 5.25-5.25zm0 1.5a3.75 3.75 0 1 0 3.75 3.75A3.75 3.75 0 0 0 12 5.25zm5.5 1.25a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
                </svg>
              ),
            },
            {
              name: 'Discord',
              href: 'https://discord.com/users/1042284338982682634',
              gradient: 'from-indigo-500 via-blue-500 to-purple-500',
              iconColor: 'text-indigo-600 group-hover:text-indigo-700',
              hoverBg: 'group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900',
              svg: (
                <svg className="w-8 h-8 text-indigo-600 group-hover:text-indigo-700 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.369A19.791 19.791 0 0 0 16.885 3.1a.074.074 0 0 0-.079.037c-.34.607-.719 1.396-.984 2.021-2.963-.447-5.926-.447-8.89 0-.266-.625-.645-1.414-.985-2.021a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.684 4.369a.069.069 0 0 0-.032.027C.533 9.09-.32 13.579.099 18.021a.082.082 0 0 0 .031.056c3.733 2.747 7.348 2.21 10.923 1.963.527-.037 1.054-.074 1.579-.111.527.037 1.054.074 1.579.111 3.574.247 7.19.784 10.923-1.963a.082.082 0 0 0 .031-.056c.419-4.442-.434-8.931-3.553-13.625a.07.07 0 0 0-.032-.027zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.334.956-2.419 2.157-2.419 1.201 0 2.157 1.085 2.157 2.419 0 1.334-.956 2.419-2.157 2.419zm7.96 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.334.956-2.419 2.157-2.419 1.201 0 2.157 1.085 2.157 2.419 0 1.334-.956 2.419-2.157 2.419z" />
                </svg>
              ),
            },
            {
              name: 'Snapchat',
              href: 'https://snapchat.com/shivamshar0310',
              gradient: 'from-yellow-400 to-yellow-200',
              hoverBg: 'group-hover:bg-yellow-50 dark:group-hover:bg-yellow-900',
              svg: (
                <Image
                  src="/images/snapchat.png"
                  alt="Snapchat"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                  draggable={false}
                />
              ),
            },
            {
              name: 'WhatsApp',
              href: 'https://wa.me/916266061914',
              gradient: 'from-green-400 to-green-600',
              iconColor: 'text-green-600 group-hover:text-green-700',
              hoverBg: 'group-hover:bg-green-50 dark:group-hover:bg-green-900',
              svg: (
                <svg className="w-8 h-8 text-green-600 group-hover:text-green-700 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.52 3.48A12.07 12.07 0 0 0 12 0C5.37 0 0 5.37 0 12a11.93 11.93 0 0 0 1.64 6.06L0 24l6.18-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12a12.07 12.07 0 0 0-3.48-8.52zM12 22a9.93 9.93 0 0 1-5.29-1.53l-.38-.23-3.67.96.98-3.57-.25-.37A9.93 9.93 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.43-2.25-1.37-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.02-.22-.54-.45-.47-.62-.48-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1.01-1 2.46 0 1.45 1.03 2.85 1.18 3.05.15.2 2.03 3.1 4.92 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.89-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.18-.53-.32z" />
                </svg>
              ),
            },
            {
              name: 'Kaggle',
              href: 'https://www.kaggle.com/shivamsharmapy',
              gradient: 'from-blue-400 to-blue-700',
              hoverBg: 'group-hover:bg-blue-50 dark:group-hover:bg-blue-900',
              svg: (
                <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <rect width="32" height="32" rx="16" fill="#20BEFF" />
                    <path d="M22.5 8.5H20.7L16.6 14.1L14.2 11.1V8.5H11.5V23.5H14.2V15.6L16.6 18.7L20.7 23.5H22.5L17.8 17.6L22.5 8.5Z" fill="#fff" />
                  </g>
                </svg>
              ),
            },
            {
              name: 'LinkedIn',
              href: 'https://linkedin.com/in/shivam-sharma-ab489721b/',
              gradient: 'from-blue-700 to-blue-400',
              iconColor: 'text-blue-700 group-hover:text-blue-800',
              hoverBg: 'group-hover:bg-blue-50 dark:group-hover:bg-blue-900',
              svg: (
                <svg className="w-8 h-8 text-blue-700 group-hover:text-blue-800 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.61 2.01 3.61 4.62v4.69z" />
                </svg>
              ),
            },
            {
              name: 'GitHub',
              href: 'https://github.com/shivamshar03',
              gradient: 'from-gray-700 to-gray-900',
              iconColor: 'text-gray-800 dark:text-gray-200 group-hover:text-black dark:group-hover:text-white',
              hoverBg: 'group-hover:bg-gray-100 dark:group-hover:bg-gray-800',
              svg: (
                <svg className="w-8 h-8 text-gray-800 dark:text-gray-200 group-hover:text-black dark:group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.92.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
                </svg>
              ),
            },
            {
              name: 'X (Twitter)',
              href: 'https://x.com/ShivamShar03',
              gradient: 'from-gray-900 to-gray-700',
              hoverBg: 'group-hover:bg-gray-100 dark:group-hover:bg-gray-800',
              svg: (
                <Image
                  src="/images/twitter.png"
                  alt="X (Twitter)"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                  draggable={false}
                />
              ),
            },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative group bg-gradient-to-tr ${social.gradient} p-1 rounded-full shadow-lg transition-all duration-300`}
              whileHover={{ scale: 1.15, rotate: index % 2 === 0 ? 5 : -5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`bg-white dark:bg-gray-900 rounded-full p-4 flex items-center justify-center ${social.hoverBg} transition-colors`}>
                {social.svg}
              </div>
              <motion.span
                className="absolute left-1/2 top-full mt-2 -translate-x-1/2 bg-gray-900 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-10"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {social.name}
              </motion.span>
            </motion.a>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
