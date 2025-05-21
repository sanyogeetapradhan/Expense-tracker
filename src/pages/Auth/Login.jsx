import React from 'react';
import AuthLayout from '../../components/layouts/AuthLayout';

const Login = () => {
  return (
    <AuthLayout>
    <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
      <h3 className="text-xl font-semibold text-green-600">
        Welcome back !!
      </h3>
      <p className="text-xs text-green-700 mt-[5px] mb-6">
        Please Enter Your Details To Log In
      </p>
    </div>
    </AuthLayout>
  );
};

export default Login;
