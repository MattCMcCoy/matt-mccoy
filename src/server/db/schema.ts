const experience = [
  {
    id: 1,
    title: "Software Engineer",
    startDate: "June 1, 2024",
    endDate: "",
    image: "symbotic",
  },
  {
    id: 2,
    title: "Test Automation Engineer Co-op",
    startDate: "July 10, 2023",
    endDate: "December 20, 2023",
    image: "symbotic",
  },
  {
    id: 3,
    title: "Software Engineer Co-op",
    startDate: "July 10, 2022",
    endDate: "December 20, 2022",
    image: "highresbio",
  },
  {
    id: 4,
    title: "Software Technical Lead",
    startDate: "December 20, 2023",
    endDate: "April 20, 2024",
    image: "generate",
  },
  {
    id: 5,
    title: "Software Engineer",
    startDate: "September 20, 2023",
    endDate: "December 20, 2023",
    image: "generate",
  },
  {
    id: 6,
    title: "Teaching Assistant & Lab Lead - CS2510",
    startDate: "January 20, 2022",
    endDate: "April 20, 2022",
    image: "khoury",
  },
  {
    id: 7,
    title: "Teaching Assistant - CS2500",
    startDate: "September 20, 2021",
    endDate: "December 20, 2021",
    image: "khoury",
  },
];

const projects = [
  {
    id: 1,
    title: "Care-Wallet",
    position: "Software Technical Lead",
    organization: "Generate",
    startDate: "December 20, 2023",
    endDate: "April 20, 2024",
    image: "generate",
    mobile: true,
    githuburl: "",
    description:
      "A mobile app meant to simplify the care of loved ones with Alzheimer's and Dementia. Built on React Native, TypeScript, and Golang. The app allows for Caretakers to track daily activities, medication, and appointments for loved ones easily with a centralized calendar and task management system within the application.",
  },
  {
    id: 2,
    title: "Generate's Website",
    position: "Software Engineer",
    organization: "Generate",
    startDate: "September 10, 2023",
    endDate: "December 20, 2023",
    image: "generate",
    githuburl: "",
    description:
      "A website built for Generate Product Development at Northeastern University. The website was built using React and JavaScript. The website is meant to showcase the projects that the team has worked on and the team members. The website is also meant to be a resource for potential clients to learn more about the team and the projects that the team has worked on.",
  },
  {
    id: 3,
    title: "Streaming Availability",
    position: "",
    organization: "",
    startDate: "February 20, 2024",
    endDate: "April 20, 2024",
    image: "",
    githuburl: "",
    description:
      "A site developed to track the availability of streaming services for movies. Built using Next.js, TailwindCSS, and TypeScript. The site allows users to search for a movie and see which streaming services it is available on. The site also allows users to see what is available on a specific streaming service. The site uses the TMDB API to get the availability of movies.",
  },
  {
    id: 4,
    title: "Portfolio",
    position: "",
    organization: "",
    startDate: "July 10, 2022",
    endDate: "December 20, 2022",
    image: "",
    githuburl: "",
    description:
      "Developed during my very first Co-op. Built using React JS and TypeScript. The site allowed me to showcase my work and experience while I learned more about web development.",
  },
  {
    id: 5,
    title: "Portfolio Revamped",
    position: "",
    organization: "",
    startDate: "April 24, 2024",
    endDate: "",
    image: "",
    githuburl: "",
    description:
      "The site you are on right now and a refresh of my original portfolio. Meant to showcase my work and experience in a more modern and clean way. Built using Next.js, TailwindCSS, and TypeScript.",
  },
  {
    id: 6,
    title: "Covey.Town - Checkers",
    position: "",
    organization: "",
    startDate: "January 20, 2023",
    endDate: "April 24, 2023",
    image: "",
    githuburl: "",
    description:
      "A game of checkers built for the Covey.Town platform. Built using React and TypeScript. The game allows players to play checkers with other players in a Covey.Town room. The game was built to learn more about adding to larger code bases, game development, and React.",
  },
  {
    id: 7,
    title: "Agar.io Clone",
    position: "",
    organization: "",
    startDate: "February 20, 2021",
    endDate: "May 20, 2021",
    image: "",
    githuburl: "https://github.com/MattCMcCoy/AgarIOGame",
    description:
      "A clone of the popular game Agar.io and one of my very first projects. Built using Java. The game allows players to move around the screen and eat other blobs to grow in size. The game was built to learn more about game development and Object Oriented Programming.",
  },
];

const education = [
  {
    id: 1,
    school: "Northeastern University",
    degree: "Bachelor of Science in Computer Science",
    gpa: 3.5,
    endDate: "May 1, 2024",
    image: "northeastern",
  },
];

const landing = {
  name: "Matthew C McCoy",
  tagline: "Photographer. Hiker. Kayaker. Coffee Lover. Developer.",
  about:
    "I am a software engineer with a passion for photography, hiking, kayaking, and coffee. I have experience across the stack and love finding new technologies to play around with. I am a graduate of Northeastern University in Boston MA with a bachelor's degree in Computer Science. I have experience in software engineering, test automation, and teaching. I am always looking for new opportunities to learn and grow.",
};

export const StaticJSONDatabase = {
  experience,
  projects,
  education,
  landing,
};
