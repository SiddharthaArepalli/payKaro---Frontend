import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const backendUrl = import.meta.env.VITE_BACKEND_URL.replace(/\/+$/, "");
                const response = await axios.get(`${backendUrl}/api/v1/users`);
                setUsers(response.data);
            } catch (error) {
                console.error("Failed to fetch users:", error.response?.data || error.message);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Users;