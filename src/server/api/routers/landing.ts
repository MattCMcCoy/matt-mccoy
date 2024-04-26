import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

export const landingRouter = createTRPCRouter({
  get: publicProcedure.query(({ ctx }) => {
    const landing = ctx.db.landing;

    return landing;
  })
});
