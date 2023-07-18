import React from 'react';
import Router from './shared/Router';
import GlobalStyles from './globalStyle/globalStyle';
import './assets/font/font.css';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {},
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <Router />
    </QueryClientProvider>
  );
};

export default App;
