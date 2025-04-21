import React, { useEffect, useState } from "react"; // Corrected imports
import Balance from "./Balance"; // Fixed import for Balance
import axios from "axios"; // Added missing axios import

const Appbar = () => {
    const [balance, setBalance] = useState(""); // Corrected useState initialization

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/account/balance`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                const formattedBalance = `: ${parseFloat(response.data.balance).toFixed(2)}`;
                setBalance(formattedBalance);
            } catch (error) {
                console.error("Error fetching balance:", error.message || error);
            }
        };

        fetchBalance();
    }, []);

    return (
        <div className="shadow h-14 flex justify-between mt-5">
            <Balance value={balance} />
            <div className="flex">
                <div className="color-[white] flex flex-col justify-center h-full mr-4 ">
                    Hello
                </div>
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-5">
                    <div className="flex flex-col justify-center h-full text-xl ">
                        U
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appbar;