import moment from "moment";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const experienceRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const experiences = await ctx.db.query.work_experience.findMany({});
    experiences.sort((a, b) => {
      return moment(b.endDate).diff(moment(a.endDate));
    });

    return experiences;
  }),
});
