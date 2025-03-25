import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, GraduationCap } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <motion.div
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="relative mx-auto"
            >
              <div className="w-64 h-64 relative">
                <img
                 src="/images/myprofile.jpg"
                 alt="My Profile"
                 className="rounded-2xl w-full h-full object-cover"
                />
                <div className="absolute inset-0 rounded-2xl border-2 border-[var(--primary)] 
                             opacity-50 transform -translate-x-4 -translate-y-4 transition-transform
                             group-hover:translate-x-0 group-hover:translate-y-0"></div>
              </div>
              <div className="absolute inset-0 bg-[var(--primary)] opacity-20 blur-3xl -z-10"></div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-[var(--secondary)] text-lg">
              I'm a passionate Software Development Engineer and Data Analyst with a strong foundation in building efficient software solutions and extracting valuable insights from data. 
              I love solving real-world problems through technology, combining development skills with data analysis to create impactful and scalable solutions. 
              My journey in tech started with a Computer Science degree, and I continue to grow through hands-on projects and continuous learning
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[var(--hover)] rounded-lg">
                    <Code2 className="text-[var(--primary)] w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-[var(--text)] font-semibold">Software Development Engineer</h3>
                    <p className="text-[var(--secondary)]">Crafting scalable solutions with precision, performance, and innovation</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[var(--hover)] rounded-lg">
                    <GraduationCap className="text-[var(--primary)] w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-[var(--text)] font-semibold">Artificial Intelligence and Machine Learning</h3>
                    <p className="text-[var(--secondary)]">Sphoorthy Engineering College</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;