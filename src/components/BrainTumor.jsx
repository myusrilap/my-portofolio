import { motion } from "framer-motion";
import { ArrowLeft, BrainCircuit } from "lucide-react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const BrainTumor = () => {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
        >
          <ArrowLeft size={16} />
          Kembali ke Proyek
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10"
        >
          <div className="flex items-center gap-3 text-blue-400">
            <BrainCircuit size={24} />

            <span className="text-sm font-medium uppercase tracking-wider">
              Machine Learning / Penelitian
            </span>
          </div>

          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Klasifikasi Tumor Otak
            <span className="text-blue-400"> dengan MRI</span>
          </h1>

          <p className="mt-6 text-xl text-gray-400 max-w-3xl leading-relaxed">
            Perbandingan klasifikasi tumor otak dari citra MRI menggunakan VGG16
            dengan dan tanpa segmentasi ROI berbasis U-Net.
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mt-7">
            {[
              "Python",
              "TensorFlow",
              "VGG16",
              "U-Net",
              "OpenCV",
              "MRI",
            ].map((technology) => (
              <span
                key={technology}
                className="px-3 py-1.5 rounded-lg text-sm text-gray-300 bg-white/5 border border-white/10"
              >
                {technology}
              </span>
            ))}
          </div>

          {/* GitHub */}
          <div className="mt-8">
            <a
              href="https://github.com/myusrilap/Brain-Tumor-Classification-using-VGG16-with-and-without-U-Net-ROI-Segmentation"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-gray-950 font-medium hover:bg-gray-200 transition"
            >
              <FaGithub size={18} />
              Lihat GitHub
            </a>
          </div>
        </motion.div>

        {/* Overview */}
        <ProjectSection title="Gambaran Proyek">
          <p>
            Penelitian ini mengevaluasi klasifikasi tumor otak dari citra MRI menggunakan VGG16 pralatih. Dua pendekatan dibandingkan: klasifikasi langsung dan klasifikasi setelah segmentasi ROI menggunakan U-Net.
          </p>

          <p className="mt-4">
            Tujuannya adalah menguji apakah pemisahan area tumor sebelum klasifikasi meningkatkan akurasi model.
          </p>
        </ProjectSection>

        {/* Problem */}
        <ProjectSection title="Permasalahan">
          <p>
            Citra MRI mengandung informasi untuk membedakan kategori tumor. Area sekitar tumor juga dapat menyediakan konteks yang memengaruhi prediksi model.
          </p>

          <p className="mt-4">
            Karena itu, penelitian membandingkan hasil klasifikasi menggunakan citra asli dan citra hasil segmentasi ROI.
          </p>
        </ProjectSection>

        {/* Dataset */}
        <ProjectSection title="Dataset">
          <p>
            Eksperimen klasifikasi menggunakan dataset MRI dengan empat kelas:
          </p>

          <ul className="mt-5 space-y-2 text-gray-400">
            <li>• Glioma</li>
            <li>• Meningioma</li>
            <li>• Pituitary</li>
            <li>• No Tumor</li>
          </ul>

          <p className="mt-5">
            Tahap segmentasi menggunakan dataset MRI terpisah untuk menghasilkan mask ROI tumor.
          </p>
        </ProjectSection>

        {/* Methodology */}
        <ProjectSection title="Metodologi">

          <h3 className="text-xl font-semibold text-white">
            Prapemrosesan
          </h3>

          <div className="mt-5 grid sm:grid-cols-2 gap-3">
            {[
              "Resize",
              "CLAHE",
              "Normalisasi",
              "Augmentasi Data",
              "Pembagian Data Stratified",
              "Segmentasi ROI",
            ].map((step, index) => (
              <div
                key={step}
                className="p-4 rounded-xl bg-white/[0.03] border border-white/10"
              >
                <span className="text-blue-400 text-sm">
                  0{index + 1}
                </span>

                <p className="mt-1 text-white font-medium">
                  {step}
                </p>
              </div>
            ))}
          </div>

          <h3 className="mt-10 text-xl font-semibold text-white">
            Model Klasifikasi
          </h3>

          <p className="mt-4">
            Model klasifikasi menggunakan VGG16 pralatih ImageNet, kemudian lapisan fully connected untuk empat kelas.
          </p>

          <h3 className="mt-10 text-xl font-semibold text-white">
            Model Segmentasi
          </h3>

          <p className="mt-4">
            U-Net dengan encoder VGG16 menghasilkan mask ROI tumor sebelum klasifikasi.
          </p>

        </ProjectSection>

        {/* Comparison */}
        <ProjectSection title="Perbandingan Eksperimen">

          <div className="grid md:grid-cols-2 gap-5">

            <div className="p-6 rounded-2xl border border-blue-500/20 bg-blue-500/[0.04]">
              <p className="text-blue-400 text-sm font-medium">
                MODEL DASAR
              </p>

              <h3 className="mt-2 text-xl font-semibold text-white">
                VGG16
              </h3>

              <p className="mt-3 text-gray-400">
                Klasifikasi dilakukan langsung pada citra MRI hasil prapemrosesan tanpa segmentasi ROI.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.03]">
              <p className="text-blue-400 text-sm font-medium">
                EKSPERIMEN
              </p>

              <h3 className="mt-2 text-xl font-semibold text-white">
                U-Net + VGG16
              </h3>

              <p className="mt-3 text-gray-400">
                U-Net digunakan untuk memisahkan ROI tumor sebelum citra diklasifikasikan menggunakan VGG16.
              </p>
            </div>

          </div>

        </ProjectSection>

        {/* Results */}
        <ProjectSection title="Hasil">

          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <thead className="bg-white/5">
                <tr>
                  <th className="text-left p-4 text-gray-300">
                    Kelas
                  </th>

                  <th className="text-center p-4 text-gray-300">
                    Baseline F1
                  </th>

                  <th className="text-center p-4 text-gray-300">
                    ROI F1
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-white/10">

                <ResultRow
                  className="Glioma"
                  baseline="0.97"
                  roi="0.83"
                />

                <ResultRow
                  className="Meningioma"
                  baseline="0.97"
                  roi="0.89"
                />

                <ResultRow
                  className="Pituitary"
                  baseline="0.99"
                  roi="0.90"
                />

                <ResultRow
                  className="No Tumor"
                  baseline="0.98"
                  roi="0.86"
                />

              </tbody>
            </table>
          </div>

        </ProjectSection>

        {/* Key Findings */}
        <ProjectSection title="Temuan Utama">

          <div className="space-y-4">

            <Finding>
              VGG16 tanpa ROI menghasilkan performa klasifikasi lebih tinggi pada keempat kelas pengujian.
            </Finding>

            <Finding>
              Segmentasi ROI tidak meningkatkan performa pada eksperimen ini.
            </Finding>

            <Finding>
              Perbedaan karakteristik citra MRI dan kecocokannya untuk segmentasi diduga memengaruhi performa pendekatan ROI.
            </Finding>

          </div>

        </ProjectSection>

        {/* GitHub */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <a
            href="https://github.com/myusrilap/Brain-Tumor-Classification-using-VGG16-with-and-without-U-Net-ROI-Segmentation"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition"
          >
            <FaGithub size={18} />
            Lihat kode di GitHub
          </a>
        </div>

      </div>
    </main>
  );
};


/* =========================
   Reusable Section
========================= */

const ProjectSection = ({ title, children }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
      className="mt-20"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-white">
        {title}
      </h2>

      <div className="mt-6 text-gray-400 leading-relaxed">
        {children}
      </div>
    </motion.section>
  );
};


/* =========================
   Result Row
========================= */

const ResultRow = ({
  className,
  baseline,
  roi,
}) => {
  return (
    <tr>
      <td className="p-4 text-white">
        {className}
      </td>

      <td className="p-4 text-center text-blue-400 font-medium">
        {baseline}
      </td>

      <td className="p-4 text-center text-gray-400">
        {roi}
      </td>
    </tr>
  );
};


/* =========================
   Finding
========================= */

const Finding = ({ children }) => {
  return (
    <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10">
      <p>{children}</p>
    </div>
  );
};

export default BrainTumor;