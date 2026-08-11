import { motion } from "framer-motion";
import { GraduationCap, Database, BrainCircuit } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Information Systems",
      description:
        "Building a foundation in information systems, software development, databases, and technology.",
    },
    {
      icon: Database,
      title: "Data & Analytics",
      description:
        "Interested in turning raw data into meaningful insights through analysis and visualization.",
    },
    {
      icon: BrainCircuit,
      title: "Machine Learning",
      description:
        "Exploring machine learning and deep learning through practical projects and research.",
    },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-400 font-medium mb-3">
            About Me
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Turning curiosity into
            <span className="text-blue-400"> practical solutions.</span>
          </h2>
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 max-w-3xl"
        >
          <p className="text-gray-400 text-lg leading-relaxed">
          I’m an Information Systems fresh graduate focused on Data, Machine Learning, and Web Development. 
          I enjoy transforming data into insights, building intelligent solutions
          and creating web applications that solve real-world problems.
          </p>

          <p className="mt-5 text-gray-400 text-lg leading-relaxed">
            My projects have allowed me to work with data analysis,
            customer segmentation, machine learning, data visualization,
            and web development. I am continuously learning and
            improving my technical skills through hands-on projects.
          </p>
        </motion.div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition">
                  <Icon size={22} />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default About;