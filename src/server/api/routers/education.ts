import moment from "moment";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const educationRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const education = await ctx.db.query.education.findMany({});
    education.sort((a, b) => {
      return moment(b.endDate).diff(moment(a.endDate));
    });

    return education;
  }),
});
