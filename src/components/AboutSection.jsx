import { Briefcase, Code, User } from "lucide-react";
import { motion } from "framer-motion";



export const AboutSection = () => {
  return (
    <section id="about" className="min-h-[70vh] flex items-center justify-center">
      <div className="container mx-auto max-w-5xl px-6">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="flex justify-center items-center">
          {/* Center content */}
          <motion.div
            className="space-y-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-foreground/90">
              Hi, my name is <span className="text-primary">Thanh</span>
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              I’m a third-year Computer Science student with a deep interest in software development, mathematics, and problem-solving.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Beyond coding, I’m passionate about exploring the principles that make systems work and finding good solutions to complex problems.

            </p>
            <p className="text-muted-foreground leading-relaxed">
              My ambition is to become a software developer who builds meaningful websites and applications that improve people’s lives.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">

              <a href="#contact" className="cosmic-button">
                Contact
              </a>


            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};



