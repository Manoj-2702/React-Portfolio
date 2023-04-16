import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  pocket_coach,
  pesuventure,
  css,
  flutter,
  inpaint,
  bootstrap,
  amb,
  commu,
  reactjs,
  tailwind,
  music,
  nodejs,
  mongodb,
  git,
  figma,
  social,
  pesuio,
  firebaselogo,
  nittrichy,
  carrent,
  ml,
  jobit,
  tripguide,
  spaceinvaders,
  threejs,
  tensorflow,
  colab,
  workholi,
  selfmoti,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Machine Learning Enthusiast",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Teaching ",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "FireBase",
    icon: firebaselogo,
  },
  {
    name: "Tensorflow",
    icon: tensorflow,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Backend and ML Developer",
    company_name: "PocketCoach Technologies Pvt. Ltd",
    icon: pocket_coach,
    iconBg: "#383E56",
    date: "Feb 2023 - Present",
    points: [
      "Developing and maintaining applications with Flutter and other technologies.",
      "Develop the ML and the Computer Vision part of the app which mainly is useful for tracking the user workouts.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Student Innovation Lead- ML Developer",
    company_name: "PESU Venture Labs",
    icon: pesuventure,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Present",
    points: [
      "Working as an ML Developer and Backend Developer for the startup 'SHARANGA' under PVL.",
      "Conduct research and analysis on various machine learning algorithms and techniques to identify the most suitable approach for the flower federated learning model",
      "Work collaboratively with other team members to develop and improve machine learning models, analyze data, and implement new features.",
    ],
  },
  {
    title: "Research Intern",
    company_name: "NIT Trichy",
    icon: nittrichy,
    iconBg: "#383E56",
    date: "Apr 2022 - Present ",
    points: [
      "Conduct research on various topics of Semantic Web Technologies",
      "Successfully completed a research paper on Web Page Recommendation and presented it at the ISDA -22 Conference.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Subject Matter Expert (SME)",
    company_name: "PESU I/O",
    icon: pesuio,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Apr 2023",
    points: [
      "Covered a wide range of topics, from supervised and unsupervised learning to deep learning and neural networks",
      "One of the highlights of teaching this course has been watching my students grow and develop their skills.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Congratulations Manoj from my end and You really worked for this",
    name: "Dr. Gegard Deepak",
    designation: "Assistant Professor",
    company: "Manipal Academy of Higher Education ",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const projects = [
  {
    name: "Movie Recommendation Engine",
    description:
      "ML based application which recommends user the movies according to the genre of the movies he had watched earlier.",
    tags: [
      {
        name: "ML",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
    ],
    image: ml,
    source_code_link:
      "https://github.com/Manoj-2702/Movie-Recommendation-Engine",
  },
  {
    name: "Space Invaders Game",
    description:
      "This project was developed by me as a part of my first year python projects. This uses basic python functions and callbacks. Features of the game include 'Beautiful Visuals', 'Best background music during gameplay', 'Start menu with control instructions', 'High Score Stored', 'Constant Updates'",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tkinter",
        color: "green-text-gradient",
      },
    ],
    image: spaceinvaders,
    source_code_link:
      "https://github.com/Manoj-2702/Space_Invaders_Game_In_python",
  },
  {
    name: "Virtual Scientific Calculator",
    description:
      "This project is mainly focused in providing the users a mathematical program which will help him to solve various mathematical operations required in his day to day life. project along with scientific calculator consists of root finder, simultaneous equation solver, Complex calculator, Volume finder, Area finder, Derivative and integral calculator etc. This allows the student to solve various study related problems in an easier way.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "opencv",
        color: "green-text-gradient",
      },
      {
        name: "numpy",
        color: "pink-text-gradient",
      },
      {
        name: "tkinter",
        color: "black-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link:
      "https://github.com/Manoj-2702/Virtual-Scientific-Calculator",
  },
  {
    name: "Social Network in Data Structures",
    description:
      "Implemented a social network system, which consists of various users connected in a network of a non-linear structure. Non-linear data structures are connected through pointers and are stored in non-contiguous locations. In the case of a network, a non-linear data structure is helpful, which helps you jump to various nodes without the need of knowing a certain fixed size of the data structure. We have implemented this using trees and graphs.",
    tags: [
      {
        name: "C",
        color: "blue-text-gradient",
      },
    ],
    image: social,
    source_code_link:
      "https://github.com/Manoj-2702/Social_Network-in-Data-Structures",
  },
  {
    name: "Music Player with Data Structures",
    description:
      "Implemented a social network system, which consists of various users connected in a network of a non-linear structure. Non-linear data structures are connected through pointers and are stored in non-contiguous locations. In the case of a network, a non-linear data structure is helpful, which helps you jump to various nodes without the need of knowing a certain fixed size of the data structure. We have implemented this using trees and graphs.",
    tags: [
      {
        name: "C",
        color: "blue-text-gradient",
      },
    ],
    image: music,
    source_code_link:
      "https://github.com/Manoj-2702/Social_Network-in-Data-Structures",
  },
  {
    name: "Ambulance Detection",
    description:
      "This detetion model was developed as a part of the Synapse Hackathon in whihc I was a participant.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "ML",
        color: "pink-text-gradient",
      },
      {
        name: "Deep Learning",
        color: "yellow-text-gradient",
      },
      {
        name: "Open CV",
        color: "green-text-gradient",
      },
    ],
    image: amb,
    source_code_link: "https://github.com/Manoj-2702/Ambulance-Detection",
  },
  {
    name: "Image Inpainting using Deep Learning ",
    description:
      "This project is being developed as a part of my project under Dr. Sindhu R Pai. This method makes use of various ",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "opencv",
        color: "green-text-gradient",
      },
      {
        name: "tensorflow",
        color: "pink-text-gradient",
      },
    ],
    image: inpaint,
    source_code_link:
      "https://github.com/Manoj-2702/Image-Inpainting-Deep-Learning",
  },
];

const hires = [
  {
    title: "Communicative",
    icon: commu,
    description:
      "I balance talking and listening hence ensuring effective communication.",
  },
  {
    title: "Collaborative",
    icon: colab,
    description:
      "Teamwork makes the dream work. Collaboration first, then work.",
  },
  {
    title: "Workaholic",
    icon: workholi,
    description: "I don't wait for deadlines, deadlines wait for me.",
  },
  {
    title: "Self Motivated ",
    icon: selfmoti,
    description: "I put myself into action to achieve my goals.",
  },
];

export { services, technologies, experiences, testimonials, projects, hires };
