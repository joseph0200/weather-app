import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query'; // Single import

// Initialize a QueryClient instance
const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}> {/* Pass the queryClient instance */}
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
