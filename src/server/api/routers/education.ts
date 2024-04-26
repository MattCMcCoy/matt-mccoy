import moment from 'moment';
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

export const educationRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    const education = ctx.db.education;
    education?.sort((a, b) => {
      if (!a.endDate) return -1;
      return moment(b.endDate).diff(moment(a.endDate));
    });

    return education;
  })
});
