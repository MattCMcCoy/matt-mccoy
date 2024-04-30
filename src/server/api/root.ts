import { createCallerFactory, createTRPCRouter } from '~/server/api/trpc';

import { educationRouter } from './routers/education';
import { experienceRouter } from './routers/experience';
import { githubRouter } from './routers/github';
import { landingRouter } from './routers/landing';
import { projectRouter } from './routers/project';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  experience: experienceRouter,
  project: projectRouter,
  education: educationRouter,
  landing: landingRouter,
  github: githubRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
