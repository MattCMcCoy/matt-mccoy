import { z } from 'zod';

const projectsData = [
  {
    id: 1,
    title: 'Care-Wallet',
    featured: true,
    position: 'Software Technical Lead',
    organization: 'Generate',
    startDate: '2023-12-20',
    endDate: '2024-04-20',
    image: 'generate',
    mobile: true,
    githuburl: 'https://github.com/MattCMcCoy/care-wallet',
    languages: [
      'React',
      'Tailwind',
      'TanStack',
      'Firebase',
      'AWS',
      'PostgreSQL'
    ],
    description:
      'The app allows for Caretakers to track daily activities, medication, and appointments for loved ones easily with a centralized calendar, task management, and group management system within the application.',
    externalurl: null
  },
  {
    id: 2,
    title: "Generate's Website",
    featured: true,
    position: 'Software Engineer',
    organization: 'Generate',
    startDate: '2023-09-10',
    endDate: '2023-12-20',
    image: 'generate',
    mobile: false,
    githuburl: 'https://github.com/GenerateNU/website',
    externalurl: 'https://generatenu.com/',
    languages: ['React', 'JavaScript'],
    description:
      'A website built for Generate Product Development at Northeastern University. The site is meant to be a resource for potential clients and students to learn more about the teams and the projects that teams have worked on in the past.'
  },
  {
    id: 3,
    title: 'Streaming Availability',
    featured: true,
    position: '',
    organization: '',
    startDate: '2024-02-20',
    endDate: '2024-04-20',
    image: '',
    mobile: false,
    githuburl: 'https://github.com/MattCMcCoy/streaming-availability',
    externalurl: 'https://popcorn-streaming.vercel.app/',
    languages: ['React', 'Tailwind', 'NextJS', 'TanStack'],
    description:
      'The site allows users to search for a movie and see which streaming services it is available on. The site also allows users to see what is available on a specific streaming service. The site uses the TMDB API to get the availability of movies.'
  },
  {
    id: 4,
    title: 'Portfolio',
    featured: false,
    position: '',
    organization: '',
    startDate: '2022-07-10',
    endDate: '2022-12-20',
    image: '',
    mobile: false,
    githuburl: 'https://github.com/MattCMcCoy/MattCMcCoy.github.io',
    externalurl: 'https://mattcmccoy.github.io/',
    languages: ['Tailwind', 'TypeScript', 'React'],
    description:
      'Developed during my very first Co-op. The site allowed me to showcase my work and experience while I learned more about web development.'
  },
  {
    id: 5,
    title: 'Portfolio 2.0',
    featured: false,
    position: '',
    organization: '',
    startDate: '2024-04-24',
    endDate: '',
    mobile: false,
    image: '',
    githuburl: 'https://github.com/MattCMcCoy/matt-mccoy',
    description:
      'The site you are on right now and a refresh of my original portfolio. Meant to showcase my work and experience while utilizing more modern technologies and design.',
    externalurl: null,
    languages: ['React', 'TypeScript']
  },
  {
    id: 6,
    title: 'Covey.Town - Checkers',
    featured: false,
    position: '',
    organization: '',
    startDate: '2023-01-20',
    endDate: '2023-04-24',
    image: '',
    mobile: false,
    githuburl: 'https://github.com/MattCMcCoy/CoveyTown',
    description:
      'The game allows players to play checkers with other players in a Covey.Town room. The game was built to learn more about adding to larger code bases, game development, and React.',
    externalurl: null,
    languages: ['React', 'TypeScript']
  },
  {
    id: 7,
    title: 'Agar.io Clone',
    featured: false,
    position: '',
    organization: '',
    startDate: '2021-02-20',
    endDate: '2021-05-20',
    image: '',
    mobile: false,
    githuburl: 'https://github.com/MattCMcCoy/AgarIOGame',
    description:
      'The game allows players to move around the screen and eat other blobs to grow in size. The game was built to learn more about game development and Object Oriented Programming.',
    externalurl: null,
    languages: ['Java', 'JavaFX']
  }
] satisfies z.infer<typeof ProjectSchema>[];

export const ProjectSchema = z.object({
  id: z.number(),
  title: z.string(),
  featured: z.boolean(),
  position: z.string(),
  organization: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  image: z.string(),
  mobile: z.boolean(),
  githuburl: z.string().nullable(),
  externalurl: z.string().nullable(),
  description: z.string(),
  languages: z.array(z.string())
});

const ProjectSchemaArray = z.array(ProjectSchema);

const { data: projects } = ProjectSchemaArray.safeParse(projectsData);

export { projects };
