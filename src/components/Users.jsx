import { useEffect, useState } from "react";
import { Button } from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");
    const [currentUserId, setCurrentUserId] = useState(null);
    const [balance, setBalance] = useState(null); // Added state for balance

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const payload = JSON.parse(atob(token.split(".")[1])); // Decode JWT to get userId
            setCurrentUserId(payload.userId);
        }
    }, []);

    useEffect(() => {
        const token = localStorage.getItem("token");
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/bulk?filter=` + filter, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(response => {
                const allUsers = response.data.users || [];
                const filteredUsers = allUsers.filter(user => user._id !== currentUserId); // Exclude current user
                setUsers(filteredUsers);
            })
            .catch(error => {
                console.error("Error fetching users:", error);
                setUsers([]);
            });
    }, [filter, currentUserId]);

    useEffect(() => {
        if (currentUserId) {
            const token = localStorage.getItem("token");
            axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/account/balance`, {
                headers: { Authorization: `Bearer ${token}` }
            })
                .then(response => {
                    setBalance(response.data.balance); // Set balance from API response
                })
                .catch(error => {
                    console.error("Error fetching balance:", error);
                });
        }
    }, [currentUserId]);

    return <>
        <div className="font-bold mt-6 text-lg">
            Users
        </div>
        <div className="my-2">
            <input onChange={(e) => {
                setFilter(e.target.value);
            }} type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200" />
        </div>
        <div>
            {users.map(user => <User key={user._id} user={user} />)}
        </div>
    </>;
};

function User({ user }) {
    const navigate = useNavigate();

    return <div className="flex justify-between">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-full">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-center h-full">
            <Button onClick={() => {
                navigate("/send?id=" + user._id + "&name=" + user.firstName);
            }} label={"Send Money"} />
        </div>
    </div>;
}
