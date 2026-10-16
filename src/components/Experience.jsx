import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      company: "Universitas Mulawarman",
      role: "Koordinator Utama Asisten Laboratorium",
      type: "Paruh waktu",
      period: "Agu 2024 — Jun 2025",
      location: "Samarinda, Kalimantan Timur",
      description:
        "Memimpin dan mengoordinasikan tim asisten laboratorium Sistem Informasi untuk menunjang praktikum dan operasional laboratorium.",
      highlights: [
        "Menyusun jadwal asisten dan mengoordinasikan kegiatan laboratorium.",
        "Menjadi penghubung antara asisten laboratorium dan dosen.",
        "Mendampingi asisten serta membantu menyelesaikan kendala operasional dan teknis.",
        "Meningkatkan koordinasi tim dan keteraturan alur kerja laboratorium.",
      ],
      skills: [
        "Kepemimpinan Tim",
        "Pemecahan Masalah",
        "Komunikasi",
        "Koordinasi Tim",
      ],
    },

    {
      company: "Universitas Mulawarman",
      role: "Asisten Laboratorium",
      type: "Kontrak",
      period: "Agu 2023 — Jun 2025",
      location: "Luring",
      description:
        "Mendukung pelaksanaan praktikum Sistem Informasi, membimbing mahasiswa, dan membantu penanganan kendala teknis.",
      highlights: [
        "Mendampingi praktikum Pemrograman Dasar, Sistem Operasi, Perancangan Manajemen Jaringan Komputer, serta Analisis dan Visualisasi Data.",
        "Membimbing mahasiswa menggunakan Python, administrasi Linux/Windows, dan jaringan komputer.",
        "Mendampingi analisis eksploratif dan visualisasi data menggunakan Tableau.",
        "Menyiapkan bahan praktikum, mengevaluasi tugas, dan memberikan umpan balik teknis.",
      ],
      skills: [
        "Python",
        "Tableau",
        "Analisis Data",
        "Visualisasi Data",
        "Jaringan Komputer",
      ],
    },

    {
      company: "Badan Kepegawaian dan Pengembangan Sumber Daya Manusia Kota Samarinda",
      role: "Staf Magang",
      type: "Magang",
      period: "Feb 2025 — Apr 2025",
      location: "Samarinda, Kalimantan Timur · Luring",
      description:
        "Mendukung pengelolaan data dan administrasi serta mengembangkan antarmuka frontend SIPARUNG, sistem peminjaman ruang berbasis web.",
      highlights: [
        "Melakukan entri dan pengelolaan data menggunakan Microsoft Excel.",
        "Menyiapkan dan mengarsipkan dokumen untuk kegiatan internal.",
        "Mengimplementasikan seluruh bagian frontend aplikasi SIPARUNG.",
        "Mengembangkan tampilan dan navigasi agar alur peminjaman lebih mudah digunakan.",
      ],
      skills: [
        "Microsoft Excel",
        "Pengelolaan Data",
        "Pengembangan Web",
        "Pengembangan Frontend",
      ],
    },

    {
      company: "Bitlabs Academy",
      role: "Analisis Data for Business",
      type: "Studi Independen",
      period: "Sep 2024 — Des 2024",
      location: "Daring",
      description:
        "Menyelesaikan program Studi Independen bidang analisis data untuk bisnis yang menggabungkan keterampilan teknis dan pemecahan masalah bisnis.",
      highlights: [
        "Menggunakan Excel, Tableau, Python, dan SQL dalam analisis data.",
        "Menganalisis dataset dan membuat visualisasi data.",
        "Menghasilkan insight dan rekomendasi berbasis data bisnis.",
        "Menerapkan perencanaan kerja tim dan pengelolaan proyek analitik.",
      ],
      skills: [
        "Microsoft Excel",
        "SQL",
        "Python",
        "Tableau",
        "Analisis Data",
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
            Pengalaman
            <span className="text-blue-400"> profesional.</span>
          </h2>

          <p className="mt-5 text-gray-400 max-w-2xl text-lg leading-relaxed">
            Pengalaman dalam operasional laboratorium, analisis data,
            kepemimpinan tim, serta pengembangan web.
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