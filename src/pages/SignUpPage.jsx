import React, { useEffect } from 'react';
import SignUp from '../components/signUp/SignUp';

function SignUpPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return <SignUp />;
}

export default SignUpPage;
