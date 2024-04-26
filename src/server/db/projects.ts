import { z } from 'zod';

const projectsData = [
  {
    id: 1,
    title: 'Care-Wallet',
    position: 'Software Technical Lead',
    organization: 'Generate',
    startDate: '2023-12-20',
    endDate: '2024-04-20',
    image: 'generate',
    mobile: true,
    githuburl: '',
    description:
      "A mobile app meant to simplify the care of loved ones with Alzheimer's and Dementia. The app allows for Caretakers to track daily activities, medication, and appointments for loved ones easily with a centralized calendar, task management, and group management system within the application."
  },
  {
    id: 2,
    title: "Generate's Website",
    position: 'Software Engineer',
    organization: 'Generate',
    startDate: '2023-09-10',
    endDate: '2023-12-20',
    image: 'generate',
    mobile: false,
    githuburl: '',
    description:
      'A website built for Generate Product Development at Northeastern University. The website is meant to showcase the projects that the team has worked on and the team members. The website is also meant to be a resource for potential clients to learn more about the team and the projects that the team has worked on.'
  },
  {
    id: 3,
    title: 'Streaming Availability',
    position: '',
    organization: '',
    startDate: '2024-02-20',
    endDate: '2024-04-20',
    image: '',
    mobile: false,
    githuburl: '',
    description:
      'A site developed to track the availability of streaming services for movies. The site allows users to search for a movie and see which streaming services it is available on. The site also allows users to see what is available on a specific streaming service. The site uses the TMDB API to get the availability of movies.'
  },
  {
    id: 4,
    title: 'Portfolio',
    position: '',
    organization: '',
    startDate: '2022-07-10',
    endDate: '2022-12-20',
    image: '',
    mobile: false,
    githuburl: '',
    description:
      'Developed during my very first Co-op. The site allowed me to showcase my work and experience while I learned more about web development.'
  },
  {
    id: 5,
    title: 'Portfolio 2.0',
    position: '',
    organization: '',
    startDate: '2024-04-24',
    endDate: '',
    mobile: false,
    image: '',
    githuburl: '',
    description:
      'The site you are on right now and a refresh of my original portfolio. Meant to showcase my work and experience while utilizing more modern technologies and design.'
  },
  {
    id: 6,
    title: 'Covey.Town - Checkers',
    position: '',
    organization: '',
    startDate: '2023-01-20',
    endDate: '2023-04-24',
    image: '',
    mobile: false,
    githuburl: '',
    description:
      'A game of checkers built for the Covey.Town platform. The game allows players to play checkers with other players in a Covey.Town room. The game was built to learn more about adding to larger code bases, game development, and React.'
  },
  {
    id: 7,
    title: 'Agar.io Clone',
    position: '',
    organization: '',
    startDate: '2021-02-20',
    endDate: '2021-05-20',
    image: '',
    mobile: false,
    githuburl: 'https://github.com/MattCMcCoy/AgarIOGame',
    description:
      'A clone of the popular game Agar.io and one of my very first projects. The game allows players to move around the screen and eat other blobs to grow in size. The game was built to learn more about game development and Object Oriented Programming.'
  }
] satisfies z.infer<typeof ProjectSchema>;

const ProjectSchema = z.array(
  z.object({
    id: z.number(),
    title: z.string(),
    position: z.string(),
    organization: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    image: z.string(),
    mobile: z.boolean(),
    githuburl: z.string(),
    description: z.string()
  })
);

const { data: projects } = ProjectSchema.safeParse(projectsData);

export { projects };