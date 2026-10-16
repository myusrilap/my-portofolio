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
      contribution: "Pembersihan data, analisis statistik, ekstraksi insight dengan SQLite.",
      title: "Sleep Health & Lifestyle Analytics",
      category: "Analisis Data / SQL",
      description: "Menganalisis 374 observasi untuk mengidentifikasi hubungan antara stres, durasi tidur, kualitas tidur, dan pekerjaan.",
      technologies: ["Python", "Pandas", "SQL", "SQLite", "Statistik"],
      icon: "🌙",
      featured: false,
      githubPath: "myusrilap/Sleep-Health-Lifestyle-Analytics",
      details: {
        overview: "Analisis 374 observasi gaya hidup dan tidur menggunakan Python untuk pembersihan data, SQLite untuk agregasi, serta korelasi untuk mengidentifikasi pola kualitas tidur.",
        problem: "Mengukur hubungan stres, durasi tidur, aktivitas fisik, dan pekerjaan dengan kualitas tidur untuk menemukan faktor pembeda utama pada 374 observasi.",
        process: [
          "Memvalidasi dan membersihkan 374 observasi menggunakan Python.",
          "Menyiapkan pengelompokan pekerjaan, kategori gangguan tidur, stres, dan durasi tidur.",
          "Memakai agregasi, CTE, dan window function SQL untuk membandingkan pola tidur antarkelompok.",
          "Mengukur korelasi Spearman dan menjelaskan selisih rata-rata antarkelompok.",
          "Menyusun tabel hasil analisis sebagai sumber visualisasi."
        ],
        results: [
          { label: "Observasi", value: "374" },
          { label: "Rata-rata Durasi Tidur", value: "7.13 hours" },
          { label: "Stres vs Kualitas Tidur", value: "Spearman −0.908" },
          { label: "Stres Tinggi vs Rendah", value: "3.05-point difference in average sleep quality" }
        ],
        findings: [
          "Kelompok stres tinggi memiliki rata-rata kualitas tidur 5,92 dibanding 8,97 pada kelompok stres rendah, selisih 3,05 poin.",
          "Durasi tidur berkorelasi positif kuat dengan kualitas tidur (Spearman +0,887), sedangkan stres berkorelasi negatif kuat (−0,908).",
          "Among 374 observations, sleep duration and quality were strongly associated (Spearman +0.887); these observational findings do not establish causality."
        ]
      }
    },
    {
      contribution: "Pembersihan data, analisis SQL, perbandingan kelompok jabatan, dan pengujian statistik.",
      title: "GenderBridge — Workforce Equality Analytics",
      category: "Analisis Data / SDM",
      description: "Analisis 5.000 data karyawan simulasi untuk membandingkan representasi gender, gaji setara jabatan, promosi, dan pelatihan kepemimpinan.",
      technologies: ["Python", "Pandas", "SQL", "SQLite", "Statistik"],
      icon: "⚖️",
      featured: false,
      githubPath: "myusrilap/GenderBridge-Workforce-Equality-Analytics",
      details: {
        overview: "Studi kasus SDM fiktif dengan 5.000 catatan untuk membandingkan representasi gender, gaji, promosi, pelatihan, dan kesempatan pengembangan karier.",
        problem: "Mengidentifikasi pola perbedaan gender dengan memperhitungkan variasi perusahaan, departemen, dan jenjang jabatan agar kesimpulan tidak bergantung pada rata-rata agregat.",
        process: [
          "Membersihkan 5.000 data karyawan simulasi dan menstandarkan label gender serta jabatan.",
          "Memvalidasi nilai gaji sebelum menghitung indikator kompensasi.",
          "Membandingkan promosi, pelatihan, departemen, dan jenjang jabatan melalui SQL.",
          "Membandingkan gaji dalam kelompok perusahaan–departemen–level jabatan yang sebanding.",
          "Menggunakan uji chi-square untuk memeriksa signifikansi selisih promosi dan pelatihan."
        ],
        results: [
          { label: "Data Karyawan", value: "5,000" },
          { label: "Representasi Perempuan", value: "40.72%" },
          { label: "Pelatihan Kepemimpinan", value: "28.44% female vs 30.40% male" },
          { label: "Tingkat Promosi", value: "20.38% female vs 20.99% male" }
        ],
        findings: [
          "Partisipasi pelatihan perempuan 28,44% dan laki-laki 30,40% (selisih 1,96 poin persentase), lebih besar daripada selisih promosi 0,61 poin.",
          "Arah selisih berubah menurut departemen dan level jabatan; angka agregat tidak mewakili seluruh kelompok.",
          "Uji chi-square promosi (p≈0,631) dan pelatihan (p≈0,144) tidak signifikan pada taraf 5%. Analisis ini merupakan studi kasus fiktif, bukan audit perusahaan nyata."
        ]
      }
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