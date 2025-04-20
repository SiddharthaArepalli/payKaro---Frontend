import Appbar from "../utils/Appbar"; // Fixed import
import { Users } from "../utils/Users";
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
    return (
        <div className="bg-gradient-to-b from-black via-gray-900 to-black h-screen flex flex-col">
            <Appbar />
            <div className="m-8">
                <div className="rounded-lg bg-white p-4">
                    <div className="mt-4">
                        <Users />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Dashboard;

