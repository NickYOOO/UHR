import React, { useEffect } from 'react';
import FullPage from '../components/notFound/FullPage';
function NotFoundPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return <FullPage />;
}

export default NotFoundPage;
