import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { ExternalLink, Send } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[var(--primary)] text-lg mb-4 font-mono">Hi, I'm</h1>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gradient">UDAY KIRAN VAGGU</h2>
            <div className="text-[var(--secondary)] text-xl md:text-2xl mb-6">
              <Typewriter
                options={{
                  strings: [
                    'Data Analyst',
                    'Software Development Engineer',
                    'Problem Solver'
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 80,
                }}
              />
            </div>
            <p className="text-[var(--secondary)] mb-8 text-lg">
            I am an aspiring Software Development Engineer and Data Analyst, eager to learn and build impactful solutions. I enjoy coding, problem-solving, and analyzing data to uncover insights. 
            Join me on this journey as I grow and create meaningful projects.
            </p>
            <div className="flex gap-4 justify-center">
              <motion.a 
                href="https://drive.google.com/file/d/1b6SBjw6oXhQ03mLSPn8XgEomrF589VMF/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={20} />
                View Resume
              </motion.a>
              <motion.a 
                href="#contact"
                className="btn-primary flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={20} />
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;