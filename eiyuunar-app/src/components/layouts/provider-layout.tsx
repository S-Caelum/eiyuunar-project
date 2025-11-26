import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
export default function ProviderLayout({ children }: { children: React.JSX.Element }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
