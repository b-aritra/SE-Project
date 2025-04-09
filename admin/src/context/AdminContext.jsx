import { createContext, useState, useEffect } from 'react';
import axios from 'axios'
import { toast } from 'react-toastify'

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
    const [doctors, setDoctors] = useState([])

    const getAllDoctors = async () => {
        try {

            const { data } = await axios.post(backendUrl + '/api/admin/all-doctors', {}, { headers: { aToken } })

            if (data.success) {
                setDoctors(data.doctors)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        }
    }


    const changeAvailability = async (docId) => {
        try {

            const {data} = await axios.post(backendUrl + '/api/admin/change-availability', {docId}, {headers: {aToken}})

            if (data.success) {
                setDoctors(data.doctors)
                console.log(data.doctors)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        }
    }


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
        <AdminContext.Provider value={{ aToken, setAToken, backendUrl, doctors, getAllDoctors, changeAvailability }}>
            {children}
        </AdminContext.Provider>
    );
};

export default AdminContextProvider;
