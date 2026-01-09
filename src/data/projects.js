export const projectData = [
    {
  id: 2,
  title: "Silent Queue",
  description: "A specialized mobile-first MERN application for real-time facility management and laundry room scheduling.",
  problem: "University students or apartment residents often waste time checking laundry room availability in person, only to find all machines occupied.",
  solution: "Built a sleek, neon-themed mobile interface that allows users to view real-time status and reserve slots, synced across all devices via a cloud backend.",
  challenges: "Implementing a 'Mobile-to-Web' bridge using React Native Web and Expo, and ensuring the heavy neon UI effects remained performant during state transitions.",
  tech: ["React Native (Expo)", "Node.js", "Express", "MongoDB Atlas", "Render", "Vercel"],
  liveLink: "/demo.html",
  github: "https://github.com/hramlk99k/silent-queue-frontend"
},
    {
        id: 2,
        title: "TECH-SERVICES-CRM",
        description: "A full-stack MERN CRM portal with login, Admin and clients dashboard.",
        problem: "Small tech businesses struggle to track client tickets and service history in one place.",
        solution: "Built a centralized dashboard using React and MongoDB to automate ticket status updates and streamline client communication.",
        challenges: "Implementing secure JWT-based role-based access for Admins vs Clients and overcoming deployment hurdles on Render/Vercel to ensure a stable production environment.",
        tech: ["MongoDB", "Express", "React", "Node","Render","Vercel","GitHub","MongoDB Atlas"],
        liveLink: "https://tech-services-client.vercel.app/login",
        github: "https://github.com/hramlk99k/TECH-SERVICES-CRM",
        demoUser: "demo@example.com", 
        demoPass: "DEMOUSER123"
    },
    {
        id: 3,
        title: "Bug Tracker Application",
        description: "A complex state-driven dashboard focused on real-time data filtering and ticket lifecycle management. Implemented custom logic for priority sorting and status tracking to optimize developer workflow.",
        problem: "Software teams often lose track of issue priorities when managed through static lists or email threads.",
        solution: "Created an interactive Kanban-style board that visualizes the bug lifecycle, allowing users to move tasks through various stages of completion.",
        challenges: "Managing complex state transitions across the application and ensuring the UI remains responsive when handling a large volume of task data.",
        tech: ["React", "CSS", "HTML", "JavaScript","Vercel","GitHub"],
        liveLink: "https://bug-tracker-app-phi.vercel.app/",
        github: "https://github.com/hramlk99k/Bug-Tracker-App"
    },
    {
        id: 4,
        title: "ECO Pulse (Carbon Footprint Tracker)",
        description: "An application which takes weekly consumption from user and calculate their carbon footprint.",
        problem: "It is difficult for individuals to quantify their environmental impact without a structured way to track consumption habits.",
        solution: "Developed a calculator that translates user input (energy, travel, waste) into actionable data, helping users understand their carbon footprint.",
        challenges: "Integrating mathematical logic with user input forms to provide accurate, real-time calculations based on environmental research data.",
        tech: ["React", "CSS", "HTML", "JavaScript","Vercel","GitHub"],
        liveLink: "https://carbon-tracking-app.vercel.app/",
        github: "https://github.com/hramlk99k/carbon-tracking-app"
    },
{
  id: 5,
  title: "Trash Cracker: Gamified Eco-Logic",
  description: "A high-fidelity educational platform designed to gamify circular economy and waste management for children.",
  problem: "Traditional environmental education often lacks the interactive engagement and responsive accessibility needed to build real-world sorting reflexes on mobile devices.",
  solution: "Engineered a mobile-first responsive web application using React and Framer Motion. Implemented a Flexbox-driven UI and coordinate-based collision detection to ensure a seamless experience across all screen orientations.",
  challenges: "Solving viewport-locking issues and CSS 'Safe Area' overlaps on mobile browsers. Migrated from legacy HTML5 Drag APIs to a custom pointer-event system to maintain 60fps performance and 100% tactile accuracy on touch screens.",
  tech: ["React 19", "Framer Motion", "CSS3 (Flexbox/Media Queries)", "Web Audio API", "Vite", "Vercel"],
  liveLink: "https://waste-sorter-game.vercel.app/",
  github: "https://github.com/hramlk99k/waste-sorter-game"
},
 {
        id: 6,
        title: "Library Manager",
        description: "A full-stack MERN application for managing book inventories with real-time updates and MongoDB integration.",
        problem: "Traditional library logs are difficult to scale, often leading to inconsistent data and slow search times for specific titles.",
        solution: "Developed a digital inventory system that allows for instant CRUD operations, ensuring the database reflects the current stock in real-time.",
        challenges: "Designing a scalable MongoDB schema to handle relationships between authors and books while mastering asynchronous API patterns in Node.js.",
        tech: ["MongoDB", "Express", "React", "Node","Vercel","GitHub","MongoDB Atlas"],
        liveLink: "https://mern-library-project1.vercel.app/",
        github: "https://github.com/hramlk99k/mern-library-project"
    },
    {
        id: 7,
        title: "Collaborative Whiteboard",
        description: "A high-performance interactive tool using Canvas API and React hooks. Focused on optimizing rendering cycles to ensure smooth, lag-free user input and real-time visual updates.",
        problem: "Collaborative digital note-taking often lacks version control, leading to accidental data loss during brainstorming sessions.",
        solution: "Built a whiteboard interface using TypeScript that features a robust state history, allowing users to revert changes instantly.",
        challenges: "Implementing a functional 'Undo' stack in React and ensuring type safety across the application using TypeScript to reduce runtime errors.",
        tech: ["React", "TailwindCSS", "HTML", "TypeScript","Vercel","GitHub"],
        liveLink: "https://scrawl-whiteboard.vercel.app/",
        github: "https://github.com/hramlk99k/scrawl-whiteboard"
    },
    {
        id: 8,
        title: "Personal Information Form",
        description: "A personal information form built on React to showcase CRUD.",
        problem: "Static forms lack dynamic validation and immediate data persistence, resulting in a poor user experience.",
        solution: "Engineered a reactive form that demonstrates full CRUD capabilities, allowing for seamless data entry, editing, and deletion.",
        challenges: "Handling complex form states and ensuring data integrity between the frontend input and the stored data object.",
        tech: ["React", "CSS", "HTML", "JavaScript","Vercel","GitHub"],
        liveLink: "https://crud-form-frontend.vercel.app/",
        github: "https://github.com/hramlk99k/Form"
    },
    {
        id: 9,
        title: "To-Do List",
        description: "A frontend to-do list designed to showcase CRUD.",
        problem: "User productivity is often hindered by overly complex task management apps that lack a clean, lightweight interface.",
        solution: "Developed a focused task manager that prioritizes speed and simplicity, utilizing local state for instantaneous updates.",
        challenges: "Designing an intuitive UI that manages persistent state without cluttering the user experience.",
        tech: ["React", "CSS", "HTML", "JavaScript","Vercel","GitHub"],
        liveLink: "https://to-do-list-react-cyan-eight.vercel.app/",
        github: "https://github.com/hramlk99k/to-do"
    },
    {
        id: 10,
        title: "Calculator",
        description: "An interactive calculator.",
        problem: "Standard browser-based calculators often lack responsive design and handle complex logic edge-cases poorly.",
        solution: "Created a robust calculator using React that handles multi-step operations with a focus on clean logic and responsive UI.",
        challenges: "Solving mathematical edge cases, such as division by zero and floating-point precision, within the JavaScript logic.",
        tech: ["React", "CSS", "HTML", "JavaScript","Vercel","GitHub"],
        liveLink: "https://calculator-nine-ivory-15.vercel.app/",
        github: "https://github.com/hramlk99k/calculator"
    },
];