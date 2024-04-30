import { z } from 'zod';

const landingData = {
  name: 'Matthew McCoy',
  currentTitle: 'Software Engineer',
  tagline: [
    'Photographer.',
    'Hiker.',
    'Music Enthusiast.',
    'Coffee Lover.',
    'Sometimes Makes Cool Things.'
  ],
  about:
    'I am a software engineer with a passion for photography, hiking, and coffee. I have experience across the stack and love finding new technologies to play around with. I am a graduate of Northeastern University in Boston MA with a Bachelor of Science degree in Computer Science. I am always looking for new opportunities to learn and grow.'
} satisfies z.infer<typeof LandingSchema>;

const LandingSchema = z.object({
  name: z.string(),
  currentTitle: z.string(),
  tagline: z.array(z.string()),
  about: z.string()
});

const { data: landing } = LandingSchema.safeParse(landingData);

export { landing };
