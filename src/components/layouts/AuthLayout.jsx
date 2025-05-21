import React from 'react';
import CARD_2 from "../../assets/images/card2.png"; // make sure this path is correct

const AuthLayout = ({ children }) => {
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      {/* Left Section - Form */}
      <div className="w-full md:w-[60vw] px-12 pt-8 pb-12">
        <h2 className="text-lg font-medium text-black mb-6">Expense Tracker</h2>
        {children}
      </div>

      {/* Right Section - Image + Shapes */}
      <div className="hidden md:block w-[40vw] h-full bg-violet-50 relative bg-cover bg-no-repeat bg-center overflow-hidden">
        {/* Decorative Shapes */}
        <div className="w-48 h-48 rounded-[40px] bg-purple-600 absolute -top-7 -left-5 z-10" />
        <div className="w-60 h-48 rounded-[40px] border-[20px] border-fuchsia-600 absolute top-[30%] -right-10 z-10" />
        <div className="w-48 h-48 rounded-[40px] bg-violet-500 absolute -bottom-7 -left-5 z-10" />

        {/* Centered Image */}
        <img
          src={CARD_2}
          alt="Graph Illustration"
          className="w-64 lg:w-[90%] absolute bottom-10 left-1/2 transform -translate-x-1/2 shadow-lg shadow-blue-400/15 z-20"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
