import React from 'react';
import axios from 'axios';

const Appbar = () => {
    const fetchUserProfile = async () => {
        try {
            const backendUrl = import.meta.env.VITE_BACKEND_URL.replace(/\/+$/, "");
            const response = await axios.get(`${backendUrl}/api/v1/user/profile`);
            console.log(response.data);
        } catch (error) {
            console.error("Failed to fetch user profile:", error.response?.data || error.message);
        }
    };

    return (
        <div className="appbar">
            <button onClick={fetchUserProfile}>Fetch Profile</button>
        </div>
    );
};

export default Appbar;