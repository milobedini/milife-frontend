import React from 'react';
import { SignUp } from 'src/components/Forms';

const signup = () => (
  <div className="relative">
    {/* Image */}
    <div className="container relative py-4 sm:py-6">
      <div>
        <div className="pb-4 shadow-prominent">
          <SignUp />
        </div>
      </div>
    </div>
  </div>
);

export default signup;
