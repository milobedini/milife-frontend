import React from 'react';
import SignInForm from 'src/components/Forms/SignInForm';

const login = () => (
  <div className="relative">
    {/* Image */}
    <div className="container relative py-4 sm:py-6">
      <div>
        <div className="pb-4 shadow-prominent">
          <SignInForm />
        </div>
      </div>
    </div>
  </div>
);

export default login;
