import React from 'react';
import Router from './shared/Router';
import { QueryClient, QueryClientProvider } from 'react-query';
import GlobalStyles from './globalStyle/globalStyle';
import './assets/font/font.css';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Router />;
    </QueryClientProvider>
  );
};

export default App;
