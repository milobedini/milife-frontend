import React from 'react';
import SignUpForm from 'src/components/Forms/SignUpForm';

const signup = () => (
  <div className="relative">
    {/* Image */}
    <div className="container relative py-4 sm:py-6">
      <div>
        <div className="pb-4 shadow-prominent">
          <SignUpForm />
        </div>
      </div>
    </div>
  </div>
);

export default signup;
