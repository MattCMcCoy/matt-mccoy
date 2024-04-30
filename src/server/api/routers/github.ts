import { Octokit } from '@octokit/rest';
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
});

export const githubRouter = createTRPCRouter({
  get: publicProcedure.query(async ({}) => {
    console.log(process.env.GITHUB_TOKEN);
    const { data: repos } = await octokit.users.getByUsername({
      username: 'MattCMcCoy'
    });

    return repos;
  })
});
