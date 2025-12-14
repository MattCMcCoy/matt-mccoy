import { cache } from 'react';

import { headers } from 'next/headers';

import 'server-only';
import { createCaller } from '~/server/api/root';
import { createTRPCContext } from '~/server/api/trpc';

const createContext = cache(async () => {
  const incomingHeaders = await Promise.resolve(headers());
  const heads = new Headers(incomingHeaders);

  heads.set('x-trpc-source', 'rsc');

  return createTRPCContext({
    headers: heads
  });
});

export const api = createCaller(createContext);
