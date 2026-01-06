import { Briefcase, Award, Code } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-600 dark:bg-blue-400 rounded-2xl -z-10"></div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I am a Software Developer who enjoys building clean, responsive web and mobile applications using JavaScript, React.js, and Node.js. I care about writing maintainable code and designing interfaces that feel smooth and intuitive across devices.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I completed a Software Developer Trainee role at Milathi Technologies in Hyderabad, where I worked on real projects involving frontend development, backend integration, and API-based features. This experience gave me practical exposure to full-stack development, team collaboration, and modern development workflows.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I am naturally curious and enjoy learning new technologies, solving problems through code, and continuously improving the way I build software. For me, development is about creating solutions that are practical, reliable, and genuinely useful.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg transition-colors">
                  <Briefcase className="text-blue-600 dark:text-blue-400 mb-2" size={32} />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">Milathi</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 text-center">Technologies</div>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg transition-colors">
                  <Award className="text-blue-600 dark:text-blue-400 mb-2" size={32} />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">B.Tech</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 text-center">Computer Science</div>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg transition-colors">
                  <Code className="text-blue-600 dark:text-blue-400 mb-2" size={32} />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">Full</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 text-center">Stack Dev</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
