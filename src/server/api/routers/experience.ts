import moment from "moment";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const experienceRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    const experiences = ctx.db.experience;
    experiences.sort((a, b) => {
      if (!a.endDate) return -1;
      return moment(b.endDate).diff(moment(a.endDate));
    });

    return experiences;
  }),
});
