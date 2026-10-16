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
          "A likely explanation is that hard ROI masking removes contextual MRI information; the different segmentation and classification datasets may also contribute.",
        ],
      },
    },

    {
      title: "Business Data Analytics — Dagangan",
      category: "Data Analytics / Academic Team Project",
      description:
        "Analyzed customer transactions and sales visits, built RFM customer segments, and simulated more efficient representative routes using Google OR-Tools.",
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
          "Google OR-Tools TSP route simulations reduced travel distance by up to 25% against the project comparison routes; not a measured field deployment.",
          "This was a Bitlabs Academy team case study; results represent analytical recommendations and modeled efficiency, not deployed company-wide outcomes.",
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
          "Among 374 observations, sleep duration and quality were strongly associated (Spearman +0.887); these observational findings do not establish causality."
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
          "Women had a 28.44% leadership-training participation rate versus 30.40% for men, a descriptive gap of 1.96 percentage points; promotion differed by 0.61 points.",
          "Differences varied across departments and job levels rather than following a uniform pattern.",
          "Overall gender gaps in promotion (chi-square p≈0.631) and training (p≈0.144) were not significant at α=0.05. This is a fictional case study, not an audit of real employers."
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
          "Implemented a multi-page responsive informational prototype with navigation, news, galleries, environmental resources, and UI interactions.",
          "Complaint and registration interfaces are prototypes; this project is not an official public service.",
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
            "Delivered frontend interface components for an internal room-booking workflow, including dashboard and booking-related views.",
            "My contribution was frontend UI implementation with Bootstrap/AdminLTE; backend and the broader booking system were collaborative team work.",
            "This work was completed during an internship at BKPSDM Samarinda; no measured adoption or booking-time reduction is claimed.",
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
            "Implemented frontend pages for a KKN tourism-information site covering attractions, facilities, events, and gallery content.",
            "The site provides a navigable, responsive information interface; the work was developed collaboratively with the KKN team.",
            "My contribution focused on frontend development; no traffic or tourism-growth impact has been independently established.",
          ],
        },
      },
    {
      title: "Customer Segmentation",
      category: "Data Analytics",
      description:
        "Applied K-Means clustering to group customers by similar characteristics, with preprocessing, cluster exploration, and visual interpretation.",
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
          "Apply K-Means clustering and interpret the characteristics of four resulting groups.",
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
          "The repository does not yet present validated business outcomes or a quantified improvement from applying these segments.",
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