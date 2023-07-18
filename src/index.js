import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { ReactQueryDevtools } from 'react-query-devtools';
// import { QueryClient, QueryClientProvider } from 'react-query';

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {},
//   },
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //   <QueryClientProvider client={queryClient}>
  //     <ReactQueryDevtools initialIsOpen={false} />
  <App />
  //  </QueryClientProvider>
);
