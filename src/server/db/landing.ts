import { z } from 'zod';

const landingData = {
  name: 'Matthew C McCoy',
  tagline: 'Photographer. Hiker. Coffee Lover. Sometimes makes cool things.',
  about:
    'I am a software engineer with a passion for photography, hiking, and coffee. I have experience across the stack and love finding new technologies to play around with. I am a graduate of Northeastern University in Boston MA with a Bachelor of Science degree in Computer Science. I have experience in software engineering, test automation, and teaching. I am always looking for new opportunities to learn and grow.'
} satisfies z.infer<typeof LandingSchema>;

const LandingSchema = z.object({
  name: z.string(),
  tagline: z.string(),
  about: z.string()
});

const { data: landing } = LandingSchema.safeParse(landingData);

export { landing };
