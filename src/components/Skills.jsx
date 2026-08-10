import { motion } from "framer-motion";
import {
  Code2,
  Database,
  BarChart3,
  BrainCircuit,
  Globe,
} from "lucide-react";

const Skills = () => {
  const skillGroups = [
    {
      icon: Code2,
      title: "Programming",
      skills: [
        "Python",
        "SQL",
        "JavaScript",
        "PHP",
      ],
    },

    {
      icon: BarChart3,
      title: "Data Analytics",
      skills: [
        "Data Cleaning",
        "Data Analysis",
        "EDA",
        "Data Visualization",
        "Customer Segmentation",
        "Microsoft Excel",
        "Tableau",
        "Looker Studio",
        "Matplotlib",
      ],
    },

    {
      icon: BrainCircuit,
      title: "Machine Learning",
      skills: [
        "Classification",
        "Clustering",
        "CNN",
        "Data Preprocessing",
        "Feature Engineering",
        "Model Evaluation",
        "TensorFlow",
        "Scikit-learn",
        "OpenCV",
      ],
    },

    {
      icon: Globe,
      title: "Web Development",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "Laravel",
        "Next.js",
        "Bootstrap",
        "FastAPI",
      ],
    },

    {
      icon: Database,
      title: "Database & Tools",
      skills: [
        "MySQL",
        "MariaDB",
        "Git",
        "GitHub",
        "VS Code",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-400 font-medium mb-3">
            Skills
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Tools I use to
            <span className="text-blue-400">
              {" "}solve problems.
            </span>
          </h2>

          <p className="mt-5 text-gray-400 max-w-2xl text-lg leading-relaxed">
            A combination of programming, data analytics, machine
            learning, and web development skills developed through
            academic projects, independent learning, and practical
            experience.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">

          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -5,
                }}
                className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-blue-500/30 transition-colors"
              >

                {/* Header */}
                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <Icon size={20} />
                  </div>

                  <h3 className="font-semibold text-white">
                    {group.title}
                  </h3>

                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mt-6">

                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs text-gray-300 bg-white/5 border border-white/5 hover:border-blue-500/20 hover:text-white transition"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Skills;