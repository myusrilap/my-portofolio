import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      company: "Universitas Mulawarman",
      role: "Head of Laboratory Assistant",
      type: "Part-time",
      period: "Aug 2024 — Jun 2025",
      location: "Samarinda, East Kalimantan",
      description:
        "Led and coordinated the Information Systems laboratory assistant team to support the delivery of practical courses and maintain efficient laboratory operations.",
      highlights: [
        "Managed assistant schedules and coordinated laboratory activities.",
        "Facilitated communication between laboratory assistants and lecturers.",
        "Mentored fellow laboratory assistants and helped resolve operational and technical issues.",
        "Contributed to improving team coordination and laboratory workflows.",
      ],
      skills: [
        "Team Leadership",
        "Problem Solving",
        "Communication",
        "Team Coordination",
      ],
    },

    {
      company: "Universitas Mulawarman",
      role: "Laboratory Assistant",
      type: "Contract",
      period: "Aug 2023 — Jun 2025",
      location: "On-site",
      description:
        "Supported practical laboratory sessions across multiple Information Systems courses, providing students with hands-on technical guidance and troubleshooting.",
      highlights: [
        "Assisted practical courses including Basic Programming, Operating Systems, Computer Network Management Design, and Data Analytics & Visualization.",
        "Guided students in Python programming, Linux and Windows administration, and computer networking.",
        "Supported exploratory data analysis and data visualization using Tableau.",
        "Prepared laboratory materials, evaluated assignments, and provided technical feedback.",
      ],
      skills: [
        "Python",
        "Tableau",
        "Data Analytics",
        "Data Visualization",
        "Computer Networking",
      ],
    },

    {
      company: "Badan Kepegawaian dan Pengembangan Sumber Daya Manusia Kota Samarinda",
      role: "Staff Intern",
      type: "Apprenticeship",
      period: "Feb 2025 — Apr 2025",
      location: "Samarinda, East Kalimantan · On-site",
      description:
        "Supported administrative and data-related activities while contributing to the development and improvement of SIPARUNG, a web-based room reservation system.",
      highlights: [
        "Performed data entry and data management using Microsoft Excel.",
        "Prepared and organized official documents for internal operations.",
        "Assisted front-end development for the SIPARUNG web application.",
        "Contributed to improving the user interface and overall usability.",
      ],
      skills: [
        "Microsoft Excel",
        "Data Management",
        "Web Development",
        "Front-end Development",
      ],
    },

    {
      company: "Bitlabs Academy",
      role: "Data Analytic for Business",
      type: "Part-time · Independent Study",
      period: "Sep 2024 — Dec 2024",
      location: "Remote",
      description:
        "Completed an independent study program focused on Data Analytics for Business, combining technical data skills with business-oriented analytical problem solving.",
      highlights: [
        "Worked with Excel, Tableau, Python, and SQL for data analysis.",
        "Analyzed datasets and created data visualizations.",
        "Derived actionable insights from business data.",
        "Developed project management skills for planning and executing analytics projects.",
      ],
      skills: [
        "Microsoft Excel",
        "SQL",
        "Python",
        "Tableau",
        "Data Analysis",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-400 font-medium mb-3">
            Experience
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Where I've
            <span className="text-blue-400"> worked.</span>
          </h2>

          <p className="mt-5 text-gray-400 max-w-2xl text-lg leading-relaxed">
            Experience across laboratory operations, data analytics,
            leadership, and web development.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-14">

          {/* Timeline Line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10 hidden sm:block" />

          <div className="space-y-10">

            {experiences.map((experience, index) => (
              <motion.article
                key={`${experience.company}-${experience.role}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="relative sm:pl-10"
              >

                {/* Timeline Dot */}
                <div className="hidden sm:block absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-blue-400 bg-gray-950" />

                {/* Card */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7 hover:border-white/20 transition">

                  {/* Top */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">

                    <div>
                      <p className="text-sm text-blue-400 font-medium">
                        {experience.company}
                      </p>

                      <h3 className="mt-2 text-xl sm:text-2xl font-semibold text-white">
                        {experience.role}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        {experience.type}
                      </p>
                    </div>

                    <div className="lg:text-right">
                      <p className="text-sm text-gray-300">
                        {experience.period}
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        {experience.location}
                      </p>
                    </div>

                  </div>

                  {/* Description */}
                  <p className="mt-5 text-gray-400 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-6 space-y-3">
                    {experience.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex gap-3"
                      >
                        <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-blue-400" />

                        <p className="text-sm text-gray-400 leading-relaxed">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {experience.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md text-xs text-gray-300 bg-white/5 border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.article>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;