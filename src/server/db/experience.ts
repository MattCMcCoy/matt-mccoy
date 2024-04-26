import { z } from 'zod';

const experienceData = [
  {
    id: 1,
    title: 'Software Engineer',
    startDate: '2024-06-01',
    endDate: '',
    image: 'symbotic'
  },
  {
    id: 2,
    title: 'Test Automation Engineer Co-op',
    startDate: '2023-07-10',
    endDate: '2023-12-20',
    image: 'symbotic'
  },
  {
    id: 3,
    title: 'Software Engineer Co-op',
    startDate: '2022-07-10',
    endDate: '2022-12-20',
    image: 'highresbio'
  },
  {
    id: 4,
    title: 'Software Technical Lead',
    startDate: '2023-12-20',
    endDate: '2024-04-20',
    image: 'generate'
  },
  {
    id: 5,
    title: 'Software Engineer',
    startDate: '2023-09-20',
    endDate: '2023-12-20',
    image: 'generate'
  },
  {
    id: 6,
    title: 'Teaching Assistant & Lab Lead - CS2510',
    startDate: '2022-01-20',
    endDate: '2022-04-20',
    image: 'khoury'
  },
  {
    id: 7,
    title: 'Teaching Assistant - CS2500',
    startDate: '2021-09-20',
    endDate: '2021-12-20',
    image: 'khoury'
  }
] satisfies z.infer<typeof ExperienceSchema>;

const ExperienceSchema = z.array(
  z.object({
    id: z.number(),
    title: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    image: z.string()
  })
);

const { data: experience } = ExperienceSchema.safeParse(experienceData);

export { experience };
