import { Octokit } from '@octokit/rest';
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
});

export const githubRouter = createTRPCRouter({
  getUser: publicProcedure.query(async ({}) => {
    const { data: repos } = await octokit.users.getByUsername({
      username: 'MattCMcCoy'
    });

    return repos;
  }),
  getCommits: publicProcedure.query(async () => {
    const { data: commits } = await octokit.repos.listCommits({
      owner: 'MattCMcCoy',
      repo: 'matt-mccoy'
    });

    return commits;
  })
});
