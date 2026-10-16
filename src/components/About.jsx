import { motion } from "framer-motion";
import { GraduationCap, Database, BrainCircuit } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Sistem Informasi",
      description:
        "Memiliki dasar pendidikan sistem informasi, pengembangan perangkat lunak, basis data, dan teknologi.",
    },
    {
      icon: Database,
      title: "Analisis Data & BI",
      description:
        "Mengubah data mentah menjadi informasi yang berguna melalui analisis, SQL, dan visualisasi.",
    },
    {
      icon: BrainCircuit,
      title: "Machine Learning",
      description:
        "Mempelajari machine learning dan deep learning melalui penelitian serta proyek berbasis praktik.",
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
            Tentang Saya
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Mengubah rasa ingin tahu menjadi
            <span className="text-blue-400"> solusi nyata.</span>
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
          I’m an Sistem Informasi fresh graduate focused on Data, Machine Learning, and Web Development. 
          I enjoy transforming data into insights, building intelligent solutions
          and creating web applications that solve real-world problems.
          </p>

          <p className="mt-5 text-gray-400 text-lg leading-relaxed">
            Melalui proyek akademik dan praktik, saya berpengalaman dalam analisis data,
            segmentasi pelanggan, machine learning, visualisasi data, serta pengembangan web.
            Saya terus mengembangkan kemampuan teknis melalui penyelesaian masalah nyata.
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