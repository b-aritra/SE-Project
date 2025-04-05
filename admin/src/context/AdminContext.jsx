import { createContext, useState, useEffect } from 'react';

export const AdminContext = createContext();

const AdminContextProvider = ({ children }) => {
    const [aToken, setAToken] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('aToken') || '';
        }
        return '';
    });

    console.log("Initial aToken in AdminContext:", aToken); // Debugging

    const backendUrl = import.meta.env.VITE_BACKEND_URL || ''; // Ensure fallback

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (aToken) {
                localStorage.setItem('aToken', aToken);
            } else {
                localStorage.removeItem('aToken');
            }
        }
    }, [aToken]);

    return (
        <AdminContext.Provider value={{ aToken, setAToken, backendUrl }}>
            {children}
        </AdminContext.Provider>
    );
};

export default AdminContextProvider;
