import { z } from 'zod';

const educationData = [
  {
    id: 1,
    school: 'Northeastern University',
    degree: 'Bachelor of Science in Computer Science',
    gpa: 3.5,
    endDate: '2024-04-01',
    image: 'northeastern'
  }
] satisfies z.infer<typeof EducationSchema>;

const EducationSchema = z.array(
  z.object({
    id: z.number(),
    school: z.string(),
    degree: z.string(),
    gpa: z.number(),
    endDate: z.string(),
    image: z.string()
  })
);

const { data: education } = EducationSchema.safeParse(educationData);

export { education };
