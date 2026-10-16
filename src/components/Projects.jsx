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
          "An undergraduate thesis project investigating brain tumor classification from MRI images using VGG16. The study compares a baseline VGG16 classifier with a pipeline that applies U-Net-based ROI segmentation before classification.",

        problem:
          "The research evaluates whether isolating the tumor region from MRI images can improve classification performance across Glioma, Meningioma, Pituitary, and No Tumor classes.",

        process: [
          "Preprocessed MRI images with resizing to 224×224, CLAHE enhancement, normalization, and training augmentation.",
          "Used a stratified 70/15/15 split of 7,200 classification images across four balanced classes, with 1,080 test images.",
          "Development of a baseline VGG16 classification model.",
          "Trained VGG16-encoder U-Net on a separate segmentation dataset; the segmentation model reached IoU 0.8224.",
          "Classification using MRI images with and without ROI segmentation.",
          "Evaluation using accuracy, precision, recall, F1-score, and confusion matrix.",
        ],

        results: [
          {
            label: "Baseline",
            value: "98% test accuracy (without ROI)",
          },
          {
            label: "Experimental Model",
            value: "87% test accuracy (with ROI)",
          },
          {
            label: "Classification Classes",
            value: "Glioma, Meningioma, Pituitary, No Tumor",
          },
          {
            label: "Main Finding",
            value:
              "11-percentage-point higher test accuracy without ROI",
          },
        ],

        findings: [
          "VGG16 without ROI segmentation achieved better classification performance than the segmentation-based pipeline.",
          "Adding U-Net ROI masking reduced test accuracy from 98% to 87%; segmentation did not benefit this classification setup.",
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
          "Academic Project Based Learning project focused on business data analysis using the Dagangan case study. The project combines customer segmentation, sales visit analysis, route optimization, SQL analysis, and Tableau visualization.",

        problem:
          "Meningkatkan efisiensi perencanaan kunjungan sales melalui analisis jadwal, segmentasi pelanggan, dan pengurangan total jarak perjalanan.",

        process: [
          "Clean and prepare business datasets.",
          "Segment customers into four groups using RFM features and K-Means clustering.",
          "Analyze sales representative visit patterns.",
          "Identify customer visit priorities and visit frequency.",
          "Analyze historical visit days and hours.",
          "Optimize sales routes using TSP and Guided Local Search with Google OR-Tools.",
          "Perform business analysis using SQL.",
          "Visualize findings using Tableau.",
        ],

        results: [
          {
            label: "High-Priority Customers",
            value: "2,660 customers",
          },
          {
            label: "Largest Customer Segment",
            value: "At-Risk Customers — 13,867 users",
          },
          {
            label: "Route Optimization",
            value: "Up to 25% route-distance reduction (simulation)",
          },
          {
            label: "Visualization",
            value: "Tableau Dashboard",
          },
        ],

        findings: [
          "Customer segmentation was used to prioritize sales visits.",
          "Historical visit patterns can support sales scheduling decisions.",
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
        overview: "End-to-end analysis of the Sleep Health and Lifestyle dataset, from Python preprocessing to SQL-based insights and visualization-ready data.",
        problem: "Explore how stress levels, sleeping duration, occupation, and lifestyle characteristics relate to sleep quality in a dataset of 374 observations.",
        process: [
          "Validated and cleaned 374 observations with Python, including categorical normalization.",
          "Prepared indicators for occupation, sleep disorder, stress levels, and sleep duration.",
          "Used SQL aggregations, CTEs, and window functions to compare sleep patterns across groups.",
          "Analyzed Spearman correlations and interpreted group-level differences.",
          "Prepared analytical outputs for Tableau visualization."
        ],
        results: [
          { label: "Observations", value: "374" },
          { label: "Average Sleep Duration", value: "7.13 hours" },
          { label: "Stress vs Sleep Quality", value: "Spearman −0.908" },
          { label: "High vs Low Stress", value: "3.05-point difference in average sleep quality" }
        ],
        findings: [
          "The high-stress group recorded a 5.92 average sleep-quality score, compared with 8.97 in the low-stress group.",
          "Sleep duration was positively associated with sleep quality (Spearman +0.887).",
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
        overview: "A fictional workforce equality case study evaluating compensation, representation, and career opportunities across companies, departments, and job levels.",
        problem: "Identify where differences in representation, salary, promotion, and leadership training appear across gender groups and job categories.",
        process: [
          "Prepared 5,000 workforce records using Python, standardizing gender and job-level labels.",
          "Validated salary fields before computing pay indicators.",
          "Used SQL to compare promotions, training rates, departments, and comparable job levels.",
          "Compared salary within company, department, and job-level groups.",
          "Evaluated aggregated promotion and training differences with chi-square tests."
        ],
        results: [
          { label: "Workforce Records", value: "5,000" },
          { label: "Female Representation", value: "40.72%" },
          { label: "Leadership Training", value: "28.44% female vs 30.40% male" },
          { label: "Promotion Rate", value: "20.38% female vs 20.99% male" }
        ],
        findings: [
          "Women had a 28.44% leadership-training participation rate versus 30.40% for men, a descriptive gap of 1.96 percentage points; promotion differed by 0.61 points.",
          "Differences varied across departments and job levels rather than following a uniform pattern.",
          "Overall gender gaps in promotion (chi-square p≈0.631) and training (p≈0.144) were not significant at α=0.05. This is a fictional case study, not an audit of real employers."
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
          "ECO Samarinda is a fictional environmental website prototype developed as a web programming project.",

        problem:
          "The project focuses on presenting environmental information in an accessible website while practicing interface design, navigation, responsive development, and frontend implementation.",

        process: [
          "Design the website structure and navigation.",
          "Develop the landing page and organizational information.",
          "Create gallery and news pages.",
          "Develop environmental information pages.",
          "Create prototype environmental complaint and registration features.",
          "Implement responsive interface components.",
        ],

        results: [
          {
            label: "Project Type",
            value: "Web Development",
          },
          {
            label: "Main Technologies",
            value: "HTML, CSS, JavaScript, Bootstrap",
          },
          {
            label: "Main Focus",
            value: "Environmental Information",
          },
          {
            label: "Project Status",
            value: "Prototype / Educational Project",
          },
        ],

        findings: [
          "Implemented a multi-page responsive informational prototype with navigation, news, galleries, environmental resources, and UI interactions.",
          "Fitur antarmuka dapat diinteraksikan, tetapi website secara keseluruhan tetap merupakan prototipe pembelajaran, bukan layanan pemerintah atau organisasi resmi.",
        ],
      },
    },

      {
        contribution: "Seluruh implementasi frontend; backend dan sistem keseluruhan merupakan pekerjaan tim.",
        title: "Website SIPARUNG",
        category: "Web Development",
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
            "SIPARUNG is a web-based room reservation system developed to support the internal operational needs of BKPSDM Samarinda. The system is intended to make the process of borrowing and reserving rooms for employees more organized and accessible.",
      
          problem:
            "The project addresses the need for a more structured way for employees to request and manage room reservations, reducing reliance on manual coordination for internal room usage.",
      
          process: [
            "Analyze the interface and user flow requirements for the room reservation process.",
            "Design and develop the frontend interface of the SIPARUNG website.",
            "Implement website pages and interactive interface components.",
            "Improve the layout and usability to make the reservation process easier to understand.",
            "Integrate the frontend with the existing application components.",
          ],
      
          results: [
            {
              label: "Project Type",
              value: "Internal Web Application",
            },
            {
              label: "Organization",
              value: "BKPSDM Samarinda",
            },
            {
              label: "Main Contribution",
              value: "Frontend Development",
            },
            {
              label: "Purpose",
              value: "Internal Room Reservation",
            },
          ],
      
          findings: [
            "Delivered frontend interface components for an internal room-booking workflow, including dashboard and booking-related views.",
            "Saya mengimplementasikan seluruh halaman frontend dengan Bootstrap/AdminLTE, sedangkan backend dan integrasi sistem merupakan cakupan tim.",
            "This work was completed during an internship at BKPSDM Samarinda; no measured adoption or booking-time reduction is claimed.",
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
            "Visit Lamaru is a functional web application developed as part of a KKN project to provide accessible information about Kelurahan Lamaru. The website presents local information through an organized and user-friendly interface.",
      
          problem:
            "The project aimed to provide a centralized web platform for presenting information about Kelurahan Lamaru, including local events, facilities, gallery content, and other community-related information.",
      
          process: [
            "Analyze the information and content that needed to be presented on the website.",
            "Design the website structure and user interface.",
            "Develop the frontend pages and interface components.",
            "Implement event, facilities, gallery, and informational sections.",
            "Use structured JSON data to support dynamic website content.",
            "Refine the interface layout and user experience across the website.",
          ],
      
          results: [
            {
              label: "Project Type",
              value: "Functional Web Application",
            },
            {
              label: "Main Contribution",
              value: "Frontend Development",
            },
            {
              label: "Project Context",
              value: "KKN",
            },
            {
              label: "Purpose",
              value: "Kelurahan Lamaru Information",
            },
          ],
      
          findings: [
            "Implemented frontend pages for a KKN tourism-information site covering attractions, facilities, events, and gallery content.",
            "The site provides a navigable, responsive information interface; the work was developed collaboratively with the KKN team.",
            "Hasil proyek merupakan website informasi wisata yang dikembangkan bersama tim KKN; belum terdapat data pemakaian resmi atau bukti dampak terhadap kunjungan wisata.",
          ],
        },
      },
    {
      contribution: "Analisis eksploratif, pemodelan K-Means, dan implementasi visualisasi Streamlit.",
      title: "Customer Segmentation",
      category: "Data Analytics",
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
          "A clustering project applying K-Means and exploratory analysis to identify four distinct groups of customers with similar attributes.",

        problem:
          "Customer data can contain different behavioral patterns. Segmentation can help organize customers into groups that are easier to analyze and interpret.",

        process: [
          "Load and inspect customer data.",
          "Clean and prepare the dataset.",
          "Perform exploratory analysis.",
          "Prepare relevant features for segmentation.",
          "Menormalisasi fitur dengan MinMaxScaler lalu menerapkan K-Means dengan k=4. Jumlah klaster dipilih menggunakan pendekatan Elbow Method, tetapi grafik/implementasi Elbow belum tercantum di repository.",
          "Analyze and interpret the resulting customer groups.",
          "Prepare visual outputs to communicate the segmentation results.",
        ],

        results: [
          {
            label: "Project Type",
            value: "Data Analytics",
          },
          {
            label: "Main Method",
            value: "K-Means (4 clusters)",
          },
          {
            label: "Main Tool",
            value: "Python",
          },
          {
            label: "Output",
            value: "Four customer groups",
          },
        ],

        findings: [
          "K-Means grouped customers into four clusters for comparing their characteristics and supporting more targeted analysis.",
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
            "Web Development",
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