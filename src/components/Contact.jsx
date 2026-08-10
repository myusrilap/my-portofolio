import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-12 lg:p-16"
        >

          {/* Background Glow */}
          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />

          <div className="relative">

            {/* Heading */}
            <p className="text-blue-400 font-medium mb-3">
              Contact
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-3xl">
              Let's build something
              <span className="text-blue-400"> useful.</span>
            </h2>

            <p className="mt-5 text-gray-400 text-lg max-w-2xl leading-relaxed">
              I'm open to opportunities, collaborations, and projects
              related to data analytics, machine learning, and web
              development.
            </p>

            {/* Email */}
            <div className="mt-10">
              <a
                href="mailto:myusril785@gmail.com"
                className="inline-flex items-center gap-3 text-white hover:text-blue-400 transition"
              >
                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Email
                  </p>

                  <p className="text-sm sm:text-base">
                    myusril785@gmail.com
                  </p>
                </div>
              </a>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mt-8">

              {/* Email */}
              <a
                href="mailto:myusril785@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-gray-950 font-medium hover:bg-gray-200 transition"
              >
                Send Email
                <ArrowUpRight size={17} />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/myusrilap"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition"
              >
                <FaGithub size={17} />
                GitHub
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/myusrilap/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition"
              >
                <FaLinkedinIn size={17} />
                LinkedIn
              </a>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;