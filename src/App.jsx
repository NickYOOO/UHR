import React from 'react';
import Router from './shared/Router';
import GlobalStyles from './globalStyle/globalStyle';
import './assets/font/font.css';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import store from './redux/config/configStore';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {},
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <Router />
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
