
import React, { useState, useEffect } from 'react';
import { PROJECTS, SKILLS, EXPERIENCES } from './constants';
import ProjectCard from './components/ProjectCard';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-950/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-extrabold tracking-tighter text-gradient">MR.</a>
        <div className="hidden md:flex items-center space-x-8">
          {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium text-gray-400 hover:text-blue-400 transition-colors"
            >
              {item}
            </a>
          ))}
          <a 
            href="https://github.com/Muhammad-Rashid-172002" 
            target="_blank" 
            className="px-5 py-2 accent-gradient rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
};

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-12 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">{children}</h2>
    {subtitle && <p className="text-gray-400 max-w-2xl mx-auto">{subtitle}</p>}
    <div className="w-20 h-1 accent-gradient mx-auto mt-6 rounded-full"></div>
  </div>
);

const App: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full"></div>
        
        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">Software Engineer & Flutter Developer</h2>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Hi, I'm <span className="text-gradient">Muhammad Rashid</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl mx-auto md:mx-0">
              Passionate about building scalable, clean, and high-performance mobile applications with Flutter and modern cloud technologies.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a href="#projects" className="w-full sm:w-auto px-8 py-4 accent-gradient rounded-xl font-bold text-center hover:scale-105 transition-transform shadow-lg shadow-blue-500/20">
                View Projects
              </a>
              <a href="#about" className="w-full sm:w-auto px-8 py-4 bg-gray-900 border border-gray-800 rounded-xl font-bold text-center hover:bg-gray-800 transition-colors">
                About Me
              </a>
              <a href="#contact" className="w-full sm:w-auto px-8 py-4 text-blue-400 font-bold hover:underline">
                Contact
              </a>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 accent-gradient blur-3xl opacity-20 animate-pulse"></div>
              <img 
                src="https://picsum.photos/id/1/800/800" 
                alt="Portrait" 
                className="relative z-10 w-full h-full object-cover rounded-3xl border border-gray-800 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block text-gray-500">
           <i className="fa-solid fa-chevron-down text-xl"></i>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-950/50">
        <div className="container mx-auto px-6">
          {/* Fix: Passed "About Me" as child of SectionHeading */}
          <SectionHeading subtitle="Crafting digital experiences with precision and passion.">About Me</SectionHeading>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-xl">
                I am a dedicated <span className="text-white font-semibold">Software Engineer</span> specializing in 
                <span className="text-blue-400 font-semibold"> Flutter & Mobile Development</span>.
              </p>
              <p>
                My journey in tech is fueled by a desire to create impactful digital products. I have hands-on experience in building real-world Flutter applications, integrating seamless Firebase services, and crafting intuitive UI/UX designs.
              </p>
              <p>
                I thrive in environments that challenge me to learn and apply modern mobile technologies. My development philosophy centers around clean code, robust architecture, and delivering high-performance user experiences.
              </p>
              <div className="pt-4 flex items-center gap-6">
                 <div>
                    <h4 className="text-3xl font-bold text-white">2+</h4>
                    <p className="text-sm text-gray-500">Years Experience</p>
                 </div>
                 <div className="w-px h-10 bg-gray-800"></div>
                 <div>
                    <h4 className="text-3xl font-bold text-white">15+</h4>
                    <p className="text-sm text-gray-500">Projects Completed</p>
                 </div>
                 <div className="w-px h-10 bg-gray-800"></div>
                 <div>
                    <h4 className="text-3xl font-bold text-white">5+</h4>
                    <p className="text-sm text-gray-500">Happy Clients</p>
                 </div>
              </div>
            </div>
            <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800">
              <h4 className="text-xl font-bold mb-6 flex items-center">
                <i className="fa-solid fa-bolt text-blue-500 mr-3"></i> Core Values
              </h4>
              <ul className="space-y-4">
                {[
                  "Clean & Readable Code",
                  "Performance Optimization",
                  "User-Centric UI/UX",
                  "Firebase Backend Integration",
                  "Scalable Architecture"
                ].map((value, idx) => (
                  <li key={idx} className="flex items-center text-gray-400">
                    <i className="fa-solid fa-check-circle text-blue-500 mr-4"></i>
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="container mx-auto px-6">
          {/* Fix: Passed "Technical Skills" as child of SectionHeading */}
          <SectionHeading subtitle="The technologies and tools I master to build world-class applications.">Technical Skills</SectionHeading>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {SKILLS.map((skill, idx) => (
              <div key={idx} className="bg-gray-900 border border-gray-800 p-8 rounded-2xl text-center hover:border-blue-500/50 transition-colors group">
                <i className={`${skill.icon} text-4xl mb-4 text-gray-500 group-hover:text-blue-400 transition-colors`}></i>
                <h4 className="font-semibold">{skill.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gray-950/50">
        <div className="container mx-auto px-6">
          {/* Fix: Passed "Portfolio Projects" as child of SectionHeading */}
          <SectionHeading subtitle="A showcase of my recent work, featuring real screenshots and direct GitHub access.">Portfolio Projects</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24">
        <div className="container mx-auto px-6">
          {/* Fix: Passed "Experience" as child of SectionHeading */}
          <SectionHeading subtitle="My professional journey and academic achievements.">Experience</SectionHeading>
          <div className="max-w-4xl mx-auto">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="relative pl-8 pb-12 last:pb-0 border-l border-gray-800">
                <div className="absolute top-0 left-[-8px] heartbeat-marker w-4 h-4 rounded-full accent-gradient"></div>
                <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <span className="text-blue-400 text-sm font-semibold">{exp.period}</span>
                  </div>
                  <h4 className="text-lg text-gray-400 mb-4">{exp.company}</h4>
                  <p className="text-gray-500 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-950/50">
        <div className="container mx-auto px-6">
          {/* Fix: Passed "Get In Touch" as child of SectionHeading */}
          <SectionHeading subtitle="Let's build something amazing together. Reach out for collaborations or inquiries.">Get In Touch</SectionHeading>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-gray-400 mb-8">
                I'm currently available for freelance projects and full-time opportunities. Feel free to connect via any of these channels.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mr-4 text-blue-500 border border-gray-800">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase font-bold">Email</p>
                    <a href="mailto:muhammadrashid172002@gmail.com" className="text-white hover:text-blue-400 transition-colors">muhammadrashid172002@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mr-4 text-blue-500 border border-gray-800">
                    <i className="fa-brands fa-linkedin"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase font-bold">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/muhammad-rashid-flutterdev/" target="_blank" className="text-white hover:text-blue-400 transition-colors">muhammad-rashid-flutterdev</a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mr-4 text-blue-500 border border-gray-800">
                    <i className="fa-brands fa-github"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase font-bold">GitHub</p>
                    <a href="https://github.com/Muhammad-Rashid-172002" target="_blank" className="text-white hover:text-blue-400 transition-colors">Muhammad-Rashid-172002</a>
                  </div>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleContactSubmit} className="bg-gray-900 p-8 rounded-2xl border border-gray-800 shadow-xl">
              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-400 mb-2 uppercase">Full Name</label>
                <input 
                  type="text" 
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  placeholder="John Doe" 
                  className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-400 mb-2 uppercase">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  placeholder="john@example.com" 
                  className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-400 mb-2 uppercase">Message</label>
                <textarea 
                  rows={4} 
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  placeholder="Tell me about your project..." 
                  className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-4 accent-gradient rounded-xl font-bold text-lg hover:scale-[1.02] transition-transform active:scale-95 flex items-center justify-center"
              >
                {submitted ? <><i className="fa-solid fa-check mr-2"></i> Message Sent!</> : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-900 bg-gray-950">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Muhammad Rashid. Built with React & Tailwind.
          </p>
          <div className="flex space-x-6">
            <a href="https://github.com/Muhammad-Rashid-172002" target="_blank" className="text-gray-500 hover:text-white transition-colors"><i className="fa-brands fa-github text-xl"></i></a>
            <a href="https://www.linkedin.com/in/muhammad-rashid-flutterdev/" target="_blank" className="text-gray-500 hover:text-white transition-colors"><i className="fa-brands fa-linkedin text-xl"></i></a>
            <a href="mailto:muhammadrashid172002@gmail.com" className="text-gray-500 hover:text-white transition-colors"><i className="fa-solid fa-envelope text-xl"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
