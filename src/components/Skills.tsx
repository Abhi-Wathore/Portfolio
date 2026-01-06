import { SkillCategory } from '../types';

const skillsData: SkillCategory[] = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'Java', level: 85 },
      { name: 'Python', level: 70 },
      { name: 'HTML5 & CSS3', level: 92 },
    ],
  },
  {
    category: 'Frontend & Backend',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Node.js', level: 85 },
      { name: 'Material UI', level: 88 },
      { name: 'Spring Boot', level: 75 },
    ],
  },
  {
    category: 'Databases & Tools',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'Git & GitHub', level: 92 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillsData.map((category) => (
              <div
                key={category.category}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                        <div
                          className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
