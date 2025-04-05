import React, { createContext } from 'react';

export const DoctorContext = createContext();

const DoctorContextProvider = ({ children }) => {
  const value = {}; // Initialize with an empty object (expand as needed)

  return (
    <DoctorContext.Provider value={value}>
      {children}
    </DoctorContext.Provider>
  );
};

export default DoctorContextProvider;
