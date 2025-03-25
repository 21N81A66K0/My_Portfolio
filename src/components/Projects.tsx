import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Enhancing Security with Real Time Animal Intruder Detection',
    description: 'This project enhances farm and property security using deep learning. A CNN processes live video feeds to detect animals and sends email alerts with images upon detection.',
    image: '/images/detected_cow.jpg',
    tech: ['Python', 'OpenCV', 'Tensor Flow', 'JavaScript'],
    github: 'https://github.com/21N81A66K0/Enhancing_Animal_Intrusion.git',
    demo: '#',
  },
  {
    title: 'Task Manager',
    description: 'A full-featured task management application with real-time updates and team collaboration.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop&q=80',
    tech: ['Next.js', 'PostgreSQL', 'Prisma', 'TailwindCSS'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Weather App',
    description: 'Real-time weather forecasting app with interactive maps and detailed weather data.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&auto=format&fit=crop&q=80',
    tech: ['React', 'Weather API', 'ChartJS', 'TailwindCSS'],
    github: '#',
    demo: '#',
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="projects" className="py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">Featured Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card group"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-xl font-semibold text-[var(--text)] mb-2">
                  {project.title}
                </h3>

                <p className="text-[var(--secondary)] mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm px-3 py-1 rounded-lg bg-[#1E293B]
                               text-[var(--primary)] font-medium
                               border border-[var(--primary)] border-opacity-30
                               hover:bg-[var(--primary)] hover:bg-opacity-10
                               transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg
                             bg-[#1E293B] hover:bg-[#2E3B52]
                             text-[var(--primary)] font-medium
                             border border-[var(--primary)] border-opacity-30
                             transition-all duration-300
                             hover:shadow-[0_0_15px_rgba(100,255,218,0.2)]"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg
                             bg-[#1E293B] hover:bg-[#2E3B52]
                             text-[var(--primary)] font-medium
                             border border-[var(--primary)] border-opacity-30
                             transition-all duration-300
                             hover:shadow-[0_0_15px_rgba(100,255,218,0.2)]"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;