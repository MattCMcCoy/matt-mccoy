import moment from "moment";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const projectRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const projects = await ctx.db.query.project_experience.findMany({});
    projects.sort((a, b) => {
      return moment(b.endDate).diff(moment(a.endDate));
    });

    return projects;
  }),
});
