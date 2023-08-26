import React from 'react';
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaDatabase, FaGit } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 size={64} color="#E44D26" /> },
    { name: 'CSS', icon: <FaCss3 size={64} color="#2965F1" /> },
    { name: 'JavaScript', icon: <SiJavascript size={64} color="#F7DF1E" /> },
    { name: 'React', icon: <FaReact size={64} color="#61DAFB" /> },
    { name: 'Node.js', icon: <FaNodeJs size={64} color="#8CC84B" /> },
    { name: 'Database', icon: <FaDatabase size={64} color="#336791" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={64} color="#38B2AC" /> },
    { name: 'Git', icon: <FaGit size={64} color="#F05032" /> },
  ];

  return (
    <div className="bg-[#2C2C37] py-10 animated-bg ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-[#4FA285] mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="bg-[#2C2C37] rounded-full p-4 shadow-lg">{skill.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
