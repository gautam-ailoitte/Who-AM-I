// Portfolio Data for Gautam Kumar
// Edit this file to update your portfolio without touching the HTML structure

const portfolioData = {
    // Basic information
    basics: {
        name: "Gautam Kumar",
        title: "Flutter Developer",
        tagline: "Mobile App Developer | Problem Solver",
        description: "A Flutter Developer with experience in building complex mobile applications, strong problem-solving skills, and a passion for creating efficient, user-friendly solutions.",
        image: "profile.jpg",
        github: "https://github.com/kumar-gautam24",
        linkedin: "https://linkedin.com/gautam-kumar-24feb",
        email: "gk24feb@gmail.com",
        phone: "+91 7542036307",
        location: "Bangalore, Karnataka, India - 560066"
    },

    // Experience section
    experience: [
        {
            title: "Flutter Developer",
            company: "Ailoitte",
            department: "",
            website: "https://ailoitte.com",
            date: "Feb 2025 - Present",
            items: [
                {
                    title: "Parental Control Application Development",
                    period: "Feb 2025 - Present",
                    description: "Leading development on a parental control application requiring complex native features with limited resources, demonstrating strong problem-solving abilities."
                },
                {
                    title: "Innovative API Implementation",
                    period: "Feb 2025 - Present",
                    description: "Researched and proposed an innovative approach using Apple's latest Screen Time API and Family Control API (launched January 2025) as an alternative to the industry-standard MDM for parental control."
                },
                {
                    title: "Team Collaboration",
                    period: "Feb 2025 - Present",
                    description: "Effectively coordinating with senior team members and contributing to architectural decisions, showcasing strong collaboration and communication skills."
                }
            ],
            technologies: ["Flutter", "Dart", "iOS APIs", "Android"]
        },
        {
            title: "Software Development Intern",
            company: "Mithilastack",
            department: "",
            website: "",
            date: "Aug 2023 - Aug 2024",
            items: [
                {
                    title: "Edudoor Client Project",
                    period: "Aug 2023 - Aug 2024",
                    description: "Worked on a client project, Edudoor. Implemented major Flutter features such as state management with BLoC, dynamic form builders, real-time search, Infinity Scroll list, Shared preference, and REST API integration."
                },
                {
                    title: "Project Solution Contributions",
                    period: "Aug 2023 - Aug 2024",
                    description: "Actively participated in project solution discussions, contributed ideas, received letter of appreciation for my efforts."
                }
            ],
            technologies: ["Flutter", "BLoC", "REST APIs", "Dart"]
        }
    ],

    // Projects section
    projects: [
        {
            title: "SIH 2023: Disaster Management Solution",
            period: "2023",
            description: "Developed and selected as finalist in Smart India Hackathon 2023, implementing an ad-hoc network solution for connectivity during disasters.",
            bullets: [
                "Implemented a geospatial SOS system for identifying affected individuals",
                "Engineered a multi-role platform with optimized warehouse management for tracking critical resources",
                "Created system for deploying resources efficiently based on real-time alerts and location data"
            ],
            github: "https://github.com/kumar-gautam24/disaster-management",
            live: "",
            readme: "kumar-gautam24/disaster-management",
            technologies: ["Flutter", "Firebase", "Geolocation APIs", "Ad-hoc Networking"]
        },
        {
            title: "Food Subscription Platform",
            period: "2024", // Update this with the correct year
            description: "A comprehensive food subscription platform built with Flutter and clean architecture principles, allowing users to subscribe to meal plans, customize their meal slots, and manage deliveries.",
            bullets: [
                "Designed and implemented a complete food delivery application with features from authentication to payment processing",
                "Architected using Clean Architecture with domain-driven design for separation of concerns and maintainability",
                "Implemented BLoC/Cubit pattern for state management ensuring unidirectional data flow",
                "Integrated Razorpay for payments and Google Maps for location services with address management"
            ],
            images: [
                "images/project-food-subscription/images/project-food-subscription/Screenshot-2025-05-10-121254.png",
                "images/project-food-subscription/Screenshot-2025-05-10-121141.jpg",
                "images/project-food-subscription/Screenshot-2025-05-10-121143.jpg",
                "images/project-food-subscription/Screenshot-2025-05-10-121152.jpg",
                "images/project-food-subscription/Screenshot-2025-05-10-121156.jpg",
                "images/project-food-subscription/Screenshot-2025-05-10-121200.jpg"
                // Add more if needed, but 4-6 is usually a good number for a carousel
            ],
            github: "https://github.com/kumar-gautam24/food-subscription-app", // Update with correct link todo:
            live: "", // Add if available
            readme: "kumar-gautam24/food-subscription-app", // Update with correct repository
            technologies: ["Flutter", "Clean Architecture", "BLoC/Cubit", "Dio", "Razorpay", "Google Maps", "Get_It"]
        },
        {
            title: "Tic Tac Toe Game with AI",
            period: "2023",
            description: "Developed a console-based Tic Tac Toe game with advanced AI capabilities.",
            bullets: [
                "Implemented the Minimax algorithm with alpha-beta pruning for optimal AI moves",
                "Optimized the game's performance through efficient algorithm implementation",
                "Applied advanced memory management techniques to improve performance"
            ],
            github: "https://github.com/kumar-gautam24/tic-tac-toe-ai",
            live: "",
            readme: "kumar-gautam24/tic-tac-toe-ai",
            technologies: ["Flutter", "Minimax Algorithm", "Alpha-Beta Pruning", "Dart"]
        },
        {
            title: "Incident Tracker and Automation Tool",
            period: "2022",
            description: "Developed an OOP-based incident management system for efficient tracking and resolution.",
            bullets: [
                "Created automatic priority-based assignment using a greedy workload balancing algorithm",
                "Implemented data analysis pipelines with Pandas to identify incident patterns",
                "Generated statistical reports, reducing mean-time-to-resolution by optimizing resource allocation"
            ],
            github: "https://github.com/kumar-gautam24/incident-tracker",
            live: "",
            readme: "kumar-gautam24/incident-tracker",
            technologies: ["Python", "Pandas", "OOP", "Data Analysis"]
        },
        {
            title: "Manthan 2021: Hindi OCR",
            period: "2021",
            description: "Developed a sophisticated Optical Character Recognition system for Hindi text.",
            bullets: [
                "Conducted extensive research and designed architecture with innovative handling of nukta characters",
                "Implemented contextual grammar correction for improved accuracy",
                "Integrated Tesseract OCR with PyTorch-based image preprocessing for enhanced recognition accuracy"
            ],
            github: "",
            live: "https://www.youtube.com/watch?v=your-video-id",
            readme: "",
            technologies: ["Python", "Tesseract OCR", "PyTorch", "Computer Vision"]
        }
    ],

    // Skills section
    skills: [
        {
            category: "Languages",
            icon: "fa-code",
            items: [
                { name: "Dart", level: 3 },
                { name: "Python", level: 3 },
                { name: "C++", level: 2 },
                { name: "Java", level: 2 }
            ]
        },
        {
            category: "Mobile Development",
            icon: "fa-mobile-alt",
            items: [
                { name: "Flutter", level: 3 },
                { name: "State Management", level: 3 },
                { name: "BLoC", level: 3 },
                { name: "MVC/MVVM", level: 2 },
                { name: "Native APIs", level: 2 }
            ]
        },
        {
            category: "Backend & Tools",
            icon: "fa-server",
            items: [
                { name: "Firebase", level: 3 },
                { name: "REST APIs", level: 3 },
                { name: "Git", level: 3 },
                { name: "Unit Testing", level: 2 }
            ]
        },
        {
            category: "Computer Science",
            icon: "fa-laptop-code",
            items: [
                { name: "Data Structures", level: 3 },
                { name: "Algorithms", level: 3 },
                { name: "Problem Solving", level: 3 },
                { name: "DBMS", level: 2 },
                { name: "Operating Systems", level: 2 }
            ]
        }
    ],

    // Background section
    background: [
        {
            category: "Education",
            icon: "fa-graduation-cap",
            items: [
                {
                    title: "Darbhanga College of Engineering",
                    detail: "Bachelor's in Computer Science and Engineering",
                    description: "Studied core computer science subjects, including data structures, algorithms, operating systems, and database management systems.",
                    period: "Sept 2020 - Sept 2024"
                },
                {
                    title: "Certifications",
                    detail: "Various Technical Certifications",
                    description: "IIT Kanpur Programming in C, IIT Bombay C++, IITB Java, IITB Python, Cisco Networking",
                    period: "2020 - 2023"
                }
            ]
        },
        {
            category: "Achievements",
            icon: "fa-trophy",
            items: [
                {
                    title: "Competitive Programming",
                    detail: "CodeChef & SnackDown",
                    description: "Achieved a top ranking of #32 out of 5000+ in the CodeChef Long Challenge and successfully qualified for SnackDown, showcasing strong problem-solving capabilities.",
                    period: "2022 - 2023"
                },
                {
                    title: "Competitions & Exams",
                    detail: "Google Kickstart & GATE",
                    description: "Excelled in Google Kickstart and Qualified GATE examination in Computer Science and Engineering.",
                    period: "2022 - 2023"
                },
                {
                    title: "Smart India Hackathon",
                    detail: "SIH 2023 Finalist",
                    description: "Selected as finalist for the prestigious Smart India Hackathon 2023 with a disaster management solution.",
                    period: "2023"
                }
            ]
        }
    ],

    // Contact section
    contact: [
        {
            method: "Email",
            value: "gk24feb@gmail.com",
            icon: "fa-envelope",
            link: "mailto:gk24feb@gmail.com"
        },
        {
            method: "Phone",
            value: "+91 7542036307",
            icon: "fa-phone",
            link: "tel:+917542036307"
        },
        {
            method: "LinkedIn",
            value: "gautam-kumar-24feb",
            icon: "fa-linkedin",
            link: "https://linkedin.com/gautam-kumar-24feb"
        },
        {
            method: "GitHub",
            value: "kumar-gautam24",
            icon: "fa-github",
            link: "https://github.com/kumar-gautam24"
        }
    ]
};