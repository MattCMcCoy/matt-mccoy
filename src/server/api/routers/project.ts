import moment from 'moment';
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

export const projectRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    const projects = ctx.db.projects;
    projects?.sort((a, b) => {
      if (!a.endDate) return -1;
      return moment(b.endDate).diff(moment(a.endDate));
    });

    return projects;
  }),
  getFeatured: publicProcedure.query(({ ctx }) => {
    const projects = ctx.db.projects;
    projects?.sort((a, b) => {
      if (!a.endDate) return -1;
      return moment(b.endDate).diff(moment(a.endDate));
    });
    const featured = projects?.filter((project) => project.featured);
    return featured;
  }),
  getOther: publicProcedure.query(({ ctx }) => {
    const projects = ctx.db.projects;
    projects?.sort((a, b) => {
      if (!a.endDate) return -1;
      return moment(b.endDate).diff(moment(a.endDate));
    });
    const other = projects?.filter((project) => !project.featured);
    return other;
  })
});
