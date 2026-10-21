import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const BASE_URL = import.meta.env.BASE_URL;

  const projects = [
    {
      contribution: "Penelitian dan implementasi model klasifikasi serta segmentasi MRI secara mandiri.",
      title: "Brain Tumor Classification",
      category: "Machine Learning / Skripsi",
      description:
        "Membandingkan klasifikasi tumor otak pada citra MRI menggunakan VGG16 dengan dan tanpa segmentasi ROI U-Net; akurasi pengujian 98% berbanding 87%.",
      technologies: [
        "Python",
        "TensorFlow",
        "VGG16",
        "U-Net",
        "OpenCV",
        "Scikit-learn",
      ],
      icon: "🧠",
      image: `${BASE_URL}projects/brain-tumor.png`,
      featured: true,

      githubPath:
        "myusrilap/Brain-Tumor-Classification-using-VGG16-with-and-without-U-Net-ROI-Segmentation",

      details: {
        overview:
          "Penelitian skripsi yang membandingkan model klasifikasi citra MRI VGG16 tanpa segmentasi dan model dengan segmentasi ROI U-Net sebelum klasifikasi.",

        problem:
          "Menguji apakah pemisahan area tumor dengan U-Net meningkatkan akurasi klasifikasi empat kelas MRI: glioma, meningioma, pituitari, dan tanpa tumor.",

        process: [
          "Melakukan preprocessing MRI: resize 224×224, CLAHE, normalisasi, dan augmentasi data latih.",
          "Membagi 7.200 citra MRI menjadi data latih, validasi, dan uji (70:15:15) secara stratified; 1.080 citra digunakan untuk pengujian.",
          "Melatih model klasifikasi dasar menggunakan VGG16.",
          "Melatih segmentasi U-Net ber-encoder VGG16 pada dataset terpisah dengan IoU 0,8224.",
          "Membandingkan klasifikasi citra asli dengan klasifikasi setelah masking ROI.",
          "Mengevaluasi akurasi, presisi, recall, F1-score, dan confusion matrix.",
        ],

        results: [
          {
            label: "Model Dasar",
            value: "98% akurasi uji tanpa ROI",
          },
          {
            label: "Model Eksperimen",
            value: "87% akurasi uji dengan ROI",
          },
          {
            label: "Kelas Klasifikasi",
            value: "Glioma, Meningioma, Pituitary, No Tumor",
          },
          {
            label: "Temuan Utama",
            value:
              "11-percentage-point higher test accuracy without ROI",
          },
        ],

        findings: [
          "VGG16 without ROI segmentation achieved better classification performance than the segmentation-based pipeline.",
          "Penggunaan ROI U-Net menghasilkan akurasi 87%, lebih rendah daripada baseline VGG16 sebesar 98%.",
          "Perbedaan karakteristik citra MRI pada dataset segmentasi dan klasifikasi menjadi dugaan utama penurunan performa U-Net; penghilangan konteks akibat masking ROI juga merupakan kemungkinan, bukan faktor yang telah dibuktikan secara terpisah.",
        ],
      },
    },

    {
      title: "Business Analisis Data — Dagangan",
      category: "Analisis Data / Proyek Tim",
      description:
        "Analisis transaksi dan kunjungan sales, segmentasi pelanggan RFM, serta optimasi rute kunjungan menggunakan SQL dan Google OR-Tools.",
      technologies: [
        "Python",
        "Pandas",
        "Scikit-learn",
        "SQL",
        "DBeaver",
        "Tableau",
        "OR-Tools",
      ],
      icon: "📊",
      image: `${BASE_URL}projects/dagangan.png`,
      featured: false,

      githubPath:
        "myusrilap/Business-Data-Analytics_Dagangan",

      details: {
        overview:
          "Proyek tim Bitlabs Academy berbasis studi kasus Dagangan yang menggabungkan preprocessing, analisis SQL, segmentasi pelanggan RFM, kunjungan sales, optimasi rute, dan visualisasi.",

        problem:
          "Meningkatkan efisiensi perencanaan kunjungan sales melalui analisis jadwal, segmentasi pelanggan, dan pengurangan total jarak perjalanan.",

        process: [
          "Membersihkan dan menggabungkan dataset transaksi, kunjungan, dan pelanggan (kontribusi pribadi).",
          "Melakukan segmentasi RFM dan K-Means menjadi empat kelompok pelanggan bersama tim.",
          "Menganalisis pola dan riwayat kunjungan sales menggunakan SQL (kontribusi pribadi).",
          "Mengidentifikasi prioritas pelanggan dan frekuensi kunjungan.",
          "Membandingkan hari dan jam kunjungan berdasarkan data historis.",
          "Mengoptimasi urutan kunjungan dengan TSP, Guided Local Search, dan Google OR-Tools (kontribusi pribadi).",
          "Menyusun query SQL untuk menjawab pertanyaan bisnis (kontribusi pribadi).",
          "Menyajikan hasil dalam dashboard Tableau sebagai bagian dari pekerjaan tim.",
        ],

        results: [
          {
            label: "Pelanggan Prioritas Tinggi",
            value: "2,660 customers",
          },
          {
            label: "Segmen Pelanggan Terbesar",
            value: "At-Risk Customers — 13,867 users",
          },
          {
            label: "Optimasi Rute",
            value: "Up to 25% route-distance reduction (simulation)",
          },
          {
            label: "Visualisasi",
            value: "Tableau Dashboard",
          },
        ],

        findings: [
          "Segmentasi pelanggan digunakan untuk menyusun prioritas kunjungan sales.",
          "Pola kunjungan historis menjadi dasar rekomendasi hari dan jadwal kunjungan sales.",
          "Dalam simulasi TSP menggunakan Google OR-Tools, total jarak rute hasil optimasi berkurang hingga 25% dibanding total jarak aktual yang ditempuh sales pada data pembanding. Ini bukan penghematan biaya yang sudah diverifikasi di lapangan.",
          "Rekomendasi utama mencakup penjadwalan kunjungan sales, prioritas pelanggan berdasarkan segmentasi, dan urutan kunjungan yang lebih efisien. Kontribusi pribadi saya adalah preprocessing, SQL, dan optimasi rute.",
        ],
      },
    },


    {
      contribution: "Pembersihan data, analisis statistik, ekstraksi insight dengan SQLite, Pembuatan Dashboard Menggunakan Tableau.",
      title: "Analisis Telemetri Kafein, Risiko Crash & Kecemasan",
      category: "Analisis Data / SQL, Python & Tableau",
      description:
        "Analisis 8.000 data telemetri konsumsi kafein untuk melihat pengaruh profil metabolisme CYP1A2, sumber kafein, dan durasi tidur terhadap energy crash serta skor kecemasan akut.",
      technologies: ["Python", "Pandas", "Seaborn", "Matplotlib", "SQL", "SQLite", "DBeaver", "Tableau"],
      icon: "☕",
      image: `${BASE_URL}projects/tableau_dashboard_preview.png`,
      featured: true,
      githubPath: "myusrilap/Analisis-Data-Dampak-Konsumsi-Kafein",
      details: {
        overview:
          "Proyek analisis data end-to-end atas 8.000 data telemetri konsumen: inspeksi dan EDA di Python (Google Colab), query agregasi di SQL (DBeaver/SQLite), dan dashboard eksekutif satu halaman di Tableau.",
        problem:
          "Mengidentifikasi faktor yang paling terkait dengan severe crash dan tachycardia (dosis, sumber kafein, durasi tidur), membandingkan profil metabolisme CYP1A2, serta mengukur hubungan rasa gelisah (jitters) dengan kecemasan akut.",
        process: [
          "Memverifikasi kualitas data: 0 missing value, 0 duplikat, dan rentang nilai ekstrem yang masuk akal secara logis.",
          "Melakukan EDA: distribusi, box plot, scatter plot (dosis vs. detak jantung), dan matriks korelasi dengan Seaborn dan Matplotlib.",
          "Memuat dataset bersih ke basis data relasional dan menulis query agregasi (GROUP BY, AVG, COUNT) berdasarkan sumber kafein, tipe metabolizer, dan tingkat risiko.",
          "Membandingkan waktu onset crash dan skor kecemasan antara slow dan fast metabolizer.",
          "Merancang dashboard Tableau satu halaman berisi kartu KPI, peringkat risiko sumber kafein, dan distribusi dampak fisiologis.",
        ],
        results: [
          { label: "Data Telemetri", value: "8.000 observasi" },
          { label: "Waktu Crash (Slow vs Fast Metabolizer)", value: "3,92 jam vs 7,16 jam" },
          { label: "Sumber Paling Berisiko", value: "Pre-Workout Supplement (keparahan crash ~8,31)" },
          { label: "Jitters vs Kecemasan Akut", value: "Korelasi r = 0,87" },
        ],
        findings: [
          "Slow metabolizer mengalami crash rata-rata dalam 3,92 jam dengan skor kecemasan akut 5,42, sedangkan fast metabolizer 7,16 jam dengan skor 2,55.",
          "Pre-Workout Supplement memiliki rata-rata dosis tertinggi (~336 mg), lonjakan detak jantung terbesar (~9,31 BPM), dan keparahan crash tertinggi (~8,31); Brewed Drip Coffee dan Matcha/Green Tea berada di bawah 4,6.",
          "Pengguna kategori Severe Crash & Tachycardia rata-rata tidur 5,66 jam malam sebelumnya, sedangkan kategori Sustained/Negligible Crash di atas 7,3 jam.",
          "Intensitas jitters dan skor kecemasan akut berkorelasi linier kuat (r = 0,87). Temuan ini bersifat observasional dan tidak membuktikan hubungan sebab-akibat.",
        ],
      },
    },
    {
    contribution: "Pembersihan data, analisis SQL (CTE, agregasi), uji A/B statistik.",
      title: "Analisis Data Reservasi Hotel",
      category: "Analisis Data / SQL & Statistik",
      description:
        "Analisis pembatalan, lead time, dan Average Daily Rate (ADR) pada City Hotel dan Resort Hotel dengan Python, SQL, uji A/B, dan Tableau.",
      technologies: ["Python", "Pandas", "SciPy", "Seaborn", "Matplotlib", "SQL"],
      icon: "🏨",
      image: `${BASE_URL}projects/reservasi_hotel.png`,
      featured: true,
      githubPath: "myusrilap/Analisis-Data-Reservasi-Hotel",
      details: {
        overview:
          "Proyek end-to-end atas dataset publik Hotel Booking Demand untuk mengevaluasi kinerja City Hotel dan Resort Hotel dari sisi pembatalan, lead time, dan ADR. Raw data tidak disertakan di repositori karena batasan ukuran file; dataset hasil pembersihan tersedia dan dapat direproduksi dengan script yang ada.",
        problem:
          "Menjawab tantangan operasional perhotelan: tingginya tingkat pembatalan, variasi lead time, dan optimasi ADR, agar rekomendasi dapat menopang stabilitas pendapatan dan efisiensi manajemen reservasi.",
        process: [
          "Membersihkan data, melakukan imputasi, serta mendeteksi dan menangani outlier dengan metode IQR.",
          "Melakukan EDA pada pola pembatalan, lead time, tren musiman, dan pemesanan last-minute.",
          "Menyusun query SQL (CTE dan agregasi) untuk mengekstrak metrik per jenis hotel.",
          "Menguji perbedaan ADR antar hotel dengan uji A/B (T-test, KS test, Levene test).",
          "Memodelkan proses bisnis dengan BPMN.",
        ],
        results: [
          { label: "Pembatalan Lead Time 91+ Hari", value: "Hingga ~51%" },
          { label: "Uji A/B ADR", value: "T-statistic 25,57; p < 0,05" },
          { label: "Puncak Pendapatan Resort Hotel", value: "Agustus" },
          { label: "Last-Minute (≤ 3 hari)", value: "City ~5.000 vs Resort ~4.500" },
        ],
        findings: [
          "City Hotel memiliki tingkat pembatalan lebih tinggi daripada Resort Hotel; rasio pembatalan naik seiring panjang lead time, dan reservasi 91+ hari memiliki kemungkinan batal tertinggi (~51%).",
          "Uji A/B menunjukkan perbedaan ADR yang signifikan antar kedua hotel. Pendapatan City Hotel relatif stabil sepanjang tahun, sedangkan Resort Hotel fluktuatif mengikuti musim dengan puncak di Agustus.",
          "Pemesanan last-minute (≤ 3 hari) lebih banyak terjadi di City Hotel (~5.000) dibanding Resort Hotel (~4.500).",
          "Rekomendasi: kebijakan deposit atau pembatalan lebih ketat untuk lead time > 90 hari, dynamic pricing musiman untuk Resort Hotel (ramai Juli–Agustus, promo Oktober–Januari), dan upselling saat check-in bagi tamu last-minute. Rekomendasi ini berbasis data historis dan belum diuji dampaknya di lapangan.",
        ],
      },
    },

    {
      contribution: "Pengembangan antarmuka dan fitur interaktif prototipe website.",
      title: "ECO Samarinda",
      category: "Pengembangan Web",
      description:
        "Prototipe website edukasi lingkungan Samarinda dengan halaman informasi, galeri, berita, dan fitur interaktif.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "Swiper",
        "GLightbox",
      ],
      icon: "🌱",
      image: `${BASE_URL}projects/eco-samarinda.png`,
      featured: false,

      githubPath:
        "myusrilap/ECO-Samarinda",

      details: {
        overview:
          "Prototipe website edukasi lingkungan Samarinda yang dibuat untuk mengimplementasikan antarmuka responsif, navigasi, informasi, serta interaksi pada berbagai halaman.",

        problem:
          "Menyajikan informasi lingkungan, berita, galeri, dan kanal pengaduan dalam antarmuka web yang mudah dinavigasi; fitur tetap merupakan prototipe pembelajaran.",

        process: [
          "Merancang struktur halaman dan navigasi website.",
          "Mengembangkan halaman utama dan informasi organisasi.",
          "Membuat halaman galeri dan berita.",
          "Mengembangkan halaman informasi lingkungan.",
          "Mengimplementasikan antarmuka pengaduan dan pendaftaran sebagai fitur prototipe.",
          "Menerapkan komponen frontend responsif dan interaktif.",
        ],

        results: [
          {
            label: "Jenis Proyek",
            value: "Pengembangan Web",
          },
          {
            label: "Teknologi Utama",
            value: "HTML, CSS, JavaScript, Bootstrap",
          },
          {
            label: "Fokus Utama",
            value: "Informasi Lingkungan",
          },
          {
            label: "Status Proyek",
            value: "Prototipe / Proyek Pembelajaran",
          },
        ],

        findings: [
          "Mengimplementasikan prototipe multihalaman responsif yang mencakup navigasi, berita, galeri, informasi lingkungan, dan interaksi antarmuka.",
          "Fitur antarmuka dapat diinteraksikan, tetapi website secara keseluruhan tetap merupakan prototipe pembelajaran, bukan layanan pemerintah atau organisasi resmi.",
        ],
      },
    },

      {
        contribution: "Seluruh implementasi frontend; backend dan sistem keseluruhan merupakan pekerjaan tim.",
        title: "Website SIPARUNG",
        category: "Pengembangan Web",
        description:
          "Antarmuka sistem peminjaman ruang internal BKPSDM Samarinda; saya mengerjakan seluruh bagian frontend dalam proyek kolaboratif.",
        technologies: [
          "PHP",
          "JavaScript",
          "HTML",
          "CSS",
          "MySQL",
        ],
        icon: "🌐",
        image: `${BASE_URL}projects/siparung.png`,
        featured: false,
      
        githubPath:
          "myusrilap/Website-SIPARUNG",
      
        details: {
          overview:
            "SIPARUNG merupakan sistem peminjaman ruang internal BKPSDM Samarinda. Saya menangani seluruh antarmuka frontend dalam proyek kolaboratif.",
      
          problem:
            "Kebutuhan sistem adalah memudahkan pegawai melihat, mengajukan, dan mengelola permohonan peminjaman ruang melalui alur antarmuka yang tertata.",
      
          process: [
            "Menganalisis kebutuhan antarmuka dan alur peminjaman ruang.",
            "Merancang dan membangun seluruh antarmuka frontend SIPARUNG.",
            "Mengimplementasikan halaman dan komponen interaktif sistem.",
            "Menyempurnakan tata letak dan navigasi proses peminjaman.",
            "Mengintegrasikan antarmuka dengan komponen sistem yang dikerjakan tim.",
          ],
      
          results: [
            {
              label: "Jenis Proyek",
              value: "Aplikasi Web Internal",
            },
            {
              label: "Organisasi",
              value: "BKPSDM Samarinda",
            },
            {
              label: "Kontribusi Utama",
              value: "Pengembangan Frontend",
            },
            {
              label: "Tujuan",
              value: "Internal Room Reservation",
            },
          ],
      
          findings: [
            "Mengembangkan seluruh komponen frontend alur peminjaman ruang, termasuk tampilan dashboard dan halaman peminjaman.",
            "Saya mengimplementasikan seluruh halaman frontend dengan Bootstrap/AdminLTE, sedangkan backend dan integrasi sistem merupakan cakupan tim.",
            "Implementasi berlangsung saat PKL di BKPSDM Samarinda. Tidak ada klaim peningkatan produktivitas atau pengurangan durasi peminjaman yang belum diukur.",
          ],
        },
      },

      {
        contribution: "Implementasi frontend pada proyek KKN; website merupakan hasil pengembangan, belum diklaim digunakan pihak kelurahan.",
        title: "Visit Lamaru",
        category: "Pengembangan Web / KKN",
        description:
          "Website informasi wisata Lamaru hasil pengembangan KKN; kontribusi saya berfokus pada frontend dan pengalaman pengguna.",
        technologies: [
          "HTML",
          "CSS",
          "JavaScript",
          "JSON",
        ],
        icon: "🏝️",
        image: `${BASE_URL}projects/visit-lamaru.png`,
        featured: false,
      
        githubPath:
          "myusrilap/visit-lamaru-fe",
      
        details: {
          overview:
            "Website Visit Lamaru adalah hasil pengembangan program KKN untuk menyajikan informasi wisata, acara, fasilitas, dan galeri Kelurahan Lamaru. Kontribusi saya berfokus pada frontend.",
      
          problem:
            "Menyatukan informasi wisata dan kegiatan lokal pada satu website yang mudah diakses dan responsif. Website merupakan produk pengembangan KKN, tanpa klaim penggunaan resmi oleh kelurahan.",
      
          process: [
            "Menganalisis konten informasi wisata dan kegiatan lokal.",
            "Merancang struktur halaman serta antarmuka website.",
            "Mengimplementasikan halaman dan komponen frontend.",
            "Mengembangkan halaman kegiatan, fasilitas, galeri, dan informasi wisata.",
            "Menggunakan data JSON untuk menampilkan konten website.",
            "Menyempurnakan tampilan responsif dan pengalaman navigasi.",
          ],
      
          results: [
            {
              label: "Jenis Proyek",
              value: "Aplikasi Web Fungsional",
            },
            {
              label: "Kontribusi Utama",
              value: "Pengembangan Frontend",
            },
            {
              label: "Konteks Proyek",
              value: "KKN",
            },
            {
              label: "Tujuan",
              value: "Informasi Kelurahan Lamaru",
            },
          ],
      
          findings: [
            "Mengimplementasikan halaman frontend informasi wisata, fasilitas, acara, dan galeri dalam proyek KKN.",
            "Website menyediakan halaman informasi wisata yang responsif dan dikembangkan bersama tim KKN.",
            "Hasil proyek merupakan website informasi wisata yang dikembangkan bersama tim KKN; belum terdapat data pemakaian resmi atau bukti dampak terhadap kunjungan wisata.",
          ],
        },
      },
    {
      contribution: "Analisis eksploratif, pemodelan K-Means, dan implementasi visualisasi Streamlit.",
      title: "Customer Segmentation",
      category: "Analisis Data",
      description:
        "Segmentasi pelanggan dengan K-Means menjadi empat klaster berdasarkan karakteristik belanja dan kategori produk, ditampilkan melalui Streamlit.",
      technologies: [
        "Python",
        "Pandas",
        "Scikit-learn",
        "K-Means",
        "Data Analysis",
      ],
      icon: "👥",
      image: `${BASE_URL}projects/customer-segmentation.png`,
      featured: false,

      githubPath:
        "myusrilap/Customer-Segmentation",

      details: {
        overview:
          "Segmentasi pelanggan dengan K-Means, normalisasi MinMaxScaler, visualisasi PCA, serta aplikasi Streamlit untuk menelusuri distribusi dan karakteristik empat klaster.",

        problem:
          "Mengelompokkan pola belanja pelanggan berdasarkan kelompok usia, gender, kategori pengeluaran, tingkat harga, dan kategori produk agar strategi pemasaran dapat lebih terarah.",

        process: [
          "Memuat dan memeriksa dataset pelanggan.",
          "Membersihkan serta menyiapkan dataset untuk analisis.",
          "Mengeksplorasi distribusi usia, gender, nilai belanja, dan kategori produk.",
          "Memilih fitur segmentasi serta melakukan transformasi dan normalisasi.",
          "Menormalisasi fitur dengan MinMaxScaler lalu menerapkan K-Means dengan k=4. Jumlah klaster dipilih menggunakan pendekatan Elbow Method, tetapi grafik/implementasi Elbow belum tercantum di repository.",
          "Mendeskripsikan karakteristik empat klaster berdasarkan pola belanja.",
          "Memvisualisasikan hasil klaster melalui PCA dan antarmuka Streamlit.",
        ],

        results: [
          {
            label: "Jenis Proyek",
            value: "Analisis Data",
          },
          {
            label: "Metode Utama",
            value: "K-Means (4 klaster)",
          },
          {
            label: "Tools Utama",
            value: "Python",
          },
          {
            label: "Luaran",
            value: "Empat kelompok pelanggan",
          },
        ],

        findings: [
          "K-Means menghasilkan empat klaster yang dapat digunakan untuk membandingkan kecenderungan pengeluaran dan preferensi kategori produk.",
          "Profil klaster pada aplikasi Streamlit: klaster 0 pembeli hemat produk kecantikan/pakaian; klaster 1 cenderung produk elektronik mahal; klaster 2 pembeli dengan minat lintas kategori; klaster 3 preferensi elektronik dan kecantikan. Deskripsi ini merupakan interpretasi yang tertulis di aplikasi, bukan dampak bisnis yang telah diukur.",
        ],
      },
    },
  ];

  const dataProjects = projects.filter(
    (project) => !project.category.startsWith("Pengembangan Web")
  );
  const webProjects = projects.filter(
    (project) => project.category.startsWith("Pengembangan Web")
  );

  const renderProjectGroup = (items, heading, subtitle, groupId) => (
    <div aria-labelledby={groupId} className="mt-16 first:mt-12">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-7">
        <div>
          <h3 id={groupId} className="text-2xl sm:text-3xl font-bold text-white">
            {heading}
          </h3>
          <p className="mt-2 text-gray-400 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </div>
        <span className="self-start text-xs font-medium text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1.5">
          {items.length} Proyek
        </span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        {items.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            onViewProject={setSelectedProject}
          />
        ))}
      </div>
    </div>
  );

  return (
    <>
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-blue-400 font-medium mb-3">Portofolio Proyek</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Pilihan<span className="text-blue-400"> proyek.</span>
            </h2>
            <p className="mt-5 text-gray-400 max-w-2xl text-lg leading-relaxed">
              Kumpulan proyek analisis data, machine learning, business intelligence,
              serta pengembangan web dengan kontribusi dan hasil yang terukur.
            </p>
          </motion.div>

          {renderProjectGroup(
            dataProjects,
            "Analisis Data, BI & Machine Learning",
            "Analisis bisnis, SQL, segmentasi pelanggan, statistik, dan penelitian machine learning.",
            "data-projects"
          )}

          {renderProjectGroup(
            webProjects,
            "Pengembangan Web",
            "Implementasi antarmuka dan website responsif untuk kebutuhan organisasi serta masyarakat.",
            "web-projects"
          )}
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};

export default Projects;
