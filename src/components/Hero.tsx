import { Download, Mail } from 'lucide-react';

export function Hero() {
  const handleHireMe = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Abhishek-Wathore-Resume.pdf';
    link.download = 'Abhishek_Wathore_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
              Hi, I'm
              <span className="block text-blue-600 dark:text-blue-400">Abhishek Wathore</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-2 transition-colors font-semibold">
              Software Developer
            </p>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto transition-colors">
              Building scalable web and mobile applications with React.js, Node.js, and modern technologies. Passionate about clean code and creating impactful solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleHireMe}
              className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Mail size={20} />
              Hire Me
            </button>
            <button
              onClick={handleDownloadResume}
              className="group px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Download size={20} />
              Download Resume
            </button>
          </div>

          <div className="mt-16 flex justify-center gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white">6+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Tech Skills</div>
            </div>
            <div className="w-px bg-gray-300 dark:bg-gray-700"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white">React</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Node.js</div>
            </div>
            <div className="w-px bg-gray-300 dark:bg-gray-700"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white">Full</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Stack</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
