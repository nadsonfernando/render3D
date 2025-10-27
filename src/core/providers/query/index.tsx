import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';

interface QueryProps extends PropsWithChildren {}

const client = new QueryClient();

export function Query({ children }: QueryProps) {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
