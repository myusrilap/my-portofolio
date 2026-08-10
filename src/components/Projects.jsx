import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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
      image: "/projects/brain-tumor.png",
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
      image: "/projects/dagangan.png",
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
      image: "/projects/eco-samarinda.png",
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
        "Website project for SIPARUNG, developed as a web-based application with supporting frontend and backend components.",
      technologies: [
        "PHP",
        "JavaScript",
        "CSS",
        "HTML",
        "MySQL",
      ],
      icon: "🌐",
      image: "/projects/siparung.png",
      featured: false,

      githubPath:
        "myusrilap/Website-SIPARUNG",

      details: {
        overview:
          "Website SIPARUNG is a web development project that includes website pages, data handling, and supporting application components.",

        problem:
          "The project focuses on developing a functional web application rather than only presenting static information.",

        process: [
          "Design and structure website pages.",
          "Implement frontend interface components.",
          "Develop PHP-based application functionality.",
          "Connect application components with database functionality.",
          "Organize supporting assets and application files.",
        ],

        results: [
          {
            label: "Project Type",
            value: "Web Development",
          },
          {
            label: "Backend",
            value: "PHP",
          },
          {
            label: "Database",
            value: "MySQL",
          },
          {
            label: "Output",
            value: "Functional Web Application",
          },
        ],

        findings: [
          "The project demonstrates practical experience in developing a web application with database connectivity.",
          "The project provides experience across frontend and backend web development.",
        ],
      },
    },

    {
      title: "Visit Lamaru",
      category: "Web Development / KKN",
      description:
        "Website project for Kelurahan Lamaru designed to present local information, events, facilities, gallery content, and community-related information.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "JSON",
      ],
      icon: "🏝️",
      image: "/projects/visit-lamaru.png",
      featured: false,

      githubPath:
        "myusrilap/visit-lamaru-fe",

      details: {
        overview:
          "Visit Lamaru is a frontend website project developed to present information about Kelurahan Lamaru in a structured and accessible web interface.",

        problem:
          "The project aims to organize local information into a website that can make information about events, facilities, galleries, and other local content easier to access.",

        process: [
          "Design the website information structure.",
          "Develop the main landing page.",
          "Implement event information.",
          "Implement facilities information.",
          "Develop gallery content.",
          "Implement additional informational pages.",
          "Use structured data to support website content.",
        ],

        results: [
          {
            label: "Project Type",
            value: "Frontend Web Development",
          },
          {
            label: "Main Focus",
            value: "Kelurahan Lamaru Information",
          },
          {
            label: "Content",
            value: "Events, Facilities, Gallery, Information",
          },
          {
            label: "Project Context",
            value: "KKN",
          },
        ],

        findings: [
          "The project demonstrates practical frontend development for a real local-information use case.",
          "Structured content makes local information easier to present through a web interface.",
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
      image: "/projects/customer-segmentation.png",
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

  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <>
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-blue-400 font-medium mb-3">
              Projects
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Selected
              <span className="text-blue-400"> work.</span>
            </h2>

            <p className="mt-5 text-gray-400 max-w-2xl text-lg leading-relaxed">
              A selection of academic, research, data analytics,
              and web development projects.
            </p>
          </motion.div>

          {/* Featured Project */}
          <div className="mt-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                onViewProject={setSelectedProject}
              />
            ))}
          </div>

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 gap-5 mt-5">
            {otherProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index + 1}
                onViewProject={setSelectedProject}
              />
            ))}
          </div>

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