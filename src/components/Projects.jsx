import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const BASE_URL = import.meta.env.BASE_URL;

  const projects = [
    {
      title: "Brain Tumor Classification",
      category: "Machine Learning / Undergraduate Thesis",
      description:
        "Comparative analysis of brain tumor classification using VGG16 with and without U-Net-based ROI segmentation on MRI images.",
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
          "Image preprocessing using resizing, CLAHE, normalization, and augmentation.",
          "Stratified dataset splitting for model development and evaluation.",
          "Development of a baseline VGG16 classification model.",
          "Development of a VGG16-based U-Net segmentation model for ROI extraction.",
          "Classification using MRI images with and without ROI segmentation.",
          "Evaluation using accuracy, precision, recall, F1-score, and confusion matrix.",
        ],

        results: [
          {
            label: "Baseline",
            value: "VGG16 without ROI segmentation",
          },
          {
            label: "Experimental Model",
            value: "U-Net ROI + VGG16",
          },
          {
            label: "Classification Classes",
            value: "Glioma, Meningioma, Pituitary, No Tumor",
          },
          {
            label: "Main Finding",
            value:
              "Baseline VGG16 achieved better classification performance",
          },
        ],

        findings: [
          "VGG16 without ROI segmentation achieved better classification performance than the segmentation-based pipeline.",
          "ROI segmentation did not consistently improve classification performance.",
          "Performance decreases were particularly observed in Glioma and No Tumor.",
        ],
      },
    },

    {
      title: "Business Data Analytics — Dagangan",
      category: "Data Analytics / Academic Team Project",
      description:
        "Business analytics project analyzing customer behavior, sales representative visits, route efficiency, and transaction-related business questions.",
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
          "The analysis focuses on improving sales visit efficiency by understanding customer segments, visit frequency, scheduling patterns, route efficiency, and the relationship between sales visits and transactions.",

        process: [
          "Clean and prepare business datasets.",
          "Perform customer segmentation using K-Means clustering.",
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
            value: "TSP + Guided Local Search",
          },
          {
            label: "Visualization",
            value: "Tableau Dashboard",
          },
        ],

        findings: [
          "Customer segmentation was used to prioritize sales visits.",
          "Historical visit patterns can support sales scheduling decisions.",
          "Route optimization produced more efficient routes based on the project's distance comparison.",
          "The project was completed as an academic team project.",
        ],
      },
    },


    {
      title: "Sleep Health & Lifestyle Analytics",
      category: "Data Analytics / SQL",
      description: "Analyzed 374 sleep and lifestyle records to uncover relationships between stress, sleep quality, sleep duration, and occupation.",
      technologies: ["Python", "Pandas", "SQL", "SQLite", "Tableau", "Statistics"],
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
          "The analysis describes associations in the sample rather than cause-and-effect relationships."
        ]
      }
    },
    {
      title: "GenderBridge — Workforce Equality Analytics",
      category: "Data Analytics / HR Analytics",
      description: "Examined gender representation, comparable-role salary differences, promotions, and leadership training in a 5,000-record workforce case study.",
      technologies: ["Python", "Pandas", "SQL", "SQLite", "Tableau", "Statistical Analysis"],
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
          "The overall leadership-training participation gap of 1.96 percentage points was larger than the 0.61-point promotion-rate gap.",
          "Differences varied across departments and job levels rather than following a uniform pattern.",
          "Aggregate promotion and training differences were not statistically significant at the 5% level. Findings relate to fictional case-study data, not an audit of real employers."
        ]
      }
    },

    {
      title: "ECO Samarinda",
      category: "Web Development",
      description:
        "Prototype environmental website designed to provide information and education about cleanliness, waste management, and environmental awareness in Samarinda.",
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
          "The project demonstrates frontend development and website structure implementation.",
          "The website combines informational content with prototype interactive features.",
        ],
      },
    },

      {
        title: "Website SIPARUNG",
        category: "Web Development",
        description:
          "A room reservation website developed for the internal needs of BKPSDM Samarinda, allowing employees to view and request room reservations through a web-based interface.",
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
            "The project provided practical experience in developing a web interface for an internal organizational system.",
            "The main contribution focused on frontend development, including interface implementation, layout, and usability.",
            "The project strengthened practical experience in developing web applications within a professional organizational environment.",
          ],
        },
      },

      {
        title: "Visit Lamaru",
        category: "Web Development / KKN",
        description:
          "A functional web application developed during KKN to present information about Kelurahan Lamaru, with the main contribution focused on frontend development and user interface implementation.",
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
            "The project demonstrates practical frontend development for a real community information use case.",
            "The website provides a structured interface for presenting local information, events, facilities, and gallery content.",
            "The project strengthened practical experience in translating information requirements into a functional and user-friendly web interface.",
          ],
        },
      },
    {
      title: "Customer Segmentation",
      category: "Data Analytics",
      description:
        "Customer segmentation project focused on preparing customer data and grouping customers into meaningful segments using clustering analysis.",
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
          "A data analysis project focused on customer segmentation using clustering techniques to identify groups of customers with similar characteristics.",

        problem:
          "Customer data can contain different behavioral patterns. Segmentation can help organize customers into groups that are easier to analyze and interpret.",

        process: [
          "Load and inspect customer data.",
          "Clean and prepare the dataset.",
          "Perform exploratory analysis.",
          "Prepare relevant features for segmentation.",
          "Apply clustering analysis.",
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
            value: "Clustering",
          },
          {
            label: "Main Tool",
            value: "Python",
          },
          {
            label: "Output",
            value: "Customer Segments",
          },
        ],

        findings: [
          "Clustering can be used to identify groups of customers with similar characteristics.",
          "Customer segments provide a structured way to interpret customer data.",
        ],
      },
    },
  ];

  const dataProjects = projects.filter(
    (project) => !project.category.startsWith("Web Development")
  );
  const webProjects = projects.filter(
    (project) => project.category.startsWith("Web Development")
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
          {items.length} Projects
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
            <p className="text-blue-400 font-medium mb-3">Projects</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Selected<span className="text-blue-400"> work.</span>
            </h2>
            <p className="mt-5 text-gray-400 max-w-2xl text-lg leading-relaxed">
              A collection of projects in data analytics, machine learning,
              research, and web development.
            </p>
          </motion.div>

          {renderProjectGroup(
            dataProjects,
            "Data Analytics & Machine Learning",
            "Business analytics, data-driven insights, clustering, and deep learning research.",
            "data-projects"
          )}

          {renderProjectGroup(
            webProjects,
            "Web Development",
            "Frontend development and responsive websites for organizations and communities.",
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