'use client';

import { Auth0Provider } from '@auth0/nextjs-auth0';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

export default function Providers({
  children,
  initialUser
}: {
  children: React.ReactNode;
  initialUser: any;
}) {
  const [queryClient] = useState(() => {
    const client = new QueryClient();
    client.setQueryData(['authUser'], initialUser);

    return client;
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Auth0Provider>
        {children}
      </Auth0Provider>
    </QueryClientProvider>
  );
}