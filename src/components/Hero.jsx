import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const BASE_URL = import.meta.env.BASE_URL;
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 pt-24"
    >
      <div className="max-w-6xl w-full mx-auto">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-blue-400 font-medium mb-4">
              Hello, I'm
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
              Muhammad Yusril
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Arjulio Prayitno.
              </span>
            </h1>

            <div className="mt-6 text-xl sm:text-2xl text-gray-300 h-8">
              <TypeAnimation
                sequence={[
                  "Data Analyst",
                  2000,
                  "Machine Learning Enthusiast",
                  2000,
                  "Web Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <p className="mt-6 max-w-xl text-gray-400 leading-relaxed">
              Information Systems student interested in data analytics,
              machine learning, and web development. I enjoy transforming
              data into insights and building practical digital solutions.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">

            <a
              href={`${BASE_URL}resume.pdf`}
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-gray-950 font-medium hover:bg-gray-200 transition"
            >
              <Download size={18} />
              Download CV
            </a>

              <a
                href="https://github.com/myusrilap"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition"
              >
                <FaGithub size={18} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/myusrilap/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition"
              >
                <FaLinkedin size={18} />
                LinkedIn
              </a>

            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl scale-110" />

              {/* Image */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border border-white/10 bg-gray-900">
              <img
                src={`${BASE_URL}foto.jpeg`}
                alt="Muhammad Yusril"
                className="w-full h-full object-cover"
              />
              </div>

            </div>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-gray-500 hover:text-white transition"
        >
          <span className="text-xs">Scroll to explore</span>
          <ArrowDown size={16} className="animate-bounce" />
        </motion.a>

      </div>
    </section>
  );
};

export default Hero;