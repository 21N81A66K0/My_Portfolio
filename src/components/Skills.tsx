import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: ['HTML', 'CSS', 'Java Script', 'React', 'GSAP']
  },
  {
    title: 'Backend Development',
    skills: ['Node.js', 'Express', 'Python', 'SQL', 'MongoDB'],
  },
  {
    title: 'Tools & Technologies',
    skills: ['Git', 'Ms Excel', 'AWS', 'Figma', 'Power BI'],
  },
];

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="skills" className="py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">Skills & Expertise</h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="card"
              >
                <h3 className="text-xl font-semibold text-[var(--text)] mb-4">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      }}
                      className="bg-[var(--background)] p-3 rounded-lg text-center
                               hover:bg-[var(--primary)] hover:bg-opacity-5 
                               transition-all duration-300"
                    >
                      <span className="text-[var(--secondary)] hover:text-[var(--primary)]
                                     transition-colors duration-300">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;