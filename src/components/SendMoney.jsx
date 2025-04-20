import { useSearchParams } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';

const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount, setAmount] = useState(0);

    const handleTransfer = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                alert("You are not logged in!");
                return;
            }
            const backendUrl = import.meta.env.VITE_BACKEND_URL;
            const response = await axios.post(`${backendUrl}/api/v1/account/transfer`, {
                to: id,
                amount: Number(amount) // Make sure it's a number
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            alert("✅ Transfer successful!");
        } catch (error) {
            console.error("❌ Transfer failed:", error.response?.data || error.message);
            alert("Transfer failed: " + (error.response?.data?.message || "Unknown error"));
        }
    };

    return (
        <div className="bg-gradient-to-b from-black via-gray-900 to-black h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <div className="text-3xl font-bold py-4">Transfer to</div>
                    <div className="flex items-center justify-center space-x-4 py-4">
                        <div className="w-12 h-12 rounded-full bg-blue-300 flex items-center justify-center">
                            <span className="text-2xl text-white">
                                {name ? name[0].toUpperCase() : "?"}
                            </span>
                        </div>
                        <h3 className="text-2xl font-semibold mb-2">{name}</h3>
                    </div>

                    <div className="text-sm font-medium text-left py-2">Amount (in ₹)</div>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full px-2 py-1 border rounded border-slate-200"
                        placeholder="Enter amount"
                    />

                    <div className="pt-4">
                        <button
                            onClick={handleTransfer}
                            className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
                        >
                            Initiate Transfer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SendMoney;
