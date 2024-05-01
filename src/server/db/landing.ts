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
    'Hey! My name is Matt. I am a Software Engineer with a passion for creating and building things. I have a Bachelor of Science in Computer Science from Northeastern University with a concentration in Human Computer Interaction. I am always looking for new opportunities to learn and grow.'
} satisfies z.infer<typeof LandingSchema>;

const LandingSchema = z.object({
  name: z.string(),
  currentTitle: z.string(),
  tagline: z.array(z.string()),
  about: z.string()
});

const { data: landing } = LandingSchema.safeParse(landingData);

export { landing };
