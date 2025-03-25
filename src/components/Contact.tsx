import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, Send, Loader2 } from 'lucide-react';
import { Toaster, toast } from 'react-hot-toast';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 min-h-screen">
      <Toaster position="bottom-right" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">Get In Touch</h2>

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-[var(--text)] mb-4">
                Let's Connect
              </h3>
              <p className="text-[var(--secondary)] mb-8">
              I’m eager to learn, collaborate, and grow in the fields of Software Development and Data Analysis. 
              Whether it’s a project, an idea, or a learning opportunity, I’d love to connect and explore new possibilities.
              </p>

              <div className="space-y-4">
                <a
                  href="udaykiran.2688@gmail.com"
                  className="flex items-center gap-4 text-[var(--secondary)] hover:text-[var(--primary)] transition-colors"
                >
                  <Mail className="w-6 h-6" />
                  <span>udaykiran.2688@gmail.com</span>
                </a>

                <div className="flex gap-6">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--secondary)] hover:text-[var(--primary)] transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/uday-kiran-4a0248280/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--secondary)] hover:text-[var(--primary)] transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[var(--text)] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-[var(--hover)] border border-[var(--border)]
                             rounded-lg focus:outline-none focus:border-[var(--primary)]
                             text-[var(--text)] placeholder-[var(--secondary)]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[var(--text)] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-[var(--hover)] border border-[var(--border)]
                             rounded-lg focus:outline-none focus:border-[var(--primary)]
                             text-[var(--text)] placeholder-[var(--secondary)]"
                    placeholder="Your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[var(--text)] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 bg-[var(--hover)] border border-[var(--border)]
                             rounded-lg focus:outline-none focus:border-[var(--primary)]
                             text-[var(--text)] placeholder-[var(--secondary)]"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;