import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

const Certifications = () => {
  const [current, setCurrent] = useState(0);

  const certifications = [
    {
      title: "Data Analytic for Business",
      issuer: "Bitlabs Academy",
      date: "31 December 2024",
      image: "/certifications/bitlabs-data-analytic.jpg",
      description:
        "Certificate of Completion for successfully completing MSIB Kampus Merdeka Batch 7 – Data Analytic for Business at Bitlabs Academy.",
      details:
        "Intensive learning program focused on building work readiness in data technology. Final score: 85.31.",
    },

    {
      title: "Database Programming with SQL",
      issuer: "Oracle Academy",
      date: "5 December 2023",
      image: "/certifications/oracle-sql.jpg",
      description:
        "Award of Final Exam Completion for satisfactory completion of the Database Programming with SQL course final exam.",
      details:
        "Oracle Academy course focused on database programming and SQL.",
    },

    {
      title: "Database Design",
      issuer: "Oracle Academy",
      date: "24 November 2023",
      image: "/certifications/oracle-database-design.jpg",
      description:
        "Award of Final Exam Completion for satisfactory completion of the Database Design course final exam.",
      details:
        "Oracle Academy course focused on database design concepts and relational database structure.",
    },

    {
      title: "MUEPT",
      issuer: "Balai Bahasa Universitas Mulawarman",
      date: "11 June 2026",
      image: "/certifications/muept.jpg",
      description:
        "English proficiency test result issued by UPT. Balai Bahasa Universitas Mulawarman.",
      details:
        "Listening: 60 • Structure & Written Expression: 64 • Reading: 59 • Total Score: 610.",
      credential:
        "http://bahasa.unmul.ac.id/f_home/cetakcertificatefront/2606110139",
    },
  ];

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === certifications.length - 1 ? 0 : prev + 1
    );
  };

  const previousSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? certifications.length - 1 : prev - 1
    );
  };

  const certification = certifications[current];

  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-400 font-medium mb-3">
            Certifications
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Certifications &
            <span className="text-blue-400"> Training.</span>
          </h2>

          <p className="mt-5 text-gray-400 max-w-2xl text-lg leading-relaxed">
            A selection of certifications, courses, and academic
            credentials that support my technical and professional skills.
          </p>
        </motion.div>

        {/* Slider */}
        <div className="mt-12">

          <div className="grid lg:grid-cols-[1.35fr_0.65fr] gap-10 items-center">

            {/* Certificate Image */}
            <div className="relative">

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-3">

                <AnimatePresence mode="wait">
                  <motion.img
                    key={certification.image}
                    src={certification.image}
                    alt={certification.title}
                    initial={{
                      opacity: 0,
                      x: 30,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: -30,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                    className="w-full max-h-[520px] object-contain rounded-xl bg-gray-900"
                  />
                </AnimatePresence>

              </div>

              {/* Counter */}
              <div className="absolute bottom-6 left-6 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md text-xs text-gray-300">
                {String(current + 1).padStart(2, "0")} /{" "}
                {String(certifications.length).padStart(2, "0")}
              </div>

            </div>

            {/* Information */}
            <AnimatePresence mode="wait">
              <motion.div
                key={certification.title}
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -20,
                }}
                transition={{
                  duration: 0.35,
                }}
              >

                <p className="text-sm text-blue-400 font-medium">
                  {certification.issuer}
                </p>

                <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-white">
                  {certification.title}
                </h3>

                <p className="mt-3 text-sm text-gray-500">
                  {certification.date}
                </p>

                <div className="mt-6 h-px bg-white/10" />

                <p className="mt-6 text-gray-400 leading-relaxed">
                  {certification.description}
                </p>

                {/* Details */}
                <div className="mt-6 p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    Details
                  </p>

                  <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                    {certification.details}
                  </p>
                </div>

                {/* Credential */}
                {certification.credential && (
                  <a
                    href={certification.credential}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 mt-6 px-4 py-2.5 rounded-xl bg-white text-gray-950 text-sm font-medium hover:bg-gray-200 transition"
                  >
                    Verify Credential
                    <ExternalLink size={16} />
                  </a>
                )}

              </motion.div>
            </AnimatePresence>

          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">

            {/* Previous */}
            <button
              onClick={previousSlide}
              aria-label="Previous certification"
              className="w-11 h-11 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white transition"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {certifications.map((item, index) => (
                <button
                  key={item.title}
                  onClick={() => setCurrent(index)}
                  aria-label={`View ${item.title}`}
                  className={`h-2 rounded-full transition-all ${
                    current === index
                      ? "w-7 bg-blue-400"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={nextSlide}
              aria-label="Next certification"
              className="w-11 h-11 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white transition"
            >
              <ChevronRight size={20} />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Certifications;